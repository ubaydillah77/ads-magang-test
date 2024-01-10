'use client';
import {
  Button,
  Container,
  Stack,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from '@mui/material';
import useSWR, { mutate } from 'swr';
import { fetcher } from '@/utils/api/fetcher';
import Link from 'next/link';
import axios from 'axios';
import ButtonLink from '@/components/ButtonLink';

const Manage = () => {
  const url = 'https://testcasefe2023.ignorelist.com/api/v1/data';

  const { data: products, error } = useSWR(url, fetcher);

  if (error) {
    return <p>Error fetching products: {error.message}</p>;
  }

  if (!products) {
    return <p>Loading...</p>;
  }

  const handleDelete = async (productId) => {
    try {
      const res = await axios.delete(
        `https://testcasefe2023.ignorelist.com/api/v1/data/${productId}`,
        {
          headers: {
            nim: '20200801249',
          },
        }
      );

      if (res.status == 200) {
        // Fetch ulang
        mutate(url);
      } else {
        console.error(`Failed to delete product with id ${productId}`);
      }
    } catch (error) {
      console.error('Error occurred during delete:', error);
    }
  };

  return (
    <Container maxWidth='lg' sx={{ mt: 5 }}>
      <Stack direction={'row'} justifyContent={'space-between'}>
        <Typography variant='h4' fontWeight={'bold'}>
          Manage Product
        </Typography>
        <ButtonLink href={'/create'} variant='contained'>
          New Product
        </ButtonLink>
      </Stack>
      <TableContainer component={Paper} sx={{ mt: 2 }}>
        <Table sx={{ minWidth: 650 }} aria-label='simple table'>
          <TableHead>
            <TableRow>
              <TableCell>No.</TableCell>
              <TableCell align='right'>Title</TableCell>
              <TableCell align='left'>Description</TableCell>
              <TableCell align='right'>Price</TableCell>
              <TableCell align='right'>Author</TableCell>
              <TableCell align='right'>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {products &&
              products.data.map((product, i) => (
                <TableRow
                  key={product.title}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component='th' scope='row'>
                    {i + 1}
                  </TableCell>
                  <TableCell align='right'>
                    <Link href={`/products/${product.id}`}>
                      <Typography variant='body2' color={'Highlight'}>
                        {product.title}
                      </Typography>
                    </Link>
                  </TableCell>
                  <TableCell align='left'>{product.description}</TableCell>
                  <TableCell align='right'>{product.price}</TableCell>
                  <TableCell align='right'>{product.author}</TableCell>

                  <TableCell align='right'>
                    <Stack direction={'row'} gap={2} justifyContent={'end'}>
                      <ButtonLink
                        href={`/update/${product.id}`}
                        variant='outlined'
                      >
                        Edit
                      </ButtonLink>
                      <Button
                        onClick={() => handleDelete(product.id)}
                        color='error'
                        variant='contained'
                      >
                        Delete
                      </Button>
                    </Stack>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default Manage;
