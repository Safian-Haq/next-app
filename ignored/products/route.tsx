// import { NextRequest, NextResponse } from "next/server";
// import schema from "./schema";
// import prisma from "@/prisma/client";

// export async function GET() {
//     const products = await prisma.product.findMany();
//     return NextResponse.json(products);
// }

// export async function POST(request: NextRequest) {
//     const body = await request.json();
//     const validation = schema.safeParse(body);
//     if (!validation.success) {
//         return NextResponse.json(validation.error.errors, { status: 400 });
//     }

//     const product = await prisma.product.findUnique({
//         where: { productCode: body.productCode },
//     });

//     if (product)
//         return NextResponse.json(
//             { error: "Product already exists." },
//             { status: 400 }
//         );

//     const newProduct = await prisma.product.create({
//         data: {
//             name: body.name,
//             price: body.price,
//             productCode: body.productCode,
//         },
//     });
//     return NextResponse.json(newProduct, { status: 201 });
// }

// let products = [
//     {
//         id: 1,
//         name: "Milk",
//         price: 2.5,
//     },
//     {
//         id: 2,
//         name: "Bread",
//         price: 3.5,
//     },
// ];

// export function GET(request: NextRequest) {
//     return NextResponse.json(products);
// }

// export async function POST(request: NextRequest) {
//     const body = await request.json();
//     const validation = schema.safeParse(body);
//     if (!validation.success) {
//         return NextResponse.json(validation.error.errors, { status: 400 });
//     }
//     const maxId = products.reduce(
//         (max, product) => (product.id > max ? product.id : max),
//         0
//     );
//     products.push({ id: maxId + 1, name: body.name, price: body.price });
//     return NextResponse.json(
//         products.find((product) => product.id === maxId + 1),
//         { status: 201 }
//     );
// }

// export { products };
