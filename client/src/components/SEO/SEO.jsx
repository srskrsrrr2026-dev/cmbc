// src/components/SEO/SEO.jsx
import React from "react";
import { Helmet } from "react-helmet-async";

const SEO = ({ title, description, canonical, keywords, jsonLd }) => {
  const siteUrl = "https://www.cmbchealthcareco.in";
  const fullCanonical = canonical ? `${siteUrl}${canonical}` : siteUrl;
  const defaultTitle =
    "Buy Medical Books, Stethoscopes & Nursing Supplies Online Chennai | CMBC Healthcare Co.";
  const defaultDescription =
    "CMBC Healthcare Co. in Chrompet, Chennai offers MBBS, BDS, Nursing textbooks, Doctor Aprons, Stethoscopes, BP Monitors, and Lab Manuals. Best price & fast local delivery.";

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title || defaultTitle}</title>
      <meta name="title" content={title || defaultTitle} />
      <meta name="description" content={description || defaultDescription} />
      {keywords && <meta name="keywords" content={keywords} />}
      <link rel="canonical" href={fullCanonical} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={fullCanonical} />
      <meta property="og:title" content={title || defaultTitle} />
      <meta property="og:description" content={description || defaultDescription} />
      <meta property="og:image" content={`${siteUrl}/og-image.jpg`} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={fullCanonical} />
      <meta name="twitter:title" content={title || defaultTitle} />
      <meta name="twitter:description" content={description || defaultDescription} />
      <meta name="twitter:image" content={`${siteUrl}/og-image.jpg`} />

      {/* Structured Data / JSON-LD */}
      {jsonLd && (
        <script type="application/ld+json">
          {JSON.stringify(jsonLd)}
        </script>
      )}
    </Helmet>
  );
};

export default SEO;