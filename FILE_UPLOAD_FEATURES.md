# 📁 Fitur Upload File dengan Validasi dan Animasi

## ✅ **Fitur yang Telah Diimplementasikan**

### **1. Validasi Ukuran File**
- **Maksimal ukuran**: 1MB per file
- **Validasi real-time**: Saat user memilih file
- **Error message**: Menampilkan ukuran file yang melebihi batas

### **2. Animasi Upload**
- **Loading spinner**: Saat file sedang diupload
- **Background overlay**: Biru transparan dengan spinner
- **Text indicator**: "Mengupload..." dengan animasi

### **3. Notifikasi Sukses**
- **Success overlay**: Hijau transparan dengan checkmark
- **Text indicator**: "File berhasil diupload!"
- **Auto-hide**: Notifikasi hilang setelah 3 detik

## 🎯 **Detail Implementasi**

### **State Management:**
```typescript
const [uploadingFiles, setUploadingFiles] = useState<{[key: string]: boolean}>({});
const [uploadedFiles, setUploadedFiles] = useState<{[key: string]: boolean}>({});
```

### **Validasi Ukuran File:**
```typescript
const MAX_FILE_SIZE = 1 * 1024 * 1024; // 1MB

if (file && file.size > MAX_FILE_SIZE) {
  setErrors(prev => ({
    ...prev,
    [name]: `File terlalu besar. Maksimal ukuran file adalah 1MB. Ukuran file Anda: ${(file.size / (1024 * 1024)).toFixed(2)}MB`
  }));
  return;
}
```

### **Animasi Upload:**
```typescript
// Simulasi upload dengan animasi
if (file) {
  setUploadingFiles(prev => ({ ...prev, [name]: true }));
  
  // Simulasi delay upload (1-2 detik)
  setTimeout(() => {
    setUploadingFiles(prev => ({ ...prev, [name]: false }));
    setUploadedFiles(prev => ({ ...prev, [name]: true }));
    
    // Hapus notifikasi sukses setelah 3 detik
    setTimeout(() => {
      setUploadedFiles(prev => ({ ...prev, [name]: false }));
    }, 3000);
  }, Math.random() * 1000 + 1000); // 1-2 detik
}
```

## 🎨 **UI Components**

### **Upload Animation:**
```jsx
{uploadingFiles.cv && (
  <div className="absolute inset-0 bg-blue-50 bg-opacity-90 rounded-md flex items-center justify-center">
    <div className="flex items-center space-x-2">
      <svg className="animate-spin h-4 w-4 text-blue-600">
        {/* Spinner SVG */}
      </svg>
      <span className="text-sm text-blue-600 font-medium">Mengupload...</span>
    </div>
  </div>
)}
```

### **Success Notification:**
```jsx
{uploadedFiles.cv && (
  <div className="absolute inset-0 bg-green-50 bg-opacity-90 rounded-md flex items-center justify-center">
    <div className="flex items-center space-x-2">
      <svg className="h-4 w-4 text-green-600">
        {/* Checkmark SVG */}
      </svg>
      <span className="text-sm text-green-600 font-medium">File berhasil diupload!</span>
    </div>
  </div>
)}
```

## 📋 **File Types yang Didukung**

### **CV (Curriculum Vitae):**
- **Format**: PDF
- **Maksimal**: 1MB
- **Required**: ✅

### **Certificate (Sertifikat):**
- **Format**: PDF
- **Maksimal**: 1MB
- **Required**: ✅

### **Syllabus (Silabus):**
- **Format**: PDF, DOC, DOCX
- **Maksimal**: 1MB
- **Required**: ✅

### **Portfolio:**
- **Format**: PDF, DOC, DOCX
- **Maksimal**: 1MB
- **Required**: ✅

## 🔄 **Flow Upload Process**

### **1. User Memilih File**
- File input trigger `handleFileChange`
- Validasi ukuran file (1MB max)
- Jika valid, mulai proses upload

### **2. Upload Animation**
- `uploadingFiles[name] = true`
- Tampilkan spinner dengan "Mengupload..."
- Simulasi delay 1-2 detik

### **3. Success Notification**
- `uploadingFiles[name] = false`
- `uploadedFiles[name] = true`
- Tampilkan checkmark dengan "File berhasil diupload!"

### **4. Auto Hide**
- Setelah 3 detik, `uploadedFiles[name] = false`
- Notifikasi hilang, kembali ke state normal

## ⚠️ **Error Handling**

### **File Too Large:**
```
Error: "File terlalu besar. Maksimal ukuran file adalah 1MB. Ukuran file Anda: 2.5MB"
```

### **Invalid Format:**
- Browser akan memfilter file berdasarkan `accept` attribute
- User hanya bisa memilih format yang diizinkan

## 🎯 **User Experience**

### **Visual Feedback:**
- **Loading**: Spinner biru dengan text "Mengupload..."
- **Success**: Checkmark hijau dengan text "File berhasil diupload!"
- **Error**: Text merah dengan detail error

### **Timing:**
- **Upload delay**: 1-2 detik (simulasi)
- **Success display**: 3 detik
- **Smooth transitions**: CSS transitions untuk animasi

## 🚀 **Testing**

### **Test Cases:**
1. **File < 1MB**: Harus berhasil upload dengan animasi
2. **File > 1MB**: Harus menampilkan error message
3. **Multiple files**: Setiap file memiliki animasi independen
4. **Format validation**: Browser memfilter format yang tidak sesuai

### **Expected Behavior:**
- ✅ File kecil (< 1MB): Upload berhasil dengan animasi
- ❌ File besar (> 1MB): Error message muncul
- ✅ Multiple uploads: Animasi independen per file
- ✅ Auto-hide: Notifikasi hilang setelah 3 detik

## 📝 **Notes**

- **Simulasi Upload**: Saat ini menggunakan `setTimeout` untuk simulasi
- **Real Upload**: Di production, file akan dikirim ke server
- **Performance**: Animasi tidak mempengaruhi performa
- **Accessibility**: Menggunakan proper ARIA labels dan colors

## 🎉 **Benefits**

1. **User Feedback**: User tahu status upload file
2. **Error Prevention**: Validasi ukuran sebelum upload
3. **Professional Look**: Animasi yang smooth dan modern
4. **Better UX**: Tidak ada kebingungan tentang status upload
5. **File Management**: Kontrol ukuran file untuk performa server
