import { NextResponse } from 'next/server'

// This function can be marked `async` if using `await` inside
export function middleware(request) {
    const { pathname } = request.nextUrl;


    const token = request.cookies.get("token")?.value || '';
    const isPublicPath = pathname === '/signup' || pathname === '/verifyemail' || '/';

    if (isPublicPath && token) {
        // Redirect to the home page if the user is already authenticated
        return NextResponse.redirect(new URL('/', request.url));
    }

    if (!isPublicPath && !token) {
        // Redirect to the signup page if the user is not authenticated and trying to access a protected route
        return NextResponse.redirect(new URL('/signup', request.url));
    }

    // Continue to the requested page if all checks pass
    return NextResponse.next();
}

// See "Matching Paths" below to learn more
export const config = {
    matcher: ['/', '/signup', '/verifyemail'], // Add any additional paths you want to protect
};
