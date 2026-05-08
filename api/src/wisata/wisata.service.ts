import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class WisataService {
  constructor(private prisma: PrismaService) {}

  // Fungsi buat nambah data wisata baru
  create(data: { nama: string; deskripsi: string; lokasi: string; gambarUrl?: string }) {
    return this.prisma.wisata.create({
      data,
    });
  }

  // Fungsi buat ngambil semua data wisata
  findAll() {
    return this.prisma.wisata.findMany({
      orderBy: { createdAt: 'desc' } // Urutin dari yang paling baru ditambahin
    });
  }

  findOne(id: number) {
    return this.prisma.wisata.findUnique({ where: { id } });
  }

 async update(id: number, updateWisataDto: any) { // <-- Ubah jadi any
    return await this.prisma.wisata.update({
      where: { id: id },
      data: updateWisataDto,
    });
  }

  remove(id: number) {
    return this.prisma.wisata.delete({ where: { id } });
  }
}