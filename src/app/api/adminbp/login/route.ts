import { NextResponse } from "next/server";
import {
  ADMIN_COOKIE,
  createSessionToken,
  verifyCredentials,
} from "@/lib/cms/auth";

export async function POST(request: Request) {
  const body = (await request.json().catch(() => null)) as {
    email?: string;
    username?: string;
    password?: string;
  } | null;
  const email = (body?.email || body?.username || "").trim();
  const password = body?.password?.trim() || "";
  if (!verifyCredentials(email, password)) {
    return NextResponse.json(
      { ok: false, error: "Email hoặc mật khẩu không đúng." },
      { status: 401 },
    );
  }

  const token = createSessionToken();
  const res = NextResponse.json({ ok: true });
  res.cookies.set(ADMIN_COOKIE, token, {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: 7 * 24 * 60 * 60,
  });
  return res;
}
