"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

interface EditBookingProps {
  params: { id: string };
}

export default function EditBookingPage({ params }: EditBookingProps) {
  const { id } = params;
  const router = useRouter();

  const [user, setUser] = useState("Nama Pengguna");
  const [paket, setPaket] = useState("Paket");
  const [tanggal, setTanggal] = useState("2026-06-10");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // nanti disini bisa dipanggil API untuk simpan perubahan
    alert(`Booking ID ${id} berhasil diupdate!`);
    router.push("/dashboard/booking");
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Edit Booking #{id}</h1>
      <form onSubmit={handleSubmit} className="space-y-4 max-w-md">
        <div>
          <label className="block mb-1">Nama Pengguna</label>
          <input
            type="text"
            value={user}
            onChange={(e) => setUser(e.target.value)}
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
          <label className="block mb-1">Tanggal</label>
          <input
            type="date"
            value={tanggal}
            onChange={(e) => setTanggal(e.target.value)}
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