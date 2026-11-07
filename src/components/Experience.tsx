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
            company="PT Horizon Internusa Persada / Travelio"
            companyLink="https://www.linkedin.com/company/travelio-com"
            date="Jan 2026 - Present"
            companyDescription="Travelio is Indonesia's largest online platform for short-to long-term furnished apartment, villa, and house rentals, offering end-to-end property management services."
            desc={[
              "Slashed operational expenses by IDR 200 million monthly by architecting and deploying an in-app chat feature (React Native, WebRTC, WebSockets, Push Notification), successfully removing costly third-party vendor dependencies",
              "Streamlined field operations and the guest check-in experience by engineering a custom VoIP call, directly improving communication efficiency and ease of use for on-site operational team",
              "Boosted Core Web Vitals and overall application speed by driving critical technical modernization initiatives, effectively eliminating dozens of simultaneous API bottlenecks on initial load via strategic lazy loading",
              "Accelerated the delivery of features that successfully moved business KPIs by proactively mitigating technical risks through strategic, cross-functional alignment with Product, QA, and Design teams",
              "Revitalized the UI/UX for core conversion funnels (Homepage, Search, Property Details) during the v2 redesign by owning the frontend architecture and flawlessly translating complex Figma designs into highly scalable production code for App and Mobile Web",
            ]}
            accent={ACCENT_COLORS[1]}
          />
          <ExperienceCard
            title="Software Engineer (Frontend)"
            company="PT Horizon Internusa Persada / Travelio"
            companyLink="https://www.linkedin.com/company/travelio-com"
            date="Nov 2019 - Jan 2026"
            companyDescription="Travelio is Indonesia's largest online platform for short-to long-term furnished apartment, villa, and house rentals, offering end-to-end property management services."
            desc={[
              "Elevated UI consistency and accelerated development workflows by establishing a scalable design system and translating complex UI/UX designs into pixel-perfect, highly reusable components across React, Next.js, and React Native",
              "Powered the core consumer application's reliability and growth by engineering and maintaining robust, highly scalable RESTful APIs to handle high-volume traffic",
              "Drove higher booking conversions and optimized user discovery by overhauling search mechanics, introducing advanced filtering, dynamic sorting, and refined recommendation algorithms",
              "Secured flawless iOS and Android App Store releases by orchestrating rigorous pre-release hardening cycles and aligning Product, QA, and UI/UX teams to eliminate critical functional and UI bottlenecks",
            ]}
            accent={ACCENT_COLORS[0]}
          />
          <ExperienceCard
            title="Software Engineer (Frontend)"
            company="PT Paket Informasi Digital / MileApp"
            companyLink="https://www.linkedin.com/company/mileapp"
            date="Feb 2019 - Nov 2019"
            companyDescription="MileApp is a SaaS logistics and field service platform that helps companies optimize delivery routes, track couriers in real time, and manage end-to-end supply chain operations."
            desc={[
              "Optimized supply chain logistics and end-to-end e-commerce shipments by engineering responsive, high-performance web applications that significantly reduced operational friction",
              "Boosted user engagement and strengthened digital presence by transforming complex UI/UX design into interactive, fast-loading web applications and high-converting landing pages",
              "Maintained system stability and reduced technical debt by systematically refactoring legacy components, establishing rigorous unit testing protocols, and proactively resolving critical runtime bottlenecks",
            ]}
            accent={ACCENT_COLORS[1]}
          />
          <ExperienceCard
            title="IT Support (Volunteer)"
            company="International Games Broadcast Service (IGBS)"
            companyLink="https://www.linkedin.com/company/hbs"
            date="Jul 2018 - Sep 2018"
            companyDescription="IGBS is a joint venture between HBS and IMG that serves as host broadcasters for major multi-sport events."
            desc={[
              "Diagnosed and resolved on-site hardware and software issues to maintain operational continuity",
              "Managed the configuration and deployment of devices to ensure immediate readiness for incoming IGBS personnel",
            ]}
            accent={ACCENT_COLORS[3]}
          />
          <ExperienceCard
            title="Web Developer and Business Analyst (Intern)"
            company="Nutrifood Indonesia"
            companyLink="https://www.linkedin.com/company/pt-nutrifood-indonesia"
            date="Aug 2017 - Feb 2018"
            companyDescription="Nutrifood is a leading Indonesian health F&B manufacturer, known for brands such as Tropicana Slim, NutriSari, L-Men, and HiLo."
            desc={[
              "Developed an internal web application using Ruby on Rails, according to business requirements and technical implementation",
              "Conducted business analysis to gather user pain points, and find an actionable software solution",
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
  companyDescription,
  date,
  desc,
  accent,
}: {
  title: string;
  company: string;
  companyLink?: string;
  companyDescription?: string;
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
      {companyDescription ? (
        <p className="mt-3 text-xs font-semibold leading-relaxed text-gray-800">
          {companyDescription}
        </p>
      ) : null}
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
