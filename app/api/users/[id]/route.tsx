import { NextRequest, NextResponse } from "next/server";
import schema from "../schema";
import prisma from "@/prisma/client";
// import { updateWith } from "lodash";

export async function GET(
    request: NextRequest,
    { params }: { params: Promise<{ id: string }> }
) {
    const _params = await params;
    // const id = parseInt(_params.id);
    const id = _params.id;
    const user = await prisma.user.findUnique({
        where: { id: id },
    });

    if (!user) {
        return NextResponse.json({ error: "User not found." }, { status: 404 });
    }

    return NextResponse.json(user);
}

export async function PUT(
    request: NextRequest,
    { params }: { params: Promise<{ id: string }> }
) {
    const _params = await params;
    // const id = parseInt(_params.id);
    const id = _params.id;

    const body = await request.json();

    const validation = schema.safeParse(body);
    if (!validation.success) {
        return NextResponse.json(validation.error.errors, { status: 400 });
    }

    const user = await prisma.user.findUnique({
        where: { id: id },
    });
    if (!user) {
        return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    const updatedUser = await prisma.user.update({
        where: {
            id: id,
        },
        data: {
            name: body.name,
            email: body.email,
        },
    });

    return NextResponse.json(updatedUser);
}

export async function DELETE(
    request: NextRequest,
    { params }: { params: Promise<{ id: string }> }
) {
    const _params = await params;
    // const id = parseInt(_params.id);
    const id = _params.id;

    const user = await prisma.user.findUnique({
        where: { id: id },
    });

    if (!user)
        return NextResponse.json({ error: "User not found" }, { status: 404 });

    const deletedUser = await prisma.user.delete({
        where: { id: user.id },
    });

    return NextResponse.json(deletedUser);
}

// import { NextRequest, NextResponse } from "next/server";
// import schema from "../schema";
// import prisma from "@/prisma/client";
// // import { updateWith } from "lodash";

// export async function GET(
//     request: NextRequest,
//     { params }: { params: Promise<{ id: string }> }
// ) {
//     const _params = await params;
//     // const id = parseInt(_params.id);
//     const id = _params.id;
//     const user = await prisma.user.findUnique({
//         where: { id: id },
//     });

//     if (!user) {
//         return NextResponse.json({ error: "User not found." }, { status: 404 });
//     }

//     return NextResponse.json(user);
// }

// export async function PUT(
//     request: NextRequest,
//     { params }: { params: { id: string } }
// ) {
//     const _params = await params;
//     // const id = parseInt(_params.id);
//     const id = _params.id;

//     const body = await request.json();

//     const validation = schema.safeParse(body);
//     if (!validation.success) {
//         return NextResponse.json(validation.error.errors, { status: 400 });
//     }

//     const user = await prisma.user.findUnique({
//         where: { id: id },
//     });
//     if (!user) {
//         return NextResponse.json({ error: "User not found" }, { status: 404 });
//     }

//     const updatedUser = await prisma.user.update({
//         where: {
//             id: id,
//         },
//         data: {
//             name: body.name,
//             email: body.email,
//         },
//     });

//     return NextResponse.json(updatedUser);
// }

// export async function DELETE(
//     request: NextRequest,
//     { params }: { params: Promise<{ id: string }> }
// ) {
//     const _params = await params;
//     // const id = parseInt(_params.id);
//     const id = _params.id;

//     const user = await prisma.user.findUnique({
//         where: { id: id },
//     });

//     if (!user)
//         return NextResponse.json({ error: "User not found" }, { status: 404 });

//     const deletedUser = await prisma.user.delete({
//         where: { id: user.id },
//     });

//     return NextResponse.json(deletedUser);
// }
// ---------------------------------------------------------------------
// export async function GET(
//     request: NextRequest,
//     { params }: { params: Promise<{ id: number }> }
// ) {
//     const { id } = await params;
//     if (id > 10) {
//         return NextResponse.json({ error: "User not found." }, { status: 404 });
//     }

//     return NextResponse.json([
//         { id: 1, name: "Ali" },
//         { id: 2, name: "Jameel" },
//     ]);
// }

// export async function PUT(
//     request: NextRequest,
//     { params }: { params: { id: number } }
// ) {
//     // Validate the request body
//     // If invalid then 400
//     // If not found then 404

//     const body = await request.json();

//     const validation = schema.safeParse(body);
//     if (!validation.success) {
//         return NextResponse.json(validation.error.errors, { status: 400 });
//     }

//     if (params.id > 10) {
//         return NextResponse.json({ error: "User not found" }, { status: 404 });
//     }

//     return NextResponse.json({ id: 1, name: body.name });
// }

// export async function DELETE(
//     request: NextRequest,
//     { params }: { params: Promise<{ id: number }> }
// ) {
//     const { id } = await params;

//     if (id > 10) {
//         return NextResponse.json({ error: "User not found" }, { status: 404 });
//     }

//     return NextResponse.json({});
// }
