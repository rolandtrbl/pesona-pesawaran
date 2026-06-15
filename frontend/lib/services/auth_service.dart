import 'dart:convert';

import 'package:http/http.dart' as http;

import '../constants/api_constant.dart';

class AuthService {
  Future<Map<String, dynamic>> register({
    required String nama,
    required String email,
    required String password,
  }) async {
    final response = await http.post(
      Uri.parse('${ApiConstant.baseUrl}/auth/register'),
      headers: {
        'Content-Type': 'application/json',
      },
      body: jsonEncode({
        'nama': nama,
        'email': email,
        'password': password,
      }),
    );

    return jsonDecode(response.body);
  }

  Future<Map<String, dynamic>> login({
    required String email,
    required String password,
  }) async {
    final response = await http.post(
      Uri.parse('${ApiConstant.baseUrl}/auth/login'),
      headers: {
        'Content-Type': 'application/json',
      },
      body: jsonEncode({
        'email': email,
        'password': password,
      }),
    );

    return jsonDecode(response.body);
  }
}