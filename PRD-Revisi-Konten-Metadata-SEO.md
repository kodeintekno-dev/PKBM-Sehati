# PRD: Revisi Konten, Metadata & Data Lokal
**Situs:** pkbmsehaticikarang.sch.id
**Untuk:** Pemilik Situs / Tim Konten / Developer Front-End
**Tidak termasuk:** perubahan DNS, redirect domain, robots.txt, sitemap, verifikasi Search Console (lihat dokumen terpisah: *PRD-Perbaikan-Teknis-SEO-DNS.md*)
**Prioritas keseluruhan:** Tinggi — mendukung agar saat situs mulai ter-index, kontennya sudah optimal

---

## 1. Latar Belakang

Selain masalah indexing yang ditangani di level DNS/hosting, audit SEO menemukan beberapa masalah di level konten dan metadata yang menyebabkan:
- Preview link di media sosial (WhatsApp, Facebook, Twitter) tidak spesifik per halaman.
- Kata kunci lokal ("Cikarang") kurang dimanfaatkan padahal sudah ada di nama domain/brand.
- Data keyword mengandung kesalahan (lokasi yang tidak relevan).
- Tidak ada structured data yang membantu Google memahami identitas lembaga.
- Data alamat (NAP) tidak konsisten di berbagai platform, membingungkan calon siswa dan melemahkan sinyal SEO lokal.

## 2. Tujuan

1. Memastikan setiap halaman punya metadata (title, description, og, twitter) yang unik dan relevan secara lokal.
2. Membersihkan data keyword yang salah.
3. Menambahkan structured data agar Google bisa menampilkan info lembaga dengan akurat.
4. Menyamakan data NAP (Nama, Alamat, Telepon) di semua platform online.
5. Melengkapi kehadiran di Google Business Profile.

## 3. Ruang Lingkup Pekerjaan

### 3.1 Revisi Title & Meta Description per Halaman
**Masalah:** Meta description terlalu umum ("Kabupaten Bekasi") dan tidak menyebut "Cikarang" yang justru kata kunci lokal dengan kompetisi lebih rendah.

**Tindakan — terapkan pola ini ke semua halaman:**

| Halaman | Title Baru | Meta Description Baru |
|---|---|---|
| Homepage (`/`) | PKBM SEHATI Cikarang – Pendidikan Kesetaraan Paket A, B, C & Inklusif | PKBM SEHATI Cikarang menyelenggarakan pendidikan kesetaraan Paket A, B, C, program inklusif, dan TK Inklusif untuk semua kalangan di Cikarang Utara, Kabupaten Bekasi. |
| Tentang (`/tentang`) | Tentang PKBM SEHATI Cikarang \| Sejarah, Akreditasi & Visi Misi | Sejarah singkat, akreditasi B (Baik) dari BAN PAUD/PNF, serta visi misi PKBM SEHATI, lembaga pendidikan kesetaraan inklusif di Cikarang. |
| Program (`/program`) | Program Pendidikan Kesetaraan PKBM SEHATI Cikarang | Pilihan program Paket A, Paket B, Paket C, Program Inklusif, dan TK Inklusif di PKBM SEHATI, Cikarang Utara, Kabupaten Bekasi. |
| Paket A | Paket A Setara SD di PKBM SEHATI Cikarang | Program pendidikan kesetaraan setara SD (Paket A) di Cikarang, fleksibel dan sesuai kebutuhan peserta didik. |
| Paket B | Paket B Setara SMP di PKBM SEHATI Cikarang | Program pendidikan kesetaraan setara SMP (Paket B), durasi 2 tahun, di PKBM SEHATI Cikarang. |
| Paket C | Paket C Setara SMA di PKBM SEHATI Cikarang | Program pendidikan kesetaraan setara SMA (Paket C) untuk melanjutkan pendidikan atau dunia kerja, di Cikarang. |
| Program Inklusif | Program Inklusif untuk Anak Berkebutuhan Khusus \| PKBM SEHATI Cikarang | Layanan pendidikan inklusif di Cikarang bagi peserta didik berkebutuhan khusus, disesuaikan kemampuan dan potensi masing-masing. |
| TK Inklusif | TK Inklusif Sehati Cikarang \| PAUD Ramah Anak Berkebutuhan Khusus | Pendidikan anak usia dini inklusif di Cikarang untuk anak reguler maupun berkebutuhan khusus, belajar sambil bermain. |
| Gallery | Galeri Kegiatan PKBM SEHATI Cikarang | Dokumentasi kegiatan belajar, fasilitas, dan suasana PKBM SEHATI di Cikarang Utara, Kabupaten Bekasi. |
| Kontak | Kontak & Pendaftaran PKBM SEHATI Cikarang | Hubungi PKBM SEHATI Cikarang untuk info pendaftaran Paket A, B, C, program inklusif, dan TK Inklusif. |

**Kriteria selesai:** Setiap halaman punya title dan meta description unik, menyebut "Cikarang" secara alami, dan tidak duplikat dengan halaman lain.

### 3.2 Dinamiskan og:title, og:description, twitter:title, twitter:description
**Masalah:** Saat ini semua halaman punya nilai og/twitter yang identik dengan homepage, tidak mengikuti isi halaman.

**Tindakan:** Ikat og:title/og:description/twitter:title/twitter:description ke metadata masing-masing halaman (pakai nilai dari tabel 3.1, atau versi yang dipersingkat untuk twitter jika perlu). Jika situs berbasis Next.js, biasanya diatur lewat fungsi `generateMetadata()` (App Router) atau `next/head` per halaman (Pages Router) — minta developer front-end menerapkan ini per-route, bukan hardcode di layout global.

