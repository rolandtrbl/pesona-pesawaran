import { Injectable } from '@nestjs/common';
import { CreatePaketTripDto } from './dto/create-paket-trip.dto';
import { UpdatePaketTripDto } from './dto/update-paket-trip.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class PaketTripService {
  constructor(private prisma: PrismaService) {}

  async create(createPaketTripDto: any) {
    return await this.prisma.paketTrip.create({
      data: createPaketTripDto,
    });
  }

  async findAll() {
    return await this.prisma.paketTrip.findMany();
  }

  async findOne(id: number) {
    return await this.prisma.paketTrip.findUnique({
      where: { id: id },
    });
  }

  async update(id: number, updatePaketTripDto: any) {
    return await this.prisma.paketTrip.update({
      where: { id: id },
      data: updatePaketTripDto,
    });
  }

  async remove(id: number) {
    return await this.prisma.paketTrip.delete({
      where: { id: id },
    });
  }
}