'use client';
import React, { useEffect, useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import useSWR from 'swr';
import axios from 'axios';
import {
  TextField,
  Button,
  Container,
  Typography,
  Box,
  Card,
  CardContent,
} from '@mui/material';
import { fetcher } from '@/utils/api/fetcher';

const UpdateProduct = () => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    price: '',
    author: '',
  });

  const navigate = useRouter();
  const router = usePathname();
  const id = router.split('/')[2];

  const url = `https://testcasefe2023.ignorelist.com/api/v1/data/${id}`;

  const { data: product = formData, error } = useSWR(url, fetcher);

  useEffect(() => {
    if (product.data) {
      setFormData({
        title: product.data.title || '',
        description: product.data.description || '',
        price: product.data.price || '',
        author: product.data.author || '',
      });
    }
  }, [product]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.put(
        `https://testcasefe2023.ignorelist.com/api/v1/data/${id}`,
        formData,
        {
          headers: {
            nim: '20200801249',
          },
        }
      );

      console.log('Product created successfully:', response.data);
      navigate.push('/manage');
    } catch (error) {
      console.error('Error creating product:', error.message);
    }
  };

  if (error) {
    return <p>Error fetching products: {error.message}</p>;
  }

  if (!product) {
    return <p>Loading...</p>;
  }

  return (
    <Container
      maxWidth='lg'
      sx={{
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      {product && (
        <>
          <Typography variant='h4' textAlign={'center'} mt={4}>
            Update Product: <b>{formData.title}</b>
          </Typography>

          <Card sx={{ minWidth: 400 }}>
            <CardContent>
              <form onSubmit={handleSubmit}>
                <Box mt={2}>
                  <TextField
                    label='Title'
                    id='title'
                    name='title'
                    value={formData.title}
                    onChange={handleChange}
                    sx={{ width: '100%' }}
                  />
                </Box>

                <Box mt={2}>
                  <TextField
                    type='number'
                    label='Price'
                    id='price'
                    name='price'
                    value={formData.price}
                    onChange={handleChange}
                    sx={{ width: '100%' }}
                  />
                </Box>
                <Box mt={2}>
                  <TextField
                    label='Author'
                    id='author'
                    name='author'
                    value={formData.author}
                    onChange={handleChange}
                    sx={{ width: '100%' }}
                  />
                </Box>
                <Box mt={2}>
                  <TextField
                    placeholder='Description'
                    id='description'
                    multiline
                    maxRows={4}
                    name='description'
                    value={formData.description}
                    onChange={handleChange}
                    sx={{ width: '100%' }}
                  />
                </Box>
                <Box mt={2}>
                  <Button type='submit' variant='contained' color='primary'>
                    Update Product
                  </Button>
                </Box>
              </form>
            </CardContent>
          </Card>
        </>
      )}
    </Container>
  );
};

export default UpdateProduct;
