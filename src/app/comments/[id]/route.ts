import { comments } from "../data";
import { redirect } from "next/navigation";

export async function GET(_request: Request, { params }: { params: { id: string } }) {
    const comment = comments.find((c) => c.id === parseInt(params.id));
    if (!comment) {
        redirect("/comments");
    }
    return Response.json(comment);
}

export async function PATCH(request: Request, { params }: { params: { id: string } }) {
    const body = await request.json();
    const { comment } = body;

    const commentIndex = comments.findIndex((c) => c.id === parseInt(params.id));
    if (commentIndex) {
        comments[commentIndex].comment = comment;
        return Response.json(comments[commentIndex]);
    } else {
        return new Response("Cannot found any matches id", {
            status: 404,
        });
    }
}

export async function DELETE(request: Request, { params }: { params: { id: string } }) {
    const commentIndex = comments.findIndex((c) => c.id === parseInt(params.id));
    const deletedComment = comments[commentIndex];
    comments.splice(commentIndex, 1);
    return Response.json(deletedComment);
}