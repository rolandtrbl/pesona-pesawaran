import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { PrismService } from './prism/prism.service';
import { WisataModule } from './wisata/wisata.module';
import { PaketTripModule } from './paket-trip/paket-trip.module';
import { BookingModule } from './booking/booking.module';

@Module({
  imports: [PrismaModule, WisataModule, PaketTripModule, BookingModule],
  controllers: [AppController],
  providers: [AppService, PrismService],
})
export class AppModule {}
