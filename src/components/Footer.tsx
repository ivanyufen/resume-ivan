import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp, faFileArrowDown } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";

const CV_PATH = "/cv-frontend-engineer-ivan-yufen-2026.pdf";

export default function Footer() {
  const [isAtBottom, setIsAtBottom] = useState(false);

  useEffect(() => {
    const checkScrollPosition = () => {
      const pageHeight = document.documentElement.scrollHeight;
      const viewportBottom = window.scrollY + window.innerHeight;
      setIsAtBottom(viewportBottom >= pageHeight - 8);
    };

    checkScrollPosition();
    window.addEventListener("scroll", checkScrollPosition, { passive: true });
    window.addEventListener("resize", checkScrollPosition);

    return () => {
      window.removeEventListener("scroll", checkScrollPosition);
      window.removeEventListener("resize", checkScrollPosition);
    };
  }, []);

  return (
    <footer className="pb-4 text-center">
      <div className="border-4 border-black bg-[#00F5D4] p-5 shadow-[6px_6px_0_#000]">
        <p className="font-black text-lg">Wanna know more detail?</p>
        <a
          href={CV_PATH}
          download="Ivan Yufen Stefanus - CV FrontEnd Engineer 2026.pdf"
          className="wiggle mt-4 mx-auto flex w-fit items-center justify-center gap-2 px-5 py-3 bg-white border-[3px] border-black font-black uppercase text-sm
                     shadow-[4px_4px_0_#000]
                     hover:shadow-[2px_2px_0_#000] hover:translate-x-[2px] hover:translate-y-[2px]
                     active:shadow-none active:translate-x-[4px] active:translate-y-[4px]
                     transition-all duration-150 ease-out select-none"
        >
          <FontAwesomeIcon icon={faFileArrowDown} size="lg" color="#000" />
          Download Resume
        </a>
      </div>
      <p className="mt-6 text-xs font-bold uppercase tracking-wide text-black">
        &copy; 2026 Ivan Yufen Stefanus. All rights reserved.
      </p>
      {isAtBottom && (
        <a
          href="#top"
          aria-label="Back to top"
          className="wiggle fixed bottom-6 left-1/2 z-50 flex -translate-x-1/2 items-center justify-center gap-1.5 px-3 py-2 bg-[#FFD60A]/85 backdrop-blur-sm border-[3px] border-black font-black uppercase text-[10px] shadow-[3px_3px_0_#000]
                     hover:shadow-[2px_2px_0_#000] hover:translate-y-[2px]
                     active:shadow-none active:translate-y-[4px]
                     transition-all duration-150 ease-out"
        >
          <FontAwesomeIcon icon={faArrowUp} />
          Back to top
        </a>
      )}
    </footer>
  );
}
