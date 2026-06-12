"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

type Pengguna = {
  id: number;
  nama: string;
  email: string;
  role: string;
  status: string;
};

const STORAGE_KEY = "penggunaData";

const defaultPengguna: Pengguna[] = [
  {
    id: 1,
    nama: "Ladia",
    email: "ladia@example.com",
    role: "User",
    status: "Aktif",
  },
  {
    id: 2,
    nama: "Hajar",
    email: "hajar@example.com",
    role: "User",
    status: "Aktif",
  },
];

export default function PenggunaPage() {
  const [pengguna, setPengguna] = useState<Pengguna[]>([]);

  useEffect(() => {
    const savedData = localStorage.getItem(STORAGE_KEY);

    if (savedData) {
      try {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setPengguna(JSON.parse(savedData) as Pengguna[]);
      } catch {
        localStorage.setItem(
          STORAGE_KEY,
          JSON.stringify(defaultPengguna)
        );
        setPengguna(defaultPengguna);
      }
    } else {
      localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify(defaultPengguna)
      );
      setPengguna(defaultPengguna);
    }
  }, []);

  return (
    <div className="rounded-lg bg-white p-6 shadow">
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-2xl font-bold">
          Daftar Pengguna
        </h1>

        <Link
          href="/dashboard/tambah-pengguna"
          className="rounded bg-green-600 px-4 py-2 text-white hover:bg-green-700"
        >
          + Tambah Pengguna
        </Link>
      </div>

      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            <th className="border p-2">ID</th>
            <th className="border p-2">Nama</th>
            <th className="border p-2">Email</th>
            <th className="border p-2">Role</th>
            <th className="border p-2">Status</th>
            <th className="border p-2">Aksi</th>
          </tr>
        </thead>

        <tbody>
          {pengguna.map((item) => (
            <tr key={item.id}>
              <td className="border p-2 text-center">
                {item.id}
              </td>

              <td className="border p-2">
                {item.nama}
              </td>

              <td className="border p-2">
                {item.email}
              </td>

              <td className="border p-2 text-center">
                {item.role}
              </td>

              <td className="border p-2 text-center">
                {item.status}
              </td>

              <td className="border p-2 text-center">
                <Link
                  href={`/dashboard/edit-pengguna/${item.id}`}
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