"use client";
import useSWR from "swr";
import { fetcher } from "@/utils/api/fetcher";
import { usePathname } from "next/navigation";
import { Container } from "@mui/material";

const ProductDetail = () => {
    const router = usePathname();
    const id = router.split("/")[2];

    const url = `https://testcasefe2023.ignorelist.com/api/v1/data/${id}`;

    const { data: product, error } = useSWR(url, fetcher);

    if (error) {
        return <p>Error fetching products: {error.message}</p>;
    }

    // Check if product is undefined or null
    if (!product) {
        return <p>Loading...</p>;
    }

    console.log(product.data);

    return (
        <Container maxWidth="lg">
            {product && <p>{product.data.title}</p>}
        </Container>
    );
};

export default ProductDetail;
