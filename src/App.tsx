import {useRef, useState, useEffect} from "react";
import About from "./components/About";
import Projects from "./components/Projects";

function App() {
  const sections = ["about", "projects"];
  const [active, setActive] = useState(0);
  const scrollRef = useRef(null);

  const isAnimatingRef = useRef(false);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const onWheel = (e) => {
      e.preventDefault();
      if (isAnimatingRef.current) return;

      const next = active + (e.deltaY > 0 ? 1 : -1);
      const target = Math.max(
        0,
        Math.min(sections.length - 1, next)
      );

      isAnimatingRef.current = true;
      scrollRef.current.scrollTo({
        top: target * window.innerHeight,
        behavior: "smooth",
      });
      setActive(target);

      setTimeout(() => {
        isAnimatingRef.current = false;
      }, 500);
    };

    el.addEventListener("wheel", onWheel, {passive: false});
    return () => el.removeEventListener("wheel", onWheel);
  }, [active]);

  const handleScroll = () => {
    const index = Math.round(
      scrollRef.current.scrollTop / window.innerHeight
    );
    setActive(index);
  };

  const goToSection = (i) => {
    scrollRef.current.scrollTo({
      top: i * window.innerHeight,
      behavior: "smooth",
    });
    setActive(i);
  };

  return (
    <div
      ref={scrollRef}
      className="fixed inset-0 h-screen w-screen overflow-y-scroll snap-y snap-mandatory scrollbar-hide"
      onScroll={handleScroll}>
      <About />
      <Projects />

      <div className="fixed right-6 top-1/2 -translate-y-1/2 flex flex-col gap-3 z-50">
        {sections.map((_, i) => (
          <button
            key={i}
            onClick={() => goToSection(i)}
            className={`cursor-pointer w-3 h-3 md:w-5 md:h-5 rounded-full transition-all duration-300 ${
              active === i
                ? "bg-black md:scale-125 active:scale-105 ring-2 ring-black/40"
                : "bg-gray-400 hover:scale-110 active:scale-90"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
