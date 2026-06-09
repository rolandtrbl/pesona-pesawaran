import 'package:flutter/material.dart';
import 'package:url_launcher/url_launcher.dart';
import '../../../data/datasource/favorite_data.dart';

class DetailWisataPage extends StatefulWidget {
  final Map<String, dynamic> wisata;

  const DetailWisataPage({super.key, required this.wisata});

  @override
  State<DetailWisataPage> createState() => _DetailWisataPageState();
}

class _DetailWisataPageState extends State<DetailWisataPage> {
  bool isFavorite = false;

  @override
  void initState() {
    super.initState();

    isFavorite = FavoriteData.favorites.contains(widget.wisata);
  }

  @override
  Widget build(BuildContext context) {
    final List facilities =
        widget.wisata['facilities'] ?? ['Parkir', 'Toilet', 'Warung'];

    final List reviews = widget.wisata['reviews'] ?? [];

    return Scaffold(
      backgroundColor: const Color(0xFFF5F7FA),

      body: CustomScrollView(
        slivers: [
          SliverAppBar(
            expandedHeight: 320,
            pinned: true,
            backgroundColor: Colors.white,

            leading: Container(
              margin: const EdgeInsets.all(8),
              decoration: BoxDecoration(
                color: Colors.white.withValues(alpha: 0.9),
                shape: BoxShape.circle,
              ),
              child: IconButton(
                icon: const Icon(Icons.arrow_back),
                onPressed: () {
                  Navigator.pop(context);
                },
              ),
            ),

            actions: [
              Container(
                margin: const EdgeInsets.only(right: 10, top: 8, bottom: 8),
                decoration: BoxDecoration(
                  color: Colors.white.withValues(alpha: 0.9),
                  shape: BoxShape.circle,
                ),
                child: IconButton(
                  icon: Icon(
                    isFavorite ? Icons.favorite : Icons.favorite_border,
                    color: Colors.red,
                  ),
                  onPressed: () async {
                    setState(() {
                      if (isFavorite) {
                        FavoriteData.favorites.remove(widget.wisata);
                        isFavorite = false;
                      } else {
                        FavoriteData.favorites.add(widget.wisata);
                        isFavorite = true;
                      }
                    });

                    await FavoriteData.saveFavorites();
                  },
                ),
              ),
            ],

            flexibleSpace: FlexibleSpaceBar(
              background: Image.network(
                widget.wisata['image'],
                fit: BoxFit.cover,
              ),
            ),
          ),

          SliverToBoxAdapter(
            child: Container(
              padding: const EdgeInsets.all(24),

              decoration: const BoxDecoration(
                color: Colors.white,
                borderRadius: BorderRadius.vertical(top: Radius.circular(30)),
              ),

              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,

                children: [
                  Text(
                    widget.wisata['title'] ?? '',
                    style: const TextStyle(
                      fontSize: 30,
                      fontWeight: FontWeight.bold,
                    ),
                  ),

                  const SizedBox(height: 10),

                  Row(
                    children: [
                      const Icon(
                        Icons.location_on,
                        color: Colors.red,
                        size: 18,
                      ),

                      const SizedBox(width: 5),

                      Expanded(
                        child: Text(
                          widget.wisata['location'] ?? '-',
                          style: const TextStyle(
                            color: Colors.grey,
                            fontSize: 15,
                          ),
                        ),
                      ),
                    ],
                  ),

                  const SizedBox(height: 8),

                  Row(
                    children: [
                      const Icon(Icons.near_me, color: Colors.blue, size: 18),

                      const SizedBox(width: 5),

                      Text(
                        widget.wisata['distance'] ?? 'Tidak diketahui',
                        style: const TextStyle(color: Colors.black54),
                      ),
                    ],
                  ),

                  const SizedBox(height: 25),

                  Row(
                    children: [
                      Expanded(
                        child: infoCard(
                          Icons.star,
                          widget.wisata['rating']?.toString() ?? '-',
                          'Rating',
                          Colors.orange,
                        ),
                      ),

                      const SizedBox(width: 12),

                      Expanded(
                        child: infoCard(
                          Icons.confirmation_num,
                          widget.wisata['ticket']?.toString() ?? '-',
                          'Tiket',
                          Colors.green,
                        ),
                      ),
                    ],
                  ),

                  const SizedBox(height: 12),

                  infoCard(
                    Icons.access_time,
                    widget.wisata['open']?.toString() ?? '-',
                    'Jam Buka',
                    Colors.blue,
                  ),

                  const SizedBox(height: 30),

                  const Text(
                    'Tentang Wisata',
                    style: TextStyle(fontSize: 22, fontWeight: FontWeight.bold),
                  ),

                  const SizedBox(height: 12),

                  Text(
                    widget.wisata['description'] ?? '-',
                    style: const TextStyle(height: 1.7),
                  ),

                  const SizedBox(height: 30),

                  const Text(
                    'Fasilitas',
                    style: TextStyle(fontSize: 22, fontWeight: FontWeight.bold),
                  ),

                  const SizedBox(height: 15),

                  Wrap(
                    spacing: 10,
                    runSpacing: 10,
                    children:
                        facilities.map((item) {
                          return Container(
                            padding: const EdgeInsets.symmetric(
                              horizontal: 16,
                              vertical: 10,
                            ),
                            decoration: BoxDecoration(
                              color: const Color(0xFFEAF3FF),
                              borderRadius: BorderRadius.circular(12),
                            ),
                            child: Text(item.toString()),
                          );
                        }).toList(),
                  ),

                  const SizedBox(height: 30),

                  const Text(
                    'Ulasan Pengunjung',
                    style: TextStyle(fontSize: 22, fontWeight: FontWeight.bold),
                  ),

                  const SizedBox(height: 15),

                  if (reviews.isEmpty) const Text('Belum ada ulasan'),

                  ...reviews.map((review) {
                    return Container(
                      margin: const EdgeInsets.only(bottom: 12),
                      padding: const EdgeInsets.all(16),

                      decoration: BoxDecoration(
                        color: Colors.white,
                        borderRadius: BorderRadius.circular(16),
                        boxShadow: [
                          BoxShadow(
                            color: Colors.black.withValues(alpha: 0.04),
                            blurRadius: 10,
                          ),
                        ],
                      ),

                      child: Column(
                        crossAxisAlignment: CrossAxisAlignment.start,

                        children: [
                          Text(
                            review['name'] ?? '',
                            style: const TextStyle(fontWeight: FontWeight.bold),
                          ),

                          const SizedBox(height: 5),

                          Text('⭐ ${review['rating']}'),

                          const SizedBox(height: 5),

                          Text(review['comment'] ?? ''),
                        ],
                      ),
                    );
                  }),

                  const SizedBox(height: 25),

                  Row(
                    children: [
                      Expanded(
                        child: ElevatedButton.icon(
                          icon: Icon(
                            isFavorite ? Icons.favorite : Icons.favorite_border,
                            color: Colors.white,
                          ),

                          label: Text(
                            isFavorite ? 'Hapus Favorit' : 'Tambah Favorit',
                            style: TextStyle(color: Colors.white),
                          ),

                          onPressed: () async {
                            setState(() {
                              if (isFavorite) {
                                FavoriteData.favorites.remove(widget.wisata);
                                isFavorite = false;
                              } else {
                                FavoriteData.favorites.add(widget.wisata);
                                isFavorite = true;
                              }
                            });

                            await FavoriteData.saveFavorites();
                          },
                          style: ElevatedButton.styleFrom(
                            backgroundColor: const Color(0xFF4A90E2),
                            minimumSize: const Size(0, 55),
                            shape: RoundedRectangleBorder(
                              borderRadius: BorderRadius.circular(16),
                            ),
                          ),
                        ),
                      ),

                      const SizedBox(width: 12),

                      Expanded(
                        child: ElevatedButton.icon(
                          icon: const Icon(Icons.map, color: Colors.white),

                          label: const Text(
                            'Maps',
                            style: TextStyle(color: Colors.white),
                          ),

                          onPressed: () async {
                            final lokasi =
                                widget.wisata['location'] ?? 'Pesawaran';

                            final uri = Uri.parse(
                              'https://www.google.com/maps/search/?api=1&query=${Uri.encodeComponent(lokasi)}',
                            );

                            final messenger = ScaffoldMessenger.of(context);

                            try {
                              await launchUrl(
                                uri,
                                mode: LaunchMode.platformDefault,
                              );
                            } catch (e) {
                              messenger.showSnackBar(
                                const SnackBar(
                                  content: Text(
                                    'Tidak dapat membuka Google Maps',
                                  ),
                                ),
                              );
                            }
                          },

                          style: ElevatedButton.styleFrom(
                            backgroundColor: Colors.green,
                            minimumSize: const Size(0, 55),
                            shape: RoundedRectangleBorder(
                              borderRadius: BorderRadius.circular(16),
                            ),
                          ),
                        ),
                      ),
                    ],
                  ),

                  const SizedBox(height: 30),
                ],
              ),
            ),
          ),
        ],
      ),
    );
  }

  static Widget infoCard(
    IconData icon,
    String value,
    String title,
    Color color,
  ) {
    return Container(
      padding: const EdgeInsets.all(16),

      decoration: BoxDecoration(
        color: Colors.white,
        borderRadius: BorderRadius.circular(18),
        boxShadow: [
          BoxShadow(
            color: Colors.black.withValues(alpha: 0.05),
            blurRadius: 12,
          ),
        ],
      ),

      child: Column(
        children: [
          Icon(icon, color: color, size: 30),

          const SizedBox(height: 10),

          Text(
            value,
            textAlign: TextAlign.center,
            style: const TextStyle(fontWeight: FontWeight.bold),
          ),

          const SizedBox(height: 5),

          Text(title, style: const TextStyle(color: Colors.grey)),
        ],
      ),
    );
  }
}
