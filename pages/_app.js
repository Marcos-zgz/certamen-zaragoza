import React from 'react';

export default function App({ Component, pageProps }) {
  return (
    <div className="bg-brand-black text-brand-text min-h-screen">
      <Component {...pageProps} />
    </div>
  );
}
