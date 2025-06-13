// app/api/newsletter/route.ts
import { NextRequest, NextResponse } from 'next/server';
import mysql from 'mysql2/promise';

export async function POST(request: NextRequest) {
  const { name, email, country, areas, consent } = await request.json();

  if (!name || !email || !Array.isArray(areas) || !consent) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  const connection = await mysql.createConnection({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
  });

  try {
    await connection.execute(
      `INSERT INTO newsletter_subscriptions (name, email, country, areas, consent) VALUES (?, ?, ?, ?, ?)`,
      [name, email, country || null, JSON.stringify(areas), consent]
    );
    await connection.end();
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);
    await connection.end();
    return NextResponse.json({ error: "Database error" }, { status: 500 });
  }
}