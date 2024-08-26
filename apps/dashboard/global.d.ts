// global.d.ts

import { PrismaClient } from '@prisma/client';

declare global {
  // Allow global `prisma` to be undefined initially
  var prisma: PrismaClient | undefined;
}

// To ensure this file is treated as a module
export {};
