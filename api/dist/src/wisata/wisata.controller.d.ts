import { WisataService } from './wisata.service';
import { CreateWisataDto } from './dto/create-wisata.dto';
import { UpdateWisataDto } from './dto/update-wisata.dto';
export declare class WisataController {
    private readonly wisataService;
    constructor(wisataService: WisataService);
    create(createWisataDto: CreateWisataDto): import("@prisma/client").Prisma.Prisma__WisataClient<{
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
    findOne(id: string): import("@prisma/client").Prisma.Prisma__WisataClient<{
        nama: string;
        deskripsi: string;
        lokasi: string;
        gambarUrl: string | null;
        createdAt: Date;
        updatedAt: Date;
        id: number;
    } | null, null, import("@prisma/client/runtime/client").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
    update(id: string, updateWisataDto: UpdateWisataDto): Promise<{
        nama: string;
        deskripsi: string;
        lokasi: string;
        gambarUrl: string | null;
        createdAt: Date;
        updatedAt: Date;
        id: number;
    }>;
    remove(id: string): import("@prisma/client").Prisma.Prisma__WisataClient<{
        nama: string;
        deskripsi: string;
        lokasi: string;
        gambarUrl: string | null;
        createdAt: Date;
        updatedAt: Date;
        id: number;
    }, never, import("@prisma/client/runtime/client").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
}
