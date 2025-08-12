#!/bin/bash
/wait-for-it.sh postgres:5432 --timeout=10 --strict -- echo "PostgreSQL is up"

rm -rf /app/node_modules/.prisma

npx prisma generate || { echo "Failed to generate Prisma Client"; exit 1; }

npx prisma migrate deploy || { echo "Failed to apply migrations"; exit 1; }

npm run seed || { echo "Failed to run seed"; exit 1; }

npm run build || { echo "Failed to build the application"; exit 1; }

npm run start