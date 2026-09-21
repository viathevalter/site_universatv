import { NextResponse } from 'next/server';

export async function GET() {
  return new NextResponse('cryptomus=b6b3d6a0', {
    status: 200,
    headers: { 'Content-Type': 'text/html' },
  });
}
