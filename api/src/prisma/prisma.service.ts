import { Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { Pool } from 'pg';
import { PrismaPg } from '@prisma/adapter-pg';
import 'dotenv/config';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
  constructor() {
    // 1. Ambil URL dari .env
    const connectionString = process.env.DATABASE_URL;
    
    // 2. Bikin "kolam" koneksi pakai pg (PostgreSQL native)
    const pool = new Pool({ connectionString });
    
    // 3. Masukin ke adapter Prisma
    const adapter = new PrismaPg(pool);
    
    // 4. Injek adapternya ke PrismaClient
    super({ adapter });
  }

  async onModuleInit() {
    await this.$connect();
  }
}