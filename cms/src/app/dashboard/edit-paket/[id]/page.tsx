"use client";

import { useParams, useRouter } from "next/navigation";
import { useEffect, useState, type FormEvent } from "react";

type Paket = {
  id: number;
  nama: string;
  destinasi: string;
  harga: number;
  durasi: string;
};

const STORAGE_KEY = "paketData";

const defaultPaket: Paket[] = [
  {
    id: 1,
    nama: "Open Trip Marina",
    destinasi: "Pulau Pahawang",
    harga: 50000,
    durasi: "1 Hari",
  },
  {
    id: 2,
    nama: "Open Trip Gunung Pesawaran",
    destinasi: "Gunung Pesawaran",
    harga: 100000,
    durasi: "1 Hari",
  },
];

export default function EditPaketPage() {
  const router = useRouter();
  const params = useParams<{ id: string }>();

  const id = Number(params.id);

  const [nama, setNama] = useState("");
  const [destinasi, setDestinasi] = useState("");
  const [harga, setHarga] = useState("");
  const [durasi, setDurasi] = useState("");
  const [loading, setLoading] = useState(true);
  const [isFound, setIsFound] = useState(true);

  useEffect(() => {
    let data: Paket[] = defaultPaket;

    const savedData = localStorage.getItem(STORAGE_KEY);

    if (savedData) {
      try {
        data = JSON.parse(savedData) as Paket[];
      } catch {
        data = defaultPaket;
        localStorage.setItem(STORAGE_KEY, JSON.stringify(defaultPaket));
      }
    } else {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(defaultPaket));
    }

    const selectedPaket = data.find((item) => item.id === id);

    if (!selectedPaket) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setIsFound(false);
      setLoading(false);
      return;
    }

    setNama(selectedPaket.nama);
    setDestinasi(selectedPaket.destinasi);
    setHarga(String(selectedPaket.harga));
    setDurasi(selectedPaket.durasi);
    setIsFound(true);
    setLoading(false);
  }, [id]);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const savedData = localStorage.getItem(STORAGE_KEY);

    let data: Paket[] = defaultPaket;

    if (savedData) {
      try {
        data = JSON.parse(savedData) as Paket[];
      } catch {
        data = defaultPaket;
      }
    }

    const updatedData = data.map((item) =>
      item.id === id
        ? {
            ...item,
            nama,
            destinasi,
            harga: Number(harga),
            durasi,
          }
        : item
    );

    localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedData));

    alert(`Paket ID ${id} berhasil diupdate!`);
    router.push("/dashboard/paket");
  };

  if (loading) {
    return (
      <div className="rounded-lg bg-white p-6 shadow">
        <p>Memuat data paket...</p>
      </div>
    );
  }

  if (!isFound) {
    return (
      <div className="rounded-lg bg-white p-6 shadow">
        <h1 className="mb-4 text-2xl font-bold">Paket tidak ditemukan</h1>

        <button
          type="button"
          onClick={() => router.push("/dashboard/paket")}
          className="rounded bg-green-700 px-4 py-2 text-white hover:bg-green-800"
        >
          Kembali
        </button>
      </div>
    );
  }

  return (
    <div className="rounded-lg bg-white p-6 shadow">
      <h1 className="mb-6 text-2xl font-bold">Edit Paket</h1>

      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label className="mb-2 block text-sm font-medium text-gray-700">
            Nama Paket
          </label>
          <input
            type="text"
            value={nama}
            onChange={(e) => setNama(e.target.value)}
            className="w-full rounded border border-gray-300 px-4 py-2 outline-none focus:border-green-700"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-gray-700">
            Destinasi
          </label>
          <input
            type="text"
            value={destinasi}
            onChange={(e) => setDestinasi(e.target.value)}
            className="w-full rounded border border-gray-300 px-4 py-2 outline-none focus:border-green-700"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-gray-700">
            Harga
          </label>
          <input
            type="number"
            value={harga}
            onChange={(e) => setHarga(e.target.value)}
            className="w-full rounded border border-gray-300 px-4 py-2 outline-none focus:border-green-700"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-gray-700">
            Durasi
          </label>
          <input
            type="text"
            value={durasi}
            onChange={(e) => setDurasi(e.target.value)}
            className="w-full rounded border border-gray-300 px-4 py-2 outline-none focus:border-green-700"
          />
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
            onClick={() => router.push("/dashboard/paket")}
            className="rounded bg-gray-300 px-5 py-2 text-gray-800 hover:bg-gray-400"
          >
            Batal
          </button>
        </div>
      </form>
    </div>
  );
}