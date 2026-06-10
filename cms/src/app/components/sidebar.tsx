// cms/src/app/components/sidebar.tsx
"use client";

import Link from "next/link";

const menu = [
  { name: "Dashboard", href: "/dashboard" },
  { name: "Destinasi Wisata", href: "/dashboard/destinasi" },
  { name: "Paket", href: "/dashboard/paket" },
  { name: "Booking", href: "/dashboard/booking" },
  { name: "Pengguna", href: "/dashboard/pengguna" },
  { name: "Transaksi", href: "/dashboard/transaksi" },
];

export default function Sidebar() {
  return (
    <aside className="w-64 min-h-screen bg-emerald-800 text-white p-6 flex flex-col">
      {/* Judul / Logo */}
      <div>
        <h1 className="text-2xl font-bold mb-8">Pesona Pesawaran</h1>

        {/* Menu atas */}
        <nav className="space-y-2 mb-8">
          {menu.slice(0, 2).map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="block px-4 py-3 rounded-lg hover:bg-emerald-700"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Menu bawah */}
        <nav className="space-y-2">
          {menu.slice(2).map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="block px-4 py-3 rounded-lg hover:bg-emerald-700"
            >
              {item.name}
            </Link>
          ))}
        </nav>
      </div>
    </aside>
  );
}