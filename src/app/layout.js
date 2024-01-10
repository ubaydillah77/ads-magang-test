import { Inter } from 'next/font/google';
import CssBaseline from '@mui/material/CssBaseline';
import './globals.css';
import Navbar from '@/components/Navbar';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Muhamad Ubaydillah Magang test',
  description: 'Test Front-end Nextjs 13 with MUI di ADS Digital Partner',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <CssBaseline />
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
