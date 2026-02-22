import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import me from "./assets/me.png";
import emahabbah from "./assets/emahabbah.jpg";
import bgHeader from "./assets/bg-header.jpg";
import medisipena from "./assets/medisipena.jpg";
import webpins from "./assets/webprofile-inspektorat.jpg";
import simpati from "./assets/simpati.jpg";
import {useRef, useState} from "react";
import {MdMail} from "react-icons/md";
import {
  FaLinkedin,
  FaInfoCircle,
  FaCogs,
  FaProjectDiagram
} from "react-icons/fa";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  const [stateLB, setStateLB] = useState<
    "" | "emahabbah" | "medisipena" | "webpins" | "simpati"
  >("");

  const topRef = useRef(null);
  const tentangRef = useRef(null);
  const skillRef = useRef(null);
  const proyekRef = useRef(null);

  const scrollTo = (ref: React.RefObject<HTMLElement>) => {
    ref.current?.scrollIntoView({behavior: "smooth"});
  };

  const [open, setOpen] = useState(false);

  return (
    <div ref={topRef}>
      <div>
        {/* MARK: HEADER */}
        <section className="relative flex items-center justify-center p-44 overflow-hidden">
          <div
            className="absolute w-full h-full bg-cover bg-center -z-50 blur-sm scale-110"
            style={{
              backgroundImage: `url(${bgHeader})`,
            }}></div>
          <div className="absolute w-full h-full bg-blue-500/50 -z-40"></div>

          <nav className="absolute top-0 left-0 w-full z-50 py-6 text-white text-xl font-semibold">
            <div className="max-w-7xl mx-auto px-6 flex justify-end items-center">
              {/* Tombol Hamburger */}
              <button
                className="md:hidden text-3xl focus:outline-none"
                onClick={() => setOpen(!open)}>
                {open ? "✕" : "☰"}
              </button>

              {/* Menu Desktop (tetap .menu-nav yang lama) */}
              <ul className="menu-nav hidden md:inline-flex gap-6">
                <li onClick={() => scrollTo(tentangRef)}>
                  Tentang
                </li>
                <li onClick={() => scrollTo(skillRef)}>
                  Kemampuan
                </li>
                <li onClick={() => scrollTo(proyekRef)}>
                  Proyek
                </li>
              </ul>
            </div>

            {/* Menu Mobile (pakai gaya bawaan li yang sama) */}
            {open && (
              <ul className="flex flex-col md:hidden text-white font-semibold px-4 py-2 menu-nav">
                <li
                  onClick={() => {
                    scrollTo(tentangRef);
                    setOpen(false);
                  }}>
                  Tentang
                </li>
                <li
                  onClick={() => {
                    scrollTo(skillRef);
                    setOpen(false);
                  }}>
                  Kemampuan
                </li>
                <li
                  onClick={() => {
                    scrollTo(proyekRef);
                    setOpen(false);
                  }}>
                  Proyek
                </li>
              </ul>
            )}
          </nav>
          <div className="text-center flex flex-col md:flex-row items-center gap-2 md:gap-12">
            <div className="relative max-w-46 max-h-46 md:max-w-62 md:max-h-62 mx-auto bg-blue-200 rounded-full overflow-hidden border-8 border-blue-300">
              <img
                src={me}
                alt="Idris Gatra Putra"
                className="w-full h-full object-cover scale-95 hover:scale-100 transition-all -translate-x-1 -rotate-1"
              />
            </div>

            <div className="w-max text-[#f8f8f8]">
              <div className="text-center md:text-left mb-4">
                <h2 className="text-xl md:text-2xl">
                  Hai, Perkenalkan Saya
                </h2>
                <h1 className="text-3xl md:text-5xl font-semibold">
                  Idris Gatra Putra
                </h1>
              </div>
            </div>
          </div>
        </section>
        <section
          className="bg-gray-100 py-12"
          ref={tentangRef}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4 scroll-mt-[70px]">
            <h1 className="text-2xl md:text-4xl font-bold mb-5 inline-flex gap-2 items-center">
              <FaInfoCircle className="text-2xl" />
              Tentang
            </h1>
            <div>
              <p>
                Saya adalah lulusan S1 Sistem Informasi
                Universitas Bengkulu tahun 2025 dengan IPK
                3.60, memiliki pengalaman dalam
                mengembangkan aplikasi menggunakan{" "}
                <span className="italic">
                  Framework Laravel
                </span>{" "}
                dan <span className="italic">React</span>,
                serta keterampilan dalam mengoperasikan
                komputer. Mampu bekerja secara mandiri
                maupun dalam tim, dan berkomitmen untuk
                terus mengembangkan keahlian di bidang
                teknologi informasi.
              </p>
              <br />
              <div className="flex flex-col gap-1">
                <div className="inline-flex items-center gap-1">
                  <MdMail />
                  <a
                    href="mailto:idrisgatra@gmail.com"
                    className="italic underline">
                    idrisgatra@gmail.com
                  </a>
                </div>
                <div className="inline-flex items-center gap-1">
                  <FaLinkedin />
                  <a
                    href="https://www.linkedin.com/in/idrisgatraputra/"
                    className="underline"
                    target="_blank">
                    Idris Gatra Putra
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* MARK: SKILL */}
        <section
          className="py-12"
          ref={skillRef}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4 scroll-mt-[70px]">
            <h1 className="text-2xl md:text-4xl font-bold mb-5 inline-flex gap-2 items-center">
              <FaCogs className="text-2xl"/>
              Kemampuan
            </h1>
            <div className="space-y-2">
              <ul>
                <li className="font-bold">Hard Skills :</li>
                <li>
                  * Technical support: Merakit, menginstall
                  dan troubleshooting perangkat komputer
                </li>
                <li>
                  * Web development: Laravel dan React
                </li>
                <li>* Office: Word dan Excel</li>
                <li>
                  * Multimedia: Photoshop, GIMP dan Premiere
                  Pro
                </li>
              </ul>
              <ul>
                <li className="font-bold">Soft Skills :</li>
                <li>* Bekerjasama dalam tim</li>
                <li>
                  * Berkeinginan untuk belajar hal baru
                </li>
              </ul>
            </div>
          </div>
        </section>
        {/* MARK: PROYEK */}
        <section
          className="bg-gray-100 py-12"
          ref={proyekRef}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4 scroll-mt-[70px]">
            <h1 className="text-2xl md:text-4xl font-bold mb-5 inline-flex gap-2 items-center">
              <FaProjectDiagram className="text-2xl"/>
              Proyek
            </h1>
            <div className="lg:grid lg:grid-cols-2 lg:gap-2">
              <div className="py-2 px-4 space-y-2">
                <h4 className="text-lg md:text-xl font-semibold">
                  <a
                    href="https://e-mahabbah.bengkuluutarakab.go.id/"
                    className="underline"
                    target="_blank">
                    E-MAHABBAH (2025)
                  </a>
                </h4>
                <img
                  src={emahabbah}
                  alt="E-MAHABBAH"
                  className="project-img"
                  onClick={() => setStateLB("emahabbah")}
                />
                <Lightbox
                  carousel={{finite: true}}
                  open={stateLB === "emahabbah"}
                  close={() => setStateLB("")}
                  slides={[{src: emahabbah}]}
                  controller={{
                    closeOnBackdropClick: true,
                    disableSwipeNavigation: true,
                  }}
                />
                <p className="text-sm md:text-base">
                  Sistem Monitoring, Analisis Hasil
                  Pembangunan Daerah yang disingkat
                  E-MAHABBAH. Aplikasi ini bertujuan untuk
                  mendukung monitoring dan evaluasi program
                  BAPPERIDA Kabupaten Bengkulu Utara secara
                  digital.
                </p>
                <p className="italic text-sm md:text-base">
                  React (Frontend)
                </p>
              </div>

              <div className="space-y-2 py-2 px-4">
                <h4 className="text-lg md:text-xl font-semibold">
                  <a
                    href="https://drive.google.com/file/d/1a-6GT18gtpLB_Tb5Ucps6uRwoyBN2cMu/view?usp=sharing"
                    className="underline"
                    target="_blank">
                    MEDISIPENA (2024)
                  </a>
                </h4>
                <img
                  src={medisipena}
                  alt="MEDISIPENA"
                  className="project-img"
                  onClick={() => setStateLB("medisipena")}
                />
                <Lightbox
                  carousel={{finite: true}}
                  open={stateLB === "medisipena"}
                  close={() => setStateLB("")}
                  slides={[{src: medisipena}]}
                  controller={{
                    closeOnBackdropClick: true,
                    disableSwipeNavigation: true,
                  }}
                />
                <p className="text-sm md:text-base">
                  Media Pembelajaran Sistem Pencernaan dan
                  Pernapasan Manusia yang disingkat
                  MEDISIPENA. Aplikasi Android ini merupakan
                  project skripsi yang dikembangkan dengan
                  menggabungkan konsep gamifikasi ke dalam
                  media pembelajaran
                </p>
                <p className="italic text-sm md:text-base">
                  React Native
                </p>
              </div>

              <div className="space-y-2 py-2 px-4">
                <h4 className="text-lg md:text-xl font-semibold">
                  <a
                    href="https://inspektorat.bengkuluutarakab.go.id/"
                    className="underline"
                    target="_blank">
                    Web Profile (2024)
                  </a>
                </h4>
                <img
                  src={webpins}
                  alt="Web Profile"
                  className="project-img"
                  onClick={() => setStateLB("webpins")}
                />
                <Lightbox
                  carousel={{finite: true}}
                  open={stateLB === "webpins"}
                  close={() => setStateLB("")}
                  slides={[{src: webpins}]}
                  controller={{
                    closeOnBackdropClick: true,
                    disableSwipeNavigation: true,
                  }}
                />
                <p className="text-sm md:text-base">
                  Aplikasi ini bertujuan untuk menampilkan
                  informasi dari Inspektorat Kabupaten
                  Bengkulu Utara yang dapat diakses oleh
                  publik, mulai dari profil, berita, hingga
                  dokumentasi kegiatan.
                </p>
                <p className="italic text-sm md:text-base">
                  Laravel
                </p>
              </div>

              <div className="space-y-2 py-2 px-4">
                <h4 className="text-lg md:text-xl font-semibold">
                  SIMPATI (2024)
                </h4>
                <img
                  src={simpati}
                  alt="SIMPATI"
                  className="project-img"
                  onClick={() => setStateLB("simpati")}
                />
                <Lightbox
                  carousel={{finite: true}}
                  open={stateLB === "simpati"}
                  close={() => setStateLB("")}
                  slides={[{src: simpati}]}
                  controller={{
                    closeOnBackdropClick: true,
                    disableSwipeNavigation: true,
                  }}
                />
                <p className="text-sm md:text-base">
                  Sistem Informasi Pemantauan Tindak Lanjut
                  Internal yang disingkat SIMPATI. Aplikasi
                  ini bertujuan untuk mendukung pemantauan
                  dan evaluasi tindak lanjut Inspektorat
                  Kabupaten Bengkulu Utara secara digital.
                </p>
                <p className="italic text-sm md:text-base">
                  Laravel
                </p>
              </div>
            </div>
          </div>
        </section>
        <footer className="bg-[#1e4c88] py-4">
          <div className="max-w-1/2 mx-auto text-center">
            <span className="font-semibold text-white">
              © 2025 Idris Gatra Putra, Made With React
              Tailwind
            </span>
          </div>
        </footer>
      </div>
      <ScrollToTop />
    </div>
  );
}

export default App;
