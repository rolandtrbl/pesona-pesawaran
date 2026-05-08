import { Test, TestingModule } from '@nestjs/testing';
import { PaketTripController } from './paket-trip.controller';
import { PaketTripService } from './paket-trip.service';

describe('PaketTripController', () => {
  let controller: PaketTripController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PaketTripController],
      providers: [PaketTripService],
    }).compile();

    controller = module.get<PaketTripController>(PaketTripController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
