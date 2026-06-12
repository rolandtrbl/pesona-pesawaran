"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

type Destinasi = {
  id: number;
  nama: string;
  lokasi: string;
  harga: number;
};

const STORAGE_KEY = "destinasiData";

const defaultDestinasi: Destinasi[] = [
  {
    id: 1,
    nama: "Pulau Pahawang",
    lokasi: "Pesawaran",
    harga: 50000,
  },
  {
    id: 2,
    nama: "Pantai Mutun",
    lokasi: "Pesawaran",
    harga: 30000,
  },
];

const formatRupiah = (value: number) => {
  return new Intl.NumberFormat("id-ID").format(value);
};

export default function DestinasiPage() {
  const [destinasi, setDestinasi] = useState<Destinasi[]>([]);

  useEffect(() => {
    const savedData = localStorage.getItem(STORAGE_KEY);

    if (savedData) {
      try {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setDestinasi(JSON.parse(savedData) as Destinasi[]);
      } catch {
        localStorage.setItem(
          STORAGE_KEY,
          JSON.stringify(defaultDestinasi)
        );
        setDestinasi(defaultDestinasi);
      }
    } else {
      localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify(defaultDestinasi)
      );
      setDestinasi(defaultDestinasi);
    }
  }, []);

  return (
    <div className="rounded-lg bg-white p-6 shadow">
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-2xl font-bold">
          Daftar Destinasi
        </h1>

        <Link
          href="/dashboard/tambah-destinasi"
          className="rounded bg-green-600 px-4 py-2 text-white hover:bg-green-700"
        >
          + Tambah Destinasi
        </Link>
      </div>

      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            <th className="border p-2">ID</th>
            <th className="border p-2">Nama Destinasi</th>
            <th className="border p-2">Lokasi</th>
            <th className="border p-2 text-right">Harga</th>
            <th className="border p-2">Aksi</th>
          </tr>
        </thead>

        <tbody>
          {destinasi.map((item) => (
            <tr key={item.id}>
              <td className="border p-2 text-center">
                {item.id}
              </td>

              <td className="border p-2">
                {item.nama}
              </td>

              <td className="border p-2">
                {item.lokasi}
              </td>

              <td className="border p-2 text-right">
                Rp {formatRupiah(item.harga)}
              </td>

              <td className="border p-2 text-center">
                <Link
                  href={`/dashboard/edit-destinasi/${item.id}`}
                  className="text-blue-600 hover:underline"
                >
                  Edit
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}