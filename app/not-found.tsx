import Link from 'next/link';
import { getTranslations } from 'next-intl/server';

export default async function NotFound() {
  const t = await getTranslations('NotFound');

  return (
    <section className="flex min-h-[50vh] flex-col items-center justify-center text-center">
      <h1 className="text-3xl font-bold text-revoducate-sage">{t('title')}</h1>
      <p className="mt-3 text-revoducate-charcoal">{t('description')}</p>
      <Link
        href="/"
        className="mt-6 text-sm font-medium text-revoducate-coral hover:underline"
      >
        {t('backHome')}
      </Link>
    </section>
  );
}
