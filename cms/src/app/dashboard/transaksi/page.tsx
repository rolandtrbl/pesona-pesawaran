"use client";

import React from "react";

interface Transaksi {
  id: number;
  nama: string;
  paket: string;
  total: number;
}

const transaksiList: Transaksi[] = [
  { id: 1, nama: "Ladia", paket: "Open Trip Marina", total: 50000 },
  { id: 2, nama: "Hajar", paket: "Open Trip Gunung Pesawaran", total: 100000 },
];

export default function TransaksiPage() {
  return (
    <div className="bg-white p-6 rounded shadow">
      <h1 className="text-2xl font-bold mb-4">Daftar Transaksi</h1>
      <table className="w-full border border-gray-300 rounded">
        <thead className="bg-gray-200">
          <tr>
            <th className="border p-2 text-center">ID</th>
            <th className="border p-2">Nama Pengguna</th>
            <th className="border p-2">Paket</th>
            <th className="border p-2 text-right">Total (Rp)</th>
            <th className="border p-2">Aksi</th>
          </tr>
        </thead>
        <tbody>
          {transaksiList.map((t) => (
            <tr key={t.id} className="hover:bg-gray-100">
              <td className="border p-2 text-center">{t.id}</td>
              <td className="border p-2">{t.nama}</td>
              <td className="border p-2">{t.paket}</td>
              <td className="border p-2 text-right">{t.total.toLocaleString()}</td>
              <td className="border p-2 text-center">
                <a
                  href={`/dashboard/edit-transaksi/${t.id}`}
                  className="text-blue-600 hover:underline"
                >
                  Edit
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}