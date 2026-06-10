"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";

interface Paket {
  id: number;
  name: string;
  harga: number;
}

// Dummy data sementara
const dummyPaket: Paket[] = [
  { id: 1, name: "Open Trip Marina", harga: 50000 },
  { id: 2, name: "Open Trip Gunung Pesawaran", harga: 100000 },
  { id: 3, name: "Open Trip Air Terjun Lemo", harga: 75000 },
];

export default function EditPaketPage() {
  const searchParams = useSearchParams();
  const id = Number(searchParams.get("id"));

  const paket = dummyPaket.find((p) => p.id === id);

  const [name, setName] = useState(paket?.name || "");
  const [harga, setHarga] = useState(paket?.harga || 0);

  if (!paket) return <div>Paket tidak ditemukan</div>;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Update paket: ${name} - Rp ${harga.toLocaleString()}`);
    // Nanti disini bisa call API update
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Edit Paket</h1>
      <form onSubmit={handleSubmit} className="space-y-4 max-w-md">
        <div>
          <label className="block mb-1 font-semibold">Nama Paket</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full border p-2 rounded"
          />
        </div>

        <div>
          <label className="block mb-1 font-semibold">Harga (Rp)</label>
          <input
            type="number"
            value={harga}
            onChange={(e) => setHarga(Number(e.target.value))}
            className="w-full border p-2 rounded"
          />
        </div>

        <button
          type="submit"
          className="bg-emerald-700 text-white px-4 py-2 rounded hover:bg-emerald-600"
        >
          Simpan
        </button>
      </form>
    </div>
  );
}