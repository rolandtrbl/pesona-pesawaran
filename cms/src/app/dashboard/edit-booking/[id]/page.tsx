"use client";

import { useParams, useRouter } from "next/navigation";
import { useEffect, useState, type FormEvent } from "react";

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

export default function EditBookingPage() {
  const router = useRouter();
  const params = useParams<{ id: string }>();

  const id = Number(params.id);

  const [namaPengguna, setNamaPengguna] = useState("");
  const [paket, setPaket] = useState("");
  const [tanggal, setTanggal] = useState("");
  const [status, setStatus] = useState("Pending");
  const [loading, setLoading] = useState(true);
  const [isFound, setIsFound] = useState(true);

  useEffect(() => {
    let data: Booking[] = defaultBooking;

    const savedData = localStorage.getItem(STORAGE_KEY);

    if (savedData) {
      try {
        data = JSON.parse(savedData) as Booking[];
      } catch {
        data = defaultBooking;
        localStorage.setItem(STORAGE_KEY, JSON.stringify(defaultBooking));
      }
    } else {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(defaultBooking));
    }

    const selectedBooking = data.find((item) => item.id === id);

    if (!selectedBooking) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setIsFound(false);
      setLoading(false);
      return;
    }

    setNamaPengguna(selectedBooking.namaPengguna);
    setPaket(selectedBooking.paket);
    setTanggal(selectedBooking.tanggal);
    setStatus(selectedBooking.status);
    setIsFound(true);
    setLoading(false);
  }, [id]);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const savedData = localStorage.getItem(STORAGE_KEY);

    let data: Booking[] = defaultBooking;

    if (savedData) {
      try {
        data = JSON.parse(savedData) as Booking[];
      } catch {
        data = defaultBooking;
      }
    }

    const updatedData = data.map((item) =>
      item.id === id
        ? {
            ...item,
            namaPengguna,
            paket,
            tanggal,
            status,
          }
        : item
    );

    localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedData));

    alert(`Booking ID ${id} berhasil diupdate!`);
    router.push("/dashboard/booking");
  };

  if (loading) {
    return (
      <div className="rounded-lg bg-white p-6 shadow">
        <p>Memuat data booking...</p>
      </div>
    );
  }

  if (!isFound) {
    return (
      <div className="rounded-lg bg-white p-6 shadow">
        <h1 className="mb-4 text-2xl font-bold">Booking tidak ditemukan</h1>

        <button
          type="button"
          onClick={() => router.push("/dashboard/booking")}
          className="rounded bg-green-700 px-4 py-2 text-white hover:bg-green-800"
        >
          Kembali
        </button>
      </div>
    );
  }

  return (
    <div className="rounded-lg bg-white p-6 shadow">
      <h1 className="mb-6 text-2xl font-bold">Edit Booking</h1>

      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label className="mb-2 block text-sm font-medium text-gray-700">
            Nama Pengguna
          </label>
          <input
            type="text"
            value={namaPengguna}
            onChange={(e) => setNamaPengguna(e.target.value)}
            className="w-full rounded border border-gray-300 px-4 py-2 outline-none focus:border-green-700"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-gray-700">
            Paket
          </label>
          <input
            type="text"
            value={paket}
            onChange={(e) => setPaket(e.target.value)}
            className="w-full rounded border border-gray-300 px-4 py-2 outline-none focus:border-green-700"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-gray-700">
            Tanggal
          </label>
          <input
            type="date"
            value={tanggal}
            onChange={(e) => setTanggal(e.target.value)}
            className="w-full rounded border border-gray-300 px-4 py-2 outline-none focus:border-green-700"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-gray-700">
            Status
          </label>
          <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className="w-full rounded border border-gray-300 px-4 py-2 outline-none focus:border-green-700"
          >
            <option value="Pending">Pending</option>
            <option value="Dikonfirmasi">Dikonfirmasi</option>
            <option value="Selesai">Selesai</option>
            <option value="Dibatalkan">Dibatalkan</option>
          </select>
        </div>

        <div className="flex gap-3 pt-4">
          <button
            type="submit"
            className="rounded bg-green-700 px-5 py-2 text-white hover:bg-green-800"
          >
            Simpan Perubahan
          </button>

          <button
            type="button"
            onClick={() => router.push("/dashboard/booking")}
            className="rounded bg-gray-300 px-5 py-2 text-gray-800 hover:bg-gray-400"
          >
            Batal
          </button>
        </div>
      </form>
    </div>
  );
}