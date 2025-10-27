# Email Routing Logic untuk AKUALITA Academy

## Overview

Sistem email telah dikonfigurasi untuk mengirim email ke alamat yang berbeda berdasarkan sumber pengiriman:

## Routing Logic

### 1. **Landing Page (QNA/Contact Form)**
- **API Endpoint**: `/api/send-contact-email`
- **Email Pengirim**: `qnaakualitaacademy@gmail.com`
- **Email Penerima**: `academy@akualita.com`
- **Fungsi**: Menangani pertanyaan dan kontak dari landing page
- **Target**: Tim Academy untuk menangani pertanyaan umum

### 2. **Trainer Registration Page**
- **API Endpoint**: `/api/send-trainer-email`
- **Email Pengirim**: `trainerakualitaacademy@gmail.com`
- **Email Penerima**: `hrga@akualita.com`
- **Fungsi**: Menangani pendaftaran trainer dengan lampiran file
- **Target**: Tim HRGA untuk proses rekrutmen trainer

## Konfigurasi Environment Variables

File `.env.local` tetap menggunakan konfigurasi yang sama:

```env
# Email untuk QNA di Landing Page
EMAIL_USER=qnaakualitaacademy@gmail.com
EMAIL_PASS=llkz rqdv ydig krnb

# Email untuk Trainer Registration  
TRAINER_EMAIL_USER=trainerakualitaacademy@gmail.com
TRAINER_EMAIL_PASS=rtvs qzqp eoie rqwe
```

## Email Recipients (Hardcoded)

Email penerima sekarang di-hardcode di dalam kode untuk memastikan routing yang tepat:

- **Landing Page** → `academy@akualita.com`
- **Trainer Page** → `hrga@akualita.com`

## Keuntungan Routing Logic

1. **Spesialisasi Tim**: Setiap tim menerima email sesuai dengan bidangnya
2. **Efisiensi**: Tidak perlu forwarding email manual
3. **Tracking**: Mudah melacak sumber email berdasarkan penerima
4. **Workflow**: Tim Academy fokus pada pertanyaan umum, HRGA fokus pada rekrutmen

## Testing

### Test Landing Page Email
1. Buka landing page
2. Scroll ke bagian "Hubungi kami"
3. Isi form dan kirim
4. Periksa email di `academy@akualita.com`

### Test Trainer Email
1. Buka halaman trainer registration
2. Isi form lengkap dengan file
3. Submit form
4. Periksa email di `hrga@akualita.com`

## File yang Dimodifikasi

1. **`src/app/api/send-contact-email/route.ts`**
   - Line 38: `to: 'academy@akualita.com'`

2. **`src/app/api/send-trainer-email/route.ts`**
   - Line 376: `to: 'hrga@akualita.com'`

## Troubleshooting

### Email tidak sampai ke penerima yang benar
- Pastikan alamat email penerima sudah benar
- Cek spam folder di email penerima
- Pastikan domain `akualita.com` sudah dikonfigurasi dengan benar

### Email tidak terkirim sama sekali
- Pastikan environment variables sudah dikonfigurasi
- Pastikan menggunakan App Password yang benar
- Cek console untuk error message

## Catatan Penting

- Email penerima sekarang di-hardcode untuk memastikan routing yang konsisten
- Environment variable `RECIPIENT_EMAIL` tidak lagi digunakan
- Setiap API endpoint memiliki email penerima yang spesifik
- Routing ini memisahkan tanggung jawab antara tim Academy dan HRGA
