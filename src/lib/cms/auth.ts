import { createHash, timingSafeEqual } from "crypto";
import { cookies } from "next/headers";

export const ADMIN_COOKIE = "adminbp_session";
const SESSION_DAYS = 7;

function secret() {
  return (
    process.env.ADMINBP_SECRET ||
    process.env.ADMINBP_PASSWORD ||
    "minhphu-adminbp-dev-secret"
  );
}

export function getAdminPassword() {
  return process.env.ADMINBP_PASSWORD || "MinhPhu@2026";
}

function sign(payload: string) {
  return createHash("sha256")
    .update(`${payload}.${secret()}`)
    .digest("hex");
}

export function createSessionToken() {
  const exp = Date.now() + SESSION_DAYS * 24 * 60 * 60 * 1000;
  const payload = `adminbp:${exp}`;
  return `${payload}.${sign(payload)}`;
}

export function verifySessionToken(token: string | undefined | null): boolean {
  if (!token) return false;
  const lastDot = token.lastIndexOf(".");
  if (lastDot < 0) return false;
  const payload = token.slice(0, lastDot);
  const sig = token.slice(lastDot + 1);
  const expected = sign(payload);
  try {
    const a = Buffer.from(sig);
    const b = Buffer.from(expected);
    if (a.length !== b.length || !timingSafeEqual(a, b)) return false;
  } catch {
    return false;
  }
  const parts = payload.split(":");
  const exp = Number(parts[1]);
  if (!Number.isFinite(exp) || Date.now() > exp) return false;
  return parts[0] === "adminbp";
}

export function verifyPassword(password: string) {
  const expected = getAdminPassword();
  const a = Buffer.from(password);
  const b = Buffer.from(expected);
  if (a.length !== b.length) {
    // still compare to avoid trivial timing leak on length-only
    timingSafeEqual(createHash("sha256").update(password).digest(), createHash("sha256").update(expected).digest());
    return false;
  }
  return timingSafeEqual(a, b);
}

export async function isAdminAuthenticated() {
  const jar = await cookies();
  return verifySessionToken(jar.get(ADMIN_COOKIE)?.value);
}
