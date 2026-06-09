import 'package:flutter/material.dart';
import 'package:get/get.dart';

import 'core/theme/app_theme.dart';
import 'routes/app_routes.dart';
import 'data/datasource/favorite_data.dart';

void main() async {
  WidgetsFlutterBinding.ensureInitialized();

  await FavoriteData.loadFavorites();

  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return GetMaterialApp(
      debugShowCheckedModeBanner: false,
      title: 'Pesona Pesawaran',
      theme: AppTheme.lightTheme,
      getPages: AppRoutes.routes,
      initialRoute: '/',
    );
  }
}