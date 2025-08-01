import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/firebaseAdmin';
import { collection, addDoc } from "firebase/firestore";

export async function POST(req: NextRequest) {
  try {
    const bookingFormData = await req.json();
    const { name, email, date, shootType, people, duration, location, notes, questions } = bookingFormData;

    if (!name || !email || !date || !shootType || !people || !duration) {
      return NextResponse.json({ error: 'Missing fields' }, { status: 400 });
    }

    // To add type checks !!

    await db.collection('inquiries').add({
      ...bookingFormData,
      dateSubmitted: new Date(),
    });

    return NextResponse.json({ status: 200 });
  } catch (error) {
    console.error('Error saving form submission:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
