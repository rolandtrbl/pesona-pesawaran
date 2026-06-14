import 'package:get/get.dart';

import '../features/auth/pages/login_page.dart';
import '../features/auth/pages/register_page.dart';
import '../features/home/pages/home_page.dart';
import '../features/splash/pages/splash_page.dart';
import 'app_pages.dart';
import '../features/navbar/pages/navbar_page.dart';

class AppRoutes {
  static final routes = [
    GetPage(name: AppPages.splash, page: () => const SplashPage()),

    GetPage(name: AppPages.home, page: () => const HomePage()),

    GetPage(name: AppPages.login, page: () => const LoginPage()),

    GetPage(name: AppPages.register, page: () => const RegisterPage()),
    GetPage(name: AppPages.navbar, page: () => const NavbarPage()),
  ];
}
