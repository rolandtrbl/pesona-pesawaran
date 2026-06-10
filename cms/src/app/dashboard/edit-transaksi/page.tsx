"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

interface EditTransaksiProps {
  params: { id: string };
}

export default function EditTransaksiPage({ params }: EditTransaksiProps) {
  const { id } = params;
  const router = useRouter();

  const [pengguna, setPengguna] = useState("Nama Pengguna");
  const [paket, setPaket] = useState("Paket");
  const [total, setTotal] = useState(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // nanti bisa panggil API untuk simpan perubahan
    alert(`Transaksi ID ${id} berhasil diupdate!`);
    router.push("/dashboard/transaksi");
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Edit Transaksi #{id}</h1>
      <form onSubmit={handleSubmit} className="space-y-4 max-w-md">
        <div>
          <label className="block mb-1">Nama Pengguna</label>
          <input
            type="text"
            value={pengguna}
            onChange={(e) => setPengguna(e.target.value)}
            className="border p-2 w-full"
          />
        </div>
        <div>
          <label className="block mb-1">Paket</label>
          <input
            type="text"
            value={paket}
            onChange={(e) => setPaket(e.target.value)}
            className="border p-2 w-full"
          />
        </div>
        <div>
          <label className="block mb-1">Total (Rp)</label>
          <input
            type="number"
            value={total}
            onChange={(e) => setTotal(parseInt(e.target.value))}
            className="border p-2 w-full"
          />
        </div>
        <button
          type="submit"
          className="px-4 py-2 bg-emerald-600 text-white rounded"
        >
          Simpan Perubahan
        </button>
      </form>
    </div>
  );
}