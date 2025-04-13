import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;

  const token = await getToken({ 
    req: request,
    secret: process.env.NEXTAUTH_SECRET, // Ensure your secret is set in env
  });

  const isAuthenticated = !!token;

  const publicRoutes = ["/auth"];
  const isPublicRoute = publicRoutes.includes(path);

  if (!isAuthenticated && !isPublicRoute && !path.startsWith('/_next')) {
    const loginUrl = new URL('/auth', request.nextUrl.origin);
    
    loginUrl.searchParams.set('callbackUrl', request.nextUrl.pathname);
    
    return NextResponse.redirect(loginUrl);
  }
  if (isAuthenticated && path === '/auth') {
    return NextResponse.redirect(new URL('/', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)","/api/auth/error","/addengineer", "/dashboard", "/uploaddata"],
};
