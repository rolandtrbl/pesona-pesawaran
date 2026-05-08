"use client"; // Wajib ada biar bisa pakai onClick dan fitur browser
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function ActionButtons({ id }: { id: number }) {
  const router = useRouter();

  const handleDelete = async () => {
    // Munculin pop-up konfirmasi biar nggak kepencet ga sengaja
    const konfirmasi = confirm('Yakin mau hapus destinasi ini?');
    
    if (konfirmasi) {
      try {
        // Tembak API NestJS lu pakai method DELETE
        const res = await fetch(`http://localhost:3000/wisata/${id}`, {
          method: 'DELETE',
        });

        if (res.ok) {
          // Kalau sukses, suruh Next.js nge-refresh data tabelnya
          router.refresh();
        } else {
          alert('Gagal menghapus data dari database.');
        }
      } catch (error) {
        console.error(error);
        alert('Server backend sepertinya mati.');
      }
    }
  };

  return (
    <div className="space-x-3">
      <Link href={`/edit/${id}`} className="text-blue-500 hover:underline text-sm mr-3">
  Edit
</Link>
      <button 
        onClick={handleDelete} 
        className="text-red-500 hover:underline text-sm font-medium"
      >
        Hapus
      </button>
    </div>
  );
}