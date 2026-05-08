import { PrismaService } from '../prisma/prisma.service';
export declare class PaketTripService {
    private prisma;
    constructor(prisma: PrismaService);
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
    findOne(id: number): Promise<{
        namaPaket: string;
        harga: number;
        kuotaMaksimal: number;
        tanggalBerangkat: Date;
        id: number;
        wisataId: number;
    } | null>;
    update(id: number, updatePaketTripDto: any): Promise<{
        namaPaket: string;
        harga: number;
        kuotaMaksimal: number;
        tanggalBerangkat: Date;
        id: number;
        wisataId: number;
    }>;
    remove(id: number): Promise<{
        namaPaket: string;
        harga: number;
        kuotaMaksimal: number;
        tanggalBerangkat: Date;
        id: number;
        wisataId: number;
    }>;
}
