"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

type Paket = {
  id: number;
  nama: string;
  destinasi: string;
  harga: number;
  durasi: string;
};

const STORAGE_KEY = "paketData";

export default function TambahPaketPage() {
  const router = useRouter();

  const [nama, setNama] = useState("");
  const [destinasi, setDestinasi] = useState("");
  const [harga, setHarga] = useState("");
  const [durasi, setDurasi] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const savedData = localStorage.getItem(STORAGE_KEY);

    const data: Paket[] = savedData
      ? JSON.parse(savedData)
      : [];

    const paketBaru: Paket = {
      id:
        data.length > 0
          ? Math.max(...data.map((p) => p.id)) + 1
          : 1,
      nama,
      destinasi,
      harga: Number(harga),
      durasi,
    };

    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify([...data, paketBaru])
    );

    alert("Paket berhasil ditambahkan");

    router.push("/dashboard/paket");
  };

  return (
    <div className="rounded-lg bg-white p-6 shadow">
      <h1 className="mb-6 text-2xl font-bold">
        Tambah Paket
      </h1>

      <form
        onSubmit={handleSubmit}
        className="space-y-4"
      >
        <div>
          <label className="mb-1 block">
            Nama Paket
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
            Destinasi
          </label>

          <input
            type="text"
            value={destinasi}
            onChange={(e) =>
              setDestinasi(e.target.value)
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

        <div>
          <label className="mb-1 block">
            Durasi
          </label>

          <input
            type="text"
            value={durasi}
            onChange={(e) =>
              setDurasi(e.target.value)
            }
            placeholder="Contoh: 1 Hari"
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
              router.push("/dashboard/paket")
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