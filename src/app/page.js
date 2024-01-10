'use client';
import { useEffect, useState } from 'react';
import './page.css';
import { Box, Container, Stack, Typography } from '@mui/material';

import ProductCard from '@/components/ProductCard';

export default function Home() {
  const [products, setProducts] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const fetchProducts = async () => {
      try {
        const response = await fetch(
          'https://testcasefe2023.ignorelist.com/api/v1/data',
          {
            method: 'GET',
            headers: {
              nim: '20200801249',
            },
          }
        );

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        setLoading(false);
        const result = await response.json();
        setProducts(result);
      } catch (error) {
        setLoading(false);
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  console.log(products);

  return (
    <>
      <Container maxWidth='lg'>
        <Typography
          variant='h5'
          sx={{ marginTop: 5, marginBottom: 2 }}
          fontWeight={700}
        >
          Semua Product
        </Typography>
        {loading && <p>Loading...</p>}
        <Stack direction={'row'} spacing={20}>
          {products &&
            products.data.map((item, i) => (
              <ProductCard
                key={i}
                author={item.author}
                title={item.title}
                description={item.description}
                price={item.price}
              />
            ))}
        </Stack>
      </Container>
    </>
  );
}
