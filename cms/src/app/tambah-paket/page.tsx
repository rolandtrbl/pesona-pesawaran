/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function TambahPaketTrip() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [wisataList, setWisataList] = useState([]); // Buat nyimpen daftar destinasi

  const [formData, setFormData] = useState({
    wisataId: '', // <-- Tambahan wajib buat relasi Prisma
    namaPaket: '',
    harga: '',
    kuotaMaksimal: '',
    deskripsi: '',
    tanggalBerangkat: ''
  });

  // Narik data Destinasi Wisata buat ngisi Dropdown
  useEffect(() => {
    const fetchWisata = async () => {
      try {
        const res = await fetch('http://localhost:3000/wisata');
        const data = await res.json();
        setWisataList(data);
      } catch (error) {
        console.error('Gagal narik data wisata', error);
      }
    };
    fetchWisata();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const res = await fetch('http://localhost:3000/paket-trip', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        // Ubah bagian ini:
        body: JSON.stringify({
          wisataId: Number(formData.wisataId),
          namaPaket: formData.namaPaket,
          harga: Number(formData.harga),
          kuotaMaksimal: Number(formData.kuotaMaksimal),
          tanggalBerangkat: new Date(formData.tanggalBerangkat).toISOString()
          // Kita sengaja NGGAK ngirim 'deskripsi' biar Prisma nggak ngamuk
        }),
      });

      if (res.ok) {
        router.push('/');
        router.refresh(); 
      } else {
        const errorData = await res.json();
        alert('Gagal nyimpen data: \n' + JSON.stringify(errorData.message));
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
          <h1 className="text-2xl font-bold mb-6 text-green-700">Tambah Paket Trip Baru</h1>
          
          <form onSubmit={handleSubmit} className="space-y-5">
            
            {/* DROPDOWN DESTINASI WISATA */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Pilih Destinasi Wisata</label>
              <select 
                required
                className="w-full border border-gray-300 rounded-lg p-2.5 outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 bg-white"
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
                className="w-full border border-gray-300 rounded-lg p-2.5 outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500"
                value={formData.namaPaket}
                onChange={(e) => setFormData({ ...formData, namaPaket: e.target.value })}
                placeholder="Cth: One Day Trip Pahawang + Snorkeling"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Tanggal Keberangkatan</label>
              <input 
                type="date" required
                className="w-full border border-gray-300 rounded-lg p-2.5 outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500"
                value={formData.tanggalBerangkat}
                onChange={(e) => setFormData({ ...formData, tanggalBerangkat: e.target.value })}
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Harga (Rp)</label>
                <input 
                  type="number" required
                  className="w-full border border-gray-300 rounded-lg p-2.5 outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500"
                  value={formData.harga}
                  onChange={(e) => setFormData({ ...formData, harga: e.target.value })}
                  placeholder="250000"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Kuota Maksimal</label>
                <input 
                  type="number" required
                  className="w-full border border-gray-300 rounded-lg p-2.5 outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500"
                  value={formData.kuotaMaksimal}
                  onChange={(e) => setFormData({ ...formData, kuotaMaksimal: e.target.value })}
                  placeholder="20"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Deskripsi & Fasilitas</label>
              <textarea 
                required rows={4}
                className="w-full border border-gray-300 rounded-lg p-2.5 outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500"
                value={formData.deskripsi}
                onChange={(e) => setFormData({ ...formData, deskripsi: e.target.value })}
                placeholder="Cth: Termasuk kapal, makan siang..."
              ></textarea>
            </div>

            <button 
              type="submit" disabled={isLoading}
              className="w-full bg-green-600 text-white font-semibold py-3 rounded-lg hover:bg-green-700 transition disabled:bg-green-300"
            >
              {isLoading ? 'Menyimpan...' : 'Simpan Paket Trip'}
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}