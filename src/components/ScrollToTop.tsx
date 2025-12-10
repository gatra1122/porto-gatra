import { useState, useEffect } from "react";
import { MdArrowUpward } from "react-icons/md";

function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <button
      onClick={scrollTop}
      className={`fixed hover:cursor-pointer right-5 bottom-5 p-2 rounded-full active:scale-90 bg-(--primary) text-white transition-all duration-300 ${
        visible ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <MdArrowUpward />
    </button>
  );
}

export default ScrollToTop;