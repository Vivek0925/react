import { NextResponse } from 'next/server'

// This function can be marked `async` if using `await` inside
export function middleware(request) {
    return NextResponse.redirect(new URL('/', request.url))
}

// See "Matching Paths" below to learn more
export const config = {
    matcher: '/about/:path*',
}

//middleware to redirect all /about/* requests to home page /
//request jaane se pehle hi change ho jata hai
