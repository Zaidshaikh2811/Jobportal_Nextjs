import { NextResponse } from 'next/server'

// This function can be marked `async` if using `await` inside
export function middleware(request) {
    const path = request.nextUrl.pathname
    const isPublicPath = path === '/signup' || '/verifyemail' || '/'

    request.cookies.get("token")?.value || ''
    if (isPublicPath && token) {
        return NextResponse.redirect(new URL('/', request.url))
    }
    if (!isPublicPath && !token) {
        return NextResponse.redirect(new URL('/signup', request.url))
    }


}

// See "Matching Paths" below to learn more
export const config = {
    matcher: [
        '/', '/signup'
    ]
}