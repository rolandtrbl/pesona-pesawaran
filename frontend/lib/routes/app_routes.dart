import 'package:get/get.dart';

import '../features/home/pages/home_page.dart';
import '../features/splash/pages/splash_page.dart';
import 'app_pages.dart';

class AppRoutes {
  static final routes = [
    GetPage(
      name: AppPages.splash,
      page: () => const SplashPage(),
    ),
    GetPage(
      name: AppPages.home,
      page: () => const HomePage(),
    ),
  ];
}