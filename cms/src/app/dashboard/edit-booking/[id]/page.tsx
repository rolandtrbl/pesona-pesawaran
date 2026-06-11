"use client";

import { useParams, useRouter } from "next/navigation";
import { useState } from "react";

export default function EditBookingPage() {
  const router = useRouter();
  const params = useParams<{ id: string }>();

  const id = params.id;

  const [nama, setNama] = useState("Nama Pengguna");
  const [paket, setPaket] = useState("Paket Wisata");
  const [tanggal, setTanggal] = useState("2026-06-10");
  const [status, setStatus] = useState("Pending");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Nanti bagian ini bisa diganti pakai API update booking
    alert(`Booking ID ${id} berhasil diupdate!`);

    router.push("/dashboard/booking");
  };

  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Edit Booking</h1>
        <p className="text-sm text-gray-500">Edit data booking ID: {id}</p>
      </div>

      <div className="rounded-lg bg-white p-6 shadow">
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="mb-2 block text-sm font-medium text-gray-700">
              Nama Pengguna
            </label>
            <input
              type="text"
              value={nama}
              onChange={(e) => setNama(e.target.value)}
              className="w-full rounded-md border border-gray-300 px-4 py-2 text-sm outline-none focus:border-blue-500"
              placeholder="Masukkan nama pengguna"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-gray-700">
              Paket Wisata
            </label>
            <input
              type="text"
              value={paket}
              onChange={(e) => setPaket(e.target.value)}
              className="w-full rounded-md border border-gray-300 px-4 py-2 text-sm outline-none focus:border-blue-500"
              placeholder="Masukkan paket wisata"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-gray-700">
              Tanggal Booking
            </label>
            <input
              type="date"
              value={tanggal}
              onChange={(e) => setTanggal(e.target.value)}
              className="w-full rounded-md border border-gray-300 px-4 py-2 text-sm outline-none focus:border-blue-500"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-gray-700">
              Status
            </label>
            <select
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              className="w-full rounded-md border border-gray-300 px-4 py-2 text-sm outline-none focus:border-blue-500"
            >
              <option value="Pending">Pending</option>
              <option value="Dikonfirmasi">Dikonfirmasi</option>
              <option value="Selesai">Selesai</option>
              <option value="Dibatalkan">Dibatalkan</option>
            </select>
          </div>

          <div className="flex gap-3 pt-4">
            <button
              type="submit"
              className="rounded-md bg-blue-600 px-5 py-2 text-sm font-medium text-white hover:bg-blue-700"
            >
              Simpan Perubahan
            </button>

            <button
              type="button"
              onClick={() => router.push("/dashboard/booking")}
              className="rounded-md bg-gray-200 px-5 py-2 text-sm font-medium text-gray-700 hover:bg-gray-300"
            >
              Batal
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}