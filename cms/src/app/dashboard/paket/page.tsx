"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

type Paket = {
  id: number;
  nama: string;
  destinasi: string;
  harga: number;
  durasi: string;
};

const STORAGE_KEY = "paketData";

const defaultPaket: Paket[] = [
  {
    id: 1,
    nama: "Open Trip Marina",
    destinasi: "Pulau Pahawang",
    harga: 50000,
    durasi: "1 Hari",
  },
  {
    id: 2,
    nama: "Open Trip Gunung Pesawaran",
    destinasi: "Gunung Pesawaran",
    harga: 100000,
    durasi: "1 Hari",
  },
];

const formatRupiah = (value: number) => {
  return new Intl.NumberFormat("id-ID").format(value);
};

export default function PaketPage() {
  const [paket, setPaket] = useState<Paket[]>([]);

  useEffect(() => {
    const savedData = localStorage.getItem(STORAGE_KEY);

    if (savedData) {
      try {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setPaket(JSON.parse(savedData) as Paket[]);
      } catch {
        localStorage.setItem(
          STORAGE_KEY,
          JSON.stringify(defaultPaket)
        );
        setPaket(defaultPaket);
      }
    } else {
      localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify(defaultPaket)
      );
      setPaket(defaultPaket);
    }
  }, []);

  const handleDelete = (id: number) => {
    const confirmDelete = window.confirm(
      "Yakin ingin menghapus paket ini?"
    );

    if (!confirmDelete) return;

    const updatedData = paket.filter(
      (item) => item.id !== id
    );

    setPaket(updatedData);

    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify(updatedData)
    );
  };

  return (
    <div className="rounded-lg bg-white p-6 shadow">
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-2xl font-bold">
          Daftar Paket
        </h1>

        <Link
          href="/dashboard/tambah-paket"
          className="rounded bg-green-600 px-4 py-2 text-white hover:bg-green-700"
        >
          + Tambah Paket
        </Link>
      </div>

      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            <th className="border p-2">ID</th>
            <th className="border p-2">Nama Paket</th>
            <th className="border p-2">Destinasi</th>
            <th className="border p-2 text-right">Harga</th>
            <th className="border p-2">Durasi</th>
            <th className="border p-2">Aksi</th>
          </tr>
        </thead>

        <tbody>
          {paket.map((item) => (
            <tr key={item.id}>
              <td className="border p-2 text-center">
                {item.id}
              </td>

              <td className="border p-2">
                {item.nama}
              </td>

              <td className="border p-2">
                {item.destinasi}
              </td>

              <td className="border p-2 text-right">
                Rp {formatRupiah(item.harga)}
              </td>

              <td className="border p-2 text-center">
                {item.durasi}
              </td>

              <td className="border p-2 text-center">
                <div className="flex justify-center gap-3">
                  <Link
                    href={`/dashboard/edit-paket/${item.id}`}
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