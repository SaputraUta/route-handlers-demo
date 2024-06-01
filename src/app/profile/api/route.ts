import { headers, cookies } from "next/headers";
import { type NextRequest } from "next/server";

export async function GET(request : NextRequest) {
    const requestHeaders = new Headers(request.headers)
    const headerList = headers();

    const theme = request.cookies.get("theme");
    console.log(theme);

    const theme2 = cookies().get("theme");
    console.log(theme2);

    console.log(requestHeaders.get("Authorization"))
    console.log(headerList.get("Authorization"))
    return new Response("<h1>Hello profile</h1>", {
        headers: {
            "Content-Type": "text/html",
            "Set-Cookie" : "theme=dark"
        },
    });
}