import { Container } from '@/components/ui/Container';
import { ProgramCard } from '@/components/sections/ProgramCard';
import { LayananPengembangan } from '@/components/sections/LayananPengembangan';
import { PROGRAMS } from '@/lib/constants';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Program Pendidikan Kesetaraan PKBM SEHATI Cikarang',
  description: 'Pilihan program Paket A, Paket B, Paket C, Program Inklusif, dan TK Inklusif di PKBM SEHATI, Cikarang Utara, Kabupaten Bekasi.',
  keywords: ['program pendidikan', 'paket A', 'paket B', 'paket C', 'program inklusif', 'PKBM SEHATI', 'Cikarang'],
  openGraph: {
    title: 'Program Pendidikan Kesetaraan PKBM SEHATI Cikarang',
    description: 'Pilihan program Paket A, Paket B, Paket C, Program Inklusif, dan TK Inklusif di PKBM SEHATI, Cikarang Utara, Kabupaten Bekasi.',
    type: 'website',
  },
  alternates: {
    canonical: '/program',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Program Pendidikan Kesetaraan PKBM SEHATI Cikarang',
    description: 'Pilihan program Paket A, Paket B, Paket C, Program Inklusif, dan TK Inklusif di PKBM SEHATI, Cikarang Utara, Kabupaten Bekasi.',
  },
};

/**
 * Program List Page
 */
export default function ProgramPage() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': [
      {
        '@type': 'Question',
        'name': 'Berapa biaya pendaftaran?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'Biaya pendaftaran dirancang sesuai dengan kemampuan masyarakat. Hubungi kami untuk detail lebih lanjut tentang biaya pendaftaran dan cicilan bulanan.'
        }
      },
      {
        '@type': 'Question',
        'name': 'Apakah ada syarat usia tertentu?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'Tidak ada batasan usia maksimal untuk mendaftar. Paket A dimulai dari usia 6 tahun, Paket B dari 12 tahun, dan Paket C dari 15 tahun. Namun, bagi yang lebih tua tetap bisa mendaftar!'
        }
      },
      {
        '@type': 'Question',
        'name': 'Berapa lama program ini?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'Setiap paket dirancang untuk diselesaikan dalam 2 tahun dengan jadwal fleksibel (malam atau sore) sesuai kebutuhan Anda.'
        }
      },
      {
        '@type': 'Question',
        'name': 'Apakah sertifikat diakui?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'Ya! Sertifikat PKBM SEHATI adalah sertifikat resmi yang diakui oleh pemerintah dan dapat digunakan untuk melanjutkan ke jenjang pendidikan berikutnya atau melamar pekerjaan.'
        }
      },
      {
        '@type': 'Question',
        'name': 'Bagaimana proses pendaftaran?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'Proses pendaftaran mudah! Kunjungi kantor kami, isi formulir pendaftaran, dan Anda siap memulai. Tidak ada tes masuk yang rumit – kami menerima semua orang dengan motivasi belajar.'
        }
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      {/* Header */}
      <section className="bg-gray-50 pt-16 pb-12 md:pt-24 md:pb-16 lg:pt-32 lg:pb-20">
        <Container className="text-center">
          <span className="inline-block py-1 px-3 rounded-full bg-blue-100 text-[#1A63AB] text-sm font-semibold tracking-wider uppercase mb-4">
            Pilihan Program
          </span>
          <h1 className="mb-6 text-4xl md:text-5xl font-extrabold text-gray-900">Program Pendidikan</h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Pilih program yang sesuai dengan kebutuhan pendidikan Anda
          </p>
        </Container>
      </section>

      {/* Programs Grid */}
      <section className="py-16 md:py-24 bg-gray-50 relative -mt-8">
        <Container>
          <div className="flex flex-wrap justify-center gap-8">
            {PROGRAMS.map((program) => (
              <div key={program.id} className="w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.34rem)]">
                <ProgramCard {...program} />
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Program Layanan dan Pengembangan Section */}
      <LayananPengembangan />

      {/* Info Section */}
      <section className="bg-white py-16 md:py-24">
        <Container>
          <div className="mx-auto max-w-3xl">
            <div className="mb-10 text-center">
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
                Pertanyaan yang Sering Diajukan
              </h2>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="mb-2 text-lg font-semibold">
                  Berapa biaya pendaftaran?
                </h3>
                <p className="text-gray-700">
                  Biaya pendaftaran dirancang sesuai dengan kemampuan masyarakat.
                  Hubungi kami untuk detail lebih lanjut tentang biaya pendaftaran
                  dan cicilan bulanan.
                </p>
              </div>

              <div>
                <h3 className="mb-2 text-lg font-semibold">
                  Apakah ada syarat usia tertentu?
                </h3>
                <p className="text-gray-700">
                  Tidak ada batasan usia maksimal untuk mendaftar. Paket A
                  dimulai dari usia 6 tahun, Paket B dari 12 tahun, dan Paket C
                  dari 15 tahun. Namun, bagi yang lebih tua tetap bisa mendaftar!
                </p>
              </div>

              <div>
                <h3 className="mb-2 text-lg font-semibold">
                  Berapa lama program ini?
                </h3>
                <p className="text-gray-700">
                  Setiap paket dirancang untuk diselesaikan dalam 2 tahun dengan
                  jadwal fleksibel (malam atau sore) sesuai kebutuhan Anda.
                </p>
              </div>

              <div>
                <h3 className="mb-2 text-lg font-semibold">
                  Apakah sertifikat diakui?
                </h3>
                <p className="text-gray-700">
                  Ya! Sertifikat PKBM SEHATI adalah sertifikat resmi yang diakui
                  oleh pemerintah dan dapat digunakan untuk melanjutkan ke
                  jenjang pendidikan berikutnya atau melamar pekerjaan.
                </p>
              </div>

              <div>
                <h3 className="mb-2 text-lg font-semibold">
                  Bagaimana proses pendaftaran?
                </h3>
                <p className="text-gray-700">
                  Proses pendaftaran mudah! Kunjungi kantor kami, isi formulir
                  pendaftaran, dan Anda siap memulai. Tidak ada tes masuk yang
                  rumit – kami menerima semua orang dengan motivasi belajar.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
