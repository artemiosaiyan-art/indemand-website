import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Indemand Building Services',
  description: 'Electrical, HVAC, roofing, plumbing, cleaning, concrete, asphalt and general repair services in Ontario.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
