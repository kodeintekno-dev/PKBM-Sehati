import { Container } from '@/components/ui/Container';
import { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Galeri Kegiatan PKBM SEHATI Cikarang',
  description: 'Dokumentasi kegiatan belajar, fasilitas, dan suasana PKBM SEHATI di Cikarang Utara, Kabupaten Bekasi.',
  keywords: ['galeri', 'kegiatan', 'PKBM SEHATI', 'Cikarang', 'dokumentasi'],
  openGraph: {
    title: 'Galeri Kegiatan PKBM SEHATI Cikarang',
    description: 'Dokumentasi kegiatan belajar, fasilitas, dan suasana PKBM SEHATI di Cikarang Utara, Kabupaten Bekasi.',
    type: 'website',
  },
  alternates: {
    canonical: '/gallery',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Galeri Kegiatan PKBM SEHATI Cikarang',
    description: 'Dokumentasi kegiatan belajar, fasilitas, dan suasana PKBM SEHATI di Cikarang Utara, Kabupaten Bekasi.',
  },
};

/**
 * Gallery Page
 * Photo documentation of PKBM SEHATI activities
 */
export default function GalleryPage() {
  // Gallery items with actual photos
  const galleryItems = [
    { id: 1, image: '/images/g1.jpeg', alt: 'Gallery Image 1' },
    { id: 2, image: '/images/g2.jpeg', alt: 'Gallery Image 2' },
    { id: 3, image: '/images/g3.jpeg', alt: 'Gallery Image 3' },
    { id: 4, image: '/images/g4.jpeg', alt: 'Gallery Image 4' },
    { id: 5, image: '/images/g5.jpeg', alt: 'Gallery Image 5' },
    { id: 6, image: '/images/g6.jpeg', alt: 'Gallery Image 6' },
    { id: 7, image: '/images/g7.jpeg', alt: 'Gallery Image 7' },
    { id: 8, image: '/images/g8.jpeg', alt: 'Gallery Image 8' },
    { id: 9, image: '/images/g9.jpeg', alt: 'Gallery Image 9' },
    { id: 10, image: '/images/g10.jpeg', alt: 'Gallery Image 10' },
    { id: 11, image: '/images/g11.jpeg', alt: 'Gallery Image 11' },
    { id: 12, image: '/images/g12.jpeg', alt: 'Gallery Image 12' },
    { id: 13, image: '/images/g13.jpeg', alt: 'Gallery Image 13' },
    { id: 14, image: '/images/g14.jpeg', alt: 'Gallery Image 14' },
    { id: 15, image: '/images/15.jpeg', alt: 'Gallery Image 15' },
    { id: 16, image: '/images/g16.jpeg', alt: 'Gallery Image 16' },
    { id: 17, image: '/images/g17.jpeg', alt: 'Gallery Image 17' },
    { id: 18, image: '/images/g18.png', alt: 'Gallery Image 18' },
    { id: 19, image: '/images/g19.png', alt: 'Gallery Image 19' },
    { id: 20, image: '/images/g20.png', alt: 'Gallery Image 20' },
    { id: 21, image: '/images/g21.jpeg', alt: 'Gallery Image 21' },
    { id: 22, image: '/images/g22.jpeg', alt: 'Gallery Image 22' },
    { id: 23, image: '/images/g23.jpeg', alt: 'Gallery Image 23' },
    { id: 24, image: '/images/g24.jpeg', alt: 'Gallery Image 24' },
    { id: 25, image: '/images/g25.jpeg', alt: 'Gallery Image 25' },
    { id: 26, image: '/images/g26.jpeg', alt: 'Gallery Image 26' },
    { id: 27, image: '/images/g27.jpeg', alt: 'Gallery Image 27' },
    { id: 28, image: '/images/g28.jpeg', alt: 'Gallery Image 28' },
    { id: 29, image: '/images/g29.jpeg', alt: 'Gallery Image 29' },
    { id: 30, image: '/images/g30.jpeg', alt: 'Gallery Image 30' },
  ];

  return (
    <>
      {/* Header */}
      <section className="bg-gray-50 pt-16 pb-12 md:pt-24 md:pb-16 lg:pt-32 lg:pb-20">
        <Container className="text-center">
          <span className="inline-block py-1 px-3 rounded-full bg-blue-100 text-[#1A63AB] text-sm font-semibold tracking-wider uppercase mb-4">
            Dokumentasi
          </span>
          <h1 className="mb-6 text-4xl md:text-5xl font-extrabold text-gray-900">Gallery Kegiatan</h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Dokumentasi foto kegiatan dan pembelajaran di PKBM SEHATI
          </p>
        </Container>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 md:py-24 relative -mt-8">
        <Container>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {galleryItems.map((item) => (
              <div
                key={item.id}
                className="group relative overflow-hidden rounded-2xl shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] transition-all hover:-translate-y-1 hover:shadow-[0_8px_30px_-4px_rgba(0,0,0,0.1)] border border-gray-100 bg-white"
              >
                <div className="relative h-64 w-full overflow-hidden bg-gray-200">
                  <Image
                    src={item.image}
                    alt={item.alt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Note about adding more photos */}
          <div className="mt-12 rounded-lg bg-[#F0F9FF] p-6 text-center">
            <p className="text-gray-700">
              Galeri kami terus berkembang. Untuk menambahkan foto dokumentasi lainnya, 
              silakan hubungi kami melalui halaman{' '}
              <a href="/kontak" className="font-semibold text-[#1A63AB] hover:underline">
                Kontak
              </a>
              .
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}
