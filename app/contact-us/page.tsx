import { ContactForm } from '#/components/contact-form';
import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';

export const metadata: Metadata = {
  title: 'Contact Us',
};

export default async function ContactUsPage() {
  const t = await getTranslations('ContactUs');

  return (
    <section>
      <div className="mb-12 text-center">
        <h1 className="text-3xl font-bold text-revoducate-sage sm:text-4xl">
          {t('title')}
        </h1>
        <p className="mt-3 text-revoducate-charcoal">{t('subtitle')}</p>
      </div>

      <ContactForm />
    </section>
  );
}
