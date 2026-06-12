"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

type Transaksi = {
  id: number;
  nama: string;
  paket: string;
  total: number;
  status: string;
};

const STORAGE_KEY = "transaksiData";

export default function TambahTransaksiPage() {
  const router = useRouter();

  const [nama, setNama] = useState("");
  const [paket, setPaket] = useState("");
  const [total, setTotal] = useState("");
  const [status, setStatus] = useState("Pending");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const savedData = localStorage.getItem(STORAGE_KEY);

    const data: Transaksi[] = savedData
      ? JSON.parse(savedData)
      : [];

    const transaksiBaru: Transaksi = {
      id:
        data.length > 0
          ? Math.max(...data.map((t) => t.id)) + 1
          : 1,
      nama,
      paket,
      total: Number(total),
      status,
    };

    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify([...data, transaksiBaru])
    );

    alert("Transaksi berhasil ditambahkan");

    router.push("/dashboard/transaksi");
  };

  return (
    <div className="rounded-lg bg-white p-6 shadow">
      <h1 className="mb-6 text-2xl font-bold">
        Tambah Transaksi
      </h1>

      <form
        onSubmit={handleSubmit}
        className="space-y-4"
      >
        <div>
          <label className="mb-1 block">
            Nama Pengguna
          </label>
          <input
            type="text"
            value={nama}
            onChange={(e) => setNama(e.target.value)}
            className="w-full rounded border p-2"
            required
          />
        </div>

        <div>
          <label className="mb-1 block">
            Paket
          </label>
          <input
            type="text"
            value={paket}
            onChange={(e) => setPaket(e.target.value)}
            className="w-full rounded border p-2"
            required
          />
        </div>

        <div>
          <label className="mb-1 block">
            Total Pembayaran
          </label>
          <input
            type="number"
            value={total}
            onChange={(e) => setTotal(e.target.value)}
            className="w-full rounded border p-2"
            required
          />
        </div>

        <div>
          <label className="mb-1 block">
            Status
          </label>
          <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className="w-full rounded border p-2"
          >
            <option value="Pending">Pending</option>
            <option value="Lunas">Lunas</option>
            <option value="Gagal">Gagal</option>
          </select>
        </div>

        <div className="flex gap-3">
          <button
            type="submit"
            className="rounded bg-green-600 px-4 py-2 text-white hover:bg-green-700"
          >
            Simpan
          </button>

          <button
            type="button"
            onClick={() =>
              router.push("/dashboard/transaksi")
            }
            className="rounded bg-gray-500 px-4 py-2 text-white hover:bg-gray-600"
          >
            Batal
          </button>
        </div>
      </form>
    </div>
  );
}