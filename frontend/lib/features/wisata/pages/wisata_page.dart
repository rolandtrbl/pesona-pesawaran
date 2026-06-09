import '../../detail/pages/detail_wisata_page.dart';
import 'package:flutter/material.dart';

class WisataPage extends StatefulWidget {
  const WisataPage({super.key});

  @override
  State<WisataPage> createState() => _WisataPageState();
}

class _WisataPageState extends State<WisataPage> {
  String searchText = '';
  String selectedCategory = 'Semua';

  @override
  Widget build(BuildContext context) {
    final List<Map<String, dynamic>> wisataList = [
      {
        'title': 'Pantai Mutun',
        'location': 'Pesawaran, Lampung',
        'rating': '4.8',
        'image': 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e',

        'description':
            'Pantai Mutun merupakan salah satu destinasi wisata favorit di Pesawaran yang terkenal dengan pasir putih, air laut yang jernih, serta pemandangan matahari terbenam yang indah.',

        'ticket': 'Rp 25.000',

        'open': '08.00 - 17.00',

        'distance': '12 Km',

        'facilities': ['Parkir', 'Toilet', 'Warung', 'Spot Foto'],

        'reviews': [
          {
            'name': 'Andi',
            'rating': '5',
            'comment': 'Pantainya bersih dan pemandangannya luar biasa.',
          },
          {
            'name': 'nayla rima khaylila',
            'rating': '4',
            'comment': 'Cocok untuk liburan keluarga.',
          },
        ],
      },

      {
        'title': 'Pulau Pahawang',
        'location': 'Pesawaran, Lampung',
        'rating': '4.9',
        'image': 'https://images.unsplash.com/photo-1493558103817-58b2924bce98',

        'description':
            'Pulau Pahawang terkenal dengan keindahan bawah lautnya. Wisatawan dapat menikmati snorkeling, diving, dan panorama pulau yang sangat memukau.',

        'ticket': 'Rp 35.000',

        'open': '07.00 - 18.00',

        'distance': '20 Km',

        'facilities': ['Snorkeling', 'Toilet', 'Penginapan', 'Perahu'],

        'reviews': [
          {
            'name': 'Rina',
            'rating': '5',
            'comment': 'Air lautnya jernih banget.',
          },
          {
            'name': 'Fajar',
            'rating': '5',
            'comment': 'Surga bawah laut Lampung.',
          },
        ],
      },

      {
        'title': 'Teluk Kiluan',
        'location': 'Tanggamus, Lampung',
        'rating': '4.7',
        'image': 'https://images.unsplash.com/photo-1506744038136-46273834b3fb',

        'description':
            'Teluk Kiluan merupakan destinasi wisata bahari yang terkenal dengan atraksi lumba-lumba liar dan panorama laut yang menakjubkan.',

        'ticket': 'Rp 20.000',

        'open': '06.00 - 17.00',

        'distance': '35 Km',

        'facilities': ['Toilet', 'Parkir', 'Spot Foto', 'Perahu'],

        'reviews': [
          {
            'name': 'Dian',
            'rating': '5',
            'comment': 'Lumba-lumbanya keren banget.',
          },
          {
            'name': 'Asep',
            'rating': '4',
            'comment': 'Perjalanan jauh tapi worth it.',
          },
        ],
      },

      {
        'title': 'Bukit Cendana',
        'location': 'Pesawaran, Lampung',
        'rating': '4.6',
        'image': 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee',

        'description':
            'Bukit Cendana menawarkan pemandangan alam dari ketinggian dengan suasana sejuk dan cocok untuk menikmati sunrise maupun sunset.',

        'ticket': 'Rp 15.000',

        'open': '24 Jam',

        'distance': '8 Km',

        'facilities': ['Parkir', 'Camping', 'Spot Foto', 'Warung'],

        'reviews': [
          {'name': 'Yoga', 'rating': '5', 'comment': 'View sunrise terbaik.'},
          {
            'name': 'Toni',
            'rating': '4',
            'comment': 'Tempatnya adem dan tenang.',
          },
        ],
      },
    ];

    final filteredWisata =
        wisataList.where((wisata) {
          return wisata['title'].toString().toLowerCase().contains(searchText);
        }).toList();

    return Scaffold(
      backgroundColor: const Color(0xFFF5F7FA),

      appBar: AppBar(
        backgroundColor: Colors.transparent,
        elevation: 0,
        title: const Text(
          'Wisata',
          style: TextStyle(color: Colors.black87, fontWeight: FontWeight.bold),
        ),
      ),

      body: RefreshIndicator(
  onRefresh: () async {
    await Future.delayed(
      const Duration(seconds: 1),
    );

    setState(() {});
  },

  child: Padding(
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

              child: TextField(
                onChanged: (value) {
                  setState(() {
                    searchText = value.toLowerCase();
                  });
                },

                decoration: const InputDecoration(
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
                itemCount: filteredWisata.length,

                itemBuilder: (context, index) {
                  final wisata = filteredWisata[index];

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
                            crossAxisAlignment: CrossAxisAlignment.start,

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

                                    style: const TextStyle(color: Colors.grey),
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
                                          fontWeight: FontWeight.bold,
                                        ),
                                      ),
                                    ],
                                  ),

                                  ElevatedButton(
                                    onPressed: () {
                                      Navigator.push(
                                        context,
                                        MaterialPageRoute(
                                          builder:
                                              (_) => DetailWisataPage(
                                                wisata: wisata,
                                              ),
                                        ),
                                      );
                                    },

                                    style: ElevatedButton.styleFrom(
                                      backgroundColor: const Color(0xFF4A90E2),

                                      shape: RoundedRectangleBorder(
                                        borderRadius: BorderRadius.circular(14),
                                      ),
                                    ),

                                    child: const Text(
                                      'Detail',
                                      style: TextStyle(color: Colors.white),
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
    )
    );
  }

  static Widget kategori(String title, bool active) {
    return Container(
      margin: const EdgeInsets.only(right: 12),

      padding: const EdgeInsets.symmetric(horizontal: 20, vertical: 10),

      decoration: BoxDecoration(
        color: active ? const Color(0xFF4A90E2) : Colors.white,

        borderRadius: BorderRadius.circular(14),

        boxShadow: [
          BoxShadow(color: Colors.black.withValues(alpha: 0.04), blurRadius: 8),
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
