'use client';

import { useState } from 'react';

export function SejarahText() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="space-y-4 text-gray-700 text-base md:text-lg leading-relaxed">
      <p>
        PKBM SEHATI dirintis pada tahun 2019 dan memperoleh Izin Operasional pada tahun 2022. Berawal dari kepedulian terhadap pentingnya akses pendidikan bagi semua, PKBM SEHATI hadir sebagai wadah pembelajaran yang memberikan kesempatan kepada setiap individu untuk memperoleh pendidikan yang layak, berkualitas, dan sesuai dengan kebutuhannya.
      </p>

      {!isExpanded ? (
        <div className="relative">
          <p className="line-clamp-2 md:line-clamp-3">
            Sejak awal berdiri, PKBM SEHATI memiliki komitmen untuk mendukung peserta didik dari berbagai latar belakang, termasuk anak berkebutuhan khusus, anak yang mengalami hambatan dalam belajar, serta masyarakat yang belum memiliki kesempatan menyelesaikan pendidikan formal. Dengan semangat inklusi dan kesetaraan, PKBM SEHATI berupaya menciptakan lingkungan belajar yang ramah, aman, dan menghargai keberagaman.
          </p>
          <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-[#F0F9FF] to-transparent"></div>
          <button
            onClick={() => setIsExpanded(true)}
            className="text-[#1A63AB] font-semibold hover:underline mt-2 inline-block relative z-10"
          >
            Baca Selengkapnya
          </button>
        </div>
      ) : (
        <div className="space-y-4">
          <p>
            Sejak awal berdiri, PKBM SEHATI memiliki komitmen untuk mendukung peserta didik dari berbagai latar belakang, termasuk anak berkebutuhan khusus, anak yang mengalami hambatan dalam belajar, serta masyarakat yang belum memiliki kesempatan menyelesaikan pendidikan formal. Dengan semangat inklusi dan kesetaraan, PKBM SEHATI berupaya menciptakan lingkungan belajar yang ramah, aman, dan menghargai keberagaman.
          </p>
          <p>
            Seiring berjalannya waktu, PKBM SEHATI terus berkembang baik dari sisi program maupun layanan. Selain menyelenggarakan Program Kesetaraan Paket A, Paket B, dan Paket C, PKBM SEHATI juga mengembangkan Program Pendidikan Inklusif yang memberikan layanan pembelajaran sesuai dengan karakteristik dan kebutuhan peserta didik. Pendekatan pembelajaran yang digunakan mengedepankan prinsip pembelajaran berdiferensiasi sehingga setiap peserta didik dapat belajar sesuai dengan kemampuan dan potensinya.
          </p>
          <p>
            Sebagai bentuk komitmen dalam mendukung tumbuh kembang peserta didik secara menyeluruh, PKBM SEHATI juga menghadirkan Unit Layanan Disabilitas (ULD) yang meliputi layanan Terapi Wicara, Okupasi Terapi, dan Fisioterapi. Selain itu, peserta didik juga mendapatkan kesempatan untuk mengembangkan bakat, minat, dan keterampilan melalui berbagai program pengembangan diri seperti Angklung Inklusif Sehati, keterampilan vokasi, pembelajaran digital, serta berbagai kegiatan yang mendukung kemandirian dan kesiapan hidup bermasyarakat.
          </p>
          <p>
            Hingga saat ini, PKBM SEHATI terus berupaya menjadi lembaga pendidikan yang profesional, inovatif, dan inklusif. Dengan dukungan tenaga pendidik, orang tua, masyarakat, dan berbagai mitra kerja, PKBM SEHATI berkomitmen untuk memberikan layanan pendidikan yang bermutu serta menjadi bagian dari solusi dalam mewujudkan masa depan yang lebih baik bagi setiap peserta didik.
          </p>
          <p className="font-bold text-[#1A63AB] pt-2">
            PKBM SEHATI<br />
            Solusi untuk Masa Depan Lebih Baik
          </p>
          <button
            onClick={() => setIsExpanded(false)}
            className="text-[#1A63AB] font-semibold hover:underline mt-2 inline-block"
          >
            Tampilkan Lebih Sedikit
          </button>
        </div>
      )}
    </div>
  );
}
