import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private jwtService: JwtService,
  ) {}

  async register(data: any) {
    // 1. Cek email udah dipakai atau belum
    const existingUser = await this.prisma.user.findUnique({
      where: { email: data.email },
    });
    if (existingUser) {
      throw new HttpException('Email sudah terdaftar', HttpStatus.BAD_REQUEST);
    }

    // 2. Acak passwordnya (hashing)
    const hashedPassword = await bcrypt.hash(data.password, 10);

    // 3. Simpan ke database
    const user = await this.prisma.user.create({
      data: {
        nama: data.nama,
        email: data.email,
        password: hashedPassword,
      },
    });

    // 4. Balikin response sesuai kontrak
    return {
      statusCode: 201,
      message: 'User registered successfully',
      data: {
        id: user.id,
        nama: user.nama,
        email: user.email,
      },
    };
  }

  async login(data: any) {
    // 1. Cari user berdasarkan email
    const user = await this.prisma.user.findUnique({
      where: { email: data.email },
    });

    if (!user) {
      throw new HttpException('Email atau Password salah', HttpStatus.UNAUTHORIZED);
    }

    // 2. Cocokin password yang diketik sama yang di database
    const isPasswordValid = await bcrypt.compare(data.password, user.password);
    if (!isPasswordValid) {
      throw new HttpException('Email atau Password salah', HttpStatus.UNAUTHORIZED);
    }

    // 3. Bikin Tiket Masuk (Token)
    const payload = { sub: user.id, email: user.email };
    const access_token = await this.jwtService.signAsync(payload);

    // 4. Balikin response sesuai kontrak
    return {
      statusCode: 200,
      message: 'Login successful',
      data: {
        access_token: access_token,
        user: {
          id: user.id,
          nama: user.nama,
          email: user.email,
        },
      },
    };
  }
}