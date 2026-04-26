import './globals.css';
import type { Metadata } from 'next';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta name="google-site-verification" content="GgMim3xUOhnfFQeG4QbB6mPJovQCKegAoILd-9NWjrk" />
      </head>
      <body>{children}</body>
    </html>
  );
}
