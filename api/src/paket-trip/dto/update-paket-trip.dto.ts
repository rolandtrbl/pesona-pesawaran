import { PartialType } from '@nestjs/mapped-types';
import { CreatePaketTripDto } from './create-paket-trip.dto';

export class UpdatePaketTripDto extends PartialType(CreatePaketTripDto) {}
