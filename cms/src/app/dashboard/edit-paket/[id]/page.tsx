"use client";

import { useParams, useRouter } from "next/navigation";
import { useState } from "react";

export default function EditPaketPage() {
  const router = useRouter();
  const params = useParams<{ id: string }>();

  const id = params.id;

  const [namaPaket, setNamaPaket] = useState("Paket Wisata Pesawaran");
  const [destinasi, setDestinasi] = useState("Pulau Pahawang");
  const [harga, setHarga] = useState("350000");
  const [durasi, setDurasi] = useState("1 Hari");
  const [deskripsi, setDeskripsi] = useState(
    "Paket wisata menarik untuk menikmati keindahan destinasi Pesawaran."
  );

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    alert(`Paket ID ${id} berhasil diupdate!`);

    router.push("/dashboard/paket");
  };

  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Edit Paket</h1>
        <p className="text-sm text-gray-500">Edit data paket ID: {id}</p>
      </div>

      <div className="rounded-lg bg-white p-6 shadow">
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="mb-2 block text-sm font-medium text-gray-700">
              Nama Paket
            </label>
            <input
              type="text"
              value={namaPaket}
              onChange={(e) => setNamaPaket(e.target.value)}
              className="w-full rounded-md border border-gray-300 px-4 py-2 text-sm outline-none focus:border-green-600"
              placeholder="Masukkan nama paket"
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
              className="w-full rounded-md border border-gray-300 px-4 py-2 text-sm outline-none focus:border-green-600"
              placeholder="Masukkan destinasi"
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
              className="w-full rounded-md border border-gray-300 px-4 py-2 text-sm outline-none focus:border-green-600"
              placeholder="Masukkan harga paket"
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
              className="w-full rounded-md border border-gray-300 px-4 py-2 text-sm outline-none focus:border-green-600"
              placeholder="Contoh: 1 Hari"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-gray-700">
              Deskripsi
            </label>
            <textarea
              value={deskripsi}
              onChange={(e) => setDeskripsi(e.target.value)}
              rows={4}
              className="w-full rounded-md border border-gray-300 px-4 py-2 text-sm outline-none focus:border-green-600"
              placeholder="Masukkan deskripsi paket"
            />
          </div>

          <div className="flex gap-3 pt-4">
            <button
              type="submit"
              className="rounded-md bg-green-700 px-5 py-2 text-sm font-medium text-white hover:bg-green-800"
            >
              Simpan Perubahan
            </button>

            <button
              type="button"
              onClick={() => router.push("/dashboard/paket")}
              className="rounded-md bg-gray-200 px-5 py-2 text-sm font-medium text-gray-700 hover:bg-gray-300"
            >
              Batal
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}