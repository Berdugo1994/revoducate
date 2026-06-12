import { TeamGrid } from '#/components/team-grid';
import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';

export const metadata: Metadata = {
  title: 'Who We Are',
};

export default async function WhoWeArePage() {
  const t = await getTranslations('WhoWeAre');
  const teamT = await getTranslations('WhoWeAre.team');

  const members = [1, 2, 3, 4, 5, 6].map((num) => ({
    name: teamT(`${num}.name`),
    title: teamT(`${num}.title`),
  }));

  return (
    <section>
      <h1 className="mb-12 text-center text-3xl font-bold text-revoducate-sage sm:text-4xl">
        {t('title')}
      </h1>

      <TeamGrid members={members} />
    </section>
  );
}
