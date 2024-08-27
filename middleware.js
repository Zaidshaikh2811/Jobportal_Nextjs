import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server'
import { NextResponse } from 'next/server';

const isPublicRoute = createRouteMatcher([
    "/signup",
    "/verifyemail",
    "/",
    "",
    "/about",         // Add any other public routes
    "/blog/(.*)",     // Dynamic public routes (e.g., blog post pages)
    "/contact",
]);

// export default clerkMiddleware((auth, req) => {
//     const { userId } = auth();
//     const currentUrl = new URL(req.url);

//     const isHomePage = currentUrl.pathname === "/" || "";

//     if (userId && isHomePage) {
//         return NextResponse.redirect(new URL("/", req.url)); // Redirect authenticated users to a dashboard or any other page
//     }

//     if (!userId && !isPublicRoute(req)) {
//         return NextResponse.redirect(new URL("/signup", req.url)); // Redirect to signup if trying to access protected route
//     }

//     return NextResponse.next();
// })

export default clerkMiddleware()

export const config = {
    matcher: [
        "/((?!.*\\..*|_next).*)",  // Exclude files with extensions and _next
        "/"
    ],
}
