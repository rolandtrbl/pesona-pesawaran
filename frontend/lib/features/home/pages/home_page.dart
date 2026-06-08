import 'package:flutter/material.dart';

class HomePage extends StatelessWidget {
  const HomePage({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: const Color(0xFFF8F9FB),

      body: SafeArea(
        child: SingleChildScrollView(
          padding: const EdgeInsets.all(20),

          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              // HEADER
              Row(
                mainAxisAlignment: MainAxisAlignment.spaceBetween,
                children: [
                  const Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      Text(
                        'Halo 👋',
                        style: TextStyle(
                          color: Colors.grey,
                          fontSize: 16,
                        ),
                      ),

                      SizedBox(height: 4),

                      Text(
                        'Pesona Pesawaran',
                        style: TextStyle(
                          fontSize: 24,
                          fontWeight: FontWeight.bold,
                        ),
                      ),
                    ],
                  ),

                  Container(
                    width: 50,
                    height: 50,

                    decoration: BoxDecoration(
                      color: const Color(0xFF4A90E2),
                      borderRadius: BorderRadius.circular(15),
                    ),

                    child: const Icon(
                      Icons.travel_explore,
                      color: Colors.white,
                    ),
                  ),
                ],
              ),

              const SizedBox(height: 25),

              // BANNER
              Container(
                height: 180,
                width: double.infinity,

                decoration: BoxDecoration(
                  borderRadius: BorderRadius.circular(25),

                  image: const DecorationImage(
                    image: NetworkImage(
                      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e',
                    ),
                    fit: BoxFit.cover,
                  ),
                ),

                child: Container(
                  padding: const EdgeInsets.all(20),

                  decoration: BoxDecoration(
                    borderRadius: BorderRadius.circular(25),
                    color: Colors.black.withValues(alpha: 0.3),
                  ),

                  child: const Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    mainAxisAlignment: MainAxisAlignment.end,
                    children: [
                      Text(
                        'Jelajahi Keindahan\nPesawaran',
                        style: TextStyle(
                          color: Colors.white,
                          fontSize: 24,
                          fontWeight: FontWeight.bold,
                        ),
                      ),

                      SizedBox(height: 8),

                      Text(
                        'Temukan wisata terbaik di Lampung',
                        style: TextStyle(
                          color: Colors.white,
                        ),
                      ),
                    ],
                  ),
                ),
              ),

              const SizedBox(height: 30),

              // KATEGORI
              const Text(
                'Kategori Wisata',
                style: TextStyle(
                  fontSize: 20,
                  fontWeight: FontWeight.bold,
                ),
              ),

              const SizedBox(height: 15),

              Row(
                mainAxisAlignment: MainAxisAlignment.spaceBetween,
                children: [
                  kategori(Icons.beach_access, 'Pantai'),
                  kategori(Icons.landscape, 'Gunung'),
                  kategori(Icons.waterfall_chart, 'Air Terjun'),
                  kategori(Icons.sailing, 'Pulau'),
                ],
              ),

              const SizedBox(height: 30),

              // POPULER
              const Text(
                'Wisata Populer',
                style: TextStyle(
                  fontSize: 20,
                  fontWeight: FontWeight.bold,
                ),
              ),

              const SizedBox(height: 15),

              wisataCard(
                'Pantai Mutun',
                'Pesawaran, Lampung',
                'https://images.unsplash.com/photo-1507525428034-b723cf961d3e',
              ),

              const SizedBox(height: 15),

              wisataCard(
                'Pulau Pahawang',
                'Pesawaran, Lampung',
                'https://images.unsplash.com/photo-1500375592092-40eb2168fd21',
              ),
            ],
          ),
        ),
      ),
    );
  }

  static Widget kategori(IconData icon, String title) {
    return Column(
      children: [
        Container(
          width: 65,
          height: 65,

          decoration: BoxDecoration(
            color: const Color(0xFF4A90E2),
            borderRadius: BorderRadius.circular(18),
          ),

          child: Icon(
            icon,
            color: Colors.white,
          ),
        ),

        const SizedBox(height: 8),

        Text(title),
      ],
    );
  }

  static Widget wisataCard(
    String nama,
    String lokasi,
    String gambar,
  ) {
    return Container(
      decoration: BoxDecoration(
        color: Colors.white,
        borderRadius: BorderRadius.circular(20),

        boxShadow: [
          BoxShadow(
            color: Colors.black.withValues(alpha: 0.05),
            blurRadius: 10,
          ),
        ],
      ),

      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          ClipRRect(
            borderRadius: const BorderRadius.vertical(
              top: Radius.circular(20),
            ),

            child: Image.network(
              gambar,
              height: 180,
              width: double.infinity,
              fit: BoxFit.cover,
            ),
          ),

          Padding(
            padding: const EdgeInsets.all(15),

            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Text(
                  nama,
                  style: const TextStyle(
                    fontWeight: FontWeight.bold,
                    fontSize: 18,
                  ),
                ),

                const SizedBox(height: 5),

                Row(
                  children: [
                    const Icon(
                      Icons.location_on,
                      size: 16,
                      color: Colors.grey,
                    ),

                    const SizedBox(width: 4),

                    Text(
                      lokasi,
                      style: const TextStyle(
                        color: Colors.grey,
                      ),
                    ),
                  ],
                ),
              ],
            ),
          ),
        ],
      ),
    );
  }
}