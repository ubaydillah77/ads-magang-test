import * as React from 'react';
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
  Stack,
} from '@mui/material';
import Link from 'next/link';

export default function ProductCard({ title, description, price, author, id }) {
  return (
    <Card sx={{ width: 350 }}>
      <CardMedia
        sx={{ height: 140 }}
        image='https://hinacreates.com/wp-content/uploads/2021/06/dummy2-450x341.png'
        title='green iguana'
      />
      <CardContent>
        <Stack direction={'row'} justifyContent={'space-between'}>
          <Typography gutterBottom variant='h5' component='div'>
            {title}
          </Typography>
          <Typography gutterBottom variant='h6' component='div'>
            Rp.{price}
          </Typography>
        </Stack>
        <Typography variant='body' color='text.secondary'>
          {description}
        </Typography>
        <Typography variant='body2' color='text.secondary'>
          {author}
        </Typography>
      </CardContent>
      <CardActions>
        <Link href={`/products/${id}`}>View detail</Link>
      </CardActions>
    </Card>
  );
}
