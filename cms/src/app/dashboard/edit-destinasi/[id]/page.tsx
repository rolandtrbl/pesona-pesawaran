"use client";

import { useParams, useRouter } from "next/navigation";
import { useEffect, useState, type FormEvent } from "react";

type Destinasi = {
  id: number;
  nama: string;
  lokasi: string;
  harga: number;
};

const STORAGE_KEY = "destinasiData";

const defaultDestinasi: Destinasi[] = [
  {
    id: 1,
    nama: "Pulau Pahawang",
    lokasi: "Pesawaran",
    harga: 50000,
  },
  {
    id: 2,
    nama: "Pantai Mutun",
    lokasi: "Pesawaran",
    harga: 30000,
  },
];

export default function EditDestinasiPage() {
  const router = useRouter();
  const params = useParams<{ id: string }>();

  const id = Number(params.id);

  const [nama, setNama] = useState("");
  const [lokasi, setLokasi] = useState("");
  const [harga, setHarga] = useState("");
  const [loading, setLoading] = useState(true);
  const [isFound, setIsFound] = useState(true);

  useEffect(() => {
    let data: Destinasi[] = defaultDestinasi;

    const savedData = localStorage.getItem(STORAGE_KEY);

    if (savedData) {
      try {
        data = JSON.parse(savedData) as Destinasi[];
      } catch {
        data = defaultDestinasi;
        localStorage.setItem(STORAGE_KEY, JSON.stringify(defaultDestinasi));
      }
    } else {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(defaultDestinasi));
    }

    const selectedDestinasi = data.find((item) => item.id === id);

    if (!selectedDestinasi) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setIsFound(false);
      setLoading(false);
      return;
    }

    setNama(selectedDestinasi.nama);
    setLokasi(selectedDestinasi.lokasi);
    setHarga(String(selectedDestinasi.harga));
    setIsFound(true);
    setLoading(false);
  }, [id]);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const savedData = localStorage.getItem(STORAGE_KEY);

    let data: Destinasi[] = defaultDestinasi;

    if (savedData) {
      try {
        data = JSON.parse(savedData) as Destinasi[];
      } catch {
        data = defaultDestinasi;
      }
    }

    const updatedData = data.map((item) =>
      item.id === id
        ? {
            ...item,
            nama,
            lokasi,
            harga: Number(harga),
          }
        : item
    );

    localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedData));

    alert(`Destinasi ID ${id} berhasil diupdate!`);
    router.push("/dashboard/destinasi");
  };

  if (loading) {
    return (
      <div className="rounded-lg bg-white p-6 shadow">
        <p>Memuat data destinasi...</p>
      </div>
    );
  }

  if (!isFound) {
    return (
      <div className="rounded-lg bg-white p-6 shadow">
        <h1 className="mb-4 text-2xl font-bold">Destinasi tidak ditemukan</h1>

        <button
          type="button"
          onClick={() => router.push("/dashboard/destinasi")}
          className="rounded bg-green-700 px-4 py-2 text-white hover:bg-green-800"
        >
          Kembali
        </button>
      </div>
    );
  }

  return (
    <div className="rounded-lg bg-white p-6 shadow">
      <h1 className="mb-6 text-2xl font-bold">Edit Destinasi</h1>

      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label className="mb-2 block text-sm font-medium text-gray-700">
            Nama Destinasi
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
            Lokasi
          </label>
          <input
            type="text"
            value={lokasi}
            onChange={(e) => setLokasi(e.target.value)}
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

        <div className="flex gap-3 pt-4">
          <button
            type="submit"
            className="rounded bg-green-700 px-5 py-2 text-white hover:bg-green-800"
          >
            Simpan Perubahan
          </button>

          <button
            type="button"
            onClick={() => router.push("/dashboard/destinasi")}
            className="rounded bg-gray-300 px-5 py-2 text-gray-800 hover:bg-gray-400"
          >
            Batal
          </button>
        </div>
      </form>
    </div>
  );
}