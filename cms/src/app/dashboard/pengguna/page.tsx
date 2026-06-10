// cms/src/app/dashboard/pengguna/page.tsx
"use client";

import React, { useState } from "react";

interface User {
  id: number;
  name: string;
  email: string;
}

const dummyUsers: User[] = [
  { id: 1, name: "Ladia", email: "ladia@email.com" },
  { id: 2, name: "Hajar", email: "hajar@email.com" },
];

export default function PenggunaPage() {
  const [userList, setUserList] = useState(dummyUsers);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Daftar Pengguna</h1>
      <table className="w-full border border-gray-300 rounded">
        <thead className="bg-gray-200">
          <tr>
            <th className="border p-2">ID</th>
            <th className="border p-2">Nama</th>
            <th className="border p-2">Email</th>
          </tr>
        </thead>
        <tbody>
          {userList.map((u) => (
            <tr key={u.id} className="hover:bg-gray-100">
              <td className="border p-2 text-center">{u.id}</td>
              <td className="border p-2">{u.name}</td>
              <td className="border p-2">{u.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}