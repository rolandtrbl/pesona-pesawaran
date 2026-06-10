import { PaketTripService } from './paket-trip.service';
export declare class PaketTripController {
    private readonly paketTripService;
    constructor(paketTripService: PaketTripService);
    create(createPaketTripDto: any): Promise<{
        id: number;
        namaPaket: string;
        harga: number;
        kuotaMaksimal: number;
        tanggalBerangkat: Date;
        wisataId: number;
    }>;
    findAll(): Promise<{
        id: number;
        namaPaket: string;
        harga: number;
        kuotaMaksimal: number;
        tanggalBerangkat: Date;
        wisataId: number;
    }[]>;
    findOne(id: string): Promise<{
        id: number;
        namaPaket: string;
        harga: number;
        kuotaMaksimal: number;
        tanggalBerangkat: Date;
        wisataId: number;
    } | null>;
    update(id: string, updatePaketTripDto: any): Promise<{
        id: number;
        namaPaket: string;
        harga: number;
        kuotaMaksimal: number;
        tanggalBerangkat: Date;
        wisataId: number;
    }>;
    remove(id: string): Promise<{
        id: number;
        namaPaket: string;
        harga: number;
        kuotaMaksimal: number;
        tanggalBerangkat: Date;
        wisataId: number;
    }>;
}
