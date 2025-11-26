import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  try {
    const formData = await request.json();

    // Validasi input wajib
    if (!formData.trainingTitle || !formData.participantName || !formData.whatsappNumber || 
        !formData.recipientEmail || !formData.recipientName || !formData.deliveryAddress ||
        !formData.participantCategory || !formData.shirtSize || !formData.informationSource ||
        !formData.agreement) {
      return NextResponse.json(
        { error: 'Semua field wajib harus diisi' },
        { status: 400 }
      );
    }

    // Cek apakah environment variables sudah dikonfigurasi
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      console.error('Environment variables untuk email tidak dikonfigurasi');
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

    // Format data untuk email
    const formatField = (label: string, value: string | boolean) => {
      if (value === null || value === undefined || value === '') return '';
      if (typeof value === 'boolean') return value ? 'Ya' : 'Tidak';
      return value;
    };

    // Konfigurasi email
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: 'academy@akualita.com',
      replyTo: formData.recipientEmail,
      subject: `[AKUALITA Academy] Pendaftaran Baru - ${formData.trainingTitle}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 700px; margin: 0 auto; padding: 20px;">
          <div style="background: linear-gradient(135deg, #04AEFB 0%, #18ECA0 100%); padding: 30px; border-radius: 10px; margin-bottom: 20px;">
            <h1 style="color: white; margin: 0; font-size: 24px;">AKUALITA Academy</h1>
            <p style="color: white; margin: 10px 0 0 0; opacity: 0.9;">Formulir Pendaftaran Baru</p>
          </div>
          
          <div style="background: #f8f9fa; padding: 25px; border-radius: 10px; margin-bottom: 20px;">
            <h2 style="color: #00C0E8; margin: 0 0 20px 0; font-size: 20px; border-bottom: 2px solid #00C0E8; padding-bottom: 10px;">Informasi Training</h2>
            <table style="width: 100%; border-collapse: collapse;">
              <tr><td style="padding: 8px 0; font-weight: bold; color: #535353; width: 200px;">Judul & Topik Training:</td><td style="padding: 8px 0; color: #535353;">${formatField('', formData.trainingTitle)}</td></tr>
              <tr><td style="padding: 8px 0; font-weight: bold; color: #535353;">Tanggal Pelaksanaan:</td><td style="padding: 8px 0; color: #535353;">${formatField('', formData.trainingDate)}</td></tr>
              <tr><td style="padding: 8px 0; font-weight: bold; color: #535353;">Tempat Training:</td><td style="padding: 8px 0; color: #535353;">${formatField('', formData.trainingLocation)}</td></tr>
            </table>
          </div>

          <div style="background: #f8f9fa; padding: 25px; border-radius: 10px; margin-bottom: 20px;">
            <h2 style="color: #00C0E8; margin: 0 0 20px 0; font-size: 20px; border-bottom: 2px solid #00C0E8; padding-bottom: 10px;">Data Pribadi Peserta</h2>
            <table style="width: 100%; border-collapse: collapse;">
              <tr><td style="padding: 8px 0; font-weight: bold; color: #535353; width: 200px;">Nama Peserta:</td><td style="padding: 8px 0; color: #535353;">${formatField('', formData.participantName)}</td></tr>
              <tr><td style="padding: 8px 0; font-weight: bold; color: #535353;">Nomor WhatsApp:</td><td style="padding: 8px 0; color: #535353;">${formatField('', formData.whatsappNumber)}</td></tr>
            </table>
          </div>

          <div style="background: #f8f9fa; padding: 25px; border-radius: 10px; margin-bottom: 20px;">
            <h2 style="color: #00C0E8; margin: 0 0 20px 0; font-size: 20px; border-bottom: 2px solid #00C0E8; padding-bottom: 10px;">Alamat Pengiriman Sertifikat</h2>
            <table style="width: 100%; border-collapse: collapse;">
              <tr><td style="padding: 8px 0; font-weight: bold; color: #535353; width: 200px;">Email Penerima:</td><td style="padding: 8px 0; color: #535353;">${formatField('', formData.recipientEmail)}</td></tr>
              <tr><td style="padding: 8px 0; font-weight: bold; color: #535353;">Nomor Telepon Penerima:</td><td style="padding: 8px 0; color: #535353;">${formatField('', formData.recipientPhone)}</td></tr>
              <tr><td style="padding: 8px 0; font-weight: bold; color: #535353;">Nama Penerima:</td><td style="padding: 8px 0; color: #535353;">${formatField('', formData.recipientName)}</td></tr>
              <tr><td style="padding: 8px 0; font-weight: bold; color: #535353; vertical-align: top;">Alamat Lengkap:</td><td style="padding: 8px 0; color: #535353;">${formatField('', formData.deliveryAddress)}</td></tr>
            </table>
          </div>

          ${formData.certificationScheme ? `
          <div style="background: #f8f9fa; padding: 25px; border-radius: 10px; margin-bottom: 20px;">
            <h2 style="color: #00C0E8; margin: 0 0 20px 0; font-size: 20px; border-bottom: 2px solid #00C0E8; padding-bottom: 10px;">Skema Sertifikasi</h2>
            <p style="color: #535353; margin: 0;">${formData.certificationScheme}</p>
          </div>
          ` : ''}

          ${formData.contactPerson ? `
          <div style="background: #f8f9fa; padding: 25px; border-radius: 10px; margin-bottom: 20px;">
            <h2 style="color: #00C0E8; margin: 0 0 20px 0; font-size: 20px; border-bottom: 2px solid #00C0E8; padding-bottom: 10px;">Contact Tim Academy</h2>
            <p style="color: #535353; margin: 0;">${formData.contactPerson}</p>
          </div>
          ` : ''}

          ${formData.bankType || formData.virtualAccount ? `
          <div style="background: #f8f9fa; padding: 25px; border-radius: 10px; margin-bottom: 20px;">
            <h2 style="color: #00C0E8; margin: 0 0 20px 0; font-size: 20px; border-bottom: 2px solid #00C0E8; padding-bottom: 10px;">Informasi Pembayaran</h2>
            <table style="width: 100%; border-collapse: collapse;">
              ${formData.bankType ? `<tr><td style="padding: 8px 0; font-weight: bold; color: #535353; width: 200px;">Jenis Bank:</td><td style="padding: 8px 0; color: #535353;">${formData.bankType}</td></tr>` : ''}
              ${formData.virtualAccount ? `<tr><td style="padding: 8px 0; font-weight: bold; color: #535353;">Virtual Account:</td><td style="padding: 8px 0; color: #535353;">${formData.virtualAccount}</td></tr>` : ''}
            </table>
            <p style="color: #666; font-size: 12px; margin-top: 10px;">CV. Primera Purwina Gemilang</p>
          </div>
          ` : ''}

          ${formData.registrantName || formData.registrantPhone ? `
          <div style="background: #f8f9fa; padding: 25px; border-radius: 10px; margin-bottom: 20px;">
            <h2 style="color: #00C0E8; margin: 0 0 20px 0; font-size: 20px; border-bottom: 2px solid #00C0E8; padding-bottom: 10px;">Informasi Pendaftar</h2>
            <table style="width: 100%; border-collapse: collapse;">
              ${formData.registrantName ? `<tr><td style="padding: 8px 0; font-weight: bold; color: #535353; width: 200px;">Nama Pendaftar:</td><td style="padding: 8px 0; color: #535353;">${formData.registrantName}</td></tr>` : ''}
              ${formData.registrantPhone ? `<tr><td style="padding: 8px 0; font-weight: bold; color: #535353;">Nomor Telepon:</td><td style="padding: 8px 0; color: #535353;">${formData.registrantPhone}</td></tr>` : ''}
              ${formData.registrantPosition ? `<tr><td style="padding: 8px 0; font-weight: bold; color: #535353;">Jabatan/Posisi:</td><td style="padding: 8px 0; color: #535353;">${formData.registrantPosition}</td></tr>` : ''}
            </table>
          </div>
          ` : ''}

          <div style="background: #f8f9fa; padding: 25px; border-radius: 10px; margin-bottom: 20px;">
            <h2 style="color: #00C0E8; margin: 0 0 20px 0; font-size: 20px; border-bottom: 2px solid #00C0E8; padding-bottom: 10px;">Informasi Tambahan</h2>
            <table style="width: 100%; border-collapse: collapse;">
              <tr><td style="padding: 8px 0; font-weight: bold; color: #535353; width: 200px;">Kategori Peserta:</td><td style="padding: 8px 0; color: #535353;">${formatField('', formData.participantCategory)}</td></tr>
              ${formData.trainingPeriod ? `<tr><td style="padding: 8px 0; font-weight: bold; color: #535353;">Periode Pelatihan:</td><td style="padding: 8px 0; color: #535353;">${formData.trainingPeriod}</td></tr>` : ''}
              <tr><td style="padding: 8px 0; font-weight: bold; color: #535353;">Ukuran Kemeja/Rompi:</td><td style="padding: 8px 0; color: #535353;">${formatField('', formData.shirtSize)}</td></tr>
              ${formData.referralCode ? `<tr><td style="padding: 8px 0; font-weight: bold; color: #535353;">Kode Referral:</td><td style="padding: 8px 0; color: #535353;">${formData.referralCode}</td></tr>` : ''}
              <tr><td style="padding: 8px 0; font-weight: bold; color: #535353;">Sumber Informasi:</td><td style="padding: 8px 0; color: #535353;">${formatField('', formData.informationSource)}${formData.otherSource ? ` (${formData.otherSource})` : ''}</td></tr>
            </table>
          </div>

          <div style="background: #e8f5e9; padding: 15px; border-radius: 10px; border-left: 4px solid #4caf50; margin-bottom: 20px;">
            <p style="color: #2e7d32; margin: 0; font-weight: bold;">✓ Peserta telah menyetujui Syarat & Ketentuan</p>
          </div>
          
          <div style="text-align: center; color: #666; font-size: 14px; padding: 20px;">
            <p>Email ini dikirim melalui formulir pendaftaran di website AKUALITA Academy</p>
            <p>Tanggal: ${new Date().toLocaleString('id-ID', { 
              weekday: 'long', 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric',
              hour: '2-digit',
              minute: '2-digit'
            })}</p>
          </div>
        </div>
      `,
    };

    // Kirim email
    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: 'Pendaftaran berhasil dikirim!' },
      { status: 200 }
    );

  } catch (error) {
    console.error('Error sending registration form:', error);
    return NextResponse.json(
      { error: 'Terjadi kesalahan saat mengirim formulir. Silakan coba lagi.' },
      { status: 500 }
    );
  }
}

