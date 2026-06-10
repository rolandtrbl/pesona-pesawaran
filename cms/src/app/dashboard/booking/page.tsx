// cms/src/app/dashboard/booking/page.tsx
"use client";

import React, { useState } from "react";

interface Booking {
  id: number;
  user: string;
  paket: string;
  tanggal: string;
}

const dummyBooking: Booking[] = [
  { id: 1, user: "Ladia", paket: "Open Trip Marina", tanggal: "2026-06-20" },
  { id: 2, user: "Hajar", paket: "Open Trip Gunung Pesawaran", tanggal: "2026-06-21" },
];

export default function BookingPage() {
  const [bookingList, setBookingList] = useState(dummyBooking);

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
          </tr>
        </thead>
        <tbody>
          {bookingList.map((b) => (
            <tr key={b.id} className="hover:bg-gray-100">
              <td className="border p-2 text-center">{b.id}</td>
              <td className="border p-2">{b.user}</td>
              <td className="border p-2">{b.paket}</td>
              <td className="border p-2">{b.tanggal}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}