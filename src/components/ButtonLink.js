import React from 'react';
import Button from '@mui/material/Button';
import Link from 'next/link';

const ButtonLink = ({ href, children, ...props }) => {
  return (
    <Link href={href} passHref>
      <Button component='a' {...props}>
        {children}
      </Button>
    </Link>
  );
};

export default ButtonLink;
