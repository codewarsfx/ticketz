import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
 

export function middleware(request: NextRequest) {

  //automatically redirects to /home 
  return NextResponse.redirect(new URL('/home', request.url))
}
 
export const config = {
  matcher: '/',
}