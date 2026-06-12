import type { NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin';

const isGithubPages = process.env.GITHUB_PAGES === 'true';

const nextConfig: NextConfig = isGithubPages
  ? {
      output: 'export',
      basePath: '/revoducate',
      images: { unoptimized: true },
    }
  : {
      cacheComponents: true,
      partialPrefetching: true,
      experimental: { inlineCss: true },
    };

const withNextIntl = createNextIntlPlugin();

export default withNextIntl(nextConfig);
