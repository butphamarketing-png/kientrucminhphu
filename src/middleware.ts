import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { ADMIN_COOKIE, verifySessionTokenEdge } from "@/lib/cms/session-edge";

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("x-pathname", pathname);

  if (!pathname.startsWith("/adminbp")) {
    return NextResponse.next({
      request: { headers: requestHeaders },
    });
  }

  const token = request.cookies.get(ADMIN_COOKIE)?.value;
  const authed = await verifySessionTokenEdge(token);

  if (pathname === "/adminbp/login") {
    if (authed) {
      return NextResponse.redirect(new URL("/adminbp", request.url));
    }
    return NextResponse.next({
      request: { headers: requestHeaders },
    });
  }

  if (!authed) {
    if (pathname === "/adminbp") {
      const url = request.nextUrl.clone();
      url.pathname = "/adminbp/login";
      return NextResponse.rewrite(url);
    }
    const login = new URL("/adminbp/login", request.url);
    login.searchParams.set("next", pathname);
    return NextResponse.redirect(login);
  }

  return NextResponse.next({
    request: { headers: requestHeaders },
  });
}

export const config = {
  matcher: ["/adminbp", "/adminbp/:path*"],
};
