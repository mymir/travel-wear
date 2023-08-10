import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';

import Banner from './components/Banner'
import Navbar from './components/Navbar'
import ThemeRegistry from './components/ThemeRegistry';
import Footer from './components/Footer'


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeRegistry>
          <Box>
            <Banner />
            <Navbar />
            <Toolbar />
            {children}            
            <Toolbar />
            <Toolbar />
            <Toolbar />
            <Toolbar />
            <Footer />
          </Box>
        </ThemeRegistry>
      </body>
    </html>
  )
}