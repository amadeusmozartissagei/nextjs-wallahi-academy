export const metadata = {
  title: "Daftar Trainer - Akualita Academy",
  description: "Formulir pendaftaran trainer Akualita Academy beserta ketentuan dokumen dan video.",
};

export default function TrainerPage() {
  return (
    <main className="max-w-5xl mx-auto px-4 sm:px-6 md:px-16 lg:px-20 py-10 md:py-14">
      <section className="mb-10">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">🧾 Daftar Jadi Trainer Akualita Academy</h1>
        <p className="text-gray-700">Isi formulir pendaftaran dan lengkapi dokumen berikut:</p>
        <ul className="list-disc pl-6 mt-4 space-y-2 text-gray-800">
          <li>Curriculum Vitae (PDF)</li>
          <li>Sertifikat Keahlian / Kompetensi (PDF)</li>
          <li>Topik Pelatihan yang Ingin Diajukan (pilih dari daftar di bawah lihat di appendix)</li>
          <li>Silabus Pelatihan (template tersedia)</li>
          <li>Portfolio singkat (maks. 2 MB)</li>
          <li>Contoh Video Penyampaian Materi (maks. 200 MB)</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-xl md:text-2xl font-semibold text-gray-900 mb-3">🎬 Ketentuan Video</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-800">
          <li>Durasi minimal 3 menit</li>
          <li>Boleh direkam menggunakan handphone tanpa editing</li>
          <li>Harus berupa contoh penyampaian materi (bukan video perkenalan)</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-xl md:text-2xl font-semibold text-gray-900 mb-3">🔗 Akun Media Sosial</h2>
        <p className="text-gray-700">Cantumkan profil profesional Anda untuk verifikasi:</p>
        <ul className="list-disc pl-6 mt-3 space-y-2 text-gray-800">
          <li>LinkedIn (wajib)</li>
          <li>YouTube (jika ada kelas sebelumnya)</li>
          <li>Instagram</li>
          <li>Facebook</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-xl md:text-2xl font-semibold text-gray-900 mb-3">✅ Pernyataan Pendaftar</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-800">
          <li>Data dan materi yang saya unggah adalah benar dan dapat digunakan untuk proses rekrutmen trainer.</li>
          <li>Saya bersedia dihubungi oleh tim Akualita Academy terkait seleksi dan proses selanjutnya.</li>
          <li>Saya memahami bahwa partisipasi bersifat sukarela dan hasil seleksi merupakan kewenangan penuh Akualita Academy.</li>
        </ul>
      </section>

      <section className="mb-14">
        <a
          href="#pendaftaran"
          className="inline-flex items-center justify-center px-5 py-3 rounded-md bg-[#00ACF8] text-white font-semibold shadow hover:shadow-md hover:bg-[#069edb] transition-colors duration-200"
        >
          DAFTAR SEKARANG
        </a>
        <p className="text-gray-700 mt-4">Ayo berbagi pengetahuan, bangun karier, dan jadilah bagian dari gerakan kompetensi K3L Indonesia bersama Akualita Academy.</p>
      </section>

      {/* Placeholder: Appendix & Template Silabus */}
      <section id="appendix" className="mb-20">
        <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-2">Appendix</h3>
        <p className="text-gray-700">Daftar topik pelatihan akan ditambahkan di sini. Template silabus juga akan tersedia untuk diunduh.</p>
      </section>
    </main>
  );
}



