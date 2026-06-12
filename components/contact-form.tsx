'use client';

import { Button } from '#/components/ui/button';
import { Input } from '#/components/ui/input';
import { Label } from '#/components/ui/label';
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
      className="mx-auto w-full max-w-lg rounded-2xl border border-border bg-card p-8 shadow-sm"
    >
      <div className="flex flex-col gap-5">
        <div className="flex flex-col gap-1.5">
          <Label htmlFor="name">{t('name')}</Label>
          <Input
            id="name"
            name="name"
            type="text"
            required
            placeholder={t('namePlaceholder')}
            className="h-10"
          />
        </div>

        <div className="flex flex-col gap-1.5">
          <Label htmlFor="phone">{t('phone')}</Label>
          <Input
            id="phone"
            name="phone"
            type="tel"
            required
            placeholder={t('phonePlaceholder')}
            className="h-10"
          />
        </div>

        <div className="flex flex-col gap-1.5">
          <Label htmlFor="email">{t('email')}</Label>
          <Input
            id="email"
            name="email"
            type="email"
            required
            placeholder={t('emailPlaceholder')}
            className="h-10"
          />
        </div>

        <Button type="submit" size="lg" className="mt-2 w-full">
          {t('send')}
        </Button>
      </div>
    </form>
  );
}
