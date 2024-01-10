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

export default function ProductCard({ title, description, price, author }) {
  return (
    <Card sx={{ width: 345 }}>
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
        <Typography variant='body2' color='text.secondary'>
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size='small'>Share</Button>
        <Button size='small'>Learn More</Button>
      </CardActions>
    </Card>
  );
}
