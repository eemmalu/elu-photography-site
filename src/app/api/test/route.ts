import { db } from '@/lib/firebaseAdmin';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const docRef = await db.collection('debug').add({
      timestamp: new Date().toISOString(),
    });
    return NextResponse.json({ message: 'Success', id: docRef.id });
  } catch (error: any) {
    console.error('Firestore error:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
