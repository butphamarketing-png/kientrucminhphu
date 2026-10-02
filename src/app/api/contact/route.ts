import { NextResponse } from "next/server";
import { addContact } from "@/lib/cms/contacts";

export async function POST(request: Request) {
  const body = (await request.json().catch(() => null)) as {
    name?: string;
    phone?: string;
    email?: string;
    address?: string;
    message?: string;
  } | null;

  const result = await addContact({
    name: body?.name || "",
    phone: body?.phone || "",
    email: body?.email,
    address: body?.address,
    message: body?.message || "",
  });

  if (!result.ok) {
    return NextResponse.json(result, { status: 400 });
  }
  return NextResponse.json(result);
}
