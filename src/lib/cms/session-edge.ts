export const ADMIN_COOKIE = "adminbp_session";

function secret() {
  return (
    process.env.ADMINBP_SECRET ||
    process.env.ADMINBP_PASSWORD ||
    "minhphu-adminbp-dev-secret"
  );
}

async function sign(payload: string) {
  const data = new TextEncoder().encode(`${payload}.${secret()}`);
  const buf = await crypto.subtle.digest("SHA-256", data);
  return Array.from(new Uint8Array(buf))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}

export async function verifySessionTokenEdge(
  token: string | undefined | null,
): Promise<boolean> {
  if (!token) return false;
  const lastDot = token.lastIndexOf(".");
  if (lastDot < 0) return false;
  const payload = token.slice(0, lastDot);
  const sig = token.slice(lastDot + 1);
  const expected = await sign(payload);
  if (sig.length !== expected.length) return false;
  let mismatch = 0;
  for (let i = 0; i < sig.length; i += 1) {
    mismatch |= sig.charCodeAt(i) ^ expected.charCodeAt(i);
  }
  if (mismatch !== 0) return false;
  const parts = payload.split(":");
  const exp = Number(parts[1]);
  if (!Number.isFinite(exp) || Date.now() > exp) return false;
  return parts[0] === "adminbp";
}
