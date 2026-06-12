import { OurPathTimeline } from '#/components/our-path-timeline';
import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';

export const metadata: Metadata = {
  title: 'Our Path',
};

export default async function OurPathPage() {
  const t = await getTranslations('OurPath');
  const timelineT = await getTranslations('Timeline.step');

  const steps = [1, 2, 3, 4, 5, 6].map((num) => ({
    title: timelineT(`${num}.title`),
    description: timelineT(`${num}.description`),
  }));

  return (
    <section>
      <h1 className="mb-12 text-center text-3xl font-bold text-revoducate-sage sm:text-4xl">
        {t('title')}
      </h1>

      <OurPathTimeline steps={steps} />
    </section>
  );
}
