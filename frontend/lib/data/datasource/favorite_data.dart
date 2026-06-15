import 'dart:convert';
import 'package:shared_preferences/shared_preferences.dart';

class FavoriteData {
  static List<Map<String, dynamic>> favorites = [];

  static Future<void> loadFavorites() async {
    final prefs = await SharedPreferences.getInstance();

    final List<String>? data =
        prefs.getStringList('favorites');

    if (data != null) {
      favorites =
          data.map((e) {
            return Map<String, dynamic>.from(
              jsonDecode(e),
            );
          }).toList();
    }
  }

  static Future<void> saveFavorites() async {
    final prefs = await SharedPreferences.getInstance();

    final data =
        favorites.map((e) {
          return jsonEncode(e);
        }).toList();

    await prefs.setStringList(
      'favorites',
      data,
    );
  }
}