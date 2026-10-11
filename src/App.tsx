import "./App.css";
import { useTypewriter } from "./hooks/useTypewriter";
import ContactSection from "./components/Contact";
import ExperienceSection from "./components/Experience";
import Footer from "./components/Footer";
import {
  motion,
  useScroll,
  useTransform,
  type MotionValue,
} from "framer-motion";
import { useEffect, useRef } from "react";

const SKILL_GROUPS = [
  {
    name: "Fundamental",
    color: "bg-[#FFD60A]",
    skills: ["HTML", "CSS", "JavaScript", "TypeScript", "SQL", "NoSQL"],
  },
  {
    name: "Frontend",
    color: "bg-[#C8F56A]",
    skills: [
      "React",
      "Next.js",
      "React Native (Android and iOS)",
      "Tailwind CSS",
      "Vite",
      "TanStack",
      "Vue.js",
      "Redux",
      "Zustand",
      "WEB APIs",
      "Socket.io",
      "WebRTC",
    ],
  },
  {
    name: "Backend",
    color: "bg-[#00F5D4]",
    skills: ["Express.js", "Node.js"],
  },
  {
    name: "AI Tools",
    color: "bg-[#FFB3C6]",
    skills: ["Codex", "Claude Code", "DeepSeek"],
  },
  {
    name: "Database",
    color: "bg-[#A0D9FF]",
    skills: ["MySQL", "PostgreSQL", "Supabase", "MongoDB"],
  },
  {
    name: "Tools & Optimization",
    color: "bg-[#FFC987]",
    skills: [
      "Firebase",
      "Cloudinary",
      "CDN",
      "Chrome Lighthouse",
      "SEO",
      "MoEngage",
      "Git",
      "Google Search Console",
      "Visual Studio Code",
      "ESLint",
      "New Relic",
    ],
  },
  {
    name: "Project Tools and Deployment",
    color: "bg-[#FFB3C6]",
    skills: ["Bitbucket", "Jira", "GitHub", "Vercel", "Netlify"],
  },
  {
    name: "Languages",
    color: "bg-[#C8F56A]",
    skills: ["English (Fluent, TOEFL iBT 92/120)", "Indonesian (Native)"],
  },
];

const ABOUT_TEXT =
  "Software Engineer with 7 years of experience specializing in frontend architecture across both web and mobile platforms. Dedicated to building and scaling high-performance user interfaces that support thousands of daily active users. Drives the full frontend lifecycle, translating complex design into modular, reusable UI components, and active engineering applications for optimal runtime performance and core web vitals. I work cross-functionally with Product, QA, and Design to ship reliable and user-centric products that create impact and solve problems.";
const ABOUT_WORDS = ABOUT_TEXT.split(" ");

export default function LandingPage() {
  const text = useTypewriter([
    "Senior Frontend Engineer",
    "App Developer",
    "Web Enthusiast",
  ]);

  useEffect(() => {
    console.log(`Oh, hello there! 👋
      Welcome to my landing page :)`);
  }, []);

  return (
    <div id="top" className="min-h-screen w-full bg-[#FFF9E6] text-black flex justify-center items-start pt-10 pb-24 px-4">
      <div className="w-full max-w-lg">
        {/* Profile picture */}
        <div className="flex justify-center mb-8">
          <div className="border-4 border-black shadow-[8px_8px_0_#000]">
            <img
              src="profile.jpeg"
              alt="Ivan's Profile Picture"
              className="w-36 h-36 object-cover block"
            />
          </div>
        </div>

        {/* HERO */}
        <section className="mb-10 text-center">
          <h1 className="text-5xl font-black tracking-tight leading-tight">
            Hello, I'm{" "}
            <span className="bg-[#FFD60A] px-2 border-2 border-black inline-block">
              Ivan
            </span>
          </h1>

          <h2 className="text-2xl font-bold mt-3 h-10">
            <span>{text}</span>
            <span className="animate-pulse font-light">|</span>
          </h2>

          <div className="mt-8 flex gap-4 justify-center">
            <a
              href="#experience"
              className="px-6 py-3 bg-[#FFD60A] border-[3px] border-black font-black uppercase text-sm
                         shadow-[4px_4px_0_#000]
                         hover:shadow-[2px_2px_0_#000] hover:translate-x-[2px] hover:translate-y-[2px]
                         active:shadow-none active:translate-x-[4px] active:translate-y-[4px]
                         transition-all duration-150 ease-out select-none"
            >
              Experience
            </a>
            <a
              href="#contact"
              className="px-6 py-3 bg-white border-[3px] border-black font-black uppercase text-sm
                         shadow-[4px_4px_0_#000]
                         hover:shadow-[2px_2px_0_#000] hover:translate-x-[2px] hover:translate-y-[2px]
                         active:shadow-none active:translate-x-[4px] active:translate-y-[4px]
                         transition-all duration-150 ease-out select-none"
            >
              Contact
            </a>
          </div>

          <a
            href="#about"
            className="mt-8 inline-flex flex-col items-center gap-1 text-xs font-black uppercase tracking-widest hover:text-gray-600 transition-colors"
          >
            <span>Scroll to explore</span>
            <span aria-hidden="true" className="animate-bounce text-2xl leading-none">
              ↓
            </span>
          </a>
        </section>

        {/* ABOUT */}
        <AboutSection />

        {/* EXPERIENCE */}
        <ExperienceSection />

        {/* SKILLS */}
        <section id="skills" className="mb-8">
          <div className="border-4 border-black bg-white p-6 shadow-[6px_6px_0_#000]">
            <h3 className="text-xl font-black uppercase tracking-wide mb-4 pb-2 border-b-4 border-black">
              Skills
            </h3>
            <div className="space-y-5">
              {SKILL_GROUPS.map((group) => (
                <div key={group.name}>
                  <h4 className="mb-2 font-black text-sm uppercase tracking-wide">
                    {group.name}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <span
                        key={skill}
                        className={`wiggle px-3 py-1 border-[2px] border-black font-bold text-sm
                                    shadow-[2px_2px_0_#000] ${group.color}`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <ContactSection />

        <Footer />
      </div>
    </div>
  );
}

function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 70%", "end 55%"],
  });

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative mb-8 h-[calc(100svh-1.5rem)] min-h-[440px]"
    >
      <div className="sticky top-6">
        <div className="border-4 border-black bg-white p-6 shadow-[6px_6px_0_#000]">
          <div className="flex items-end justify-between gap-4 mb-3 pb-2 border-b-4 border-black">
            <h3 className="text-xl font-black uppercase tracking-wide">
              About
            </h3>
          </div>
          <p className="font-medium leading-relaxed">
            {ABOUT_WORDS.map((word, index) => (
              <HighlightWord
                key={`${word}-${index}`}
                word={word}
                index={index}
                progress={scrollYProgress}
              />
            ))}
          </p>
        </div>
      </div>
    </section>
  );
}

function HighlightWord({
  word,
  index,
  progress,
}: {
  word: string;
  index: number;
  progress: MotionValue<number>;
}) {
  const start = (index / (ABOUT_WORDS.length - 1)) * 0.8;
  const color = useTransform(
    progress,
    [start, start + 0.2],
    ["#d1d5db", "#111827"],
  );
  const opacity = useTransform(progress, [start, start + 0.2], [0.45, 1]);

  return <motion.span style={{ color, opacity }}>{word} </motion.span>;
}
