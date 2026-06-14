import 'package:flutter/material.dart';

class WisataPage extends StatelessWidget {
  const WisataPage({super.key});

  @override
  Widget build(BuildContext context) {
    final List<Map<String, dynamic>> wisataList = [
      {
        'title': 'Pantai Mutun',
        'location': 'Pesawaran, Lampung',
        'rating': '4.8',
        'image':
            'https://images.unsplash.com/photo-1507525428034-b723cf961d3e',
      },
      {
        'title': 'Pulau Pahawang',
        'location': 'Pesawaran, Lampung',
        'rating': '4.9',
        'image':
            'https://images.unsplash.com/photo-1493558103817-58b2924bce98',
      },
      {
        'title': 'Teluk Kiluan',
        'location': 'Tanggamus, Lampung',
        'rating': '4.7',
        'image':
            'https://images.unsplash.com/photo-1506744038136-46273834b3fb',
      },
      {
        'title': 'Bukit Cendana',
        'location': 'Pesawaran, Lampung',
        'rating': '4.6',
        'image':
            'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee',
      },
    ];

    return Scaffold(
      backgroundColor: const Color(0xFFF5F7FA),

      appBar: AppBar(
        backgroundColor: Colors.transparent,
        elevation: 0,
        title: const Text(
          'Wisata',
          style: TextStyle(
            color: Colors.black87,
            fontWeight: FontWeight.bold,
          ),
        ),
      ),

      body: Padding(
        padding: const EdgeInsets.all(20),

        child: Column(
          children: [
            // SEARCH
            Container(
              height: 55,

              decoration: BoxDecoration(
                color: Colors.white,
                borderRadius: BorderRadius.circular(18),

                boxShadow: [
                  BoxShadow(
                    color: Colors.black.withValues(alpha: 0.04),
                    blurRadius: 10,
                  ),
                ],
              ),

              child: const TextField(
                decoration: InputDecoration(
                  hintText: 'Cari wisata...',
                  prefixIcon: Icon(Icons.search),
                  border: InputBorder.none,
                ),
              ),
            ),

            const SizedBox(height: 25),

            // CATEGORY
            SizedBox(
              height: 40,

              child: ListView(
                scrollDirection: Axis.horizontal,

                children: [
                  kategori('Semua', true),
                  kategori('Pantai', false),
                  kategori('Gunung', false),
                  kategori('Camping', false),
                  kategori('Alam', false),
                ],
              ),
            ),

            const SizedBox(height: 25),

            // LIST
            Expanded(
              child: ListView.builder(
                itemCount: wisataList.length,

                itemBuilder: (context, index) {
                  final wisata = wisataList[index];

                  return Container(
                    margin: const EdgeInsets.only(bottom: 20),

                    decoration: BoxDecoration(
                      color: Colors.white,
                      borderRadius: BorderRadius.circular(24),

                      boxShadow: [
                        BoxShadow(
                          color: Colors.black.withValues(alpha: 0.05),
                          blurRadius: 15,
                        ),
                      ],
                    ),

                    child: Column(
                      crossAxisAlignment: CrossAxisAlignment.start,

                      children: [
                        // IMAGE
                        ClipRRect(
                          borderRadius: const BorderRadius.vertical(
                            top: Radius.circular(24),
                          ),

                          child: Image.network(
                            wisata['image'],
                            height: 200,
                            width: double.infinity,
                            fit: BoxFit.cover,
                          ),
                        ),

                        // CONTENT
                        Padding(
                          padding: const EdgeInsets.all(18),

                          child: Column(
                            crossAxisAlignment:
                                CrossAxisAlignment.start,

                            children: [
                              Text(
                                wisata['title'],

                                style: const TextStyle(
                                  fontSize: 20,
                                  fontWeight: FontWeight.bold,
                                ),
                              ),

                              const SizedBox(height: 8),

                              Row(
                                children: [
                                  const Icon(
                                    Icons.location_on,
                                    size: 18,
                                    color: Colors.grey,
                                  ),

                                  const SizedBox(width: 5),

                                  Text(
                                    wisata['location'],

                                    style: const TextStyle(
                                      color: Colors.grey,
                                    ),
                                  ),
                                ],
                              ),

                              const SizedBox(height: 15),

                              Row(
                                mainAxisAlignment:
                                    MainAxisAlignment.spaceBetween,

                                children: [
                                  Row(
                                    children: [
                                      const Icon(
                                        Icons.star,
                                        color: Colors.orange,
                                      ),

                                      const SizedBox(width: 5),

                                      Text(
                                        wisata['rating'],

                                        style: const TextStyle(
                                          fontWeight:
                                              FontWeight.bold,
                                        ),
                                      ),
                                    ],
                                  ),

                                  ElevatedButton(
                                    onPressed: () {},

                                    style:
                                        ElevatedButton.styleFrom(
                                      backgroundColor:
                                          const Color(
                                              0xFF4A90E2),

                                      shape:
                                          RoundedRectangleBorder(
                                        borderRadius:
                                            BorderRadius
                                                .circular(14),
                                      ),
                                    ),

                                    child: const Text(
                                      'Detail',

                                      style: TextStyle(
                                        color: Colors.white,
                                      ),
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
                },
              ),
            ),
          ],
        ),
      ),
    );
  }

  static Widget kategori(String title, bool active) {
    return Container(
      margin: const EdgeInsets.only(right: 12),

      padding: const EdgeInsets.symmetric(
        horizontal: 20,
        vertical: 10,
      ),

      decoration: BoxDecoration(
        color:
            active ? const Color(0xFF4A90E2) : Colors.white,

        borderRadius: BorderRadius.circular(14),

        boxShadow: [
          BoxShadow(
            color: Colors.black.withValues(alpha: 0.04),
            blurRadius: 8,
          ),
        ],
      ),

      child: Text(
        title,

        style: TextStyle(
          color: active ? Colors.white : Colors.black87,
          fontWeight: FontWeight.w600,
        ),
      ),
    );
  }
}