**Kriteria selesai:** Saat link tiap halaman dibagikan ke WhatsApp/Facebook, preview yang muncul relevan dengan halaman tersebut (judul dan deskripsi tidak sama semua).

### 3.3 Bersihkan Meta Keywords
**Masalah:** Mengandung kata "kupang" yang tidak relevan dengan lokasi lembaga (Cikarang/Bekasi).

**Tindakan:** Ganti isi meta-keywords di semua halaman dari:
```
pendidikan,non-formal,kesetaraan,kupang,paket-a,paket-b,paket-c
```
menjadi:
```
pendidikan kesetaraan, PKBM Cikarang, paket A, paket B, paket C, sekolah inklusif Bekasi, pendidikan non-formal Cikarang
```

**Kriteria selesai:** Tidak ada lagi referensi ke lokasi/kata kunci yang tidak relevan di meta keywords manapun.

### 3.4 Tambahkan Structured Data (Schema.org)
**Masalah:** Tidak ada structured data yang membantu Google mengenali PKBM SEHATI sebagai lembaga pendidikan resmi dengan alamat, kontak, dan akreditasi yang jelas.

**Tindakan:** Tambahkan JSON-LD `EducationalOrganization` di `<head>` homepage (idealnya di root layout agar konsisten di semua halaman):

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  "name": "PKBM SEHATI",
  "url": "https://www.pkbmsehaticikarang.sch.id",
  "logo": "https://www.pkbmsehaticikarang.sch.id/images/logofinal.png",
  "description": "Pusat Kegiatan Belajar Masyarakat penyelenggara pendidikan kesetaraan Paket A, B, C, dan program inklusif di Cikarang, Kabupaten Bekasi.",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "[ISI ALAMAT RESMI SETELAH POIN 3.5 SELESAI]",
    "addressLocality": "Cikarang Utara",
    "addressRegion": "Jawa Barat",
    "postalCode": "[ISI JIKA ADA]",
    "addressCountry": "ID"
  },
  "telephone": "+62-813-8570-0823",
  "email": "pkbmsehati25@gmail.com",
  "sameAs": [
    "https://www.instagram.com/sehati.pkbm",
    "https://www.facebook.com/people/Pkbm-Sehati/pfbid0bDoehZznEc1M1B4wgpGaKwfQ17s7yEA3Yd64RCyF9FkVCqQBCwVwqEzsfJXXngL1l/",
    "https://www.tiktok.com/@pkbm.sehati1",
    "https://www.youtube.com/@pkbmsehati"
  ]
}
</script>
```

**Catatan:** Jangan implementasikan dulu sebelum poin 3.5 (verifikasi alamat resmi) selesai, supaya tidak menambah data yang salah.

**Kriteria selesai:** Schema tervalidasi tanpa error di [Google Rich Results Test](https://search.google.com/test/rich-results), dan tampil di seluruh halaman.

### 3.5 Verifikasi & Samakan Data NAP (Nama, Alamat, Telepon)
**Masalah:** Alamat berbeda-beda ditemukan di tiga sumber:
- Situs sendiri: *Perum CINITY Blok E1A No.12D, Cikarang Utara*
- Dapodik (data resmi pemerintah): *Perumahan Cinity Cluster Kalyana Blok EO...*
- Direktori Lokari: *Perum Grand Cikarang City, Blok F24, No. 16-17...*

**Tindakan:**
1. Tentukan satu alamat paling akurat & terkini (idealnya samakan dengan yang terdaftar di Dapodik, karena itu data resmi Kemendikdasmen).
2. Update alamat di footer/halaman Kontak situs.
3. Update di seluruh direktori eksternal yang bisa diklaim/diedit (Lokari, Eventkampus, dll).

**Kriteria selesai:** Alamat identik (format boleh sedikit berbeda, tapi isi—nama jalan, blok, nomor—harus sama) di situs sendiri, Google Business Profile, dan direktori-direktori utama.

### 3.6 Buat / Klaim Google Business Profile
**Masalah:** Tidak ditemukan indikasi Google Business Profile yang terhubung dengan situs.

**Tindakan:**
1. Buat/klaim listing di [Google Business Profile](https://business.google.com) dengan kategori "School" atau "Adult Education School".
2. Isi dengan NAP yang sudah difinalkan di poin 3.5.
3. Tambahkan foto (logo, fasilitas, kegiatan belajar), jam operasional, dan link ke website.
4. Sematkan embed Google Maps di halaman Kontak situs, mengarah ke lokasi yang sama.

**Kriteria selesai:** Listing Google Business Profile aktif, terverifikasi, dan NAP-nya cocok dengan situs.

## 4. Yang TIDAK termasuk di scope ini
- Redirect domain www/non-www, robots.txt, sitemap.xml, verifikasi Search Console → lihat *PRD-Perbaikan-Teknis-SEO-DNS.md*.

## 5. Prioritas Pengerjaan
1. **P0** — 3.5 (verifikasi alamat resmi) — jadi prasyarat untuk 3.4 dan 3.6.
2. **P0** — 3.1 & 3.3 (title/description/keywords) — dampak langsung ke relevansi kata kunci lokal.
3. **P1** — 3.2 (og/twitter dinamis) — perbaiki kualitas share ke sosial media.
4. **P1** — 3.4 (structured data) — setelah alamat final.
5. **P1** — 3.6 (Google Business Profile) — penting untuk local SEO, tidak bergantung pada developer.

## 6. Catatan Tambahan
Item 3.1–3.4 kemungkinan butuh akses ke kode/CMS situs (koordinasi dengan developer front-end kontennya). Item 3.5 dan 3.6 bisa langsung dikerjakan pemilik situs tanpa akses teknis sama sekali.
