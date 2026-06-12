'use client';

import { useTranslations } from 'next-intl';

export function ContactForm() {
  const t = useTranslations('ContactUs');

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // TODO: implement submit logic
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto w-full max-w-lg rounded-2xl border border-gray-100 bg-white p-8 shadow-sm"
    >
      <div className="flex flex-col gap-6">
        {/* Name */}
        <div className="flex flex-col gap-1.5">
          <label
            htmlFor="name"
            className="text-sm font-medium text-revoducate-charcoal"
          >
            {t('name')}
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            placeholder={t('namePlaceholder')}
            className="rounded-lg border border-gray-200 px-4 py-2.5 text-sm text-revoducate-charcoal placeholder:text-gray-400 focus:border-revoducate-sage focus:ring-1 focus:ring-revoducate-sage focus:outline-none"
          />
        </div>

        {/* Phone */}
        <div className="flex flex-col gap-1.5">
          <label
            htmlFor="phone"
            className="text-sm font-medium text-revoducate-charcoal"
          >
            {t('phone')}
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            placeholder={t('phonePlaceholder')}
            className="rounded-lg border border-gray-200 px-4 py-2.5 text-sm text-revoducate-charcoal placeholder:text-gray-400 focus:border-revoducate-sage focus:ring-1 focus:ring-revoducate-sage focus:outline-none"
          />
        </div>

        {/* Email */}
        <div className="flex flex-col gap-1.5">
          <label
            htmlFor="email"
            className="text-sm font-medium text-revoducate-charcoal"
          >
            {t('email')}
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder={t('emailPlaceholder')}
            className="rounded-lg border border-gray-200 px-4 py-2.5 text-sm text-revoducate-charcoal placeholder:text-gray-400 focus:border-revoducate-sage focus:ring-1 focus:ring-revoducate-sage focus:outline-none"
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="mt-2 rounded-lg bg-revoducate-coral px-6 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90 active:opacity-75"
        >
          {t('send')}
        </button>
      </div>
    </form>
  );
}
