import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import me from "./assets/me.png";
import emahabbah from "./assets/emahabbah.jpg";
import medisipena from "./assets/medisipena.jpg";
import webpins from "./assets/webprofile-inspektorat.jpg";
import simpati from "./assets/simpati.jpg";
import {useRef, useState} from "react";
import {MdMail} from "react-icons/md";
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
      <nav className="sticky top-0 left-0 bg-(--primary-dark) z-9999 h-[70px]">
        <div className="max-w-[50%] md:max-w-[70%] h-full mx-auto flex justify-between text-white font-semibold items-center">
          <h4
            className="text-2xl hover:cursor-pointer"
            onClick={() => scrollTo(topRef)}>
            Portofolio
          </h4>

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
          <ul className="bg-(--primary-dark) flex flex-col md:hidden text-white font-semibold px-4 py-2 menu-nav">
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
      <div className="space-y-12">
        {/* MARK: HEADER */}
        <section className="bg-blue-100 flex items-center justify-center pt-16 overflow-hidden">
          <div className="text-center flex flex-col md:flex-row items-center gap-2 md:gap-12">
            <div className="relative max-w-46 md:max-w-62 mx-auto">
              <img
                src={me}
                alt="Idris Gatra Putra"
                className="w-full h-full object-cover hover:scale-110 transition-all"
              />
            </div>

            <div className="w-max">
              <div className="text-center md:text-left mb-4">
                <h2 className="text-xl md:text-2xl">
                  Hai, Perkenalkan Saya
                </h2>
                <h1 className="text-3xl md:text-5xl font-semibold">
                  Idris Gatra Putra
                </h1>
                <h2 className="text-base italic">
                  Sarjana Komputer
                </h2>
              </div>
            </div>
          </div>
        </section>
        <section
          className="max-w-[50%] md:max-w-[70%] mx-auto space-y-4 scroll-mt-[70px]"
          ref={tentangRef}>
          <div className="text-left">
            <h1 className="text-2xl md:text-4xl font-bold mb-5">
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
                </span>
                {" "}dan{" "}
                <span className="italic">React</span>, serta
                keterampilan dalam mengoperasikan komputer.
                Mampu bekerja secara mandiri maupun dalam
                tim, dan berkomitmen untuk terus
                mengembangkan keahlian di bidang teknologi
                informasi.
              </p>
              <br />
              <div className="inline-flex items-center gap-1">
                <MdMail />
                <span className="italic">
                  idrisgatra@gmail.com
                </span>
              </div>
            </div>
          </div>
        </section>
        <section
          className="max-w-[50%] md:max-w-[70%] mx-auto space-y-4 scroll-mt-[70px]"
          ref={skillRef}>
          <div className="text-left">
            <h1 className="text-2xl md:text-4xl font-bold mb-5">
              Kemampuan
            </h1>
            <div>
              <ul>
                <li>
                  * Mengoperasikan serta melakukan{" "}
                  <span className="italic">
                    troubleshooting
                  </span>{" "}
                  pada perangkat komputer.
                </li>
                <li>
                  * Mengoperasikan aplikasi{" "}
                  <span className="italic">Excel</span> dan{" "}
                  <span className="italic">Word</span> pada
                  tingkat dasar.
                </li>
                <li>
                  * Memahami{" "}
                  <span className="italic">
                    framework Laravel
                  </span>{" "}
                  dan <span className="italic">React</span>{" "}
                  pada tingkat dasar hingga menengah.
                </li>
              </ul>
            </div>
          </div>
        </section>
        {/* MARK: PROYEK */}
        <section
          className="max-w-[50%] md:max-w-[70%] mx-auto space-y-4 scroll-mt-[70px]"
          ref={proyekRef}>
          <div className="text-left">
            <h1 className="text-2xl md:text-4xl font-bold mb-5">
              Proyek
            </h1>
          </div>
          <div className="lg:grid lg:grid-cols-2 lg:gap-2">
            <div className="py-2 px-4 space-y-2">
              <h4 className="text-lg md:text-xl font-semibold">
                E-MAHABBAH (2025)
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
                MEDISIPENA (2024)
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
                Web Profile (2024)
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
                ini bertujuan untuk mendukung pemantauan dan
                evaluasi tindak lanjut Inspektorat Kabupaten
                Bengkulu Utara secara digital.
              </p>
              <p className="italic text-sm md:text-base">
                Laravel
              </p>
            </div>
          </div>
        </section>
        <br />
        <footer className="bg-blue-100 py-4">
          <div className="max-w-1/2 mx-auto text-center">
            <span className="font-semibold">
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
