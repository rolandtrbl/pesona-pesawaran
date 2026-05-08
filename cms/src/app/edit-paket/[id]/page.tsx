"use client";

import { useState, useEffect } from 'react';
import { useRouter, useParams } from 'next/navigation';
import Link from 'next/link';

export default function EditPaketTrip() {
  const router = useRouter();
  const params = useParams();
  const id = params.id;

  const [isLoading, setIsLoading] = useState(false);
  const [isFetching, setIsFetching] = useState(true);
  const [wisataList, setWisataList] = useState([]);

  const [formData, setFormData] = useState({
    wisataId: '',
    namaPaket: '',
    harga: '',
    kuotaMaksimal: '',
    deskripsi: '',
    tanggalBerangkat: ''
  });

  // Fungsi buat narik data lama dan daftar destinasi
  useEffect(() => {
    const fetchData = async () => {
      try {
        // 1. Tarik daftar destinasi buat Dropdown
        const resWisata = await fetch('http://localhost:3000/wisata');
        const dataWisata = await resWisata.json();
        setWisataList(dataWisata);

        // 2. Tarik data paket trip yang mau diedit
        const resPaket = await fetch(`http://localhost:3000/paket-trip/${id}`);
        const dataPaket = await resPaket.json();
        
        // Trik potong jam dari format ISO Prisma (contoh: 2026-05-14T00:00:00.000Z jadi 2026-05-14)
        // Biar bisa ditampilin di input type="date"
        const formatTanggal = dataPaket.tanggalBerangkat ? dataPaket.tanggalBerangkat.split('T')[0] : '';

        // Isi form otomatis dengan data lama
        setFormData({
          wisataId: dataPaket.wisataId || '',
          namaPaket: dataPaket.namaPaket || '',
          harga: dataPaket.harga || '',
          kuotaMaksimal: dataPaket.kuotaMaksimal || '',
          deskripsi: dataPaket.deskripsi || '', // Nggak masalah diisi, nanti pas disubmit kita cuekin
          tanggalBerangkat: formatTanggal
        });
      } catch (error) {
        console.error(error);
        alert('Gagal mengambil data paket trip');
      } finally {
        setIsFetching(false);
      }
    };

    fetchData();
  }, [id]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const res = await fetch(`http://localhost:3000/paket-trip/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          wisataId: Number(formData.wisataId),
          namaPaket: formData.namaPaket,
          harga: Number(formData.harga),
          kuotaMaksimal: Number(formData.kuotaMaksimal),
          tanggalBerangkat: new Date(formData.tanggalBerangkat).toISOString()
          // Ingat: deskripsi nggak kita kirim biar Prisma nggak ngambek
        }),
      });

      if (res.ok) {
        // Hard redirect biar tabel dashboard pasti update (bypass cache Next.js)
        window.location.href = '/'; 
      } else {
        const errorData = await res.json();
        alert('Gagal Update: \n' + JSON.stringify(errorData.message));
      }
    } catch (error) {
      console.error(error);
      alert('Backend-nya error nih.');
    } finally {
      setIsLoading(false);
    }
  };

  if (isFetching) {
    return <div className="p-10 text-center font-medium">Loading data...</div>;
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
          <h1 className="text-2xl font-bold mb-6 text-blue-700">Edit Paket Trip</h1>
          
          <form onSubmit={handleSubmit} className="space-y-5">
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Pilih Destinasi Wisata</label>
              <select 
                required
                className="w-full border border-gray-300 rounded-lg p-2.5 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 bg-white"
                value={formData.wisataId}
                onChange={(e) => setFormData({ ...formData, wisataId: e.target.value })}
              >
                <option value="" disabled>-- Pilih Destinasi --</option>
                {wisataList.map((item: any) => (
                  <option key={item.id} value={item.id}>
                    {item.nama}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Nama Paket</label>
              <input 
                type="text" required
                className="w-full border border-gray-300 rounded-lg p-2.5 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                value={formData.namaPaket}
                onChange={(e) => setFormData({ ...formData, namaPaket: e.target.value })}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Tanggal Keberangkatan</label>
              <input 
                type="date" required
                className="w-full border border-gray-300 rounded-lg p-2.5 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                value={formData.tanggalBerangkat}
                onChange={(e) => setFormData({ ...formData, tanggalBerangkat: e.target.value })}
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Harga (Rp)</label>
                <input 
                  type="number" required
                  className="w-full border border-gray-300 rounded-lg p-2.5 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                  value={formData.harga}
                  onChange={(e) => setFormData({ ...formData, harga: e.target.value })}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Kuota Maksimal</label>
                <input 
                  type="number" required
                  className="w-full border border-gray-300 rounded-lg p-2.5 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                  value={formData.kuotaMaksimal}
                  onChange={(e) => setFormData({ ...formData, kuotaMaksimal: e.target.value })}
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Deskripsi & Fasilitas</label>
              <textarea 
                rows={4}
                className="w-full border border-gray-300 rounded-lg p-2.5 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                value={formData.deskripsi}
                onChange={(e) => setFormData({ ...formData, deskripsi: e.target.value })}
              ></textarea>
            </div>

            <button 
              type="submit" disabled={isLoading}
              className="w-full bg-blue-600 text-white font-semibold py-3 rounded-lg hover:bg-blue-700 transition disabled:bg-blue-300"
            >
              {isLoading ? 'Mengupdate...' : 'Update Paket Trip'}
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}git remote add origin https://github.com/rolandtrbl/wisata-backend.git