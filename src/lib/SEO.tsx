import React from 'react';
import { Helmet } from 'react-helmet-async';

type SEOProps = {
  title: string;
  description: string;
  path?: string;
  image?: string;
};

const SITE_URL = 'https://bidstudio.vercel.app';
const SITE_NAME = 'BID | Break It Down';
const DEFAULT_IMAGE = `${SITE_URL}/og-image.webp`;

export function SEO({ title, description, path = '/', image = DEFAULT_IMAGE }: SEOProps) {
  const url = `${SITE_URL.replace(/\/$/, '')}${path.startsWith('/') ? path : `/${path}`}`;

  const shortDesc = description.length > 155 ? `${description.slice(0, 152).trim()}…` : description;

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: title,
    description: shortDesc,
    url,
    image,
  };

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={shortDesc} />
      <link rel="canonical" href={url} />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={shortDesc} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={shortDesc} />
      <meta name="twitter:image" content={image} />

      {/* JSON-LD for this page */}
      <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
    </Helmet>
  );
}

export default SEO;
