import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PaketTripService } from './paket-trip.service';
import { CreatePaketTripDto } from './dto/create-paket-trip.dto';
import { UpdatePaketTripDto } from './dto/update-paket-trip.dto';

@Controller('paket-trip')
export class PaketTripController {
  constructor(private readonly paketTripService: PaketTripService) {}

 @Post()
  create(@Body() createPaketTripDto: any) {
    return this.paketTripService.create(createPaketTripDto);
  }

  @Get()
  findAll() {
    return this.paketTripService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.paketTripService.findOne(+id); // Kasih tanda '+' biar jadi number
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePaketTripDto: any) {
    return this.paketTripService.update(+id, updatePaketTripDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.paketTripService.remove(+id);
  }
}
