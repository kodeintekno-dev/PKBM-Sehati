import { Container } from '@/components/ui/Container';
import { HeroSection } from '@/components/sections/HeroSection';
import { ProgramCard } from '@/components/sections/ProgramCard';
import { PROGRAMS } from '@/lib/constants';
import Link from 'next/link';
import Image from 'next/image';

import { VisiMisiSection } from '@/components/sections/VisiMisiSection';

/**
 * Homepage
 * Main landing page with hero, programs, and latest articles
 */
export default function Home() {

  return (
    <>
      {/* Hero Section */}
      <HeroSection />

      {/* Visi & Misi Section */}
      <VisiMisiSection />

      {/* Section Penjelasan Pembelajaran */}
      <section className="py-16 md:py-24 bg-white relative overflow-hidden">
        <Container>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Teks Penjelasan */}
            <div className="space-y-6">
              <span className="inline-block py-1 px-3 rounded-full bg-blue-100 text-[#1A63AB] text-sm font-semibold tracking-wider uppercase mb-2">
                Metode Pembelajaran
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight leading-tight">
                Pembelajaran Fleksibel, Nyaman, dan Terarah
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                PKBM Sehati berkomitmen menyediakan lingkungan belajar non-formal yang inklusif dan ramah bagi semua kalangan. Kami menyusun metode pembelajaran adaptif yang memadukan materi akademis wajib dengan pelatihan keterampilan praktis (life skills), membantu setiap warga belajar meraih impian mereka tanpa terhalang batasan usia atau waktu.
              </p>
              
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-blue-100 text-[#1A63AB] flex items-center justify-center shrink-0 mt-1">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path></svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Jadwal Fleksibel</h4>
                    <p className="text-gray-600 text-sm">Dirancang khusus agar warga belajar dapat membagi waktu dengan pekerjaan atau kesibukan lainnya.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-blue-100 text-[#1A63AB] flex items-center justify-center shrink-0 mt-1">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path></svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Fasilitas & Praktek Kerja Nyata</h4>
                    <p className="text-gray-600 text-sm">Didukung sarana prasarana yang memadai dan pelatihan keterampilan untuk mempersiapkan masa depan.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-blue-100 text-[#1A63AB] flex items-center justify-center shrink-0 mt-1">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path></svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Pendidik Berpengalaman & Peduli</h4>
                    <p className="text-gray-600 text-sm">Proses belajar dibimbing oleh tutor yang memahami kebutuhan pendidikan non-formal dan perkembangan karakter warga belajar.</p>
                  </div>
                </li>
              </ul>
            </div>
            
            {/* Gambar Penjelasan */}
            <div className="w-full rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-gray-50 flex flex-col">
              <Image
                src="/images/penjelasan.jpeg"
                alt="Penjelasan Pembelajaran PKBM Sehati"
                width={0}
                height={0}
                sizes="100vw"
                className="w-full h-auto"
                priority
              />
            </div>
          </div>
        </Container>
      </section>

      {/* Programs Section */}
      <section className="bg-gray-50 py-16 md:py-24">
        <Container>
          <div className="mb-14 text-center">
            <span className="inline-block py-1 px-3 rounded-full bg-blue-100 text-[#1A63AB] text-sm font-semibold tracking-wider uppercase mb-4">
              Layanan Kami
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">Program Unggulan</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Pilihan program pendidikan kesetaraan yang disesuaikan dengan kebutuhan masa depan warga belajar
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-8">
            {PROGRAMS.map((program) => (
              <div key={program.id} className="w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.34rem)]">
                <ProgramCard {...program} />
              </div>
            ))}
          </div>
        </Container>
      </section>



      {/* CTA Section */}
      <section className="relative overflow-hidden py-20 text-center text-white md:py-32">
        {/* Background Image */}
        <Image
          src="/images/beranda3.png"
          alt="CTA Background"
          fill
          priority
          className="absolute inset-0 object-cover"
        />
        
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-[#093C7D]/80 backdrop-blur-sm"></div>
        
        {/* Content */}
        <Container className="relative z-10 max-w-3xl mx-auto">
          <h2 className="mb-6 text-4xl md:text-5xl font-extrabold leading-tight">
            Siap Bergabung Dengan Kami?
          </h2>
          <p className="mb-10 text-xl text-blue-100 leading-relaxed">
            Mari mulai perjalanan pendidikan Anda bersama PKBM Sehati. Tim kami siap membantu proses pendaftaran Anda.
          </p>
          <Link
            href="/kontak"
            className="inline-block rounded-xl bg-white px-8 py-3 text-lg font-bold text-[#1A63AB] shadow-xl transition-all hover:bg-[#F0F9FF] hover:-translate-y-0.5 hover:shadow-2xl"
          >
            Hubungi Kami Sekarang
          </Link>
        </Container>
      </section>
    </>
  );
}
