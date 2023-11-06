import { NextResponse } from "next/server";
import { VerifyToken } from "./utils/jwtTokenHelper";

export async function middleware(req) {
    if (req.nextUrl.pathname.startsWith("/dashboard")) {
        try {
            let token = req.cookies.get("token");
            const reqHeaders = new Headers(req.headers);
            let payload = await VerifyToken(token["value"]);
            reqHeaders.set("email", payload["email"]);
            reqHeaders.set("id", payload["id"]);
            reqHeaders.set("firstName", payload["firstName"]);
            return NextResponse.next({ request: { headers: reqHeaders } });
        } catch (error) {
            return NextResponse.redirect(new URL("/user/login", req.url));
        }
    }
    if (req.nextUrl.pathname.startsWith("/api")) {
        try {
            let token = req.cookies.get("token");
            const reqHeaders = new Headers(req.headers);
            let payload = await VerifyToken(token["value"]);
            reqHeaders.set("email", payload["email"]);
            reqHeaders.set("id", payload["id"]);
            reqHeaders.set("firstName", payload["firstName"]);
            return NextResponse.next({ request: { headers: reqHeaders } });
        } catch (error) {
            const reqHeaders = new Headers(req.headers);
            reqHeaders.set("email", "0");
            reqHeaders.set("id", "0");
            reqHeaders.set("firstName", "0");
            return NextResponse.next({ request: { headers: reqHeaders } });
        }
    }
}
