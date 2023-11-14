import { NextResponse } from "next/server";
/**
 * Middleware is created outside of app folder
 * --> It's code is executed on server
 * --> It is executed btw request initiated by client and response received by client
 * --> Authentication type of work can be done in middleware
 */

export function middleware(request, response){
    // const 
    const url = request.nextUrl;
    // if(url.pathname === "/login"){
        // Only page content will be changed , url will remain as it is
    // url.pathname = '/about';
    // return NextResponse.rewrite(url);
    // }
    // if(url.pathname === "/login"){
        // url in search bar will be changed
        return NextResponse.redirect(new URL("/about", request.url));
    // }
}

export const config = {
    // to rediect login and studentList and its subroutes to about page, and check on line 17 will be remove
    matcher :["/login/:path*","/studentList/:path*" ], 
}