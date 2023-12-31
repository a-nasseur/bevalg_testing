import './globals.css';
import type { Metadata } from 'next';
import { Raleway } from 'next/font/google';
import {notFound} from 'next/navigation';
import React from 'react';
import ThemeRegistry from '@/theme/ThemeRegistry';


const raleway = Raleway({ subsets: ['latin'] })


export const metadata: Metadata = {
  title: 'BEVALG',
  description: 'International Fair for beverages and liquide food industries',
}

const locales = ['en', 'fr'];


export default async function LocaleLayout({children, params: {locale}}: {children: React.ReactNode, params: {locale: string;}}) {

  // Validate that the incoming `locale` parameter is valid
  const isValidLocale = locales.some((cur: string) => cur === locale);
  if (!isValidLocale) notFound();
 
  return (
    <html lang={locale}>
      <body className={raleway.className}>
        <ThemeRegistry options={{ key: 'mui' }}>{children}</ThemeRegistry>
      </body>
    </html>
  );
}
