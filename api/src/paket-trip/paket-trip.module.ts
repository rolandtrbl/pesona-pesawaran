import { Module } from '@nestjs/common';
import { PaketTripService } from './paket-trip.service';
import { PaketTripController } from './paket-trip.controller';
import { PrismaService } from '../prisma/prisma.service'; // Import juga di sini

@Module({
  controllers: [PaketTripController],
  providers: [PaketTripService, PrismaService], // Wajib masukin PrismaService ke sini
})
export class PaketTripModule {}