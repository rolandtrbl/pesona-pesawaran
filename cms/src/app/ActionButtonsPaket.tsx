"use client";

import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function ActionButtonsPaket({ id }: { id: number }) {
  const router = useRouter();

  const handleDelete = async () => {
    const konfirmasi = confirm('Yakin mau hapus paket trip ini?');
    
    if (konfirmasi) {
      try {
        const res = await fetch(`http://localhost:3000/paket-trip/${id}`, {
          method: 'DELETE',
        });

        if (res.ok) {
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
    <div className="space-x-3 flex items-center justify-end">
      {/* Link Edit ini nanti aja kita bikin halamannya */}
      <Link href={`/edit-paket/${id}`} className="text-blue-500 hover:underline text-sm mr-2">
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