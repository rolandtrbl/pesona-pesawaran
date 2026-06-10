import 'package:flutter/material.dart';
import '../../../data/datasource/favorite_data.dart';
import '../../favorite/pages/favorite_page.dart';

class ProfilePage extends StatelessWidget {
  const ProfilePage({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: const Color(0xFFF5F7FA),

      appBar: AppBar(
        backgroundColor: Colors.transparent,
        elevation: 0,
        centerTitle: true,

        title: const Text(
          'Profile',
          style: TextStyle(color: Colors.black87, fontWeight: FontWeight.bold),
        ),
      ),

      body: SingleChildScrollView(
        padding: const EdgeInsets.all(20),

        child: Column(
          children: [
            // PROFILE IMAGE
            Container(
              padding: const EdgeInsets.all(4),

              decoration: BoxDecoration(
                shape: BoxShape.circle,
                border: Border.all(color: const Color(0xFF4A90E2), width: 3),
              ),

              child: const CircleAvatar(
                radius: 55,
                backgroundImage: NetworkImage('https://i.pravatar.cc/300'),
              ),
            ),

            const SizedBox(height: 20),

            // NAME
            const Text(
              'Muwjon',
              style: TextStyle(fontSize: 24, fontWeight: FontWeight.bold),
            ),

            const SizedBox(height: 8),

            const Text(
              'Traveler & Explorer',
              style: TextStyle(color: Colors.grey, fontSize: 16),
            ),

            const SizedBox(height: 30),

            // STATS
            Row(
              children: [
                Expanded(
                  child: statCard(
                    FavoriteData.favorites.length.toString(),
                    'Favorite',
                    Icons.favorite,
                  ),
                ),

                const SizedBox(width: 15),

                Expanded(child: statCard('4', 'Total Wisata', Icons.place)),
              ],
            ),

            const SizedBox(height: 30),

            // MENU
            const SizedBox(height: 15),

            Container(
              width: double.infinity,
              padding: const EdgeInsets.all(20),

              decoration: BoxDecoration(
                color: Colors.white,
                borderRadius: BorderRadius.circular(20),

                boxShadow: [
                  BoxShadow(
                    color: Colors.black.withValues(alpha: 0.03),
                    blurRadius: 10,
                  ),
                ],
              ),

              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,

                children: [
                  const Row(
                    children: [
                      Icon(Icons.info_outline, color: Color(0xFF4A90E2)),

                      SizedBox(width: 8),

                      Text(
                        'Tentang Aplikasi',
                        style: TextStyle(
                          fontSize: 18,
                          fontWeight: FontWeight.bold,
                        ),
                      ),
                    ],
                  ),

                  const SizedBox(height: 15),

                  const Text(
                    'Pesona Pesawaran',
                    style: TextStyle(fontSize: 16, fontWeight: FontWeight.bold),
                  ),

                  const SizedBox(height: 5),

                  const Text(
                    'Versi 1.0.0',
                    style: TextStyle(color: Colors.grey),
                  ),

                  const SizedBox(height: 10),

                  const Text(
                    'Aplikasi wisata yang membantu pengguna menemukan destinasi wisata terbaik di Kabupaten Pesawaran.',
                  ),

                  const SizedBox(height: 10),

                  const Text(
                    'Developer: Kelompok PBS IF23D',
                    style: TextStyle(fontWeight: FontWeight.w600),
                  ),
                ],
              ),
            ),
            profileMenu(context, Icons.person_outline, 'Edit Profile'),

            profileMenu(context, Icons.favorite_border, 'Favorite Wisata'),

            profileMenu(context, Icons.history, 'Riwayat Perjalanan'),

            profileMenu(context, Icons.settings_outlined, 'Pengaturan'),

            profileMenu(context, Icons.logout, 'Logout', isLogout: true),
          ],
        ),
      ),
    );
  }

  Widget statCard(String total, String title, IconData icon) {
    return Container(
      padding: const EdgeInsets.symmetric(vertical: 22),

      decoration: BoxDecoration(
        color: Colors.white,
        borderRadius: BorderRadius.circular(24),

        boxShadow: [
          BoxShadow(
            color: Colors.black.withValues(alpha: 0.04),
            blurRadius: 10,
          ),
        ],
      ),

      child: Column(
        children: [
          Icon(icon, color: const Color(0xFF4A90E2), size: 28),

          const SizedBox(height: 10),

          Text(
            total,
            style: const TextStyle(fontSize: 22, fontWeight: FontWeight.bold),
          ),

          const SizedBox(height: 5),

          Text(title, style: const TextStyle(color: Colors.grey)),
        ],
      ),
    );
  }

  Widget profileMenu(
    BuildContext context,
    IconData icon,
    String title, {
    bool isLogout = false,
  }) {
    return Container(
      margin: const EdgeInsets.only(bottom: 15),

      decoration: BoxDecoration(
        color: Colors.white,
        borderRadius: BorderRadius.circular(20),

        boxShadow: [
          BoxShadow(
            color: Colors.black.withValues(alpha: 0.03),
            blurRadius: 10,
          ),
        ],
      ),

      child: ListTile(
        leading: Icon(
          icon,
          color: isLogout ? Colors.red : const Color(0xFF4A90E2),
        ),

        title: Text(
          title,
          style: TextStyle(
            fontWeight: FontWeight.w600,
            color: isLogout ? Colors.red : Colors.black87,
          ),
        ),

        trailing: const Icon(Icons.arrow_forward_ios, size: 18),

        onTap: () {
          if (title == 'Favorite Wisata') {
            Navigator.push(
              context,
              MaterialPageRoute(builder: (_) => const FavoritePage()),
            );
            return;
          }
          if (title == 'Pengaturan') {
            showDialog(
              context: context,
              builder: (context) {
                return AlertDialog(
                  title: const Text('Pengaturan'),

                  content: const Column(
                    mainAxisSize: MainAxisSize.min,
                    crossAxisAlignment: CrossAxisAlignment.start,

                    children: [
                      Text('Versi Aplikasi : 1.0.0'),
                      SizedBox(height: 10),
                      Text('Developer : Kelompok PBS IF23D'),
                    ],
                  ),

                  actions: [
                    TextButton(
                      onPressed: () {
                        Navigator.pop(context);
                      },

                      child: const Text('Tutup'),
                    ),
                  ],
                );
              },
            );

            return;
          }
          if (title == 'Riwayat Perjalanan') {
            showDialog(
              context: context,
              builder: (context) {
                return AlertDialog(
                  title: const Text('Riwayat Perjalanan'),

                  content: const Column(
                    mainAxisSize: MainAxisSize.min,
                    children: [
                      Icon(Icons.history, size: 50, color: Colors.blue),

                      SizedBox(height: 15),

                      Text(
                        'Belum ada riwayat perjalanan.',
                        textAlign: TextAlign.center,
                      ),
                    ],
                  ),

                  actions: [
                    TextButton(
                      onPressed: () {
                        Navigator.pop(context);
                      },

                      child: const Text('Tutup'),
                    ),
                  ],
                );
              },
            );

            return;
          }
  
          if (isLogout) {
            showDialog(
              context: context,
              builder: (context) {
                return AlertDialog(
                  title: const Text('Logout'),
                  content: const Text('Apakah Anda yakin ingin keluar?'),
                  actions: [
                    TextButton(
                      onPressed: () {
                        Navigator.pop(context);
                      },
                      child: const Text('Batal'),
                    ),
                    ElevatedButton(
                      onPressed: () {
                        Navigator.pop(context);

                        ScaffoldMessenger.of(context).showSnackBar(
                          const SnackBar(content: Text('Logout berhasil')),
                        );
                      },
                      child: const Text('Logout'),
                    ),
                  ],
                );
              },
            );
            return;
          }

          ScaffoldMessenger.of(context).showSnackBar(
            SnackBar(content: Text('$title masih dalam pengembangan')),
          );
        },
      ),
    );
  }
}
