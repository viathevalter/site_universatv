import { NextResponse } from 'next/server';

export async function GET() {
  return new NextResponse('cryptomus=1b5854ff', {
    status: 200,
    headers: { 'Content-Type': 'text/html' },
  });
}
