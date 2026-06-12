import { ContactForm } from '#/components/contact-form';
import { OurPathTimeline } from '#/components/our-path-timeline';
import { RevoducateLogo } from '#/components/revoducate-logo';
import { TeamGrid } from '#/components/team-grid';
import { Separator } from '#/components/ui/separator';
import { getTranslations } from 'next-intl/server';
import mosheSrc from '@/public/moshe-fekler.png';

export default async function HomePage() {
  const landingT = await getTranslations('Landing');
  const ourPathT = await getTranslations('OurPath');
  const timelineT = await getTranslations('Timeline.step');
  const whoWeAreT = await getTranslations('WhoWeAre');
  const teamT = await getTranslations('WhoWeAre.team');
  const contactT = await getTranslations('ContactUs');

  const timelineSteps = [1, 2, 3, 4, 5, 6].map((n) => ({
    title: timelineT(`${n}.title`),
    description: timelineT(`${n}.description`),
  }));

  const teamMembers = [
    { name: 'Dr. Moshe Facler, (Ph.D.)', title: 'CEO & Founder', image: mosheSrc, link: 'https://il.linkedin.com/in/dr-moshe-facler-ph-d-7644172bb' },
    ...[1, 2, 3, 4, 5, 6].map((n) => ({
      name: teamT(`${n}.name`),
      title: teamT(`${n}.title`),
    })),
  ];

  return (
    <>
      {/* ── Hero ─────────────────────────────────────────── */}
      <section
        id="hero"
        className="flex min-h-[80vh] flex-col items-center justify-start pt-12 text-center"
      >
        <RevoducateLogo
          variant="stacked"
          className="mb-10 max-w-xs sm:max-w-sm"
          priority
        />
        <h1 className="text-4xl font-bold tracking-tight text-revoducate-sage sm:text-4xl">
          {landingT('title')}
        </h1>
        <p className="mt-3 text-xl font-medium text-revoducate-coral">
          {landingT('subtitle')}
        </p>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-revoducate-charcoal sm:text-lg">
          {landingT('description')}
        </p>
      </section>

      <Separator />

      {/* ── Our Path ─────────────────────────────────────── */}
      <section id="our-path" className="scroll-mt-20 py-20">
        <h2 className="mb-12 text-center text-3xl font-bold text-revoducate-sage sm:text-4xl">
          {ourPathT('title')}
        </h2>
        <OurPathTimeline steps={timelineSteps} />
      </section>

      <Separator />

      {/* ── Who We Are ───────────────────────────────────── */}
      <section id="who-we-are" className="scroll-mt-20 py-20">
        <h2 className="mb-12 text-center text-3xl font-bold text-revoducate-sage sm:text-4xl">
          {whoWeAreT('title')}
        </h2>
        <TeamGrid members={teamMembers} />
      </section>

      <Separator />

      {/* ── Contact Us ───────────────────────────────────── */}
      <section id="contact-us" className="scroll-mt-20 py-20">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-revoducate-sage sm:text-4xl">
            {contactT('title')}
          </h2>
          <p className="mt-3 text-revoducate-charcoal">{contactT('subtitle')}</p>
        </div>
        <ContactForm />
      </section>
    </>
  );
}
