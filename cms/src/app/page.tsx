import Link from 'next/link';
import ActionButtons from './ActionButtons';
import ActionButtonsPaket from './ActionButtonsPaket';

export default async function Dashboard() {
  // 1. Narik Data Destinasi Wisata
  const resWisata = await fetch('http://localhost:3000/wisata', { cache: 'no-store' });
  const wisataList = await resWisata.json();

  // 2. Narik Data Paket Trip
  const resPaket = await fetch('http://localhost:3000/paket-trip', { cache: 'no-store' });
  const paketList = await resPaket.json();

  return (
    <main className="p-10 min-h-screen bg-gray-50 text-gray-800">
      <div className="max-w-5xl mx-auto space-y-8">
        <h1 className="text-3xl font-bold text-blue-900 mb-8">Dashboard Admin Pahawang</h1>

        {/* ================= TABEL 1: DESTINASI WISATA ================= */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold">Daftar Destinasi Wisata</h2>
            <Link href="/tambah" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition text-sm">
              + Tambah Destinasi
            </Link>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-gray-200 bg-gray-50/50">
                  <th className="py-3 px-4 text-sm font-medium text-gray-500">ID</th>
                  <th className="py-3 px-4 text-sm font-medium text-gray-500">Nama Tempat</th>
                  <th className="py-3 px-4 text-sm font-medium text-gray-500">Lokasi</th>
                  <th className="py-3 px-4 text-right text-sm font-medium text-gray-500">Aksi</th>
                </tr>
              </thead>
              <tbody>
                {wisataList.map((item: any) => (
                  <tr key={item.id} className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="py-3 px-4 text-sm text-gray-600">#{item.id}</td>
                    <td className="py-3 px-4 text-sm font-medium">{item.nama}</td>
                    <td className="py-3 px-4 text-sm text-gray-600">{item.lokasi}</td>
                    <td className="py-3 px-4 text-right">
                      <ActionButtons id={item.id} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* ================= TABEL 2: PAKET TRIP ================= */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold">Daftar Paket Trip</h2>
            {/* Tombol ini nyusul kita bikin halamannya nanti */}
            <Link href="/tambah-paket" className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition text-sm">
              + Tambah Paket
            </Link>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-gray-200 bg-gray-50/50">
                  <th className="py-3 px-4 text-sm font-medium text-gray-500">ID</th>
                  <th className="py-3 px-4 text-sm font-medium text-gray-500">Nama Paket</th>
                  <th className="py-3 px-4 text-sm font-medium text-gray-500">Harga</th>
                  <th className="py-3 px-4 text-right text-sm font-medium text-gray-500">Aksi</th>
                </tr>
              </thead>
              <tbody>
                {paketList.length === 0 ? (
                  <tr>
                    <td colSpan={4} className="text-center py-6 text-gray-500 text-sm">Belum ada data paket trip.</td>
                  </tr>
                ) : (
                  paketList.map((item: any) => (
                    <tr key={item.id} className="border-b border-gray-100 hover:bg-gray-50">
                      <td className="py-3 px-4 text-sm text-gray-600">#{item.id}</td>
                      <td className="py-3 px-4 text-sm font-medium">{item.namaPaket}</td> {/* Sesuaikan kalau di Prisma lu namanya 'namaPaket' */}
                      <td className="py-3 px-4 text-sm text-gray-600">
                        Rp {item.harga?.toLocaleString('id-ID')}
                      </td>
                      {/* Ganti teks Edit | Hapus jadi begini: */}
<td className="py-3 px-4 text-right">
  <ActionButtonsPaket id={item.id} />
</td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </main>
  );
}