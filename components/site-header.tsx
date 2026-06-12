'use client';

import { RevoducateLogo } from '#/components/revoducate-logo';
import clsx from 'clsx';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const navItems = [
  { href: '#hero', sectionId: 'hero', labelKey: 'home' as const },
  { href: '#our-path', sectionId: 'our-path', labelKey: 'ourPath' as const },
  { href: '#who-we-are', sectionId: 'who-we-are', labelKey: 'whoWeAre' as const },
  { href: '#contact-us', sectionId: 'contact-us', labelKey: 'contactUs' as const },
];

export function SiteHeader() {
  const t = useTranslations('Nav');
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    navItems.forEach(({ sectionId }) => {
      const el = document.getElementById(sectionId);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(sectionId);
        },
        { threshold: 0.3, rootMargin: '-80px 0px 0px 0px' },
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/90 backdrop-blur-sm">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <a href="#hero" className="shrink-0">
          <RevoducateLogo variant="horizontal" className="max-h-12" priority />
        </a>

        <nav className="flex items-center gap-6">
          {navItems.map(({ href, sectionId, labelKey }) => (
            <a
              key={sectionId}
              href={href}
              className={clsx(
                'text-sm font-medium transition-colors',
                activeSection === sectionId
                  ? 'text-revoducate-sage'
                  : 'text-revoducate-charcoal hover:text-revoducate-sage',
              )}
            >
              {t(labelKey)}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
