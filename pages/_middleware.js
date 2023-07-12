import { NextResponse } from "next/server"

export default function middleware(req) {
    const { cookies } = req;
    const url = req.url;
    const { pathname, origin } = req.nextUrl
    if(url.includes('/user-panel')){
        if(!cookies.loggedIn){
            return NextResponse.redirect(`${origin}/signin`)
        }else{
            return NextResponse.next();
        }
    }
    if(url.includes('/signin') || url.includes('/signup')){
        if(cookies.loggedIn){
            return NextResponse.redirect(`${origin}/`)
        }else{
            return NextResponse.next();
        }
    }
}