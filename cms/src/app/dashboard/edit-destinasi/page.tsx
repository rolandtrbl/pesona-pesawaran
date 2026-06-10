"use client";

import { useRouter, useParams } from "next/navigation";
import { useState } from "react";

interface Destinasi {
  id: number;
  name: string;
  lokasi: string;
  harga: number;
}

// Dummy data sementara
const dummyDestinasi: Destinasi[] = [
  { id: 1, name: "Pantai Marina", lokasi: "Pesawaran", harga: 50000 },
  { id: 2, name: "Gunung Pesawaran", lokasi: "Pesawaran", harga: 100000 },
  { id: 3, name: "Air Terjun Lemo", lokasi: "Pesawaran", harga: 75000 },
];

export default function EditDestinasiPage() {
  const params = useParams();
  const { id } = params;
  const router = useRouter();

  const destinasi = dummyDestinasi.find((d) => d.id === Number(id));
  const [name, setName] = useState(destinasi?.name || "");
  const [lokasi, setLokasi] = useState(destinasi?.lokasi || "");
  const [harga, setHarga] = useState(destinasi?.harga || 0);

  if (!destinasi) return <div>Destinasi tidak ditemukan</div>;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Destinasi ID ${id} berhasil diupdate!\nNama: ${name}\nLokasi: ${lokasi}\nHarga: ${harga}`);
    router.push("/dashboard/destinasi");
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Edit Destinasi #{id}</h1>
      <form onSubmit={handleSubmit} className="space-y-4 max-w-md">
        <div>
          <label className="block mb-1 font-semibold">Nama Destinasi</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full border p-2 rounded"
          />
        </div>
        <div>
          <label className="block mb-1 font-semibold">Lokasi</label>
          <input
            type="text"
            value={lokasi}
            onChange={(e) => setLokasi(e.target.value)}
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
          className="px-4 py-2 bg-emerald-600 text-white rounded hover:bg-emerald-700"
        >
          Simpan Perubahan
        </button>
      </form>
    </div>
  );
}