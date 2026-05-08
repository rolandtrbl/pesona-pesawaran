import { Test, TestingModule } from '@nestjs/testing';
import { PaketTripService } from './paket-trip.service';

describe('PaketTripService', () => {
  let service: PaketTripService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PaketTripService],
    }).compile();

    service = module.get<PaketTripService>(PaketTripService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
