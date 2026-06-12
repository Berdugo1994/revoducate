import '#/styles/globals.css';

import { SiteHeader } from '#/components/site-header';
import { Metadata } from 'next';
import { NextIntlClientProvider } from 'next-intl';
import { getLocale, getMessages } from 'next-intl/server';
import { Geist } from 'next/font/google';

const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'] });

export const metadata: Metadata = {
  title: { default: 'REVODUCATE', template: '%s | REVODUCATE' },
  description:
    'Personalized learning empowers each learner by adapting content, pace, and method to their unique needs, into a truly meaningful experiences.',
  authors: [{ name: 'Eden Berdugo' }],
  creator: 'Eden Berdugo',
  metadataBase: new URL('https://revoducate.com'),
  openGraph: {
    title: 'REVODUCATE',
    description:
      'Personalized learning empowers each learner by adapting content, pace, and method to their unique needs, into a truly meaningful experiences.',
    siteName: 'REVODUCATE',
  },
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const locale = await getLocale();
  const messages = await getMessages();

  return (
    <html lang={locale} className={`scroll-smooth ${geistSans.variable}`}>
      <body className="min-h-screen bg-revoducate-bg font-sans text-revoducate-charcoal antialiased">
        <NextIntlClientProvider locale={locale} messages={messages}>
          <SiteHeader />
          <main className="mx-auto max-w-5xl px-6 py-12">{children}</main>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
