'use client';
import React from 'react';
import { AppProps } from 'next/app';
import { DarkModeProvider } from '../components/darkmode/useDarkMode';
import ProductsPage from '../app/products/page';
import Navbar from '../components/navbar/navbar';
// import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
    // <DarkModeProvider>
      {/* <Component {...pageProps} /> */}
      <ProductsPage />
    // </DarkModeProvider>
    </div>
  );
}

export default MyApp;
