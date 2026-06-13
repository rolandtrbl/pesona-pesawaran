"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

type Booking = {
  id: number;
  namaPengguna: string;
  paket: string;
  tanggal: string;
  status: string;
};

const STORAGE_KEY = "bookingData";

const defaultBooking: Booking[] = [
  {
    id: 1,
    namaPengguna: "Ladia",
    paket: "Open Trip Marina",
    tanggal: "2026-06-10",
    status: "Pending",
  },
  {
    id: 2,
    namaPengguna: "Hajar",
    paket: "Open Trip Gunung Pesawaran",
    tanggal: "2026-06-12",
    status: "Dikonfirmasi",
  },
];

export default function BookingPage() {
  const [booking, setBooking] = useState<Booking[]>([]);

  useEffect(() => {
    const savedData = localStorage.getItem(STORAGE_KEY);

    if (savedData) {
      try {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setBooking(JSON.parse(savedData) as Booking[]);
      } catch {
        localStorage.setItem(
          STORAGE_KEY,
          JSON.stringify(defaultBooking)
        );
        setBooking(defaultBooking);
      }
    } else {
      localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify(defaultBooking)
      );
      setBooking(defaultBooking);
    }
  }, []);

  const handleDelete = (id: number) => {
    const confirmDelete = window.confirm(
      "Yakin ingin menghapus booking ini?"
    );

    if (!confirmDelete) return;

    const updatedData = booking.filter(
      (item) => item.id !== id
    );

    setBooking(updatedData);

    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify(updatedData)
    );
  };

  return (
    <div className="rounded-lg bg-white p-6 shadow">
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-2xl font-bold">
          Daftar Booking
        </h1>

        <Link
          href="/dashboard/tambah-booking"
          className="rounded bg-green-600 px-4 py-2 text-white hover:bg-green-700"
        >
          + Tambah Booking
        </Link>
      </div>

      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            <th className="border p-2">ID</th>
            <th className="border p-2">Nama Pengguna</th>
            <th className="border p-2">Paket</th>
            <th className="border p-2">Tanggal</th>
            <th className="border p-2">Status</th>
            <th className="border p-2">Aksi</th>
          </tr>
        </thead>

        <tbody>
          {booking.map((item) => (
            <tr key={item.id}>
              <td className="border p-2 text-center">
                {item.id}
              </td>

              <td className="border p-2">
                {item.namaPengguna}
              </td>

              <td className="border p-2">
                {item.paket}
              </td>

              <td className="border p-2 text-center">
                {item.tanggal}
              </td>

              <td className="border p-2 text-center">
                {item.status}
              </td>

              <td className="border p-2 text-center">
                <div className="flex justify-center gap-3">
                  <Link
                    href={`/dashboard/edit-booking/${item.id}`}
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