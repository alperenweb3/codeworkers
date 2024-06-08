import type { Metadata } from "next";
import "./globals.css";
import { roboto, archivo } from '@/app/ui/fonts';

export const metadata: Metadata = {
  title: {
    template: '%s | CodeWorkers',
    default: 'CodeWorkers for CodeWorks Graduates',
  },
  description: 'an Exclusive Community of CodeWorks Graduates.',
  metadataBase: new URL('https://codeworkers.me'),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.variable + ' ' + archivo.variable}>{children}</body>
    </html>
  );
}
