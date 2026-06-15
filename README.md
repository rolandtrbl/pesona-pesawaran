Pesona Pesawaran

Pesona Pesawaran adalah aplikasi wisata berbasis Flutter yang dirancang untuk membantu pengguna menemukan berbagai destinasi wisata terbaik di Kabupaten Pesawaran, Lampung. Aplikasi ini menyediakan informasi wisata, pencarian destinasi, penyimpanan wisata favorit, serta integrasi Google Maps untuk memudahkan navigasi pengguna.


Tujuan

Aplikasi ini dibuat untuk:

* Mempermudah pengguna mencari informasi destinasi wisata di Kabupaten Pesawaran.
* Menyediakan informasi lengkap mengenai objek wisata.
* Membantu pengguna menemukan lokasi wisata melalui Google Maps.
* Menyimpan daftar wisata favorit pengguna.
* Mendukung promosi dan digitalisasi pariwisata Kabupaten Pesawaran.

Fitur Utama

Home
* Banner wisata
* Kategori wisata
* Wisata populer
* Navigasi cepat ke halaman wisata

Wisata
* Pencarian destinasi wisata
* Filter kategori wisata
* Pull to Refresh
* Daftar wisata interaktif

Detail Wisata
* Informasi lengkap destinasi
* Rating wisata
* Fasilitas wisata
* Ulasan pengunjung
* Integrasi Google Maps
* Tambah/Hapus favorit

Favorite
* Menambahkan wisata ke favorit
* Menghapus wisata dari favorit
* Penyimpanan data menggunakan SharedPreferences
* Data favorit tetap tersimpan setelah aplikasi ditutup

Profile
* Menampilkan data pengguna yang login
* Tentang aplikasi
* Pengaturan
* Riwayat perjalanan
* Logout akun

Authentication
* Register akun pengguna
* Login akun pengguna
* Integrasi REST API Backend
* Penyimpanan session pengguna


Arsitektur Sistem

Frontend Mobile
* Flutter
* Dart
* Material Design
* GetX (Navigation & State Management)
* Shared Preferences (Local Storage)
* url_launcher (Google Maps Integration)
* HTTP Package (REST API Communication)

Backend API
* NestJS
* TypeScript
* JWT Authentication
* Prisma ORM
* REST API

Database
* PostgreSQL

CMS Admin
* Next.js
* Tailwind CSS


🚀 Cara Menjalankan Project

Frontend

```bash
cd frontend
flutter pub get
flutter run
```

Backend

```bash
cd api
npm install
npm run start:dev
```

CMS

```bash
cd cms
npm install
npm run dev
```

---

👨‍💻 Tim Pengembang

| Nama       | Role                      |
| ---------- | ------------------------- |
| Muwjon     | Frontend Mobile Developer |
| Nama Teman | Backend Developer         |
| Nama Teman | CMS Developer             |

---

📌 Status Project

✅ Authentication (Login & Register)

✅ Wisata Management

✅ Favorite Management

✅ Google Maps Integration

✅ Profile Management

✅ REST API Integration

✅ PostgreSQL Database

✅ CMS Admin

🚧 Pengembangan lanjutan:

* Auto Login
* Remember Me
* Biometric Authentication
* Edit Profile
* Upload Foto Profil
