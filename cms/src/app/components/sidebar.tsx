import Link from "next/link";

const menu = [
  { name: "Dashboard", href: "/dashboard" },
  { name: "Destinasi Wisata", href: "/dashboard/destinasi" },
  { name: "Paket Open Trip", href: "/dashboard/paket" },
  { name: "Booking", href: "/dashboard/booking" },
  { name: "Pengguna", href: "/dashboard/pengguna" },
  { name: "Transaksi", href: "/dashboard/transaksi" },
];

export default function Sidebar() {
  return (
    <aside className="w-64 min-h-screen bg-emerald-800 text-white p-6">
      <h1 className="text-2xl font-bold mb-8">Pesona Pesawaran</h1>

      <nav className="space-y-2">
        {menu.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="block px-4 py-3 rounded-lg hover:bg-emerald-700"
          >
            {item.name}
          </Link>
        ))}
      </nav>
    </aside>
  );
}