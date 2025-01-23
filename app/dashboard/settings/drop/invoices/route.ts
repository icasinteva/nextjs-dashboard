import { Pages } from '@/app/lib/constants';
import { db } from '@vercel/postgres';
import { NextRequest } from 'next/server';

const client = await db.connect();

async function deleteInvoices() {
  await client.sql`DROP TABLE invoices`;
}

async function seedInvoices() {
  await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

  await client.sql`
    CREATE TABLE IF NOT EXISTS invoices (
      id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
      customer_id UUID NOT NULL,
      amount INT NOT NULL,
      status VARCHAR(255) NOT NULL,
      date TIMESTAMP NOT NULL
    );
  `;

  return [];
}

export async function GET(request: NextRequest) {
  try {
    await client.sql`BEGIN`;
    await deleteInvoices();
    await seedInvoices();
    await client.sql`COMMIT`;

    return Response.redirect(new URL(Pages.Settings, request.nextUrl));
  } catch (error) {
    await client.sql`ROLLBACK`;
    return Response.json({ error }, { status: 500 });
  }
}
