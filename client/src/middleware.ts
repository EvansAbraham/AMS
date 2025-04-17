import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;

  const isAuthenticated =
    request.cookies.has("isAuthenticated") ||
    (await request.headers.get("x-is-authenticated")) === "true";

  const publicRoutes = ["/auth"];
  const isPublicRoute = publicRoutes.includes(path);

  if (!isAuthenticated && !isPublicRoute) {
    return NextResponse.redirect(new URL("/auth", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)", "/api/auth/error", "/addengineer", "/dashboard", "/uploaddata"],
};
