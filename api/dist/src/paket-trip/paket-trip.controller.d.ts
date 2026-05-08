import { PaketTripService } from './paket-trip.service';
export declare class PaketTripController {
    private readonly paketTripService;
    constructor(paketTripService: PaketTripService);
    create(createPaketTripDto: any): Promise<{
        namaPaket: string;
        harga: number;
        kuotaMaksimal: number;
        tanggalBerangkat: Date;
        id: number;
        wisataId: number;
    }>;
    findAll(): Promise<{
        namaPaket: string;
        harga: number;
        kuotaMaksimal: number;
        tanggalBerangkat: Date;
        id: number;
        wisataId: number;
    }[]>;
    findOne(id: string): Promise<{
        namaPaket: string;
        harga: number;
        kuotaMaksimal: number;
        tanggalBerangkat: Date;
        id: number;
        wisataId: number;
    } | null>;
    update(id: string, updatePaketTripDto: any): Promise<{
        namaPaket: string;
        harga: number;
        kuotaMaksimal: number;
        tanggalBerangkat: Date;
        id: number;
        wisataId: number;
    }>;
    remove(id: string): Promise<{
        namaPaket: string;
        harga: number;
        kuotaMaksimal: number;
        tanggalBerangkat: Date;
        id: number;
        wisataId: number;
    }>;
}
