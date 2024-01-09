'use client';
import { useEffect, useState } from 'react';
import './page.css';
import { Box, Container } from '@mui/material';

export default function Home() {
  const [products, setProducts] = useState(null);

  useEffect(() => {
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

        const result = await response.json();
        setProducts(result);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  console.log(products);

  return (
    <>
      <Container maxWidth='lg'>
        <Box>hello</Box>
        {products &&
          products.data.map((item, i) => <p key={i}>{item.title}</p>)}
      </Container>
    </>
  );
}
