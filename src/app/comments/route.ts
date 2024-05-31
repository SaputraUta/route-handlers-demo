import { comment } from "postcss";
import { comments } from "./data";
import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
    const searchParams = request.nextUrl.searchParams;
    const query = searchParams.get("query");
    const filteredComments = query ?
    comments.filter((c) => c.comment.toLowerCase().includes(query.toLowerCase())) :
    comments
    return Response.json(filteredComments);
}

export async function POST(request: Request) {
    const body = await request.json();
    const newComment = {
        id: comments.length + 1,
        comment: body.text,
    }
    comments.push(newComment);
    return new Response(JSON.stringify(newComment), {
        headers: {
            "Content-Type": "application/json",
        },
        status: 201
    })
}