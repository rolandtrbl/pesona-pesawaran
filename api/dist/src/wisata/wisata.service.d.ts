import { PrismaService } from '../prisma/prisma.service';
export declare class WisataService {
    private prisma;
    constructor(prisma: PrismaService);
    create(data: {
        nama: string;
        deskripsi: string;
        lokasi: string;
        gambarUrl?: string;
    }): import("@prisma/client").Prisma.Prisma__WisataClient<{
        nama: string;
        deskripsi: string;
        lokasi: string;
        gambarUrl: string | null;
        createdAt: Date;
        updatedAt: Date;
        id: number;
    }, never, import("@prisma/client/runtime/client").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
    findAll(): import("@prisma/client").Prisma.PrismaPromise<{
        nama: string;
        deskripsi: string;
        lokasi: string;
        gambarUrl: string | null;
        createdAt: Date;
        updatedAt: Date;
        id: number;
    }[]>;
    findOne(id: number): import("@prisma/client").Prisma.Prisma__WisataClient<{
        nama: string;
        deskripsi: string;
        lokasi: string;
        gambarUrl: string | null;
        createdAt: Date;
        updatedAt: Date;
        id: number;
    } | null, null, import("@prisma/client/runtime/client").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
    update(id: number, updateWisataDto: any): Promise<{
        nama: string;
        deskripsi: string;
        lokasi: string;
        gambarUrl: string | null;
        createdAt: Date;
        updatedAt: Date;
        id: number;
    }>;
    remove(id: number): import("@prisma/client").Prisma.Prisma__WisataClient<{
        nama: string;
        deskripsi: string;
        lokasi: string;
        gambarUrl: string | null;
        createdAt: Date;
        updatedAt: Date;
        id: number;
    }, never, import("@prisma/client/runtime/client").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
}
