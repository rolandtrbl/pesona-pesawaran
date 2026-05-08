"use client";

import { useState, useEffect } from 'react';
import { useRouter, useParams } from 'next/navigation';
import Link from 'next/link';

export default function EditWisata() {
  const router = useRouter();
  const params = useParams();
  const id = params.id; // Nangkep ID dari URL

  const [isLoading, setIsLoading] = useState(false);
  const [isFetching, setIsFetching] = useState(true);
  
  const [formData, setFormData] = useState({
    nama: '',
    deskripsi: '',
    lokasi: '',
    gambarUrl: ''
  });

  // Fungsi buat narik data lama pas halaman pertama kali dibuka
  useEffect(() => {
    const fetchDetail = async () => {
      try {
        const res = await fetch(`http://localhost:3000/wisata/${id}`);
        const data = await res.json();
        
        // Isi formnya otomatis pakai data dari database
        setFormData({
          nama: data.nama,
          deskripsi: data.deskripsi,
          lokasi: data.lokasi,
          gambarUrl: data.gambarUrl || ''
        });
      } catch (error) {
        console.error(error);
        alert('Gagal mengambil data wisata');
      } finally {
        setIsFetching(false);
      }
    };

    fetchDetail();
  }, [id]);

  // Fungsi pas tombol simpan ditekan (Pakai method PATCH)
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const res = await fetch(`http://localhost:3000/wisata/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        // Kita buang router.push() bawaan Next.js
        // Kita paksa browser muat ulang dari awal kayak di-refresh manual
        window.location.href = '/'; 
      } else {
        // Nangkep pesan error ASLI dari NestJS
        const errorData = await res.json();
        alert('Gagal Update! Alasan dari backend: \n' + JSON.stringify(errorData.message));
      }
    } catch (error) {
      console.error(error);
      alert('Backend-nya error nih atau mati.');
    } finally {
      setIsLoading(false);
    }
  };

  if (isFetching) {
    return <div className="p-10 text-center">Loading data...</div>;
  }

  return (
    <main className="p-10 min-h-screen bg-gray-50 text-gray-800">
      <div className="max-w-2xl mx-auto">
        <div className="mb-6">
          <Link href="/" className="text-blue-600 hover:underline">
            &larr; Kembali ke Dashboard
          </Link>
        </div>

        <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
          <h1 className="text-2xl font-bold mb-6">Edit Destinasi Wisata</h1>
          
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Nama Tempat</label>
              <input 
                type="text" required
                className="w-full border border-gray-300 rounded-lg p-2.5 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                value={formData.nama}
                onChange={(e) => setFormData({ ...formData, nama: e.target.value })}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Lokasi</label>
              <input 
                type="text" required
                className="w-full border border-gray-300 rounded-lg p-2.5 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                value={formData.lokasi}
                onChange={(e) => setFormData({ ...formData, lokasi: e.target.value })}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">URL Gambar</label>
              <input 
                type="url" 
                className="w-full border border-gray-300 rounded-lg p-2.5 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                value={formData.gambarUrl}
                onChange={(e) => setFormData({ ...formData, gambarUrl: e.target.value })}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Deskripsi</label>
              <textarea 
                required rows={4}
                className="w-full border border-gray-300 rounded-lg p-2.5 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                value={formData.deskripsi}
                onChange={(e) => setFormData({ ...formData, deskripsi: e.target.value })}
              ></textarea>
            </div>

            <button 
              type="submit" disabled={isLoading}
              className="w-full bg-blue-600 text-white font-semibold py-3 rounded-lg hover:bg-blue-700 transition disabled:bg-blue-300"
            >
              {isLoading ? 'Menyimpan Perubahan...' : 'Update Destinasi'}
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}