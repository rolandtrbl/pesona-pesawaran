"use client";

import Link from "next/link";
import { useState } from "react";

interface Transaksi {
  id: number;
  pengguna: string;
  paket: string;
  total: number;
}

const dummyTransaksi: Transaksi[] = [
  { id: 1, pengguna: "Ladia", paket: "Open Trip Marina", total: 50000 },
  { id: 2, pengguna: "Hajar", paket: "Open Trip Gunung Pesawaran", total: 100000 },
  { id: 3, pengguna: "Sarah", paket: "Open Trip Air Terjun Lemo", total: 75000 },
];

export default function TransaksiPage() {
  const [transaksiList, setTransaksiList] = useState(dummyTransaksi);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Daftar Transaksi</h1>
      <table className="w-full border border-gray-300 rounded">
        <thead className="bg-gray-200">
          <tr>
            <th className="border p-2">ID</th>
            <th className="border p-2">Nama Pengguna</th>
            <th className="border p-2">Paket</th>
            <th className="border p-2">Total (Rp)</th>
            <th className="border p-2">Aksi</th>
          </tr>
        </thead>
        <tbody>
          {transaksiList.map((t) => (
            <tr key={t.id} className="hover:bg-gray-100">
              <td className="border p-2 text-center">{t.id}</td>
              <td className="border p-2">{t.pengguna}</td>
              <td className="border p-2">{t.paket}</td>
              <td className="border p-2 text-right">{t.total.toLocaleString()}</td>
              <td className="border p-2 text-center">
                <Link
                  href={`/dashboard/edit-transaksi/${t.id}`}
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