"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function TambahWisata() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  
  // State untuk nyimpen isian form
  const [formData, setFormData] = useState({
    nama: '',
    deskripsi: '',
    lokasi: '',
    gambarUrl: ''
  });

  // Fungsi pas tombol submit ditekan
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const res = await fetch('http://localhost:3000/wisata', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        // Balik ke dashboard dan refresh datanya
        router.push('/');
        router.refresh(); 
      } else {
        alert('Gagal nyimpen data bro!');
      }
    } catch (error) {
      console.error(error);
      alert('Backend-nya mati atau error nih.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="p-10 min-h-screen bg-gray-50 text-gray-800">
      <div className="max-w-2xl mx-auto">
        <div className="mb-6">
          <Link href="/" className="text-blue-600 hover:underline">
            &larr; Kembali ke Dashboard
          </Link>
        </div>

        <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
          <h1 className="text-2xl font-bold mb-6">Tambah Destinasi Baru</h1>
          
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Nama Tempat</label>
              <input 
                type="text" 
                required
                className="w-full border border-gray-300 rounded-lg p-2.5 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                value={formData.nama}
                onChange={(e) => setFormData({ ...formData, nama: e.target.value })}
                placeholder="Cth: Pulau Kelagian"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Lokasi</label>
              <input 
                type="text" 
                required
                className="w-full border border-gray-300 rounded-lg p-2.5 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                value={formData.lokasi}
                onChange={(e) => setFormData({ ...formData, lokasi: e.target.value })}
                placeholder="Cth: Pesawaran, Lampung"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">URL Gambar</label>
              <input 
                type="url" 
                className="w-full border border-gray-300 rounded-lg p-2.5 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                value={formData.gambarUrl}
                onChange={(e) => setFormData({ ...formData, gambarUrl: e.target.value })}
                placeholder="https://..."
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Deskripsi</label>
              <textarea 
                required
                rows={4}
                className="w-full border border-gray-300 rounded-lg p-2.5 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                value={formData.deskripsi}
                onChange={(e) => setFormData({ ...formData, deskripsi: e.target.value })}
                placeholder="Ceritain sedikit soal tempat ini..."
              ></textarea>
            </div>

            <button 
              type="submit" 
              disabled={isLoading}
              className="w-full bg-blue-600 text-white font-semibold py-3 rounded-lg hover:bg-blue-700 transition disabled:bg-blue-300"
            >
              {isLoading ? 'Menyimpan...' : 'Simpan Destinasi'}
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}