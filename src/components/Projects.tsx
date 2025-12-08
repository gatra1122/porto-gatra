const Projects = () => {
  return (
    <section className="h-screen snap-start flex flex-col items-center justify-center bg-gray-200 px-6 md:px-14 space-y-4">
      <div className="text-center">
        <h1 className="text-2xl md:text-4xl font-bold">
          Project
        </h1>
        <p className="text-base md:text-lg text-gray-700 max-w-xl text-center">
          Daftar project yang pernah saya buat:
        </p>
      </div>

      <div className="flex flex-wrap gap-4 items-center justify-center">
        <div className="max-w-96 bg-gray-100 space-y-2 py-2 px-4 rounded shadow-lg overflow-hidden">
          <h4 className="text-lg md:text-xl font-semibold">
            E-MAHABBAH
          </h4>
          <p className="text-sm md:text-base">
            Sistem Monitoring, Analisis Hasil Pembangunan
            Daerah yang disingkat E-MAHABBAH. Aplikasi ini
            bertujuan untuk mendukung monitoring dan
            evaluasi program BAPPERIDA Kabupaten Bengkulu
            Utara secara digital.
          </p>
          <p className="italic text-sm md:text-base">
            React Frontend
          </p>
        </div>

        <div className="max-w-96 bg-gray-100 space-y-2 py-2 px-4 rounded shadow-lg overflow-hidden">
          <h4 className="text-lg md:text-xl font-semibold">
            MEDISIPENA
          </h4>
          <p className="text-sm md:text-base">
            Media Pembelajaran Sistem Pencernaan dan
            Pernapasan Manusia yang disingkat MEDISIPENA.
            Aplikasi Android ini merupakan project skripsi yang
            dikembangkan dengan menggabungkan konsep
            gamifikasi ke dalam media pembelajaran
          </p>
          <p className="italic text-sm md:text-base">
            React Native
          </p>
        </div>

        <div className="max-w-96 bg-gray-100 space-y-2 py-2 px-4 rounded shadow-lg overflow-hidden">
          <h4 className="text-lg md:text-xl font-semibold">
            Web Profile Inspektorat Kabupaten Bengkulu Utara
          </h4>
          <p className="text-sm md:text-base">
            Aplikasi ini bertujuan untuk menampilkan
            informasi dari Inspektorat Kabupaten Bengkulu
            Utara yang dapat diakses oleh publik, mulai dari
            profil, berita, hingga dokumentasi kegiatan.
          </p>
          <p className="italic text-sm md:text-base">
            Laravel
          </p>
        </div>

        <div className="max-w-96 bg-gray-100 space-y-2 py-2 px-4 rounded shadow-lg overflow-hidden">
          <h4 className="text-lg md:text-xl font-semibold">
            SIMPATI
          </h4>
          <p className="text-sm md:text-base">
            Sistem Informasi Pemantauan Tindak Lanjut
            Internal yang disingkat SIMPATI. Aplikasi ini
            bertujuan untuk mendukung pemantauan dan
            evaluasi tindak lanjut Inspektorat Kabupaten
            Bengkulu Utara secara digital.
          </p>
          <p className="italic text-sm md:text-base">
            Laravel
          </p>
        </div>
      </div>
    </section>
  );
};

export default Projects;
