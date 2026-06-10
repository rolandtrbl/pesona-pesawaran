"use client";

import Link from "next/link";
import React from "react";

interface Paket {
  id: number;
  name: string;
  harga: number;
}

const dummyPaket: Paket[] = [
  { id: 1, name: "Open Trip Marina", harga: 50000 },
  { id: 2, name: "Open Trip Gunung Pesawaran", harga: 100000 },
  { id: 3, name: "Open Trip Air Terjun Lemo", harga: 75000 },
];

export default function PaketPage() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Daftar Paket</h1>
      <table className="w-full border border-gray-300 rounded">
        <thead className="bg-gray-200">
          <tr>
            <th className="border p-2">ID</th>
            <th className="border p-2">Nama Paket</th>
            <th className="border p-2">Harga (Rp)</th>
            <th className="border p-2">Aksi</th> {/* Tambahkan kolom aksi */}
          </tr>
        </thead>
        <tbody>
          {dummyPaket.map((p) => (
            <tr key={p.id} className="hover:bg-gray-100">
              <td className="border p-2 text-center">{p.id}</td>
              <td className="border p-2">{p.name}</td>
              <td className="border p-2 text-right">{p.harga.toLocaleString()}</td>
              <td className="border p-2 text-center">
                <Link
                  href={`/dashboard/edit-paket/${p.id}`}
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