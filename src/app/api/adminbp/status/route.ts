import { NextResponse } from "next/server";
import { isAdminAuthenticated } from "@/lib/cms/auth";
import { healthR2 } from "@/lib/cms/r2";

export async function GET() {
  if (!(await isAdminAuthenticated())) {
    return NextResponse.json({ ok: false, error: "Unauthorized" }, { status: 401 });
  }
  const r2 = await healthR2();
  return NextResponse.json({
    ok: true,
    r2,
    cms: {
      ok: r2.ok,
      configured: r2.configured,
      error: r2.error,
      storage: "r2",
      key: "cms/cms.json",
    },
  });
}
