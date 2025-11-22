import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faWhatsapp,
  faGithub,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

export default function ContactSection() {
  return (
    <section id="contact" className="mb-16">
      <h3 className="text-xl font-bold mb-2">Contact</h3>
      <p className="text-gray-400 mb-4">Let’s connect and work together!</p>

      <div className="flex items-center gap-6">
        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/ivanyufen"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:scale-150 transition-transform"
        >
          <FontAwesomeIcon icon={faLinkedin} color="#0A66C2" size="xl" />
        </a>
        <a
          href="https://wa.me/6281213447582"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:scale-150 transition-transform"
        >
          <FontAwesomeIcon icon={faWhatsapp} size="xl" color="#25D366" />
        </a>
        <a
          href="mailto:ivanysofficial@gmail.com"
          className="hover:scale-150 transition-transform"
        >
          <FontAwesomeIcon icon={faEnvelope} size="xl" color="#EA4335" />
        </a>
        <a
          href="https://github.com/ivanyufen"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:scale-150 transition-transform"
        >
          <FontAwesomeIcon icon={faGithub} size="xl" color="#FFF" />
        </a>

        <a
          href="https://www.instagram.com/ivanyufen"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:scale-150 transition-transform"
        >
          <FontAwesomeIcon icon={faInstagram} size="xl" />
        </a>
      </div>
    </section>
  );
}
