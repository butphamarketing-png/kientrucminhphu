import { NextResponse } from "next/server";
import { isAdminAuthenticated } from "@/lib/cms/auth";
import { deleteObject } from "@/lib/cms/r2";
import { deleteMediaRow, listMedia } from "@/lib/cms/media-index";

export async function GET() {
  if (!(await isAdminAuthenticated())) {
    return NextResponse.json({ ok: false, error: "Unauthorized" }, { status: 401 });
  }
  try {
    const data = (await listMedia()) || [];
    return NextResponse.json({ ok: true, data });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Không đọc được media";
    return NextResponse.json({ ok: false, error: message }, { status: 500 });
  }
}

export async function DELETE(request: Request) {
  if (!(await isAdminAuthenticated())) {
    return NextResponse.json({ ok: false, error: "Unauthorized" }, { status: 401 });
  }
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");
  const key = searchParams.get("key");
  if (!id) {
    return NextResponse.json({ ok: false, error: "Thiếu id" }, { status: 400 });
  }
  if (key) await deleteObject(key);
  await deleteMediaRow(id);
  return NextResponse.json({ ok: true });
}
