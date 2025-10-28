# 📁 Batasan Ukuran File untuk Upload Form Trainer

## 🔍 **Analisis Batasan Ukuran File**

### **1. Vercel Serverless Function Limits**

#### **Hobby Plan (Gratis):**
- **Function Payload**: 4.5MB maksimal
- **Memory**: 1024MB
- **Timeout**: 10 detik
- **File Upload**: Total semua file tidak boleh melebihi 4.5MB

#### **Pro Plan ($20/bulan):**
- **Function Payload**: 50MB maksimal
- **Memory**: 3008MB
- **Timeout**: 60 detik
- **File Upload**: Total semua file tidak boleh melebihi 50MB

### **2. Email Attachment Limits**

#### **Gmail SMTP (Nodemailer):**
- **Per Attachment**: 25MB maksimal
- **Total Email Size**: 25MB maksimal
- **Multiple Attachments**: Total tidak boleh melebihi 25MB

#### **Email Client Limits:**
- **Gmail**: 25MB per email
- **Outlook**: 20MB per email
- **Yahoo**: 25MB per email

### **3. Browser Limits**

#### **FormData Upload:**
- **Chrome**: Tidak ada batasan hard (tergantung memory)
- **Firefox**: Tidak ada batasan hard (tergantung memory)
- **Safari**: Tidak ada batasan hard (tergantung memory)
- **Edge**: Tidak ada batasan hard (tergantung memory)

#### **Practical Limits:**
- **Recommended**: Maksimal 10MB per file
- **Safe Limit**: 5MB per file untuk stabilitas

## 📊 **Rekomendasi Ukuran File**

### **Untuk Vercel Hobby Plan (4.5MB Total):**

| File Type | Recommended Size | Max Safe Size |
|-----------|------------------|---------------|
| **CV (PDF)** | 1-2MB | 2MB |
| **Certificate (PDF)** | 1-2MB | 2MB |
| **Syllabus (PDF/DOC)** | 0.5-1MB | 1MB |
| **Portfolio (PDF)** | 0.5-1MB | 1MB |
| **Total** | **3-6MB** | **6MB** |

### **Untuk Vercel Pro Plan (50MB Total):**

| File Type | Recommended Size | Max Safe Size |
|-----------|------------------|---------------|
| **CV (PDF)** | 5-10MB | 10MB |
| **Certificate (PDF)** | 5-10MB | 10MB |
| **Syllabus (PDF/DOC)** | 2-5MB | 5MB |
| **Portfolio (PDF)** | 2-5MB | 5MB |
| **Total** | **14-30MB** | **30MB** |

## ⚠️ **Batasan yang Harus Diperhatikan**

### **1. Vercel Function Payload**
```
Hobby Plan: 4.5MB total
Pro Plan: 50MB total
```

### **2. Email Attachment Size**
```
Gmail SMTP: 25MB per email
Total attachments: 25MB maksimal
```

### **3. Memory Usage**
```
Hobby Plan: 1024MB memory
Pro Plan: 3008MB memory
```

### **4. Timeout Limits**
```
Hobby Plan: 10 detik timeout
Pro Plan: 60 detik timeout
```

## 🎯 **Rekomendasi Praktis**

### **Untuk Production (Hobby Plan):**
- **CV**: Maksimal 2MB
- **Certificate**: Maksimal 2MB  
- **Syllabus**: Maksimal 1MB
- **Portfolio**: Maksimal 1MB
- **Total**: Maksimal 6MB

### **Untuk Production (Pro Plan):**
- **CV**: Maksimal 10MB
- **Certificate**: Maksimal 10MB
- **Syllabus**: Maksimal 5MB
- **Portfolio**: Maksimal 5MB
- **Total**: Maksimal 30MB

## 🔧 **Implementasi Validasi File Size**

### **Frontend Validation (Recommended):**
```typescript
const MAX_FILE_SIZE = 2 * 1024 * 1024; // 2MB
const MAX_TOTAL_SIZE = 6 * 1024 * 1024; // 6MB

const validateFileSize = (file: File) => {
  if (file.size > MAX_FILE_SIZE) {
    return `File ${file.name} terlalu besar. Maksimal 2MB.`;
  }
  return null;
};
```

### **Backend Validation:**
```typescript
const MAX_TOTAL_SIZE = 6 * 1024 * 1024; // 6MB

const validateTotalSize = (files: File[]) => {
  const totalSize = files.reduce((sum, file) => sum + file.size, 0);
  if (totalSize > MAX_TOTAL_SIZE) {
    return 'Total ukuran file terlalu besar. Maksimal 6MB.';
  }
  return null;
};
```

## 📋 **Tips Optimasi File**

### **1. Kompresi PDF:**
- Gunakan PDF compressor online
- Target: 1-2MB per file
- Maintain quality yang masih readable

### **2. Format File:**
- **PDF**: Untuk CV, Certificate, Portfolio
- **DOC/DOCX**: Untuk Syllabus (lebih kecil dari PDF)
- **Hindari**: File gambar besar (JPG, PNG)

### **3. Multiple Files:**
- Pisahkan dokumen besar menjadi beberapa file
- Upload file terpenting dulu (CV, Certificate)
- Portfolio bisa berupa link ke Google Drive

## 🚨 **Error Handling**

### **File Too Large Error:**
```typescript
if (file.size > MAX_FILE_SIZE) {
  return NextResponse.json(
    { error: `File ${file.name} terlalu besar. Maksimal 2MB per file.` },
    { status: 400 }
  );
}
```

### **Total Size Error:**
```typescript
if (totalSize > MAX_TOTAL_SIZE) {
  return NextResponse.json(
    { error: 'Total ukuran file terlalu besar. Maksimal 6MB total.' },
    { status: 400 }
  );
}
```

## 🎉 **Kesimpulan**

### **Batasan Aktual:**
- **Vercel Hobby**: 4.5MB total (rekomendasi: 6MB untuk safety)
- **Vercel Pro**: 50MB total (rekomendasi: 30MB untuk safety)
- **Email**: 25MB maksimal per email

### **Rekomendasi untuk Production:**
- **Per File**: Maksimal 2MB
- **Total**: Maksimal 6MB (Hobby) / 30MB (Pro)
- **Format**: PDF untuk dokumen, DOC untuk syllabus

### **Upgrade Plan jika Diperlukan:**
- Jika butuh file lebih besar, upgrade ke Vercel Pro Plan
- Atau gunakan external file storage (AWS S3, Cloudinary)
