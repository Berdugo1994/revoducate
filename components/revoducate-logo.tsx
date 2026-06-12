import clsx from 'clsx';
import Image from 'next/image';
import logoStackedSrc from '@/public/logo.png';
import logoHorizontalSrc from '@/public/revoducate-logo-horizontal.png';

type RevoducateLogoProps = {
  variant?: 'stacked' | 'horizontal';
  className?: string;
  priority?: boolean;
};

const logoConfig = {
  stacked: {
    src: logoStackedSrc,
    width: 320,
    height: 320,
    alt: 'REVODUCATE — Learning Is Personal',
  },
  horizontal: {
    src: logoHorizontalSrc,
    width: 200,
    height: 60,
    alt: 'REVODUCATE',
  },
} as const;

export function RevoducateLogo({
  variant = 'stacked',
  className,
  priority = false,
}: RevoducateLogoProps) {
  const config = logoConfig[variant];

  return (
    <Image
      src={config.src}
      alt={config.alt}
      width={config.width}
      height={config.height}
      priority={priority}
      className={clsx('h-auto w-auto', className)}
    />
  );
}
