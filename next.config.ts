import createNextIntlPlugin from 'next-intl/plugin';

const nextConfig = {
  cacheComponents: true,
  partialPrefetching: true,
  experimental: {
    inlineCss: true,
  },
};

const withNextIntl = createNextIntlPlugin();

export default withNextIntl(nextConfig);
