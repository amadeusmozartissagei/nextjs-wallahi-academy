# Panduan Mengelola Localhost yang Aktif

## 🔍 Cara Melihat Localhost yang Aktif

### 1. Menggunakan `ss` (Socket Statistics)
```bash
# Melihat semua port yang listening
ss -tlnp

# Melihat port 3000-3010 saja
ss -tlnp | grep :300

# Melihat port tertentu
ss -tlnp | grep :3001
```

### 2. Menggunakan `lsof` (List Open Files)
```bash
# Melihat semua port yang terbuka
lsof -i

# Melihat port tertentu
lsof -i :3001

# Melihat port range
lsof -i :3000-3010
```

### 3. Menggunakan `netstat` (jika terinstall)
```bash
# Install netstat jika belum ada
sudo apt install net-tools

# Melihat port yang listening
netstat -tlnp | grep :300
```

## 🛑 Cara Menghentikan Localhost

### 1. Menghentikan Berdasarkan Port
```bash
# Cari PID dari port tertentu
ss -tlnp | grep :3001

# Kill proses berdasarkan PID
kill -9 [PID]

# Contoh: kill -9 64564
```

### 2. Menghentikan Semua Proses Next.js
```bash
# Hentikan semua proses yang mengandung "next"
pkill -f "next"

# Atau lebih spesifik
pkill -f "next dev"
```

### 3. Menghentikan Berdasarkan Nama Proses
```bash
# Lihat semua proses
ps aux | grep next

# Kill berdasarkan nama proses
killall node
```

### 4. Menggunakan Ctrl+C di Terminal
- Jika server masih berjalan di terminal yang aktif
- Tekan `Ctrl + C` untuk menghentikan gracefully

## 🔧 Command yang Berguna

### Melihat Proses yang Berjalan
```bash
# Melihat semua proses Node.js
ps aux | grep node

# Melihat proses Next.js secara detail
ps aux | grep "next" | grep -v grep

# Melihat proses dengan format yang lebih baik
ps -ef | grep next
```

### Melihat Port yang Digunakan
```bash
# Port yang listening
ss -tlnp

# Port yang sedang digunakan
ss -tup

# Port range tertentu
ss -tlnp | grep :3000-3010
```

### Menghentikan Proses Secara Paksa
```bash
# Graceful shutdown
kill [PID]

# Force kill
kill -9 [PID]

# Kill semua proses dengan nama tertentu
pkill -9 node
```

## 📋 Langkah-langkah Troubleshooting

### Jika Port Sudah Digunakan
1. **Cek port yang digunakan**:
   ```bash
   ss -tlnp | grep :3000
   ```

2. **Lihat proses yang menggunakan port**:
   ```bash
   lsof -i :3000
   ```

3. **Hentikan proses**:
   ```bash
   kill -9 [PID]
   ```

4. **Restart server**:
   ```bash
   npm run dev
   ```

### Jika Ada Banyak Server yang Berjalan
1. **Hentikan semua proses Next.js**:
   ```bash
   pkill -f "next dev"
   ```

2. **Hentikan semua proses Node.js**:
   ```bash
   killall node
   ```

3. **Restart dengan bersih**:
   ```bash
   npm run dev
   ```

## 🚀 Best Practices

### 1. Selalu Cek Port Sebelum Start
```bash
# Cek apakah port 3000 kosong
ss -tlnp | grep :3000

# Jika kosong, baru start server
npm run dev
```

### 2. Gunakan Port yang Berbeda
```bash
# Start di port tertentu
npm run dev -- -p 3001

# Atau set PORT environment variable
PORT=3001 npm run dev
```

### 3. Gunakan PM2 untuk Production
```bash
# Install PM2
npm install -g pm2

# Start dengan PM2
pm2 start npm --name "nextjs-app" -- run dev

# Lihat status
pm2 status

# Stop
pm2 stop nextjs-app
```

## 📝 Contoh Skenario

### Skenario 1: Port 3000 Sudah Digunakan
```bash
# Cek port
ss -tlnp | grep :3000
# Output: LISTEN 0 511 *:3000 *:* users:(("next-server",pid=12345,fd=25))

# Kill proses
kill -9 12345

# Start server
npm run dev
```

### Skenario 2: Banyak Server Berjalan
```bash
# Lihat semua proses
ps aux | grep next

# Hentikan semua
pkill -f "next"

# Start server baru
npm run dev
```

### Skenario 3: Server Tidak Responsif
```bash
# Force kill semua Node.js
killall -9 node

# Clean start
npm run dev
```

## ⚠️ Catatan Penting

1. **Gunakan `kill -9` dengan hati-hati** - ini akan force kill proses tanpa cleanup
2. **Selalu cek proses sebelum kill** - pastikan tidak kill proses penting lainnya
3. **Gunakan Ctrl+C terlebih dahulu** - untuk graceful shutdown
4. **Backup data penting** - sebelum force kill proses yang mungkin menyimpan data

## 🔗 Command Cheat Sheet

```bash
# Lihat port aktif
ss -tlnp | grep :300

# Lihat proses Next.js
ps aux | grep next

# Kill berdasarkan PID
kill -9 [PID]

# Kill semua Next.js
pkill -f "next"

# Kill semua Node.js
killall node

# Start server
npm run dev

# Start di port tertentu
npm run dev -- -p 3001
```
