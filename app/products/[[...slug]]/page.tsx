import React from "react";

interface ProductPageProps {
    params: Promise<{ slug: string[] }>;
    searchParams: Promise<{ sortOrder?: string }>;
}

const ProductPage = async ({ params, searchParams }: ProductPageProps) => {
    const { slug } = await params;
    const { sortOrder } = await searchParams;
    return (
        <>
            ProductPage <br />
            slug: {slug} <br />
            sortOrder: {sortOrder}
        </>
    );
};

export default ProductPage;
