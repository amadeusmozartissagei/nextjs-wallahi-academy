import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { writeFile, mkdir } from 'fs/promises';
import { join } from 'path';
import { existsSync } from 'fs';

export async function POST(request: NextRequest) {
  // Declare variables outside try block for proper scope
  const tempFiles: string[] = [];
  
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
    // const agreement = formData.get('agreement') as string; // Not used in current implementation
    const trainingTopicsString = formData.get('trainingTopics') as string;
    
    // Parse training topics
    const trainingTopics = JSON.parse(trainingTopicsString || '[]');
    
    // Extract files
    const cvFile = formData.get('cv') as File | null;
    const certificateFile = formData.get('certificate') as File | null;
    const syllabusFile = formData.get('syllabus') as File | null;
    const portfolioFile = formData.get('portfolio') as File | null;

    // Validasi input required
    if (!fullName || !email || !phone || !trainingTopics || trainingTopics.length === 0) {
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

    // Create temporary directory for file storage
    const tempDir = join(process.cwd(), 'temp', 'trainer-files');
    if (!existsSync(tempDir)) {
      await mkdir(tempDir, { recursive: true });
    }

    // Save files temporarily and prepare attachments
    const attachments: Array<{
      filename: string;
      path: string;
      contentType: string;
    }> = [];

    try {
      // Save CV file
      if (cvFile && cvFile.size > 0) {
        const cvBuffer = Buffer.from(await cvFile.arrayBuffer());
        const cvPath = join(tempDir, `cv_${Date.now()}_${cvFile.name}`);
        await writeFile(cvPath, cvBuffer);
        attachments.push({
          filename: `CV_${fullName.replace(/\s+/g, '_')}.pdf`,
          path: cvPath,
          contentType: 'application/pdf'
        });
        tempFiles.push(cvPath);
      }

      // Save Certificate file
      if (certificateFile && certificateFile.size > 0) {
        const certBuffer = Buffer.from(await certificateFile.arrayBuffer());
        const certPath = join(tempDir, `cert_${Date.now()}_${certificateFile.name}`);
        await writeFile(certPath, certBuffer);
        attachments.push({
          filename: `Sertifikat_${fullName.replace(/\s+/g, '_')}.pdf`,
          path: certPath,
          contentType: 'application/pdf'
        });
        tempFiles.push(certPath);
      }

      // Save Syllabus file
      if (syllabusFile && syllabusFile.size > 0) {
        const syllabusBuffer = Buffer.from(await syllabusFile.arrayBuffer());
        const syllabusPath = join(tempDir, `syllabus_${Date.now()}_${syllabusFile.name}`);
        await writeFile(syllabusPath, syllabusBuffer);
        const contentType = syllabusFile.type || 'application/octet-stream';
        attachments.push({
          filename: `Silabus_${fullName.replace(/\s+/g, '_')}.${syllabusFile.name.split('.').pop()}`,
          path: syllabusPath,
          contentType: contentType
        });
        tempFiles.push(syllabusPath);
      }

      // Save Portfolio file
      if (portfolioFile && portfolioFile.size > 0) {
        const portfolioBuffer = Buffer.from(await portfolioFile.arrayBuffer());
        const portfolioPath = join(tempDir, `portfolio_${Date.now()}_${portfolioFile.name}`);
        await writeFile(portfolioPath, portfolioBuffer);
        const contentType = portfolioFile.type || 'application/octet-stream';
        attachments.push({
          filename: `Portfolio_${fullName.replace(/\s+/g, '_')}.${portfolioFile.name.split('.').pop()}`,
          path: portfolioPath,
          contentType: contentType
        });
        tempFiles.push(portfolioPath);
      }
    } catch (fileError) {
      console.error('Error saving files:', fileError);
      return NextResponse.json(
        { error: 'Gagal menyimpan file. Silakan coba lagi.' },
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
            <h3>📄 Dokumen Pendukung</h3>
            <div class="file-info">
              <strong>✅ CV (PDF):</strong> 
              ${cvFile && cvFile.size > 0 ? 
                `Telah diupload - ${cvFile.name} (${(cvFile.size / 1024).toFixed(1)} KB) - <strong>TERLAMPIR</strong>` : 
                'Belum diupload'
              }
            </div>
            <div class="file-info">
              <strong>✅ Sertifikat (PDF):</strong> 
              ${certificateFile && certificateFile.size > 0 ? 
                `Telah diupload - ${certificateFile.name} (${(certificateFile.size / 1024).toFixed(1)} KB) - <strong>TERLAMPIR</strong>` : 
                'Belum diupload'
              }
            </div>
            <div class="file-info">
              <strong>✅ Silabus:</strong> 
              ${syllabusFile && syllabusFile.size > 0 ? 
                `Telah diupload - ${syllabusFile.name} (${(syllabusFile.size / 1024).toFixed(1)} KB) - <strong>TERLAMPIR</strong>` : 
                'Belum diupload'
              }
            </div>
            <div class="file-info">
              <strong>✅ Portfolio:</strong> 
              ${portfolioFile && portfolioFile.size > 0 ? 
                `Telah diupload - ${portfolioFile.name} (${(portfolioFile.size / 1024).toFixed(1)} KB) - <strong>TERLAMPIR</strong>` : 
                'Belum diupload'
              }
            </div>
            <div class="file-info">
              <strong>🎬 Video Demo:</strong> 
              ${videoLink ? 
                `<a href="${videoLink}" target="_blank" style="color: #f97316; text-decoration: none; background-color: #f97316; color: white; padding: 5px 10px; border-radius: 5px;">📹 Lihat Video di Google Drive</a>` : 
                'Belum diupload'
              }
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
      subject: `🧾 Pendaftaran Trainer Baru - ${fullName} | Akualita Academy`,
      html: htmlContent,
      attachments: attachments, // Add PDF attachments
    };

    // Kirim email
    await transporter.sendMail(mailOptions);

    // Cleanup temporary files
    const { unlink } = await import('fs/promises');
    for (const tempFile of tempFiles) {
      try {
        await unlink(tempFile);
      } catch (cleanupError) {
        console.warn('Failed to delete temp file:', tempFile, cleanupError);
      }
    }

    console.log('Trainer registration email sent successfully with attachments');
    return NextResponse.json({ 
      message: 'Email pendaftaran trainer berhasil dikirim dengan lampiran PDF!' 
    });

  } catch (error) {
    console.error('Error sending trainer registration email:', error);
    
    // Cleanup temporary files on error
    if (tempFiles && tempFiles.length > 0) {
      const { unlink } = await import('fs/promises');
      for (const tempFile of tempFiles) {
        try {
          await unlink(tempFile);
        } catch (cleanupError) {
          console.warn('Failed to delete temp file on error cleanup:', tempFile, cleanupError);
        }
      }
    }
    
    return NextResponse.json(
      { error: 'Terjadi kesalahan saat mengirim email. Silakan coba lagi.' },
      { status: 500 }
    );
  }
}
