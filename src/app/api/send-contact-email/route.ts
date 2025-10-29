import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  try {
    const { email, subject, message } = await request.json();

    // Validasi input
    if (!email || !subject || !message) {
      return NextResponse.json(
        { error: 'Semua field harus diisi' },
        { status: 400 }
      );
    }

    // Cek apakah environment variables sudah dikonfigurasi untuk QNA
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      console.error('Environment variables untuk QNA tidak dikonfigurasi');
      return NextResponse.json(
        { error: 'Email service QNA belum dikonfigurasi. Silakan hubungi administrator.' },
        { status: 500 }
      );
    }

    // Konfigurasi transporter Nodemailer untuk QNA
    // Menggunakan email khusus untuk QNA di landing page
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER, // Email pengirim untuk QNA
        pass: process.env.EMAIL_PASS, // App password dari Gmail untuk QNA
      },
    });

    // Konfigurasi email
    const mailOptions = {
      from: process.env.EMAIL_USER, // Email pengirim untuk QNA
      to: 'academy@akualita.com', // Email penerima untuk QNA dari landing page
      replyTo: email, // Email yang bisa di-reply
      subject: `[AKUALITA Academy] ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <div style="background: linear-gradient(135deg, #1F2756 0%, #00ACF8 100%); padding: 30px; border-radius: 10px; margin-bottom: 20px;">
            <h1 style="color: white; margin: 0; font-size: 24px;">AKUALITA Academy</h1>
            <p style="color: white; margin: 10px 0 0 0; opacity: 0.9;">Pesan Kontak dari Website</p>
          </div>
          
          <div style="background: #f8f9fa; padding: 25px; border-radius: 10px; margin-bottom: 20px;">
            <h2 style="color: #1F2756; margin: 0 0 15px 0; font-size: 20px;">Detail Pesan</h2>
            
            <div style="margin-bottom: 15px;">
              <strong style="color: #1F2756;">Dari:</strong>
              <span style="color: #00ACF8; margin-left: 10px;">${email}</span>
            </div>
            
            <div style="margin-bottom: 15px;">
              <strong style="color: #1F2756;">Subjek:</strong>
              <span style="margin-left: 10px;">${subject}</span>
            </div>
            
            <div>
              <strong style="color: #1F2756;">Pesan:</strong>
              <div style="background: white; padding: 15px; border-radius: 5px; margin-top: 10px; border-left: 4px solid #00ACF8;">
                ${message.replace(/\n/g, '<br>')}
              </div>
            </div>
          </div>
          
          <div style="text-align: center; color: #666; font-size: 14px; padding: 20px;">
            <p>Email ini dikirim melalui form kontak di website AKUALITA Academy</p>
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
      { message: 'Email berhasil dikirim!' },
      { status: 200 }
    );

  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Terjadi kesalahan saat mengirim email. Silakan coba lagi.' },
      { status: 500 }
    );
  }
}
