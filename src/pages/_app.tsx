import * as React from 'react';
import type { AppProps } from 'next/app';
import 'tailwindcss/tailwind.css';
import 'reactjs-popup/dist/index.css';

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
