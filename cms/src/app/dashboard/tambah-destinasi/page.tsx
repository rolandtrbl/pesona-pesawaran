"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

type Destinasi = {
  id: number;
  nama: string;
  lokasi: string;
  harga: number;
};

const STORAGE_KEY = "destinasiData";

export default function TambahDestinasiPage() {
  const router = useRouter();

  const [nama, setNama] = useState("");
  const [lokasi, setLokasi] = useState("");
  const [harga, setHarga] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const savedData = localStorage.getItem(STORAGE_KEY);

    const data: Destinasi[] = savedData
      ? JSON.parse(savedData)
      : [];

    const destinasiBaru: Destinasi = {
      id:
        data.length > 0
          ? Math.max(...data.map((d) => d.id)) + 1
          : 1,
      nama,
      lokasi,
      harga: Number(harga),
    };

    const updatedData = [...data, destinasiBaru];

    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify(updatedData)
    );

    alert("Destinasi berhasil ditambahkan");

    router.push("/dashboard/destinasi");
  };

  return (
    <div className="rounded-lg bg-white p-6 shadow">
      <h1 className="mb-6 text-2xl font-bold">
        Tambah Destinasi
      </h1>

      <form
        onSubmit={handleSubmit}
        className="space-y-4"
      >
        <div>
          <label className="mb-1 block">
            Nama Destinasi
          </label>

          <input
            type="text"
            value={nama}
            onChange={(e) =>
              setNama(e.target.value)
            }
            className="w-full rounded border p-2"
            required
          />
        </div>

        <div>
          <label className="mb-1 block">
            Lokasi
          </label>

          <input
            type="text"
            value={lokasi}
            onChange={(e) =>
              setLokasi(e.target.value)
            }
            className="w-full rounded border p-2"
            required
          />
        </div>

        <div>
          <label className="mb-1 block">
            Harga
          </label>

          <input
            type="number"
            value={harga}
            onChange={(e) =>
              setHarga(e.target.value)
            }
            className="w-full rounded border p-2"
            required
          />
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
              router.push("/dashboard/destinasi")
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