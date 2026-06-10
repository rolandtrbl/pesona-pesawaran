"use client";

import Link from "next/link";

interface Booking {
  id: number;
  user: string;
  paket: string;
  tanggal: string;
}

const bookingList: Booking[] = [
  { id: 1, user: "Ladia", paket: "Open Trip Marina", tanggal: "2026-06-10" },
  { id: 2, user: "Hajar", paket: "Open Trip Gunung Pesawaran", tanggal: "2026-06-11" },
];

export default function BookingPage() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Daftar Booking</h1>
      <table className="w-full border border-gray-300 rounded">
        <thead className="bg-gray-200">
          <tr>
            <th className="border p-2">ID</th>
            <th className="border p-2">Nama Pengguna</th>
            <th className="border p-2">Paket</th>
            <th className="border p-2">Tanggal</th>
            <th className="border p-2">Aksi</th>
          </tr>
        </thead>
        <tbody>
          {bookingList.map((b: Booking) => (
            <tr key={b.id} className="hover:bg-gray-100">
              <td className="border p-2 text-center">{b.id}</td>
              <td className="border p-2">{b.user}</td>
              <td className="border p-2">{b.paket}</td>
              <td className="border p-2">{b.tanggal}</td>
              <td className="border p-2">
                <Link
                  href={`/dashboard/edit-booking/${b.id}`}
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