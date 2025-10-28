import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  try {
    // Parse multipart/form-data
    const formData = await request.formData();

    // Extract form data
    const fullName = formData.get('fullName') as string;
    const email = formData.get('email') as string;
    const phone = formData.get('phone') as string;
    const address = formData.get('address') as string;
    const experience = formData.get('experience') as string;
    const linkedin = formData.get('linkedin') as string;
    const youtube = formData.get('youtube') as string;
    const instagram = formData.get('instagram') as string;
    const facebook = formData.get('facebook') as string;
    const videoLink = formData.get('videoLink') as string;
    const trainingTopicsString = formData.get('trainingTopics') as string;
    
    // Parse training topics
    const trainingTopics = JSON.parse(trainingTopicsString || '[]');

    // Debug logging
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

    // Validasi input required
    if (!fullName || !email || !phone || !trainingTopics || trainingTopics.length === 0) {
      return NextResponse.json(
        { error: 'Data pribadi wajib diisi lengkap' },
        { status: 400 }
      );
    }

    // Cek apakah environment variables sudah dikonfigurasi untuk Trainer
    if (!process.env.TRAINER_EMAIL_USER || !process.env.TRAINER_EMAIL_PASS) {
      console.error('Environment variables untuk Trainer tidak dikonfigurasi');
      return NextResponse.json(
        { error: 'Email service Trainer belum dikonfigurasi. Silakan hubungi administrator.' },
        { status: 500 }
      );
    }

    // Konfigurasi transporter Nodemailer untuk Trainer
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.TRAINER_EMAIL_USER,
        pass: process.env.TRAINER_EMAIL_PASS,
      },
    });

    // Template email sederhana untuk testing
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
          .social-links {
            display: flex;
            flex-wrap: wrap;
            gap: 10px;
            margin-top: 10px;
          }
          .social-link {
            background-color: #f97316;
            color: white !important;
            padding: 8px 12px;
            border-radius: 5px;
            text-decoration: none !important;
            font-size: 12px;
            font-weight: bold;
            display: inline-block;
            margin: 2px;
            border: 1px solid #f97316;
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
            <h1>🧾 Pendaftaran Trainer Baru (TEST)</h1>
            <p>Akualita Academy</p>
          </div>

          <div class="urgent">
            <strong>⚠️ TINDAKAN SEGERA DIPERLUKAN:</strong><br>
            Calon trainer telah mengisi formulir pendaftaran. Silakan review data dan jadwalkan interview.
          </div>

          <div class="section">
            <h3>👤 Informasi Pribadi</h3>
            <div class="field">
              <span class="label">Nama Lengkap:</span>
              <span class="value">${fullName}</span>
            </div>
            <div class="field">
              <span class="label">Email:</span>
              <span class="value">${email}</span>
            </div>
            <div class="field">
              <span class="label">Telepon:</span>
              <span class="value">${phone}</span>
            </div>
            <div class="field">
              <span class="label">Alamat:</span>
              <span class="value">${address || 'Tidak diisi'}</span>
            </div>
            <div class="field">
              <span class="label">Pengalaman:</span>
              <span class="value">${experience} tahun</span>
            </div>
          </div>

          <div class="section">
            <h3>📚 Informasi Pelatihan</h3>
            <div class="field">
              <span class="label">Topik Pelatihan:</span>
              <div class="value">
                ${trainingTopics.map((topic: string) => `<div style="margin: 5px 0; padding: 5px 10px; background-color: #e3f2fd; border-radius: 5px; display: inline-block; margin-right: 10px;">✓ ${topic}</div>`).join('')}
              </div>
            </div>
            <div class="field">
              <span class="label">Total Dipilih:</span>
              <span class="value">${trainingTopics.length} topik pelatihan</span>
            </div>
          </div>

          <div class="section">
            <h3>🔗 Media Sosial</h3>
            <div class="social-links">
              ${linkedin ? `<a href="${linkedin}" class="social-link" target="_blank">LinkedIn</a>` : ''}
              ${youtube ? `<a href="${youtube}" class="social-link" target="_blank">YouTube</a>` : ''}
              ${instagram ? `<a href="${instagram}" class="social-link" target="_blank">Instagram</a>` : ''}
              ${facebook ? `<a href="${facebook}" class="social-link" target="_blank">Facebook</a>` : ''}
            </div>
          </div>

          <div class="section">
            <h3>🎬 Video Demo</h3>
            <div class="field">
              <span class="label">Link Video:</span>
              <span class="value">
                ${videoLink ? 
                  `<a href="${videoLink}" target="_blank" style="color: #f97316; text-decoration: none;">📹 Lihat Video Demo</a>` : 
                  'Belum diupload'
                }
              </span>
            </div>
          </div>

          <div class="section">
            <h3>✅ Pernyataan Pendaftar</h3>
            <p>Calon trainer telah menyetujui pernyataan pendaftaran dan bersedia dihubungi untuk proses seleksi selanjutnya.</p>
          </div>

          <div class="footer">
            <p><strong>Akualita Academy</strong><br>
            Email ini dikirim otomatis dari sistem pendaftaran trainer (TEST VERSION).<br>
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
      from: process.env.TRAINER_EMAIL_USER,
      to: 'amadeusmozartissagei@gmail.com',
      subject: `🧾 Pendaftaran Trainer Baru (TEST) - ${fullName} | Akualita Academy`,
      html: htmlContent,
    };

    // Kirim email
    await transporter.sendMail(mailOptions);

    console.log('Trainer registration email sent successfully (TEST VERSION)');
    return NextResponse.json({ 
      message: 'Email pendaftaran trainer berhasil dikirim (TEST VERSION)!' 
    });

  } catch (error) {
    console.error('Error sending trainer registration email:', error);
    
    return NextResponse.json(
      { error: 'Terjadi kesalahan saat mengirim email. Silakan coba lagi.' },
      { status: 500 }
    );
  }
}
