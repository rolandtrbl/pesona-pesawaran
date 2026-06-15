import 'package:flutter/material.dart';
import 'package:get/get.dart';
import '../../../services/auth_service.dart';
import '../../../routes/app_pages.dart';

class RegisterPage extends StatefulWidget {
  const RegisterPage({super.key});

  @override
  State<RegisterPage> createState() => _RegisterPageState();
}

class _RegisterPageState extends State<RegisterPage> {
  final _formKey = GlobalKey<FormState>();

  final namaController = TextEditingController();
  final emailController = TextEditingController();
  final passwordController = TextEditingController();
  final confirmPasswordController = TextEditingController();

  final authService = AuthService();

  bool isPasswordHidden = true;
  bool isConfirmPasswordHidden = true;

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Colors.white,

      body: Form(
        key: _formKey,
        child: SingleChildScrollView(
          child: Column(
            children: [
              Container(
                height: 240,
                decoration: const BoxDecoration(
                  borderRadius: BorderRadius.only(
                    bottomLeft: Radius.circular(80),
                  ),
                  gradient: LinearGradient(
                    colors: [Color(0xFF6C4DFF), Color(0xFF2D9CFF)],
                    begin: Alignment.topLeft,
                    end: Alignment.bottomRight,
                  ),
                ),
                child: const Center(
                  child: Column(
                    mainAxisAlignment: MainAxisAlignment.center,
                    children: [
                      Icon(
                        Icons.person_add_alt_1,
                        color: Colors.white,
                        size: 80,
                      ),
                      SizedBox(height: 10),
                      Text(
                        'DAFTAR AKUN',
                        style: TextStyle(
                          color: Colors.white,
                          fontSize: 22,
                          fontWeight: FontWeight.bold,
                        ),
                      ),
                    ],
                  ),
                ),
              ),

              Padding(
                padding: const EdgeInsets.all(24),
                child: Column(
                  children: [
                    const Text(
                      'Create Account',
                      style: TextStyle(
                        fontSize: 30,
                        fontWeight: FontWeight.bold,
                      ),
                    ),

                    const SizedBox(height: 30),

                    TextFormField(
                      controller: namaController,
                      validator: (value) {
                        if (value == null || value.isEmpty) {
                          return 'Nama wajib diisi';
                        }
                        return null;
                      },
                      decoration: InputDecoration(
                        hintText: 'Nama Lengkap',
                        filled: true,
                        fillColor: Colors.grey.shade100,
                        border: OutlineInputBorder(
                          borderRadius: BorderRadius.circular(30),
                          borderSide: BorderSide.none,
                        ),
                      ),
                    ),

                    const SizedBox(height: 15),

                    TextFormField(
                      controller: emailController,
                      validator: (value) {
                        if (value == null || value.isEmpty) {
                          return 'Email wajib diisi';
                        }
                        return null;
                      },
                      decoration: InputDecoration(
                        hintText: 'Email',
                        filled: true,
                        fillColor: Colors.grey.shade100,
                        border: OutlineInputBorder(
                          borderRadius: BorderRadius.circular(30),
                          borderSide: BorderSide.none,
                        ),
                      ),
                    ),

                    const SizedBox(height: 15),

                    TextFormField(
                      controller: passwordController,
                      obscureText: isPasswordHidden,
                      validator: (value) {
                        if (value == null || value.isEmpty) {
                          return 'Password wajib diisi';
                        }

                        if (value.length < 6) {
                          return 'Password minimal 6 karakter';
                        }

                        return null;
                      },
                      decoration: InputDecoration(
                        hintText: 'Password',
                        filled: true,
                        fillColor: Colors.grey.shade100,
                        border: OutlineInputBorder(
                          borderRadius: BorderRadius.circular(30),
                          borderSide: BorderSide.none,
                        ),
                        suffixIcon: IconButton(
                          icon: Icon(
                            isPasswordHidden
                                ? Icons.visibility_off
                                : Icons.visibility,
                          ),
                          onPressed: () {
                            setState(() {
                              isPasswordHidden = !isPasswordHidden;
                            });
                          },
                        ),
                      ),
                    ),

                    const SizedBox(height: 15),

                    TextFormField(
                      controller: confirmPasswordController,
                      obscureText: isConfirmPasswordHidden,
                      validator: (value) {
                        if (value == null || value.isEmpty) {
                          return 'Konfirmasi password wajib diisi';
                        }

                        if (value != passwordController.text) {
                          return 'Password tidak sama';
                        }

                        return null;
                      },
                      decoration: InputDecoration(
                        hintText: 'Konfirmasi Password',
                        filled: true,
                        fillColor: Colors.grey.shade100,
                        border: OutlineInputBorder(
                          borderRadius: BorderRadius.circular(30),
                          borderSide: BorderSide.none,
                        ),
                        suffixIcon: IconButton(
                          icon: Icon(
                            isConfirmPasswordHidden
                                ? Icons.visibility_off
                                : Icons.visibility,
                          ),
                          onPressed: () {
                            setState(() {
                              isConfirmPasswordHidden =
                                  !isConfirmPasswordHidden;
                            });
                          },
                        ),
                      ),
                    ),

                    const SizedBox(height: 25),

                    SizedBox(
                      width: double.infinity,
                      height: 55,
                      child: ElevatedButton(
                        onPressed: () async {
                          if (!_formKey.currentState!.validate()) return;

                          try {
                            final response = await authService.register(
                              nama: namaController.text.trim(),
                              email: emailController.text.trim(),
                              password: passwordController.text,
                            );

                            if (response['statusCode'] == 201) {                         
                              Get.snackbar(
                                'Berhasil',
                                'Akun berhasil dibuat',
                                snackPosition: SnackPosition.BOTTOM,
                              );

                              Get.offAllNamed(AppPages.login);
                            } else {
                              Get.snackbar(
                                'Gagal',
                                response['message'] ?? 'Terjadi kesalahan',
                                snackPosition: SnackPosition.BOTTOM,
                              );
                            }
                          } catch (e) {
                            Get.snackbar(
                              'Error',
                              e.toString(),
                              snackPosition: SnackPosition.BOTTOM,
                            );
                          }
                        },
                        style: ElevatedButton.styleFrom(
                          backgroundColor: const Color(0xFF4A90E2),
                          shape: RoundedRectangleBorder(
                            borderRadius: BorderRadius.circular(30),
                          ),
                        ),
                        child: const Text(
                          'Daftar',
                          style: TextStyle(color: Colors.white, fontSize: 18),
                        ),
                      ),
                    ),

                    const SizedBox(height: 20),

                    Row(
                      mainAxisAlignment: MainAxisAlignment.center,
                      children: [
                        const Text('Sudah punya akun? '),
                        GestureDetector(
                          onTap: () {
                            Get.back();
                          },
                          child: const Text(
                            'Login',
                            style: TextStyle(
                              color: Color(0xFF4A90E2),
                              fontWeight: FontWeight.bold,
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
        ),
      ),
    );
  }
}
