'use client';
import useSWR from 'swr';
import { fetcher } from '@/utils/api/fetcher';
import { usePathname } from 'next/navigation';
import { Avatar, Box, Container, Stack, Typography } from '@mui/material';

import Image from 'next/image';

const ProductDetail = () => {
  const router = usePathname();
  const id = router.split('/')[2];

  const url = `https://testcasefe2023.ignorelist.com/api/v1/data/${id}`;

  const { data: product, error } = useSWR(url, fetcher);

  if (error) {
    return <p>Error fetching products: {error.message}</p>;
  }

  return (
    <Container maxWidth='lg'>
      <Box sx={{ marginTop: 5 }}>
        {!product && <p>Loading...</p>}
        {product && (
          <>
            <Stack direction={'row'}>
              <Image
                src='/dummy.png'
                sizes='100vw'
                width={700}
                height={450}
                alt='sss'
              />
              <Stack sx={{ ml: 3 }}>
                <Typography variant='h4' fontWeight={'bold'}>
                  {product.data.title}
                </Typography>
                <Typography variant='body' mt={2}>
                  {product.data.description}
                </Typography>
                <Typography variant='body' fontWeight={'bold'} mt={1}>
                  Rp.{product.data.price}
                </Typography>

                <Stack direction={'row'} alignItems={'center'} gap={1} mt={3}>
                  <Avatar />
                  <Typography variant='body'>{product.data.author}</Typography>
                </Stack>
              </Stack>
            </Stack>
          </>
        )}
      </Box>
    </Container>
  );
};

export default ProductDetail;
