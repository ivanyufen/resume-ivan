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
            title="Senior Software Engineer (Front End)"
            company="PT Horizon Internusa Persada / Travelio"
            companyLink="https://www.linkedin.com/company/travelio-com"
            date="Jan 2026 – Present"
            desc={[
              "Lead end-to-end development for Travelio's multi-platform web and mobile apps.",
              "Partner with Product, QA, and UI/UX to refine requirements, reduce technical risk, and deliver high-impact features.",
              "Optimize frontend performance, core web vitals, SEO, and the v2 redesign across Homepage, Search Result, and Property Detail pages.",
            ]}
            accent={ACCENT_COLORS[0]}
          />
          <ExperienceCard
            title="Software Engineer (Front End)"
            company="PT Horizon Internusa Persada / Travelio"
            companyLink="https://www.linkedin.com/company/travelio-com"
            date="Nov 2019 – Jan 2026"
            desc={[
              "Translated complex UI/UX designs into scalable, pixel-perfect interfaces using React, Next.js, and React Native.",
              "Created and maintained scalable RESTful APIs behind the core consumer application.",
              "Built booking, payment, search, filtering, recommendation, and automated notification features across web and mobile.",
            ]}
            accent={ACCENT_COLORS[0]}
          />
          <ExperienceCard
            title="Software Engineer (Front End)"
            company="PT Paket Informasi Digital / MileApp"
            companyLink="https://www.linkedin.com/company/mileapp"
            date="Feb 2019 – Nov 2019"
            desc={[
              "Developed responsive web applications for e-commerce shipment and supply chain logistics workflows.",
              "Transformed UI/UX designs into web apps and improved engagement through landing page implementation.",
              "Maintained quality through bug fixes, legacy refactors, unit testing, and frontend feature updates.",
            ]}
            accent={ACCENT_COLORS[1]}
          />
          <ExperienceCard
            title="IT Support (Intern)"
            company="International Games Broadcast Service (IGBS)"
            companyLink="https://www.linkedin.com/company/hbs"
            date="Jul 2018 – Sep 2018"
            desc={[
              "Diagnosed and resolved on-site hardware and software issues to maintain operational continuity.",
              "Configured and deployed devices so incoming IGBS personnel could work immediately.",
            ]}
            accent={ACCENT_COLORS[3]}
          />
          <ExperienceCard
            title="Web Developer and Business Analyst (Intern)"
            company="Nutrifood Indonesia"
            companyLink="https://www.linkedin.com/company/pt-nutrifood-indonesia"
            date="Aug 2017 – Feb 2018"
            desc={[
              "Developed an internal web application using Ruby on Rails based on business requirements.",
              "Conducted business analysis to gather user pain points and define actionable software solutions.",
            ]}
            accent={ACCENT_COLORS[2]}
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
  desc: string[];
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
      <ul className="mt-3 space-y-2 text-left text-sm font-medium text-gray-900">
        {desc.map((item) => (
          <li key={item} className="flex gap-2">
            <span aria-hidden="true" className="font-black">
              -
            </span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}
