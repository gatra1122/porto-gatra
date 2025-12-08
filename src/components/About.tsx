import me from "../assets/me.jpg";

const About = () => {
  return (
    <section className="h-screen overflow-hidden snap-start flex items-center justify-center bg-linear-to-br from-white to-gray-100 px-4 md:px-6">
      <div className="max-w-2xl text-center grid grid-cols-1 md:grid-cols-[1fr_2fr] items-center gap-8 md:gap-12">
        <div className="max-w-56 md:max-w-72 rounded-2xl overflow-hidden shadow-lg hover:scale-105 md:hover:scale-110 transition-transform duration-300 mx-auto">
          <img
            src={me}
            alt="profile"
            className="w-full h-full object-cover"
          />
        </div>

        <div>
          <div className="text-left mb-4">
            <h2 className="text-xl md:text-2xl">
              Hai, Perkenalkan Saya
            </h2>
            <h1 className="text-3xl md:text-5xl font-semibold">
              Idris Gatra Putra
            </h1>
            <h2 className="text-lg md:text-2xl">
              Sarjana Komputer Sistem Informasi
            </h2>
          </div>

          <div className="text-gray-700 text-base md:text-lg leading-relaxed text-left">
            <p>
              Lulusan S1 Sistem Informasi Universitas
              Bengkulu tahun 2025 dengan IPK 3.60, memiliki
              pengalaman dalam mengembangkan aplikasi
              menggunakan Framework Laravel dan React, serta
              keterampilan dalam mengoperasikan komputer.
              Mampu bekerja secara mandiri maupun dalam tim,
              dan berkomitmen untuk terus mengembangkan
              keahlian di bidang teknologi informasi.
            </p>
          </div>
          <div className="text-left text-gray-700">
            Kontak: <span className="italic">idrisgatra@gmail.com</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
