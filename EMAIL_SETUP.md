# Panduan Setup Email untuk AKUALITA Academy

## Masalah yang Diperbaiki

Form kontak di landing page sebelumnya tidak bisa mengirim email karena:
1. Tidak ada implementasi backend untuk mengirim email
2. Form hanya melakukan `console.log` tanpa mengirim email sebenarnya

## Solusi yang Diterapkan

### 1. API Endpoint Email
- Dibuat endpoint `/api/send-contact-email` yang menggunakan Nodemailer
- Menggunakan Gmail SMTP untuk mengirim email
- Template email yang profesional dengan styling HTML

### 2. Update Form Contact
- Form sekarang terintegrasi dengan API endpoint
- Menambahkan loading state saat mengirim email
- Menambahkan feedback sukses/error untuk user
- Form di-disable saat proses pengiriman
- Auto-reset form setelah berhasil mengirim

### 3. Environment Variables
File `.env.local` berisi konfigurasi email yang diperlukan.

## Cara Setup Email

### Langkah 1: Siapkan Gmail Account
1. Gunakan Gmail account yang akan digunakan sebagai pengirim
2. Aktifkan 2-Factor Authentication (2FA) di Gmail
3. Generate App Password:
   - Buka https://myaccount.google.com/apppasswords
   - Pilih "Mail" sebagai aplikasi
   - Generate password dan copy password tersebut

### Langkah 2: Konfigurasi Environment Variables
Edit file `.env.local` dan isi dengan data berikut:

```env
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password-here
RECIPIENT_EMAIL=info@akualita.com
```

**PENTING:**
- `EMAIL_USER`: Email Gmail yang akan digunakan sebagai pengirim
- `EMAIL_PASS`: App Password dari Gmail (bukan password biasa)
- `RECIPIENT_EMAIL`: Email yang akan menerima pesan kontak

### Langkah 3: Restart Development Server
```bash
npm run dev
```

## Fitur yang Ditambahkan

### 1. Loading State
- Button berubah menjadi "Mengirim..." dengan spinner
- Semua input field di-disable saat proses pengiriman
- Mencegah double submission

### 2. Status Feedback
- **Sukses**: Pesan hijau dengan icon checkmark
- **Error**: Pesan merah dengan icon X
- Status message hilang otomatis saat user mulai mengetik lagi

### 3. Form Validation
- Validasi di frontend dan backend
- Error handling yang comprehensive
- Pesan error yang user-friendly dalam bahasa Indonesia

### 4. Email Template
- Template HTML yang profesional
- Menggunakan warna brand AKUALITA Academy
- Informasi lengkap: pengirim, subjek, pesan, tanggal
- Responsive design untuk email client

## Testing

### Test Manual
1. Buka website di browser
2. Scroll ke bagian "Hubungi kami"
3. Isi form dengan data valid
4. Klik "Kirim Email"
5. Periksa email penerima

### Troubleshooting

#### Email tidak terkirim
1. Pastikan environment variables sudah benar
2. Pastikan menggunakan App Password (bukan password biasa)
3. Pastikan 2FA sudah aktif di Gmail
4. Cek console browser untuk error message
5. Cek terminal development server untuk error log

#### Error "Invalid login"
- Pastikan menggunakan App Password yang benar
- Regenerate App Password jika diperlukan

#### Error "Less secure app access"
- Gmail sudah tidak mendukung "less secure apps"
- Pastikan menggunakan App Password dengan 2FA

## File yang Dimodifikasi

1. **`src/app/api/send-contact-email/route.ts`** - API endpoint baru
2. **`src/components/ContactSection.tsx`** - Update form dengan integrasi API
3. **`.env.local`** - Konfigurasi environment variables
4. **`package.json`** - Nodemailer sudah terinstall

## Catatan Keamanan

- Jangan commit file `.env.local` ke repository
- Gunakan App Password, bukan password Gmail biasa
- Environment variables hanya digunakan di server-side
- Email user tidak disimpan di database (sesuai permintaan)

## Produksi

Untuk deployment ke production:
1. Set environment variables di hosting platform
2. Pastikan domain sudah di-verify di Gmail jika diperlukan
3. Test email functionality setelah deployment
