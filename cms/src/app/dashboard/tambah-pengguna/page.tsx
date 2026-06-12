"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

type Pengguna = {
  id: number;
  nama: string;
  email: string;
  role: string;
  status: string;
};

const STORAGE_KEY = "penggunaData";

export default function TambahPenggunaPage() {
  const router = useRouter();

  const [nama, setNama] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("User");
  const [status, setStatus] = useState("Aktif");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const savedData = localStorage.getItem(STORAGE_KEY);

    const data: Pengguna[] = savedData
      ? JSON.parse(savedData)
      : [];

    const penggunaBaru: Pengguna = {
      id:
        data.length > 0
          ? Math.max(...data.map((p) => p.id)) + 1
          : 1,
      nama,
      email,
      role,
      status,
    };

    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify([...data, penggunaBaru])
    );

    alert("Pengguna berhasil ditambahkan");

    router.push("/dashboard/pengguna");
  };

  return (
    <div className="rounded-lg bg-white p-6 shadow">
      <h1 className="mb-6 text-2xl font-bold">
        Tambah Pengguna
      </h1>

      <form
        onSubmit={handleSubmit}
        className="space-y-4"
      >
        <div>
          <label className="mb-1 block">
            Nama
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
            Email
          </label>

          <input
            type="email"
            value={email}
            onChange={(e) =>
              setEmail(e.target.value)
            }
            className="w-full rounded border p-2"
            required
          />
        </div>

        <div>
          <label className="mb-1 block">
            Role
          </label>

          <select
            value={role}
            onChange={(e) =>
              setRole(e.target.value)
            }
            className="w-full rounded border p-2"
          >
            <option value="User">
              User
            </option>
            <option value="Admin">
              Admin
            </option>
          </select>
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
            <option value="Aktif">
              Aktif
            </option>
            <option value="Nonaktif">
              Nonaktif
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
              router.push("/dashboard/pengguna")
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