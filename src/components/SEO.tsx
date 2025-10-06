import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: 'website' | 'article' | 'product';
  article?: {
    publishedTime?: string;
    modifiedTime?: string;
    author?: string;
    section?: string;
    tags?: string[];
  };
  structuredData?: object;
}

const SEO = ({
  title = 'Cazpian - AI-Powered Data Analytics Platform',
  description = 'Transform your data analytics with Cazpian. Modern data lakehouse platform built on open standards with AI-driven performance, enterprise security, and lightning-fast queries.',
  keywords = 'data analytics, lakehouse, AI, Apache Iceberg, data platform, business intelligence, data science, cloud analytics, enterprise data',
  image = '/og-image.png',
  url = 'https://cazpian.ai',
  type = 'website',
  article,
  structuredData,
}: SEOProps) => {
  const siteTitle = 'Cazpian';
  const fullTitle = title === siteTitle ? title : `${title} | ${siteTitle}`;
  const canonicalUrl = url.startsWith('http') ? url : `https://cazpian.ai${url}`;
  const imageUrl = image.startsWith('http') ? image : `https://cazpian.ai${image}`;

  // Default structured data for organization
  const defaultStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Cazpian',
    url: 'https://cazpian.ai',
    logo: 'https://cazpian.ai/cazpian_logo.svg',
    description: 'AI-Powered Data Analytics Platform',
    sameAs: [
      'https://www.linkedin.com/company/cazpian',
      'https://twitter.com/cazpian',
      'https://github.com/cazpian',
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+1-555-123-4567',
      contactType: 'Customer Service',
      email: 'info@cazpian.ai',
      areaServed: 'US',
      availableLanguage: ['English'],
    },
  };

  const finalStructuredData = structuredData || defaultStructuredData;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content="Cazpian" />
      <meta property="og:locale" content="en_US" />

      {/* Article specific meta tags */}
      {type === 'article' && article && (
        <>
          {article.publishedTime && (
            <meta property="article:published_time" content={article.publishedTime} />
          )}
          {article.modifiedTime && (
            <meta property="article:modified_time" content={article.modifiedTime} />
          )}
          {article.author && <meta property="article:author" content={article.author} />}
          {article.section && <meta property="article:section" content={article.section} />}
          {article.tags?.map((tag) => (
            <meta key={tag} property="article:tag" content={tag} />
          ))}
        </>
      )}

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={canonicalUrl} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />
      <meta name="twitter:site" content="@cazpian" />
      <meta name="twitter:creator" content="@cazpian" />

      {/* Additional Meta Tags */}
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <meta name="googlebot" content="index, follow" />
      <meta name="bingbot" content="index, follow" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="format-detection" content="telephone=no" />
      <meta name="theme-color" content="#6366f1" />
      
      {/* PWA Meta Tags */}
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="apple-mobile-web-app-title" content="Cazpian" />

      {/* Structured Data / JSON-LD */}
      <script type="application/ld+json">
        {JSON.stringify(finalStructuredData)}
      </script>
    </Helmet>
  );
};

export default SEO;

