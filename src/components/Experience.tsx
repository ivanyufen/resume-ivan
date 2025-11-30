import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function ExperienceSection() {
  return (
    <section id="experience" className="mb-16">
      <h3 className="text-xl font-bold mb-10 text-center">Experience</h3>

      <div className="relative max-w-lg mx-auto">
        {/* Vertical Line */}
        <div className="absolute left-1/2 top-0 h-full w-[3px] bg-gray-700 transform -translate-x-1/2"></div>

        {/* ITEMS */}
        <TimelineItem
          side="left"
          title="Frontend Developer — Travelio"
          date="2019 – Present"
          desc="Develop high-quality web and mobile applications using Next.js and React Native."
        />

        <TimelineItem
          side="right"
          title="Frontend Developer — Mileapp"
          date="2019"
          desc="Developed landing pages and web tools using Vue.js."
        />

        <TimelineItem
          side="left"
          title="Full-Stack Developer & Business Analyst (Intern) — Nutrifood"
          date="2019"
          desc="Developed landing pages and internal tools using Vue.js."
        />
      </div>
    </section>
  );
}

function TimelineItem({ side, title, date, desc }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`mb-12 flex items-center w-full ${
        side === "right" ? "flex-row-reverse" : ""
      }`}
    >
      {/* TEXT (Desktop) */}
      <div
        className={`hidden sm:block w-1/2 ${
          side === "right" ? "pl-8" : "pr-8 text-right"
        }`}
      >
        <p className="font-semibold">{title}</p>
        <p className="text-gray-400 text-sm">{date}</p>
        <p className="text-gray-400 mt-2">{desc}</p>
      </div>

      {/* DOT */}
      <div className="relative">
        <motion.div
          initial={{ scale: 0 }}
          animate={isInView ? { scale: 1 } : {}}
          transition={{ delay: 0.2, duration: 0.4 }}
          className="w-6 h-6 bg-indigo-500 rounded-full border-[6px] border-gray-900"
        ></motion.div>
      </div>

      {/* TEXT (Mobile) */}
      <div
        className={`sm:hidden w-1/2 ${
          side === "right" ? "pr-8 text-right" : "pl-8"
        }`}
      >
        <p className="font-semibold">{title}</p>
        <p className="text-gray-400 text-sm">{date}</p>
        <p className="text-gray-400 mt-2">{desc}</p>
      </div>
    </motion.div>
  );
}
