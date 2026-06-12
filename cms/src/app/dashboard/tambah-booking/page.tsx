"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

type Booking = {
  id: number;
  namaPengguna: string;
  paket: string;
  tanggal: string;
  status: string;
};

const STORAGE_KEY = "bookingData";

export default function TambahBookingPage() {
  const router = useRouter();

  const [namaPengguna, setNamaPengguna] = useState("");
  const [paket, setPaket] = useState("");
  const [tanggal, setTanggal] = useState("");
  const [status, setStatus] = useState("Pending");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const savedData = localStorage.getItem(STORAGE_KEY);

    const data: Booking[] = savedData
      ? JSON.parse(savedData)
      : [];

    const bookingBaru: Booking = {
      id:
        data.length > 0
          ? Math.max(...data.map((b) => b.id)) + 1
          : 1,
      namaPengguna,
      paket,
      tanggal,
      status,
    };

    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify([...data, bookingBaru])
    );

    alert("Booking berhasil ditambahkan");

    router.push("/dashboard/booking");
  };

  return (
    <div className="rounded-lg bg-white p-6 shadow">
      <h1 className="mb-6 text-2xl font-bold">
        Tambah Booking
      </h1>

      <form
        onSubmit={handleSubmit}
        className="space-y-4"
      >
        <div>
          <label className="mb-1 block">
            Nama Pengguna
          </label>

          <input
            type="text"
            value={namaPengguna}
            onChange={(e) =>
              setNamaPengguna(e.target.value)
            }
            className="w-full rounded border p-2"
            required
          />
        </div>

        <div>
          <label className="mb-1 block">
            Paket
          </label>

          <input
            type="text"
            value={paket}
            onChange={(e) =>
              setPaket(e.target.value)
            }
            className="w-full rounded border p-2"
            required
          />
        </div>

        <div>
          <label className="mb-1 block">
            Tanggal
          </label>

          <input
            type="date"
            value={tanggal}
            onChange={(e) =>
              setTanggal(e.target.value)
            }
            className="w-full rounded border p-2"
            required
          />
        </div>

        <div>
          <label className="mb-1 block">
            Status
          </label>

          <select
            value={status}
            onChange={(e) =>
              setStatus(e.target.value)
            }
            className="w-full rounded border p-2"
          >
            <option value="Pending">
              Pending
            </option>
            <option value="Dikonfirmasi">
              Dikonfirmasi
            </option>
            <option value="Selesai">
              Selesai
            </option>
          </select>
        </div>

        <div className="flex gap-3">
          <button
            type="submit"
            className="rounded bg-green-600 px-4 py-2 text-white hover:bg-green-700"
          >
            Simpan
          </button>

          <button
            type="button"
            onClick={() =>
              router.push("/dashboard/booking")
            }
            className="rounded bg-gray-500 px-4 py-2 text-white hover:bg-gray-600"
          >
            Batal
          </button>
        </div>
      </form>
    </div>
  );
}