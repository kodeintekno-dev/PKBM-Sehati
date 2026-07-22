import { Metadata } from 'next';
import { SITE_CONFIG } from './constants';

export function generateSiteMetadata(): Metadata {
  return {
    metadataBase: new URL(SITE_CONFIG.url),
    icons: {
      icon: '/images/logofinal.png?v=update-1',
    },
    title: {
      template: '%s | PKBM SEHATI Cikarang',
      default: 'PKBM SEHATI Cikarang – Pendidikan Kesetaraan Paket A, B, C & Inklusif',
    },
    description: 'PKBM SEHATI Cikarang menyelenggarakan pendidikan kesetaraan Paket A, B, C, program inklusif, dan TK Inklusif untuk semua kalangan di Cikarang Utara, Kabupaten Bekasi.',
    keywords: [
      'pendidikan kesetaraan',
      'PKBM Cikarang',
      'paket A',
      'paket B',
      'paket C',
      'sekolah inklusif Bekasi',
      'pendidikan non-formal Cikarang',
    ],
    robots: {
      index: true,
      follow: true,
    },
    openGraph: {
      type: 'website',
      locale: SITE_CONFIG.locale,
      url: SITE_CONFIG.url,
      title: 'PKBM SEHATI Cikarang – Pendidikan Kesetaraan Paket A, B, C & Inklusif',
      description: 'PKBM SEHATI Cikarang menyelenggarakan pendidikan kesetaraan Paket A, B, C, program inklusif, dan TK Inklusif untuk semua kalangan di Cikarang Utara, Kabupaten Bekasi.',
      siteName: SITE_CONFIG.name,
    },
    twitter: {
      card: 'summary_large_image',
      title: 'PKBM SEHATI Cikarang – Pendidikan Kesetaraan Paket A, B, C & Inklusif',
      description: 'PKBM SEHATI Cikarang menyelenggarakan pendidikan kesetaraan Paket A, B, C, program inklusif, dan TK Inklusif untuk semua kalangan di Cikarang Utara, Kabupaten Bekasi.',
    },
  };
}

export function generateBlogMetadata(
  title: string,
  description: string,
  image?: string,
  publishedDate?: string
): Metadata {
  return {
    title,
    description,
    keywords: ['artikel', 'pendidikan', 'tips'],
    openGraph: {
      title,
      description,
      type: 'article',
      publishedTime: publishedDate,
      images: image ? [{ url: image, width: 1200, height: 630 }] : [],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: image ? [image] : [],
    },
  };
}

/**
 * Generate JSON-LD structured data for Organization
 */
export function generateOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'EducationalOrganization',
    name: 'PKBM SEHATI',
    url: SITE_CONFIG.url,
    logo: `${SITE_CONFIG.url}/images/logofinal.png`,
    image: `${SITE_CONFIG.url}/images/logofinal.png`,
    description: 'Pusat Kegiatan Belajar Masyarakat penyelenggara pendidikan kesetaraan Paket A, B, C, dan program inklusif di Cikarang, Kabupaten Bekasi.',
    address: {
      '@type': 'PostalAddress',
      streetAddress: SITE_CONFIG.address.street,
      addressLocality: SITE_CONFIG.address.city,
      addressRegion: SITE_CONFIG.address.state,
      postalCode: SITE_CONFIG.address.postalCode,
      addressCountry: SITE_CONFIG.address.country,
    },
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer service',
      telephone: SITE_CONFIG.phones[0],
      email: SITE_CONFIG.email,
    },
    areaServed: 'ID',
    email: SITE_CONFIG.email,
    telephone: SITE_CONFIG.phones[0],
    sameAs: [
      'https://www.instagram.com/sehati.pkbm',
      'https://www.facebook.com/people/Pkbm-Sehati/pfbid0bDoehZznEc1M1B4wgpGaKwfQ17s7yEA3Yd64RCyF9FkVCqQBCwVwqEzsfJXXngL1l/',
      'https://www.tiktok.com/@pkbm.sehati1',
      'https://www.youtube.com/@pkbmsehati',
    ],
  };
}

/**
 * Generate JSON-LD structured data for BlogPosting
 */
export function generateBlogPostingSchema(
  title: string,
  description: string,
  publishedDate: string,
  author: string = SITE_CONFIG.name,
  image?: string
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: title,
    description,
    image: image ? `${SITE_CONFIG.url}${image}` : undefined,
    datePublished: publishedDate,
    author: {
      '@type': 'Organization',
      name: author,
      url: SITE_CONFIG.url,
    },
  };
}
