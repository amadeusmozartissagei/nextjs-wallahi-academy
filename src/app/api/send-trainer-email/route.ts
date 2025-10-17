import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  try {
    const formData = await request.json();

    // Validasi input required
    if (!formData.fullName || !formData.email || !formData.phone || !formData.trainingTopics || formData.trainingTopics.length === 0) {
      return NextResponse.json(
        { error: 'Data pribadi wajib diisi lengkap' },
        { status: 400 }
      );
    }

    // Cek apakah environment variables sudah dikonfigurasi
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      console.error('Environment variables tidak dikonfigurasi');
      return NextResponse.json(
        { error: 'Email service belum dikonfigurasi. Silakan hubungi administrator.' },
        { status: 500 }
      );
    }

    // Konfigurasi transporter Nodemailer
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Template email untuk trainer registration
    const htmlContent = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Pendaftaran Trainer Baru - Akualita Academy</title>
        <style>
          body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            line-height: 1.6;
            color: #333;
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
            background-color: #f5f5f5;
          }
          .container {
            background-color: white;
            border-radius: 10px;
            padding: 30px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          }
          .header {
            text-align: center;
            border-bottom: 3px solid #f97316;
            padding-bottom: 20px;
            margin-bottom: 30px;
          }
          .header h1 {
            color: #f97316;
            margin: 0;
            font-size: 24px;
          }
          .section {
            margin-bottom: 25px;
            padding: 15px;
            background-color: #f8f9fa;
            border-radius: 8px;
            border-left: 4px solid #f97316;
          }
          .section h3 {
            color: #f97316;
            margin-top: 0;
            margin-bottom: 15px;
            font-size: 18px;
          }
          .field {
            margin-bottom: 10px;
            padding: 8px 0;
            border-bottom: 1px solid #e9ecef;
          }
          .field:last-child {
            border-bottom: none;
          }
          .label {
            font-weight: bold;
            color: #495057;
            display: inline-block;
            width: 150px;
          }
          .value {
            color: #212529;
          }
          .file-info {
            background-color: #e3f2fd;
            padding: 10px;
            border-radius: 5px;
            margin: 5px 0;
            border-left: 3px solid #2196f3;
          }
          .social-links {
            display: flex;
            flex-wrap: wrap;
            gap: 10px;
            margin-top: 10px;
          }
          .social-link {
            background-color: #0077b5;
            color: white;
            padding: 5px 10px;
            border-radius: 5px;
            text-decoration: none;
            font-size: 12px;
          }
          .footer {
            text-align: center;
            margin-top: 30px;
            padding-top: 20px;
            border-top: 2px solid #e9ecef;
            color: #6c757d;
            font-size: 14px;
          }
          .urgent {
            background-color: #fff3cd;
            border: 1px solid #ffeaa7;
            color: #856404;
            padding: 15px;
            border-radius: 5px;
            margin: 20px 0;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>🧾 Pendaftaran Trainer Baru</h1>
            <p>Akualita Academy</p>
          </div>

          <div class="urgent">
            <strong>⚠️ TINDAKAN SEGERA DIPERLUKAN:</strong><br>
            Calon trainer telah mengisi formulir pendaftaran. Silakan review dokumen dan jadwalkan interview.
          </div>

          <div class="section">
            <h3>👤 Informasi Pribadi</h3>
            <div class="field">
              <span class="label">Nama Lengkap:</span>
              <span class="value">${formData.fullName}</span>
            </div>
            <div class="field">
              <span class="label">Email:</span>
              <span class="value">${formData.email}</span>
            </div>
            <div class="field">
              <span class="label">Telepon:</span>
              <span class="value">${formData.phone}</span>
            </div>
            <div class="field">
              <span class="label">Alamat:</span>
              <span class="value">${formData.address || 'Tidak diisi'}</span>
            </div>
            <div class="field">
              <span class="label">Pengalaman:</span>
              <span class="value">${formData.experience} tahun</span>
            </div>
          </div>

          <div class="section">
            <h3>📚 Informasi Pelatihan</h3>
            <div class="field">
              <span class="label">Topik Pelatihan:</span>
              <div class="value">
                ${formData.trainingTopics.map(topic => `<div style="margin: 5px 0; padding: 5px 10px; background-color: #e3f2fd; border-radius: 5px; display: inline-block; margin-right: 10px;">✓ ${topic}</div>`).join('')}
              </div>
            </div>
            <div class="field">
              <span class="label">Total Dipilih:</span>
              <span class="value">${formData.trainingTopics.length} topik pelatihan</span>
            </div>
          </div>

          <div class="section">
            <h3>📄 Dokumen Pendukung</h3>
            <div class="file-info">
              <strong>✅ CV (PDF):</strong> 
              ${formData.cv ? 
                `Telah diupload - ${formData.cv.name} (${(formData.cv.size / 1024).toFixed(1)} KB)` : 
                'Belum diupload'
              }
            </div>
            <div class="file-info">
              <strong>✅ Sertifikat (PDF):</strong> 
              ${formData.certificate ? 
                `Telah diupload - ${formData.certificate.name} (${(formData.certificate.size / 1024).toFixed(1)} KB)` : 
                'Belum diupload'
              }
            </div>
            <div class="file-info">
              <strong>✅ Silabus:</strong> 
              ${formData.syllabus ? 
                `Telah diupload - ${formData.syllabus.name} (${(formData.syllabus.size / 1024).toFixed(1)} KB)` : 
                'Belum diupload'
              }
            </div>
            <div class="file-info">
              <strong>✅ Portfolio:</strong> 
              ${formData.portfolio ? 
                `Telah diupload - ${formData.portfolio.name} (${(formData.portfolio.size / 1024).toFixed(1)} KB)` : 
                'Belum diupload'
              }
            </div>
            <div class="file-info">
              <strong>🎬 Video Demo:</strong> 
              ${formData.videoLink ? 
                `<a href="${formData.videoLink}" target="_blank" style="color: #f97316; text-decoration: none; background-color: #f97316; color: white; padding: 5px 10px; border-radius: 5px;">📹 Lihat Video di Google Drive</a>` : 
                'Belum diupload'
              }
            </div>
          </div>

          <div class="section">
            <h3>🔗 Media Sosial</h3>
            <div class="social-links">
              ${formData.linkedin ? `<a href="${formData.linkedin}" class="social-link" target="_blank">LinkedIn</a>` : ''}
              ${formData.youtube ? `<a href="${formData.youtube}" class="social-link" target="_blank">YouTube</a>` : ''}
              ${formData.instagram ? `<a href="${formData.instagram}" class="social-link" target="_blank">Instagram</a>` : ''}
              ${formData.facebook ? `<a href="${formData.facebook}" class="social-link" target="_blank">Facebook</a>` : ''}
            </div>
          </div>

          <div class="section">
            <h3>✅ Pernyataan Pendaftar</h3>
            <p>Calon trainer telah menyetujui pernyataan pendaftaran dan bersedia dihubungi untuk proses seleksi selanjutnya.</p>
          </div>

          <div class="footer">
            <p><strong>Akualita Academy</strong><br>
            Email ini dikirim otomatis dari sistem pendaftaran trainer.<br>
            Timestamp: ${new Date().toLocaleString('id-ID', { 
              timeZone: 'Asia/Jakarta',
              year: 'numeric',
              month: 'long',
              day: 'numeric',
              hour: '2-digit',
              minute: '2-digit'
            })}</p>
          </div>
        </div>
      </body>
      </html>
    `;

    // Konfigurasi email
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.RECIPIENT_EMAIL || process.env.EMAIL_USER,
      subject: `🧾 Pendaftaran Trainer Baru - ${formData.fullName} | Akualita Academy`,
      html: htmlContent,
    };

    // Kirim email
    await transporter.sendMail(mailOptions);

    console.log('Trainer registration email sent successfully');
    return NextResponse.json({ 
      message: 'Email pendaftaran trainer berhasil dikirim!' 
    });

  } catch (error) {
    console.error('Error sending trainer registration email:', error);
    return NextResponse.json(
      { error: 'Terjadi kesalahan saat mengirim email. Silakan coba lagi.' },
      { status: 500 }
    );
  }
}
