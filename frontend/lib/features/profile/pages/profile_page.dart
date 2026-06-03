import 'package:flutter/material.dart';

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
          style: TextStyle(
            color: Colors.black87,
            fontWeight: FontWeight.bold,
          ),
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
                border: Border.all(
                  color: const Color(0xFF4A90E2),
                  width: 3,
                ),
              ),

              child: const CircleAvatar(
                radius: 55,
                backgroundImage: NetworkImage(
                  'https://i.pravatar.cc/300',
                ),
              ),
            ),

            const SizedBox(height: 20),

            // NAME
            const Text(
              'Muwjon',
              style: TextStyle(
                fontSize: 24,
                fontWeight: FontWeight.bold,
              ),
            ),

            const SizedBox(height: 8),

            const Text(
              'Traveler & Explorer',
              style: TextStyle(
                color: Colors.grey,
                fontSize: 16,
              ),
            ),

            const SizedBox(height: 30),

            // STATS
            Row(
              children: [
                Expanded(
                  child: statCard(
                    '12',
                    'Favorite',
                    Icons.favorite,
                  ),
                ),

                const SizedBox(width: 15),

                Expanded(
                  child: statCard(
                    '24',
                    'Visited',
                    Icons.place,
                  ),
                ),
              ],
            ),

            const SizedBox(height: 30),

            // MENU
            profileMenu(
              Icons.person_outline,
              'Edit Profile',
            ),

            profileMenu(
              Icons.favorite_border,
              'Favorite Wisata',
            ),

            profileMenu(
              Icons.history,
              'Riwayat Perjalanan',
            ),

            profileMenu(
              Icons.settings_outlined,
              'Pengaturan',
            ),

            profileMenu(
              Icons.logout,
              'Logout',
              isLogout: true,
            ),
          ],
        ),
      ),
    );
  }

  Widget statCard(
    String total,
    String title,
    IconData icon,
  ) {
    return Container(
      padding: const EdgeInsets.symmetric(
        vertical: 22,
      ),

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
          Icon(
            icon,
            color: const Color(0xFF4A90E2),
            size: 28,
          ),

          const SizedBox(height: 10),

          Text(
            total,
            style: const TextStyle(
              fontSize: 22,
              fontWeight: FontWeight.bold,
            ),
          ),

          const SizedBox(height: 5),

          Text(
            title,
            style: const TextStyle(
              color: Colors.grey,
            ),
          ),
        ],
      ),
    );
  }

  Widget profileMenu(
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
          color:
              isLogout
                  ? Colors.red
                  : const Color(0xFF4A90E2),
        ),

        title: Text(
          title,
          style: TextStyle(
            fontWeight: FontWeight.w600,
            color:
                isLogout
                    ? Colors.red
                    : Colors.black87,
          ),
        ),

        trailing: const Icon(
          Icons.arrow_forward_ios,
          size: 18,
        ),

        onTap: () {},
      ),
    );
  }
}