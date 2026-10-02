import { NextResponse } from "next/server";
import { isAdminAuthenticated } from "@/lib/cms/auth";
import { deleteContact, listContacts } from "@/lib/cms/contacts";

export async function GET() {
  if (!(await isAdminAuthenticated())) {
    return NextResponse.json({ ok: false, error: "Unauthorized" }, { status: 401 });
  }
  return NextResponse.json({ ok: true, data: await listContacts() });
}

export async function DELETE(request: Request) {
  if (!(await isAdminAuthenticated())) {
    return NextResponse.json({ ok: false, error: "Unauthorized" }, { status: 401 });
  }
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id") || "";
  const result = await deleteContact(id);
  if (!result.ok) {
    return NextResponse.json({ ok: false, error: "Không xóa được" }, { status: 400 });
  }
  return NextResponse.json({ ok: true });
}
