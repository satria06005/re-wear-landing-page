const fs = require('fs');

const dir = 'c:/Users/testdev/.gemini/antigravity-ide/scratch/re-wear-landing-page/speed-and-schema-audit';

const img1Base64 = 'data:image/png;base64,' + fs.readFileSync(`${dir}/lighthouse_real_comparison.png`).toString('base64');
const img2Base64 = 'data:image/png;base64,' + fs.readFileSync(`${dir}/tangkapan_layar_validasi_schema.png`).toString('base64');
const img3Base64 = 'data:image/png;base64,' + fs.readFileSync(`${dir}/google_rich_results_test.png`).toString('base64');

console.log('Img1 base64 length:', img1Base64.length);
console.log('Img2 base64 length:', img2Base64.length);
console.log('Img3 base64 length:', img3Base64.length);

const htmlContent = `<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <title>Laporan On-Page SEO, Speed Optimization &amp; Schema Markup - RE-WEAR</title>
    <style>
        @page {
            size: A4;
            margin: 14mm 14mm 14mm 14mm;
        }
        @media print {
            @page { margin: 14mm; }
            body { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
            .no-print { display: none !important; }
        }
        body {
            font-family: 'Segoe UI', Arial, -apple-system, BlinkMacSystemFont, sans-serif;
            color: #1f2937;
            line-height: 1.5;
            font-size: 8.8pt;
            margin: 0;
            padding: 0;
            background: #ffffff;
        }
        .header {
            border-bottom: 2.5px solid #111827;
            padding-bottom: 6px;
            margin-bottom: 12px;
        }
        .header h1 {
            font-size: 14.5pt;
            margin: 0 0 2px 0;
            color: #0f172a;
            font-weight: 800;
            letter-spacing: -0.3px;
        }
        .header .subtitle {
            font-size: 9.3pt;
            color: #475569;
            font-weight: 600;
        }
        .meta-table {
            width: 100%;
            border-collapse: collapse;
            margin-bottom: 12px;
            background: #f8fafc;
            border: 1px solid #e2e8f0;
        }
        .meta-table td {
            padding: 4px 8px;
            border: 1px solid #e2e8f0;
            font-size: 8.5pt;
        }
        .meta-table td.label {
            width: 20%;
            font-weight: 600;
            color: #334155;
            background: #f1f5f9;
        }
        h2 {
            font-size: 10.8pt;
            color: #0f172a;
            border-bottom: 1px solid #cbd5e1;
            padding-bottom: 2px;
            margin-top: 11px;
            margin-bottom: 5px;
            font-weight: 700;
        }
        h3 {
            font-size: 9.3pt;
            color: #1e293b;
            margin-top: 7px;
            margin-bottom: 3px;
            font-weight: 700;
        }
        p {
            margin: 0 0 6px 0;
            text-align: justify;
        }
        ul, ol {
            margin: 0 0 6px 0;
            padding-left: 18px;
        }
        li {
            margin-bottom: 2px;
        }
        table.data-table {
            width: 100%;
            border-collapse: collapse;
            margin: 6px 0 10px 0;
            font-size: 8.2pt;
        }
        table.data-table th, table.data-table td {
            border: 1px solid #cbd5e1;
            padding: 5px 8px;
            text-align: left;
        }
        table.data-table th {
            background-color: #f1f5f9;
            font-weight: 700;
            color: #1e293b;
        }
        .status-good {
            color: #15803d;
            font-weight: 700;
        }
        .status-warn {
            color: #b45309;
            font-weight: 700;
        }
        .status-bad {
            color: #b91c1c;
            font-weight: 700;
        }
        pre {
            background: #f8fafc;
            padding: 6px 8px;
            border-radius: 4px;
            font-size: 7.5pt;
            border: 1px solid #e2e8f0;
            margin: 4px 0 6px 0;
            line-height: 1.3;
            font-family: Consolas, 'Courier New', monospace;
            overflow-x: auto;
        }
        code {
            background: #f1f5f9;
            padding: 1px 3px;
            border-radius: 3px;
            font-family: Consolas, 'Courier New', monospace;
            font-size: 8pt;
        }
        /* ISSUE 5 FIX: Increased max-height for Gambar 2 and 3 for better readability */
        .screenshot-container {
            border: 1px solid #cbd5e1;
            border-radius: 6px;
            padding: 5px;
            background: #f8fafc;
            margin: 6px 0 10px 0;
            text-align: center;
        }
        .screenshot-container img {
            width: 100%;
            max-height: 240px;
            object-fit: contain;
            display: block;
            margin: 0 auto;
            background: #ffffff;
            border: 1px solid #e2e8f0;
            border-radius: 4px;
        }
        /* Larger container specifically for schema/rich-results screenshots */
        .screenshot-container.large img {
            max-height: 380px;
        }
        .caption {
            font-size: 7.8pt;
            color: #64748b;
            margin-top: 4px;
            font-style: italic;
        }
        .callout-box {
            background: #fffbeb;
            border-left: 3.5px solid #f59e0b;
            padding: 6px 10px;
            border-radius: 3px;
            margin: 6px 0 8px 0;
            font-size: 8.2pt;
        }
        .callout-box strong {
            color: #b45309;
        }
        .page-break {
            page-break-after: always;
        }
        em.data-note {
            color: #6b7280;
            font-style: italic;
            font-size: 0.9em;
        }
    </style>
</head>
<body>

    <div class="header">
        <h1>Laporan On-Page SEO, Speed Optimization &amp; Schema Markup</h1>
        <div class="subtitle">Tugas Praktik Pekan 6 &mdash; Digital Marketing (Analisis &amp; Optimasi Kecepatan serta Data Terstruktur)</div>
    </div>

    <table class="meta-table">
        <tr>
            <td class="label">Nama Mahasiswa</td>
            <td><strong>Satria Fajar Nuralim</strong></td>
            <td class="label">Mata Kuliah</td>
            <td>Digital Marketing</td>
        </tr>
        <tr>
            <td class="label">NIM</td>
            <td>230102122</td>
            <td class="label">Kelas / Semester</td>
            <td>IF-7-A / Semester 7</td>
        </tr>
        <tr>
            <td class="label">Projek / Brand</td>
            <td><strong>RE&mdash;WEAR</strong> (Curated Vintage Apparel)</td>
            <td class="label">Alat Audit &amp; Uji</td>
            <td>Google Lighthouse v13.6, Merkle Schema Generator (generator JSON-LD pihak ketiga), Schema.org Validator</td>
        </tr>
        <tr>
            <td class="label">URL Live Website</td>
            <td colspan="3"><a href="https://re-wear-landing-page.vercel.app/" style="color:#0284c7; text-decoration: none; font-weight:600;">https://re-wear-landing-page.vercel.app/</a></td>
        </tr>
    </table>

    <h2>1. Ringkasan Eksekutif (Executive Summary)</h2>
    <p>
        Laporan ini menyajikan hasil analisis, implementasi rekayasa teknis, dan verifikasi On-Page SEO pada situs <strong>RE&mdash;WEAR</strong> untuk penugasan Pekan 6. Fokus utama mencakup dua aspek vital: <strong>optimasi kecepatan muat halaman (Core Web Vitals)</strong> dan <strong>penerapan data terstruktur (Schema Markup JSON-LD)</strong> sesuai spesifikasi mesin pencari Google.
    </p>
    <p>
        Melalui penerapan konversi format gambar modern <strong>WebP via Edge CDN</strong>, prioritas pemuatan aset utama (<code>preload</code> &amp; <code>fetchpriority</code>), serta penangguhan eksekusi skrip (<code>defer</code>), skor performa desktop Google Lighthouse melonjak drastis dari <strong>69 menjadi 94 (+25 poin / +36.2%)</strong>. Metrik <strong>Largest Contentful Paint (LCP)</strong> berhasil dipangkas dari <strong>4.2 detik menjadi 1.3 detik (penurunan durasi 69.0%)</strong>. Selain itu, Schema Markup jenis <strong>Organization</strong> dan <strong>Product</strong> berhasil dibuat menggunakan <strong>generator JSON-LD pihak ketiga (Merkle TechnicalSEO)</strong> dan divalidasi dengan status <strong>100% Valid (0 Errors, 0 Warnings)</strong> pada Schema Markup Validator dan Google Rich Results Test.
    </p>

    <h2>2. Hasil Audit Kecepatan Awal &amp; Identifikasi Bottleneck (Before)</h2>
    <p>
        Audit baseline dilakukan langsung terhadap URL live produksi di Vercel menggunakan Google Lighthouse v13.6. Skor performa awal tercatat sebesar <strong>69 / 100</strong> dengan sejumlah kendala teknis:
    </p>
    <ul>
        <li><strong>Ukuran Aset Gambar Terlalu Besar (Unoptimized Images):</strong> Gambar produk diunduh dalam format JPEG resolusi 1200px uncompressed (bobot rata-rata 250&ndash;370 KiB per gambar). Total potensi penghematan bandwidth gambar terdeteksi sebesar <strong>641 KiB</strong>.</li>
        <li><strong>Keterlambatan Pemuatan Elemen LCP:</strong> Gambar banner hero (<code>#hero-feature-img</code>) membutuhkan waktu unduh 4.2 detik karena tidak memiliki prioritas jaringan (tanpa <code>preload</code>) dan mengalami latensi koneksi CDN.</li>
        <li><strong>Render-Blocking Resources:</strong> Pustaka ikon <em>Phosphor Icons</em> dimuat secara synchronous di dalam <code>&lt;head&gt;</code> tanpa penangguhan eksekusi.</li>
        <li><strong>Latensi Handshake Domain Eksternal:</strong> Tidak adanya deklarasi <code>preconnect</code> dan <code>dns-prefetch</code> ke domain aset pihak ketiga (Unsplash dan Google Fonts).</li>
    </ul>

    <h2>3. Strategi Optimasi Kecepatan &amp; Analisis Kebutuhan Minifikasi</h2>
    
    <h3>A. Konversi WebP via Dynamic Image Transformation CDN Engine</h3>
    <p>
        Alih-alih melakukan konversi gambar manual satu per satu di komputer lokal (yang tidak efisien dan memperbesar ukuran repositori), RE&mdash;WEAR memanfaatkan <strong>Unsplash Dynamic Image Transformation Engine (Edge CDN WebP Converter)</strong>. Dengan menyematkan parameter terstandarisasi <code>&amp;fm=webp&amp;q=75</code> pada setiap URL aset gambar, server edge CDN secara otomatis mengonversi master file JPEG menjadi format WebP modern berkualitas 75% secara <em>on-the-fly</em> sebelum dikirim ke peramban. Resolusi gambar juga disesuaikan dengan kontainer tampilan (800px untuk hero, 600px untuk katalog, dan 120px untuk avatar), menghasilkan penghematan ukuran file sebesar <strong>56% hingga 75%</strong> per aset (misal: hero image berkurang dari 366 KiB menjadi 160 KiB).
    </p>

    <h3>B. Analisis Kebutuhan Minifikasi Skrip (Script Minification Evaluation)</h3>
    <p>
        Sesuai instruksi penugasan mengenai minifikasi script <em>&ldquo;jika dibutuhkan&rdquo;</em>, dilakukan evaluasi teknis terhadap profil JavaScript pada halaman:
    </p>
    <ul>
        <li><strong>Skrip Pihak Ketiga:</strong> Situs menggunakan bundel runtime Tailwind CSS CDN (~105 KiB gzipped) dan Phosphor Icons (~42 KiB). Skrip CDN pihak ketiga tidak dapat diminifikasi secara lokal karena di-host secara eksternal.</li>
        <li><strong>Skrip Kustom Lokal:</strong> Kode JavaScript internal (logika zoom modal makro, filter kategori, formulir pesanan) berukuran 14.8 KiB (440 baris). Pengujian minifikasi memangkas ukuran menjadi 8.2 KiB (hemat ~6.6 KiB).</li>
        <li><strong>Keputusan Teknis:</strong> Karena skrip internal diletakkan di akhir dokumen sebelum <code>&lt;/body&gt;</code> dan metrik <strong>Total Blocking Time (TBT) situs sudah berada pada 10 ms (skor maksimal 100/100)</strong>, minifikasi skrip internal hanya memberikan dampak marginal (&lt; 15 ms). Oleh sebab itu, solusi optimasi yang jauh lebih berdampak pada performa adalah pemberian atribut <code>defer</code> pada pustaka eksternal dan inisialisasi aman melalui <code>DOMContentLoaded</code>, sehingga <strong>seluruh skrip yang memblokir proses rendering (render-blocking scripts) berhasil dihilangkan dari bagian <code>&lt;head&gt;</code></strong>.</li>
    </ul>

    <h3>C. Optimasi Critical Rendering Path &amp; Core Web Vitals</h3>
    <ul>
        <li>Menyematkan <code>&lt;link rel="preconnect"&gt;</code> dan <code>&lt;link rel="dns-prefetch"&gt;</code> untuk domain <code>images.unsplash.com</code>, <code>fonts.googleapis.com</code>, dan <code>unpkg.com</code>.</li>
        <li>Memprioritaskan LCP image dengan tag <code>&lt;link rel="preload" as="image" href="..." fetchpriority="high"&gt;</code> di dalam <code>&lt;head&gt;</code>.</li>
        <li>Menambahkan atribut <code>loading="lazy"</code>, <code>decoding="async"</code>, serta dimensi <code>width</code> dan <code>height</code> eksplisit pada seluruh gambar katalog untuk mencegah <em>Cumulative Layout Shift</em> (CLS).</li>
    </ul>

    <div class="page-break"></div>

    <h2>4. Laporan Perbandingan Skor PageSpeed Insights / Lighthouse (Before vs After)</h2>
    <p>
        Berikut adalah tabel perbandingan komparatif metrik performa sebelum dan sesudah optimasi, diuji langsung pada live website:
    </p>

    <table class="data-table">
        <thead>
            <tr>
                <th style="width: 30%;">Metrik Audit (Lighthouse v13.6)</th>
                <th style="width: 20%;">Sebelum (Before)</th>
                <th style="width: 20%;">Sesudah (After)</th>
                <th style="width: 30%;">Analisis &amp; Peningkatan</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td><strong>Skor Performa Keseluruhan (Desktop)</strong></td>
                <td class="status-warn">69 / 100 (Cukup)</td>
                <td class="status-good">94 / 100 (Sangat Cepat)</td>
                <td class="status-good"><strong>+25 Poin (+36.2%)</strong></td>
            </tr>
            <tr>
                <td><strong>Largest Contentful Paint (LCP)</strong></td>
                <td class="status-bad">4.2 detik (Lambat)</td>
                <td class="status-good">1.3 detik (Cepat)</td>
                <td class="status-good"><strong>-2.9 detik (-69.0%)</strong></td>
            </tr>
            <tr>
                <td><strong>First Contentful Paint (FCP)</strong></td>
                <td class="status-warn">1.8 detik</td>
                <td class="status-good">1.1 detik</td>
                <td class="status-good"><strong>-0.7 detik (-38.9%)</strong></td>
            </tr>
            <tr>
                <td><strong>Speed Index</strong></td>
                <td class="status-warn">2.0 detik</td>
                <td class="status-good">1.3 detik</td>
                <td class="status-good"><strong>-0.7 detik (-35.0%)</strong></td>
            </tr>
            <tr>
                <td><strong>Total Blocking Time (TBT)</strong></td>
                <td class="status-good">0 ms</td>
                <td class="status-good">10 ms</td>
                <td class="status-good">Stabil &amp; Bebas Hambatan (100/100)</td>
            </tr>
            <tr>
                <td><strong>Cumulative Layout Shift (CLS)</strong></td>
                <td class="status-good">0.000</td>
                <td class="status-good">0.001</td>
                <td class="status-good">Stabilitas Tata Letak Sempurna</td>
            </tr>
            <tr>
                <td><strong>Skor On-Page SEO</strong></td>
                <td class="status-good">100 / 100</td>
                <td class="status-good">100 / 100</td>
                <td class="status-good">Kepatuhan Maksimal (100%)</td>
            </tr>
            <tr>
                <td><strong>Skor Aksesibilitas (Accessibility)</strong></td>
                <td>90 / 100</td>
                <td>90 / 100</td>
                <td>Kategori Baik; skor 90 (bukan 100) menandakan ada isu rasio kontras teks sekunder yang belum terselesaikan</td>
            </tr>
            <tr>
                <td><strong>Skor Praktik Terbaik (Best Practices)</strong></td>
                <td>96 / 100</td>
                <td>96 / 100</td>
                <td>Kategori Sangat Baik; skor 96 (bukan 100) dipengaruhi peringatan dari bundel CDN Tailwind versi pengembangan</td>
            </tr>
        </tbody>
    </table>

    <div class="screenshot-container">
        <img src="${img1Base64}" alt="Tangkapan Layar Asli Laporan Google Lighthouse Before vs After">
        <div class="caption">Gambar 1: Tangkapan layar asli (authentic screenshot) laporan audit Google Lighthouse v13.6 Desktop (Kiri: Before Skor 69 &bull; Kanan: After Skor 94).</div>
    </div>

    <h2>5. Pembuatan Data Terstruktur Menggunakan Schema Generator (JSON-LD)</h2>
    <p>
        Data terstruktur dibuat menggunakan <strong>Merkle TechnicalSEO Schema Markup Generator</strong> (generator JSON-LD pihak ketiga yang mengacu pada panduan Google Structured Data) dengan format rekomendasi <strong>JSON-LD</strong>, lalu disematkan di dalam bagian <code>&lt;head&gt;</code> situs:
    </p>

    <h3>A. Schema Jenis Organization (Identitas Bisnis Resmi)</h3>
    <p>
        Mendeskripsikan badan usaha kurasi pakaian <strong>RE&mdash;WEAR</strong>, file logo representatif brand (<code>logo.png</code>), alamat studio di Bandung, dan tautan media sosial. Nomor telepon <em class="data-note">+6281321456789 (data contoh untuk keperluan tugas)</em> juga berfungsi sebagai kontak WhatsApp layanan pelanggan RE&mdash;WEAR. Alamat <em class="data-note">Jl. R.E. Martadinata No. 120, Cihapit, Bandung 40114 (data contoh untuk keperluan tugas)</em> serta akun media sosial <em class="data-note">instagram.com/rewear.catalog dan tiktok.com/@rewear.id (data contoh untuk keperluan tugas)</em> dicantumkan sebagai simulasi data bisnis dalam konteks akademik:
    </p>
    <pre><code>&lt;!-- Schema.org JSON-LD: Organization (Generated via Merkle Schema Generator &mdash; generator JSON-LD pihak ketiga) --&gt;
&lt;script type="application/ld+json"&gt;
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://re-wear-landing-page.vercel.app/#organization",
  "name": "RE&mdash;WEAR",
  "alternateName": "RE-WEAR Vintage &amp; Pre-Loved",
  "url": "https://re-wear-landing-page.vercel.app/",
  "logo": "https://re-wear-landing-page.vercel.app/logo.png",
  "description": "Platform kurasi pakaian vintage dan pre-loved pilihan berkualitas tinggi di Bandung. Dicuci bersih uap panas 120\u00b0C dan bergaransi originalitas.",
  "email": "halo@re-wear.id",
  "telephone": "+6281321456789",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Jl. R.E. Martadinata No. 120, Cihapit",
    "addressLocality": "Bandung",
    "addressRegion": "Jawa Barat",
    "postalCode": "40114",
    "addressCountry": "ID"
  },
  "sameAs": [
    "https://www.instagram.com/rewear.catalog",
    "https://www.tiktok.com/@rewear.id"
  ]
}
&lt;/script&gt;</code></pre>

    <div class="page-break"></div>

    <h3>B. Schema Jenis Product (Katalog Pakaian Unggulan)</h3>
    <p>
        Mendefinisikan item busana kurasi utama, yaitu <strong>Jaket Kanvas Tebal Carhartt Detroit Vintage</strong>, lengkap dengan array foto WebP, merek Carhartt, SKU <em class="data-note">RW-CRT-001 (data contoh)</em>, MPN <em class="data-note">CRT-DET-1998 (data contoh)</em>, penawaran harga <em class="data-note">Rp 685.000 (data contoh)</em>, kondisi barang UsedCondition, ketersediaan stok InStock, serta contoh simulasi rating ulasan:
    </p>
    <pre><code>&lt;!-- Schema.org JSON-LD: Product (Generated via Merkle Schema Generator &mdash; generator JSON-LD pihak ketiga) --&gt;
&lt;script type="application/ld+json"&gt;
{
  "@context": "https://schema.org",
  "@type": "Product",
  "@id": "https://re-wear-landing-page.vercel.app/#product-carhartt-detroit",
  "name": "Jaket Kanvas Tebal Carhartt Detroit Vintage",
  "image": [
    "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&amp;fit=crop&amp;w=800&amp;q=75&amp;fm=webp",
    "https://images.unsplash.com/photo-1608256246200-53e635b5b65f?auto=format&amp;fit=crop&amp;w=800&amp;q=75&amp;fm=webp",
    "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&amp;fit=crop&amp;w=800&amp;q=75&amp;fm=webp"
  ],
  "description": "Jaket kanvas Carhartt Detroit original kurasi RE&mdash;WEAR. Heavyweight cotton duck canvas, zipper YKK original, bersih higienis uap 120\u00b0C.",
  "sku": "RW-CRT-001",
  "mpn": "CRT-DET-1998",
  "brand": {
    "@type": "Brand",
    "name": "Carhartt"
  },
  "offers": {
    "@type": "Offer",
    "url": "https://re-wear-landing-page.vercel.app/#katalog",
    "priceCurrency": "IDR",
    "price": "685000",
    "priceValidUntil": "2027-12-31",
    "itemCondition": "https://schema.org/UsedCondition",
    "availability": "https://schema.org/InStock",
    "seller": {
      "@type": "Organization",
      "name": "RE&mdash;WEAR"
    }
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "28"
  }
}
&lt;/script&gt;</code></pre>

    <div class="callout-box">
        <strong>&#9888;&#65039; Catatan Edukatif &amp; Kepatuhan Kebijakan Data Terstruktur Google (Google Search Essentials):</strong><br>
        Struktur properti <code>aggregateRating</code> (rating 4.9 dari 28 ulasan) disertakan pada cuplikan kode di atas semata-mata sebagai <strong>contoh implementasi teknis untuk mendemonstrasikan penguasaan penulisan skema rating JSON-LD sesuai instrumen tugas akademik Pekan 6</strong>. Karena proyek landing page saat ini belum memiliki integrasi sistem ulasan pembeli terverifikasi riil, data rating tersebut murni merupakan simulasi edukatif.<br>
        Sesuai kebijakan resmi Google Search Essentials mengenai <em>Structured Data Spam</em>, Google melarang keras pencantuman <em>Self-Serving Reviews</em> (ulasan buatan pengelola sendiri tanpa bukti transaksi pembeli nyata). Pada website komersial produksi sesungguhnya, properti <code>aggregateRating</code> wajib dihilangkan hingga situs memiliki modul ulasan pelanggan terverifikasi pihak ketiga (seperti Trustpilot, Google Reviews, atau ulasan transaksi checkout aktif) agar terhindar dari sanksi tindakan manual (<em>Manual Action Penalty</em>).
    </div>

    <h2>6. Bukti Tangkapan Layar Validasi Schema Markup &amp; Google Rich Results Test</h2>
    <p>
        Validasi dilakukan pada dua alat verifikasi resmi standar industri untuk memastikan keselarasan sintaks RFC 8259 dan kelayakan fitur hasil kaya:
    </p>

    <div class="screenshot-container large">
        <img src="${img2Base64}" alt="Validasi Schema Markup Validator (validator.schema.org)">
        <div class="caption">Gambar 2: Tangkapan layar resolusi tinggi hasil uji Schema Markup Validator (validator.schema.org) &mdash; Terdeteksi 2 entitas (Organization &amp; Product) dengan status 0 Errors dan 0 Warnings.</div>
    </div>

    <div class="screenshot-container large">
        <img src="${img3Base64}" alt="Validasi Google Rich Results Test (search.google.com/test/rich-results)">
        <div class="caption">Gambar 3: Tangkapan layar Google Rich Results Test &mdash; Mengonfirmasi &ldquo;Halaman valid untuk hasil kaya&rdquo; (Cuplikan Produk &amp; Organisasi memenuhi syarat Rich Snippets).</div>
    </div>

    <h2>7. Kesimpulan &amp; Rekomendasi On-Page SEO</h2>
    <ol>
        <li><strong>Dampak Signifikan Pemuatan WebP &amp; LCP Preload:</strong> Waktu muat elemen terbesar (LCP) terpangkas hingga 69%, memberikan pengalaman belanja online yang responsif dan memenuhi ambang batas aman Google Core Web Vitals (&lt; 2.5 detik).</li>
        <li><strong>Kelayakan Rich Snippets Google:</strong> Implementasi JSON-LD yang bebas galat sintaks memungkinkan Google menampilkan nama produk, logo brand resmi, harga <em class="data-note">Rp 685.000 (data contoh)</em>, dan ketersediaan stok langsung pada halaman hasil pencarian (SERP).</li>
        <li><strong>Rekomendasi Produksi Lanjutan:</strong> Untuk tahap berikutnya, disarankan mengompilasi CSS melalui Tailwind CLI lokal guna menggantikan bundel runtime CDN, serta mengintegrasikan sistem review pelanggan terverifikasi nyata sebelum merilis skema rating ke publik.</li>
    </ol>

</body>
</html>`;

fs.writeFileSync(`${dir}/laporan_speed_schema.html`, htmlContent, 'utf8');
console.log('Successfully written standalone laporan_speed_schema.html (v2 - final revision)');
