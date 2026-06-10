"use client"; // pastikan ini di paling atas

import React, { useState } from "react";

interface Destinasi {
  id: number;
  name: string;
  lokasi: string;
  harga: number;
}

const dummyDestinasi: Destinasi[] = [
  { id: 1, name: "Pantai Marina", lokasi: "Pesawaran", harga: 50000 },
  { id: 2, name: "Gunung Pesawaran", lokasi: "Pesawaran", harga: 100000 },
  { id: 3, name: "Air Terjun Lemo", lokasi: "Pesawaran", harga: 75000 },
];

export default function DestinasiPage() {
  const [destinasiList, setDestinasiList] = useState(dummyDestinasi);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Daftar Destinasi</h1>
      <table className="w-full border border-gray-300 rounded">
        <thead className="bg-gray-200">
          <tr>
            <th className="border p-2">ID</th>
            <th className="border p-2">Nama Destinasi</th>
            <th className="border p-2">Lokasi</th>
            <th className="border p-2">Harga (Rp)</th>
          </tr>
        </thead>
        <tbody>
          {destinasiList.map((d) => (
            <tr key={d.id} className="hover:bg-gray-100">
              <td className="border p-2 text-center">{d.id}</td>
              <td className="border p-2">{d.name}</td>
              <td className="border p-2">{d.lokasi}</td>
              <td className="border p-2 text-right">{d.harga.toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}