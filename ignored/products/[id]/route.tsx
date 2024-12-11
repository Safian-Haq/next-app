// import prisma from "@/prisma/client";
// import { NextRequest, NextResponse } from "next/server";
// import schema from "../schema";

// export async function GET(
//     request: NextRequest,
//     { params }: { params: Promise<{ id: string }> }
// ) {
//     const _params = await params;
//     const id = parseInt(_params.id);

//     const searchedProduct = await prisma.product.findUnique({
//         where: {
//             id: id,
//         },
//     });

//     if (!searchedProduct) {
//         return NextResponse.json(
//             { error: "Product not found." },
//             { status: 404 }
//         );
//     }

//     return NextResponse.json(searchedProduct, { status: 200 });
// }

// export async function PUT(
//     request: NextRequest,
//     { params }: { params: { id: string } }
// ) {
//     const _params = await params;
//     const id = parseInt(_params.id);
//     const body = await request.json();

//     const validation = schema.safeParse(body);
//     if (!validation.success)
//         return NextResponse.json(validation.error.errors, { status: 400 });

//     const product = await prisma.product.findUnique({
//         where: {
//             id: id,
//         },
//     });
//     if (!product)
//         return NextResponse.json(
//             { error: "Product not found." },
//             { status: 404 }
//         );
//     try {
//         const updatedProduct = await prisma.product.update({
//             where: {
//                 id: id,
//             },
//             data: {
//                 name: body.name,
//                 price: body.price,
//                 productCode: body.productCode,
//             },
//         });
//         return NextResponse.json(updatedProduct);
//     } catch (e) {
//         return NextResponse.json({ error: `Error - ${e}` }, { status: 400 });
//     }
// }

// export async function GET(
//     request: NextRequest,
//     { params }: { params: Promise<{ id: number }> }
// ) {
//     const { id } = await params;
//     const idNumber = Number(id);
//     const productSearch = products.find((product) => product.id === idNumber);
//     console.log(productSearch);

//     if (!productSearch) {
//         return NextResponse.json(
//             { error: "Product not found." },
//             { status: 404 }
//         );
//     }

//     return NextResponse.json(productSearch, { status: 200 });
// }
