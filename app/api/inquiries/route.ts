import { NextResponse } from "next/server";
import { createAdminClient } from "@/lib/supabase/admin";

type InquiryPayload = {
  name?: string;
  email?: string;
  arrivalDate?: string;
  departureDate?: string;
  guests?: number;
  message?: string;
};

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function isValidDate(value: string) {
  return !Number.isNaN(Date.parse(value));
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as InquiryPayload;

    if (!body.name?.trim()) {
      return NextResponse.json({ error: "Name is required." }, { status: 400 });
    }

    if (!body.email?.trim() || !isValidEmail(body.email)) {
      return NextResponse.json({ error: "A valid email is required." }, { status: 400 });
    }

    if (!body.arrivalDate || !body.departureDate) {
      return NextResponse.json(
        { error: "Arrival and departure dates are required." },
        { status: 400 },
      );
    }

    if (!isValidDate(body.arrivalDate) || !isValidDate(body.departureDate)) {
      return NextResponse.json({ error: "Please choose valid arrival and departure dates." }, { status: 400 });
    }

    if (body.departureDate <= body.arrivalDate) {
      return NextResponse.json(
        { error: "Departure must be after arrival." },
        { status: 400 },
      );
    }

    const guests = Number(body.guests ?? 1);

    if (!Number.isFinite(guests) || guests < 1 || guests > 8) {
      return NextResponse.json(
        { error: "Guests must be between 1 and 8." },
        { status: 400 },
      );
    }

    const supabase = createAdminClient();
    const { error } = await supabase.from("booking_inquiries").insert({
      name: body.name.trim(),
      email: body.email.trim().toLowerCase(),
      arrival_date: body.arrivalDate,
      departure_date: body.departureDate,
      guests,
      message: body.message?.trim() || null,
    });

    if (error) {
      console.error("Failed to save inquiry", error);
      return NextResponse.json(
        { error: "We could not save your enquiry right now." },
        { status: 500 },
      );
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Unexpected inquiry route failure", error);
    return NextResponse.json(
      { error: "We could not save your enquiry right now." },
      { status: 500 },
    );
  }
}
