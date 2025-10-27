# Konfigurasi Email Terpisah untuk AKUALITA Academy

## Overview

Sistem email telah diupdate untuk menggunakan konfigurasi email yang terpisah untuk setiap fungsi:

1. **QNA Landing Page** - Menggunakan email khusus untuk pertanyaan dan kontak
2. **Trainer Registration** - Menggunakan email khusus untuk pendaftaran trainer

## Environment Variables

Buat file `.env.local` di root project dengan konfigurasi berikut:

```env
# Email untuk QNA di Landing Page
EMAIL_USER=qnaakualitaacademy@gmail.com
EMAIL_PASS=llkz rqdv ydig krnb

# Email untuk Trainer Registration  
TRAINER_EMAIL_USER=trainerakualitaacademy@gmail.com
TRAINER_EMAIL_PASS=rtvs qzqp eoie rqwe

# Email penerima (opsional, bisa disesuaikan)
RECIPIENT_EMAIL=info@akualita.com
```

## Konfigurasi Email

### 1. QNA Landing Page (`/api/send-contact-email`)

- **Email Pengirim**: `qnaakualitaacademy@gmail.com`
- **Password**: `llkz rqdv ydig krnb`
- **Fungsi**: Menangani pertanyaan dan kontak dari landing page
- **Environment Variables**: `EMAIL_USER`, `EMAIL_PASS`

### 2. Trainer Registration (`/api/send-trainer-email`)

- **Email Pengirim**: `trainerakualitaacademy@gmail.com`
- **Password**: `rtvs qzqp eoie rqwe`
- **Fungsi**: Menangani pendaftaran trainer dengan lampiran file
- **Environment Variables**: `TRAINER_EMAIL_USER`, `TRAINER_EMAIL_PASS`

## Setup Gmail App Passwords

Untuk setiap email Gmail, pastikan:

1. **2-Factor Authentication (2FA)** sudah aktif
2. **App Password** sudah dibuat untuk setiap email:
   - Buka https://myaccount.google.com/apppasswords
   - Pilih "Mail" sebagai aplikasi
   - Generate password dan copy password tersebut

## File yang Dimodifikasi

1. **`src/app/api/send-contact-email/route.ts`**
   - Menggunakan `EMAIL_USER` dan `EMAIL_PASS`
   - Komentar diperbarui untuk QNA

2. **`src/app/api/send-trainer-email/route.ts`**
   - Menggunakan `TRAINER_EMAIL_USER` dan `TRAINER_EMAIL_PASS`
   - Komentar diperbarui untuk Trainer

## Testing

### Test QNA Email
1. Buka landing page
2. Scroll ke bagian "Hubungi kami"
3. Isi form dan kirim
4. Periksa email yang dikirim dari `qnaakualitaacademy@gmail.com`

### Test Trainer Email
1. Buka halaman trainer registration
2. Isi form lengkap dengan file
3. Submit form
4. Periksa email yang dikirim dari `trainerakualitaacademy@gmail.com`

## Troubleshooting

### Error "Environment variables tidak dikonfigurasi"
- Pastikan file `.env.local` sudah dibuat dengan benar
- Pastikan nama environment variables sesuai
- Restart development server setelah mengubah `.env.local`

### Error "Invalid login"
- Pastikan menggunakan App Password yang benar
- Regenerate App Password jika diperlukan
- Pastikan 2FA sudah aktif di Gmail

### Email tidak terkirim
- Cek console browser untuk error message
- Cek terminal development server untuk error log
- Pastikan kedua email Gmail sudah dikonfigurasi dengan benar

## Keamanan

- Jangan commit file `.env.local` ke repository
- Gunakan App Password, bukan password Gmail biasa
- Environment variables hanya digunakan di server-side
- Setiap fungsi menggunakan email terpisah untuk isolasi

## Produksi

Untuk deployment ke production:
1. Set environment variables di hosting platform
2. Pastikan kedua domain sudah di-verify di Gmail jika diperlukan
3. Test kedua fungsi email setelah deployment
4. Monitor log untuk memastikan email terkirim dengan benar
