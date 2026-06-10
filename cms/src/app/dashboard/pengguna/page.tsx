"use client";

import Link from "next/link";
import { useState } from "react";

interface Pengguna {
  id: number;
  nama: string;
  email: string;
  role: string;
}

const dummyPengguna: Pengguna[] = [
  { id: 1, nama: "Ladia", email: "ladia@example.com", role: "Admin" },
  { id: 2, nama: "Hajar", email: "hajar@example.com", role: "User" },
  { id: 3, nama: "Sarah", email: "sarah@example.com", role: "User" },
];

export default function PenggunaPage() {
  const [penggunaList, setPenggunaList] = useState(dummyPengguna);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Daftar Pengguna</h1>
      <table className="w-full border border-gray-300 rounded">
        <thead className="bg-gray-200">
          <tr>
            <th className="border p-2">ID</th>
            <th className="border p-2">Nama</th>
            <th className="border p-2">Email</th>
            <th className="border p-2">Role</th>
            <th className="border p-2">Aksi</th>
          </tr>
        </thead>
        <tbody>
          {penggunaList.map((u) => (
            <tr key={u.id} className="hover:bg-gray-100">
              <td className="border p-2 text-center">{u.id}</td>
              <td className="border p-2">{u.nama}</td>
              <td className="border p-2">{u.email}</td>
              <td className="border p-2">{u.role}</td>
              <td className="border p-2 text-center">
                <Link
                  href={`/dashboard/edit-pengguna/${u.id}`}
                  className="text-blue-600 hover:underline"
                >
                  Edit
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}