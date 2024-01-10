"use client";
import { Container, Stack, Typography } from "@mui/material";
import useSWR from "swr";
import ProductCard from "@/components/ProductCard";
import { fetcher } from "@/utils/api/fetcher";

const Home = () => {
    const url = "https://testcasefe2023.ignorelist.com/api/v1/data";

    const { data: products, error } = useSWR(url, fetcher);

    if (error) {
        return <p>Error fetching products: {error.message}</p>;
    }

    return (
        <Container maxWidth="lg">
            <Typography
                variant="h5"
                sx={{ marginTop: 5, marginBottom: 2 }}
                fontWeight={700}
            >
                Semua Produk
            </Typography>
            {!products && <p>Loading...</p>}
            {products && (
                <Stack direction={"row"} spacing={20}>
                    {products.data.map((item, i) => (
                        <ProductCard
                            key={i}
                            id={item.id}
                            author={item.author}
                            title={item.title}
                            description={item.description}
                            price={item.price}
                        />
                    ))}
                </Stack>
            )}
        </Container>
    );
};

export default Home;
