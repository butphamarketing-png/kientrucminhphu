import { NextResponse } from "next/server";
import { isAdminAuthenticated } from "@/lib/cms/auth";
import { readCms, updateCms, writeCms } from "@/lib/cms/store";
import type { CmsStore } from "@/lib/cms/types";

export async function GET() {
  if (!(await isAdminAuthenticated())) {
    return NextResponse.json({ ok: false, error: "Unauthorized" }, { status: 401 });
  }
  return NextResponse.json({ ok: true, data: readCms() });
}

export async function PUT(request: Request) {
  if (!(await isAdminAuthenticated())) {
    return NextResponse.json({ ok: false, error: "Unauthorized" }, { status: 401 });
  }
  const body = (await request.json().catch(() => null)) as Partial<CmsStore> | null;
  if (!body || typeof body !== "object") {
    return NextResponse.json({ ok: false, error: "Payload không hợp lệ" }, { status: 400 });
  }
  const next = updateCms(body);
  return NextResponse.json({ ok: true, data: next });
}

export async function POST(request: Request) {
  if (!(await isAdminAuthenticated())) {
    return NextResponse.json({ ok: false, error: "Unauthorized" }, { status: 401 });
  }
  const body = (await request.json().catch(() => null)) as CmsStore | null;
  if (!body || typeof body !== "object") {
    return NextResponse.json({ ok: false, error: "Payload không hợp lệ" }, { status: 400 });
  }
  const next = writeCms(body);
  return NextResponse.json({ ok: true, data: next });
}
