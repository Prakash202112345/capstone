const { PrismaClient, PrismaClientKnownRequestError } = require('@prisma/client');

let prisma;

if (process.env.NODE_ENV === 'production') {
  prisma = new PrismaClient();
} else {
  if (!global.prisma) {
    global.prisma = new PrismaClient();
  }
  prisma = global.prisma;
}

module.exports = prisma;

// Add global error handler for known Prisma client errors
prisma.$on('query-error', (error) => {
  if (error instanceof PrismaClientKnownRequestError) {
    console.error(error.message);
  } else {
    console.error(error);
  }
});
