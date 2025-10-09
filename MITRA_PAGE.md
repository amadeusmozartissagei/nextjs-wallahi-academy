# Halaman Mitra - Akualita Academy

## Deskripsi
Halaman mitra telah berhasil dikloning dari `php-wallahi-academy` ke `nextjs-wallahi-academy` dengan penyesuaian untuk struktur Next.js.

## Struktur Komponen

### 1. MitraHero (`/src/components/MitraHero.tsx`)
- Hero section dengan gradient background
- Call-to-action button untuk pendaftaran WhatsApp
- 3 box keunggulan dengan ikon SVG
- Placeholder untuk gambar mitra

### 2. MitraSteps (`/src/components/MitraSteps.tsx`)
- Section langkah-langkah menjadi mitra
- 3 step dengan hover effects
- Ikon emoji sebagai placeholder

### 3. MitraCommission (`/src/components/MitraCommission.tsx`)
- Tabel skema komisi
- Responsive design
- Hover effects pada baris tabel

### 4. MitraCTA (`/src/components/MitraCTA.tsx`)
- Call-to-action section
- Background gradient
- Placeholder untuk gambar CTA

### 5. MitraFAQ (`/src/components/MitraFAQ.tsx`)
- FAQ section dengan accordion functionality
- State management untuk toggle FAQ
- 5 pertanyaan umum tentang affiliate

## Routing
- URL: `/mitra`
- File: `/src/app/mitra/page.tsx`
- Sudah terintegrasi dengan navbar di `/src/components/Navbar.tsx`

## Fitur yang Disesuaikan

### Dari PHP Laravel ke Next.js:
1. **Template Engine**: Dari Blade template ke JSX
2. **State Management**: Menggunakan React hooks (`useState`)
3. **Styling**: Tetap menggunakan Tailwind CSS
4. **Interaktivitas**: FAQ accordion dengan React state
5. **Routing**: File-based routing Next.js
6. **Komponen**: Modular component structure

### Aset yang Diperlukan:
- Gambar mitra utama (placeholder: emoji 🤝)
- Gambar CTA (placeholder: emoji 🚀)
- Ikon untuk step (menggunakan emoji sebagai placeholder)

## Cara Mengakses
1. Jalankan development server: `npm run dev`
2. Buka browser ke `http://localhost:3000/mitra`
3. Atau klik link "Mitra" di navbar

## Catatan
- Semua link WhatsApp sudah terkonfigurasi: `https://wa.me/+6281127011818`
- Email support: `affiliate@akualita-academy.com`
- Styling dan layout sudah responsive untuk mobile dan desktop
- Semua komponen menggunakan TypeScript
