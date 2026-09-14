import { NextResponse } from 'next/server';

export async function GET() {
  return new NextResponse('cryptomus=9063c873', {
    status: 200,
    headers: { 'Content-Type': 'text/html' },
  });
}
