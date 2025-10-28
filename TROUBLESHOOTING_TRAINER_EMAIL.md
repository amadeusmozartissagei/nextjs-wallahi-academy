# Troubleshooting Email Trainer di Production Vercel

## Masalah
- ✅ **QNA Email**: Berhasil terkirim di production
- ❌ **Trainer Email**: Tidak terkirim di production

## Kemungkinan Penyebab

### 1. **Environment Variables Tidak Dikonfigurasi di Vercel**

**Masalah**: Environment variables untuk trainer tidak diset di dashboard Vercel.

**Solusi**:
1. Buka dashboard Vercel
2. Pilih project AKUALITA Academy
3. Pergi ke Settings → Environment Variables
4. Tambahkan environment variables berikut:

```env
TRAINER_EMAIL_USER=trainerakualitaacademy@gmail.com
TRAINER_EMAIL_PASS=rtvs qzqp eoie rqwe
```

**Catatan**: Pastikan environment variables ini tersedia untuk semua environments (Production, Preview, Development).

### 2. **File Upload Issues di Production**

**Masalah**: API trainer menggunakan file upload yang mungkin bermasalah di serverless environment Vercel.

**Kemungkinan Issues**:
- Temporary directory tidak bisa dibuat di Vercel
- File system read-only di production
- Memory limit untuk file upload

### 3. **Request Size Limit**

**Masalah**: Form trainer mengirim file yang mungkin melebihi limit Vercel.

**Vercel Limits**:
- Function payload: 4.5MB untuk Hobby plan
- Function payload: 50MB untuk Pro plan

### 4. **Timeout Issues**

**Masalah**: Processing file upload dan email sending memakan waktu terlalu lama.

**Vercel Limits**:
- Hobby plan: 10 detik timeout
- Pro plan: 60 detik timeout

## Langkah Troubleshooting

### Step 1: Cek Environment Variables
```bash
# Di Vercel dashboard, pastikan ada:
TRAINER_EMAIL_USER=trainerakualitaacademy@gmail.com
TRAINER_EMAIL_PASS=rtvs qzqp eoie rqwe
```

### Step 2: Cek Logs di Vercel
1. Buka Vercel dashboard
2. Pergi ke Functions tab
3. Cek logs untuk `/api/send-trainer-email`
4. Lihat error messages

### Step 3: Test dengan Data Minimal
Coba submit form trainer dengan:
- Data pribadi lengkap
- **TANPA file upload** (CV, Certificate, Syllabus, Portfolio)
- Hanya training topics dan social media

### Step 4: Cek Network Tab di Browser
1. Buka Developer Tools
2. Pergi ke Network tab
3. Submit form trainer
4. Lihat response dari `/api/send-trainer-email`

## Solusi Sementara

### Option 1: Simplify File Upload
Hapus sementara file upload untuk testing:

```typescript
// Comment out file processing
// const cvFile = formData.get('cv') as File | null;
// const certificateFile = formData.get('certificate') as File | null;
// const syllabusFile = formData.get('syllabus') as File | null;
// const portfolioFile = formData.get('portfolio') as File | null;
```

### Option 2: Use External File Storage
Gunakan service seperti:
- AWS S3
- Cloudinary
- Uploadcare

### Option 3: Increase Vercel Plan
Upgrade ke Pro plan untuk:
- Higher memory limit
- Longer timeout
- Better file handling

## Debugging Code

Tambahkan logging untuk debugging:

```typescript
console.log('Environment check:', {
  TRAINER_EMAIL_USER: !!process.env.TRAINER_EMAIL_USER,
  TRAINER_EMAIL_PASS: !!process.env.TRAINER_EMAIL_PASS
});

console.log('Form data received:', {
  fullName: !!fullName,
  email: !!email,
  phone: !!phone,
  trainingTopics: trainingTopics.length
});
```

## Quick Fix untuk Testing

1. **Temporary disable file upload** di form trainer
2. **Test dengan data minimal** tanpa file
3. **Cek environment variables** di Vercel dashboard
4. **Monitor logs** di Vercel Functions

## Expected Logs untuk Success

```
Environment variables untuk Trainer dikonfigurasi
Trainer registration email sent successfully with attachments
```

## Expected Logs untuk Error

```
Environment variables untuk Trainer tidak dikonfigurasi
Error sending trainer registration email: [error details]
```

## Next Steps

1. Cek environment variables di Vercel dashboard
2. Test dengan form minimal (tanpa file)
3. Monitor Vercel logs
4. Jika masih error, pertimbangkan external file storage
