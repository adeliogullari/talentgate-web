import { NextRequest, NextResponse } from 'next/server';

const protectedRoutes = ["/dashboard/overview", "/careers"];
const unprotectedRoutes = ["/login", "/register"];

export default async function middleware(request: NextRequest) {
    const accessToken = request.cookies.get('accessToken')?.value;
    const refreshToken = request.cookies.get('refreshToken')?.value;

    // Check unprotected routes
    if (unprotectedRoutes.some((path) => request.nextUrl.pathname.startsWith(path))) {
        if (accessToken && refreshToken) {
            return NextResponse.redirect(new URL('/careers', request.url));
        }
        return NextResponse.next();
    }

    // Check protected routes
    if (protectedRoutes.some((path) => request.nextUrl.pathname.startsWith(path))) {
        if (!accessToken || !refreshToken) {
            return NextResponse.redirect(new URL('/login', request.url));
        }
        return NextResponse.next();
    }

    return NextResponse.next();
}

export const config = {
    matcher: ['/login', '/register', '/dashboard:path*', '/careers'],
};
