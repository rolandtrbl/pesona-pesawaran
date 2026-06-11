"use client";

import { useParams, useRouter } from "next/navigation";
import { useEffect, useState, type FormEvent } from "react";

type Transaksi = {
  id: number;
  nama: string;
  paket: string;
  total: number;
  status: string;
};

const STORAGE_KEY = "transaksiData";

const defaultTransaksi: Transaksi[] = [
  {
    id: 1,
    nama: "Ladia",
    paket: "Open Trip Marina",
    total: 50000,
    status: "Pending",
  },
  {
    id: 2,
    nama: "Hajar",
    paket: "Open Trip Gunung Pesawaran",
    total: 100000,
    status: "Pending",
  },
];

export default function EditTransaksiPage() {
  const router = useRouter();
  const params = useParams<{ id: string }>();

  const id = Number(params.id);

  const [nama, setNama] = useState("");
  const [paket, setPaket] = useState("");
  const [total, setTotal] = useState("");
  const [status, setStatus] = useState("Pending");
  const [loading, setLoading] = useState(true);
  const [isFound, setIsFound] = useState(true);

  useEffect(() => {
    let data: Transaksi[] = defaultTransaksi;

    const savedData = localStorage.getItem(STORAGE_KEY);

    if (savedData) {
      try {
        data = JSON.parse(savedData) as Transaksi[];
      } catch {
        data = defaultTransaksi;
        localStorage.setItem(STORAGE_KEY, JSON.stringify(defaultTransaksi));
      }
    } else {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(defaultTransaksi));
    }

    const selectedTransaksi = data.find((item) => item.id === id);

    if (!selectedTransaksi) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setIsFound(false);
      setLoading(false);
      return;
    }

    setNama(selectedTransaksi.nama);
    setPaket(selectedTransaksi.paket);
    setTotal(String(selectedTransaksi.total));
    setStatus(selectedTransaksi.status);
    setIsFound(true);
    setLoading(false);
  }, [id]);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const savedData = localStorage.getItem(STORAGE_KEY);

    let data: Transaksi[] = defaultTransaksi;

    if (savedData) {
      try {
        data = JSON.parse(savedData) as Transaksi[];
      } catch {
        data = defaultTransaksi;
      }
    }

    const updatedData = data.map((item) =>
      item.id === id
        ? {
            ...item,
            nama,
            paket,
            total: Number(total),
            status,
          }
        : item
    );

    localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedData));

    alert(`Transaksi ID ${id} berhasil diupdate!`);
    router.push("/dashboard/transaksi");
  };

  if (loading) {
    return (
      <div className="rounded-lg bg-white p-6 shadow">
        <p>Memuat data transaksi...</p>
      </div>
    );
  }

  if (!isFound) {
    return (
      <div className="rounded-lg bg-white p-6 shadow">
        <h1 className="mb-4 text-2xl font-bold">Transaksi tidak ditemukan</h1>

        <button
          type="button"
          onClick={() => router.push("/dashboard/transaksi")}
          className="rounded bg-green-700 px-4 py-2 text-white hover:bg-green-800"
        >
          Kembali
        </button>
      </div>
    );
  }

  return (
    <div className="rounded-lg bg-white p-6 shadow">
      <h1 className="mb-6 text-2xl font-bold">Edit Transaksi</h1>

      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label className="mb-2 block text-sm font-medium text-gray-700">
            Nama
          </label>
          <input
            type="text"
            value={nama}
            onChange={(e) => setNama(e.target.value)}
            className="w-full rounded border border-gray-300 px-4 py-2 outline-none focus:border-green-700"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-gray-700">
            Paket
          </label>
          <input
            type="text"
            value={paket}
            onChange={(e) => setPaket(e.target.value)}
            className="w-full rounded border border-gray-300 px-4 py-2 outline-none focus:border-green-700"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-gray-700">
            Total
          </label>
          <input
            type="number"
            value={total}
            onChange={(e) => setTotal(e.target.value)}
            className="w-full rounded border border-gray-300 px-4 py-2 outline-none focus:border-green-700"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-gray-700">
            Status
          </label>
          <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className="w-full rounded border border-gray-300 px-4 py-2 outline-none focus:border-green-700"
          >
            <option value="Pending">Pending</option>
            <option value="Berhasil">Berhasil</option>
            <option value="Gagal">Gagal</option>
          </select>
        </div>

        <div className="flex gap-3 pt-4">
          <button
            type="submit"
            className="rounded bg-green-700 px-5 py-2 text-white hover:bg-green-800"
          >
            Simpan Perubahan
          </button>

          <button
            type="button"
            onClick={() => router.push("/dashboard/transaksi")}
            className="rounded bg-gray-300 px-5 py-2 text-gray-800 hover:bg-gray-400"
          >
            Batal
          </button>
        </div>
      </form>
    </div>
  );
}