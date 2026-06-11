"use client";

import { useParams, useRouter } from "next/navigation";
import { useEffect, useState, type FormEvent } from "react";

type Pengguna = {
  id: number;
  nama: string;
  email: string;
  role: string;
  status: string;
};

const STORAGE_KEY = "penggunaData";

const defaultPengguna: Pengguna[] = [
  {
    id: 1,
    nama: "Ladia",
    email: "ladia@example.com",
    role: "User",
    status: "Aktif",
  },
  {
    id: 2,
    nama: "Hajar",
    email: "hajar@example.com",
    role: "User",
    status: "Aktif",
  },
];

export default function EditPenggunaPage() {
  const router = useRouter();
  const params = useParams<{ id: string }>();

  const id = Number(params.id);

  const [nama, setNama] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("User");
  const [status, setStatus] = useState("Aktif");
  const [loading, setLoading] = useState(true);
  const [isFound, setIsFound] = useState(true);

  useEffect(() => {
    let data: Pengguna[] = defaultPengguna;

    const savedData = localStorage.getItem(STORAGE_KEY);

    if (savedData) {
      try {
        data = JSON.parse(savedData) as Pengguna[];
      } catch {
        data = defaultPengguna;
        localStorage.setItem(STORAGE_KEY, JSON.stringify(defaultPengguna));
      }
    } else {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(defaultPengguna));
    }

    const selectedPengguna = data.find((item) => item.id === id);

    if (!selectedPengguna) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setIsFound(false);
      setLoading(false);
      return;
    }

    setNama(selectedPengguna.nama);
    setEmail(selectedPengguna.email);
    setRole(selectedPengguna.role);
    setStatus(selectedPengguna.status);
    setIsFound(true);
    setLoading(false);
  }, [id]);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const savedData = localStorage.getItem(STORAGE_KEY);

    let data: Pengguna[] = defaultPengguna;

    if (savedData) {
      try {
        data = JSON.parse(savedData) as Pengguna[];
      } catch {
        data = defaultPengguna;
      }
    }

    const updatedData = data.map((item) =>
      item.id === id
        ? {
            ...item,
            nama,
            email,
            role,
            status,
          }
        : item
    );

    localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedData));

    alert(`Pengguna ID ${id} berhasil diupdate!`);
    router.push("/dashboard/pengguna");
  };

  if (loading) {
    return (
      <div className="rounded-lg bg-white p-6 shadow">
        <p>Memuat data pengguna...</p>
      </div>
    );
  }

  if (!isFound) {
    return (
      <div className="rounded-lg bg-white p-6 shadow">
        <h1 className="mb-4 text-2xl font-bold">Pengguna tidak ditemukan</h1>

        <button
          type="button"
          onClick={() => router.push("/dashboard/pengguna")}
          className="rounded bg-green-700 px-4 py-2 text-white hover:bg-green-800"
        >
          Kembali
        </button>
      </div>
    );
  }

  return (
    <div className="rounded-lg bg-white p-6 shadow">
      <h1 className="mb-6 text-2xl font-bold">Edit Pengguna</h1>

      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label className="mb-2 block text-sm font-medium text-gray-700">
            Nama
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
            Email
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full rounded border border-gray-300 px-4 py-2 outline-none focus:border-green-700"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-gray-700">
            Role
          </label>
          <select
            value={role}
            onChange={(e) => setRole(e.target.value)}
            className="w-full rounded border border-gray-300 px-4 py-2 outline-none focus:border-green-700"
          >
            <option value="Admin">Admin</option>
            <option value="User">User</option>
          </select>
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
            <option value="Aktif">Aktif</option>
            <option value="Nonaktif">Nonaktif</option>
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
            onClick={() => router.push("/dashboard/pengguna")}
            className="rounded bg-gray-300 px-5 py-2 text-gray-800 hover:bg-gray-400"
          >
            Batal
          </button>
        </div>
      </form>
    </div>
  );
}