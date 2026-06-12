import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faWhatsapp,
  faGithub,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const links = [
  {
    href: "https://www.linkedin.com/in/ivanyufen",
    icon: faLinkedin,
    label: "LinkedIn",
    bg: "#A0D9FF",
  },
  {
    href: "https://wa.me/6281213447582",
    icon: faWhatsapp,
    label: "WhatsApp",
    bg: "#C8F56A",
  },
  {
    href: "mailto:ivanysofficial@gmail.com",
    icon: faEnvelope,
    label: "Email",
    bg: "#FFD60A",
  },
  {
    href: "https://github.com/ivanyufen",
    icon: faGithub,
    label: "GitHub",
    bg: "#FFB3C6",
  },
  {
    href: "https://www.instagram.com/ivanyufen",
    icon: faInstagram,
    label: "Instagram",
    bg: "#FFC987",
  },
];

export default function ContactSection() {
  return (
    <section id="contact" className="mb-10">
      <div className="border-4 border-black bg-white p-6 shadow-[6px_6px_0_#000]">
        <h3 className="text-xl font-black uppercase tracking-wide mb-2 pb-2 border-b-4 border-black">
          Contact
        </h3>
        <p className="font-medium mb-5 text-gray-800">
          Let's connect and work together!
        </p>

        <div className="flex flex-wrap gap-3">
          {links.map(({ href, icon, label, bg }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("mailto") ? undefined : "_blank"}
              rel="noopener noreferrer"
              className="wiggle flex items-center gap-2 px-4 py-2 border-[3px] border-black font-black text-sm uppercase
                         shadow-[3px_3px_0_#000]
                         hover:shadow-[1px_1px_0_#000] hover:translate-x-[2px] hover:translate-y-[2px]
                         active:shadow-none active:translate-x-[3px] active:translate-y-[3px]
                         transition-all duration-150 ease-out select-none"
              style={{ backgroundColor: bg }}
            >
              <FontAwesomeIcon icon={icon} size="lg" color="#000" />
              {label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
