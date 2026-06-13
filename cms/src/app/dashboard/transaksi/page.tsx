"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

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

const formatRupiah = (value: number) => {
  return new Intl.NumberFormat("id-ID").format(value);
};

export default function TransaksiPage() {
  const [transaksi, setTransaksi] = useState<Transaksi[]>([]);

  useEffect(() => {
    const savedData = localStorage.getItem(STORAGE_KEY);

    if (savedData) {
      try {
        const parsedData = JSON.parse(savedData) as Transaksi[];
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setTransaksi(parsedData);
      } catch {
        localStorage.setItem(
          STORAGE_KEY,
          JSON.stringify(defaultTransaksi)
        );
        setTransaksi(defaultTransaksi);
      }
    } else {
      localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify(defaultTransaksi)
      );
      setTransaksi(defaultTransaksi);
    }
  }, []);

  const handleDelete = (id: number) => {
    const confirmDelete = window.confirm(
      "Yakin ingin menghapus transaksi ini?"
    );

    if (!confirmDelete) return;

    const updatedData = transaksi.filter(
      (item) => item.id !== id
    );

    setTransaksi(updatedData);

    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify(updatedData)
    );
  };

  return (
    <div className="rounded-lg bg-white p-6 shadow">
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-2xl font-bold">
          Daftar Transaksi
        </h1>

        <Link
          href="/dashboard/tambah-transaksi"
          className="rounded bg-green-600 px-4 py-2 text-white hover:bg-green-700"
        >
          + Tambah Transaksi
        </Link>
      </div>

      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            <th className="border p-2">ID</th>
            <th className="border p-2">Nama Pengguna</th>
            <th className="border p-2">Paket</th>
            <th className="border p-2 text-right">Total (Rp)</th>
            <th className="border p-2">Status</th>
            <th className="border p-2">Aksi</th>
          </tr>
        </thead>

        <tbody>
          {transaksi.map((item) => (
            <tr key={item.id}>
              <td className="border p-2 text-center">
                {item.id}
              </td>

              <td className="border p-2">
                {item.nama}
              </td>

              <td className="border p-2">
                {item.paket}
              </td>

              <td className="border p-2 text-right">
                Rp {formatRupiah(item.total)}
              </td>

              <td className="border p-2 text-center">
                {item.status}
              </td>

              <td className="border p-2 text-center">
                <div className="flex justify-center gap-3">
                  <Link
                    href={`/dashboard/edit-transaksi/${item.id}`}
                    className="text-blue-600 hover:underline"
                  >
                    Edit
                  </Link>

                  <button
                    onClick={() =>
                      handleDelete(item.id)
                    }
                    className="text-red-600 hover:underline"
                  >
                    Hapus
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}