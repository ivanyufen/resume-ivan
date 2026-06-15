import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const ACCENT_COLORS = ["#FFD60A", "#C8F56A", "#00F5D4", "#FFB3C6"];

export default function ExperienceSection() {
  return (
    <section id="experience" className="mb-8">
      <div className="border-4 border-black bg-white p-6 shadow-[6px_6px_0_#000]">
        <h3 className="text-xl font-black uppercase tracking-wide mb-6 pb-2 border-b-4 border-black">
          Experience
        </h3>

        <div className="flex flex-col gap-4">
          <ExperienceCard
            title="Senior Software Engineer (Frontend)"
            company="Travelio"
            companyLink="https://www.linkedin.com/company/travelio-com"
            date="2026 – Present"
            desc="Lead architecture and development of scalable web and mobile applications using Next.js and React Native, driving frontend best practices."
            accent={ACCENT_COLORS[0]}
          />
          <ExperienceCard
            title="Software Engineer (Frontend)"
            company="Travelio"
            companyLink="https://www.linkedin.com/company/travelio-com"
            date="2019 – 2026"
            desc="Maintain and develop high impact web and mobile app using Next.js and RN, collaborating with Product and UI/UX to solve user problem and enhancing the product experience."
            accent={ACCENT_COLORS[0]}
          />
          <ExperienceCard
            title="Software Engineer (Frontend)"
            company="Mileapp"
            companyLink="https://www.linkedin.com/company/mileapp"
            date="2019"
            desc="Developed landing pages and web tools using Vue.js."
            accent={ACCENT_COLORS[1]}
          />
          <ExperienceCard
            title="Full-Stack Developer & Business Analyst (Intern)"
            company="Nutrifood Indonesia"
            companyLink="https://www.linkedin.com/company/pt-nutrifood-indonesia"
            date="2019"
            desc="Developed internal web application using Ruby on Rails and SQL, and Analyze user requirements to optimize internal business processes."
            accent={ACCENT_COLORS[2]}
          />
          <ExperienceCard
            title="IT Support (Volunteer)"
            company="IGBS Asian Games / HBS"
            companyLink="https://www.linkedin.com/company/hbs"
            date="2018"
            desc="Maintained and troubleshot computer systems and networks for Asian Games 2018."
            accent={ACCENT_COLORS[3]}
          />
        </div>
      </div>
    </section>
  );
}

function ExperienceCard({
  title,
  company,
  companyLink,
  date,
  desc,
  accent,
}: {
  title: string;
  company: string;
  companyLink?: string;
  date: string;
  desc: string;
  accent: string;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -20 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.4, ease: "easeOut" }}
      whileHover={{
        rotate: [0, -2.5, 2, -1, 0],
        transition: {
          duration: 0.35,
          ease: "easeInOut",
          times: [0, 0.2, 0.6, 0.8, 1],
        },
      }}
      className="border-[3px] border-black p-4 shadow-[4px_4px_0_#000] cursor-default"
      style={{ backgroundColor: accent }}
    >
      <div className="flex items-start justify-between gap-2 flex-wrap">
        <div>
          <p className="font-black text-sm uppercase tracking-wide">{title}</p>
          {companyLink ? (
            <a
              href={companyLink}
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-base underline underline-offset-2 hover:opacity-70 transition-opacity"
            >
              {company}
            </a>
          ) : (
            <p className="font-bold text-base">{company}</p>
          )}
        </div>
        <span className="text-xs font-black uppercase border-2 border-black bg-white px-2 py-1 shrink-0">
          {date}
        </span>
      </div>
      <p className="mt-2 text-sm font-medium text-gray-900">{desc}</p>
    </motion.div>
  );
}
