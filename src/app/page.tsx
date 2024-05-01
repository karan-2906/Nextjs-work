'use client';
import React from 'react';
import { AppProps } from 'next/app';

import ProductsPage from '../app/products/page';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
        {/* <Component {...pageProps} /> */}
        <ProductsPage />
    </div>
  );
}

export default MyApp;
