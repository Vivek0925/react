// import { NextResponse } from 'next/server'

// // This function can be marked `async` if using `await` inside
// export function middleware(request) {
//     return NextResponse.redirect(new URL('/', request.url))
// }

// // See "Matching Paths" below to learn more
// export const config = {
//     matcher: '/about/:path*',
// }

//middleware to redirect all /about/* requests to home page /
//request jaane se pehle hi change ho jata hai


import { NextResponse } from 'next/server'

export function middleware(request) {
    if (request.nextUrl.pathname.startsWith('/about')) {
        return NextResponse.rewrite(new URL('/about-2', request.url))
    }

    if (request.nextUrl.pathname.startsWith('/dashboard')) {
        return NextResponse.rewrite(new URL('/dashboard/user', request.url))
    }
}

//dashboard pages ke liye bhi middleware banaya hai jo /dashboard/* requests ko /dashboard/user pe le jaata hai 
// dashboard page k details home me redirect hote hai and visible rehta hai