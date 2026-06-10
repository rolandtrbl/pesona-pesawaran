"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

interface EditPenggunaProps {
  params: { id: string };
}

export default function EditPenggunaPage({ params }: EditPenggunaProps) {
  const { id } = params;
  const router = useRouter();

  const [nama, setNama] = useState("Nama Pengguna");
  const [email, setEmail] = useState("email@example.com");
  const [role, setRole] = useState("Admin");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // nanti disini bisa panggil API untuk simpan perubahan
    alert(`Pengguna ID ${id} berhasil diupdate!`);
    router.push("/dashboard/pengguna");
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Edit Pengguna #{id}</h1>
      <form onSubmit={handleSubmit} className="space-y-4 max-w-md">
        <div>
          <label className="block mb-1">Nama</label>
          <input
            type="text"
            value={nama}
            onChange={(e) => setNama(e.target.value)}
            className="border p-2 w-full"
          />
        </div>
        <div>
          <label className="block mb-1">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border p-2 w-full"
          />
        </div>
        <div>
          <label className="block mb-1">Role</label>
          <input
            type="text"
            value={role}
            onChange={(e) => setRole(e.target.value)}
            className="border p-2 w-full"
          />
        </div>
        <button
          type="submit"
          className="px-4 py-2 bg-emerald-600 text-white rounded"
        >
          Simpan Perubahan
        </button>
      </form>
    </div>
  );
}