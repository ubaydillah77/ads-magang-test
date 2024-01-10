'use client';
import React, { useState } from 'react';
import axios from 'axios';
import {
  TextField,
  Button,
  Container,
  Typography,
  Box,
  Card,
  CardContent,
  Snackbar,
} from '@mui/material';
import MuiAlert from '@mui/material/Alert';
import { useRouter } from 'next/navigation';

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant='filled' {...props} />;
});

const CreateProduct = () => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    price: '',
    author: '',
  });
  const [success, setSuccess] = useState(false);
  const navigate = useRouter();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        'https://testcasefe2023.ignorelist.com/api/v1/data',
        formData,
        {
          headers: {
            nim: '20200801249',
          },
        }
      );

      setSuccess(true);
      console.log('Product created successfully:', response.data);
      navigate.push('/manage');
    } catch (error) {
      console.error('Error creating product:', error.message);
    }
  };

  const handleClose = () => {
    setSuccess(false);
  };

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
      <Typography variant='h4' textAlign={'center'} mt={4}>
        Create New Product
      </Typography>
      <Snackbar
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        open={success}
        onClose={handleClose}
        autoHideDuration={6000}
      >
        <Alert onClose={handleClose} severity='success' sx={{ width: '100%' }}>
          Product Successfully created!
        </Alert>
      </Snackbar>
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
                Create Product
              </Button>
            </Box>
          </form>
        </CardContent>
      </Card>
    </Container>
  );
};

export default CreateProduct;
