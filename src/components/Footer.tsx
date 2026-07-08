import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileArrowDown } from "@fortawesome/free-solid-svg-icons";

const CV_PATH = "/cv-frontend-engineer-ivan-yufen-2026.pdf";

export default function Footer() {
  return (
    <footer className="pb-4 text-center">
      <div className="border-4 border-black bg-[#00F5D4] p-5 shadow-[6px_6px_0_#000]">
        <p className="font-black text-lg">Wanna know more detail?</p>
        <a
          href={CV_PATH}
          download="Ivan Yufen Stefanus - CV FrontEnd Engineer 2026.pdf"
          className="wiggle mt-4 inline-flex items-center justify-center gap-2 px-5 py-3 bg-white border-[3px] border-black font-black uppercase text-sm
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
    </footer>
  );
}
