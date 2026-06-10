import { PrismaService } from '../prisma/prisma.service';
export declare class PaketTripService {
    private prisma;
    constructor(prisma: PrismaService);
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
    findOne(id: number): Promise<{
        id: number;
        namaPaket: string;
        harga: number;
        kuotaMaksimal: number;
        tanggalBerangkat: Date;
        wisataId: number;
    } | null>;
    update(id: number, updatePaketTripDto: any): Promise<{
        id: number;
        namaPaket: string;
        harga: number;
        kuotaMaksimal: number;
        tanggalBerangkat: Date;
        wisataId: number;
    }>;
    remove(id: number): Promise<{
        id: number;
        namaPaket: string;
        harga: number;
        kuotaMaksimal: number;
        tanggalBerangkat: Date;
        wisataId: number;
    }>;
}
