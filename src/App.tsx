import "./App.css";
import { useTypewriter } from "./hooks/useTypewriter";
import ContactSection from "./components/Contact";
import ExperienceSection from "./components/Experience";
import Footer from "./components/Footer";
import { useEffect } from "react";

const SKILLS = [
  "HTML",
  "CSS",
  "Javascript",
  "React",
  "React Native",
  "Next.js",
  "TailwindCSS",
  "Vite",
  "Vue.js",
  "Firebase",
  "Google Console",
  "SEO",
  "Redux",
  "UI/UX",
  "Node.js",
  "Express.js",
  "GIT",
  "Unit Testing",
  "TypeScript",
  "Agentic AI",
];

const SKILL_COLORS = [
  "bg-[#FFD60A]",
  "bg-[#C8F56A]",
  "bg-[#00F5D4]",
  "bg-[#FFB3C6]",
  "bg-[#A0D9FF]",
  "bg-[#FFC987]",
];

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
    <div className="min-h-screen w-full bg-[#FFF9E6] text-black flex justify-center items-start py-10 px-4">
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

          <p className="mt-4 font-medium text-gray-800">
            I build elegant, fast, and modern web apps with React, Next.js,
            React Native, and many other tools!
          </p>

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
        </section>

        {/* ABOUT */}
        <section id="about" className="mb-8">
          <div className="border-4 border-black bg-white p-6 shadow-[6px_6px_0_#000]">
            <h3 className="text-xl font-black uppercase tracking-wide mb-3 pb-2 border-b-4 border-black">
              About
            </h3>
            <p className="font-medium leading-relaxed text-gray-900">
              Frontend Engineer with 7 years of experience building scalable,
              responsive, and user-focused web applications. Skilled in React,
              React Native, Next.js, and modern JavaScript frameworks, with a
              proven track record of delivering high-quality features across
              desktop, mobile web, and apps. Passionate about solving problems,
              collaborating across teams, and staying current with emerging
              technologies. Let's collaborate!
            </p>
          </div>
        </section>

        {/* EXPERIENCE */}
        <ExperienceSection />

        {/* SKILLS */}
        <section id="skills" className="mb-8">
          <div className="border-4 border-black bg-white p-6 shadow-[6px_6px_0_#000]">
            <h3 className="text-xl font-black uppercase tracking-wide mb-4 pb-2 border-b-4 border-black">
              Skills
            </h3>
            <div className="flex flex-wrap gap-2">
              {SKILLS.map((s, i) => (
                <span
                  key={s}
                  className={`wiggle px-3 py-1 border-[2px] border-black font-bold text-sm
                              shadow-[2px_2px_0_#000] ${SKILL_COLORS[i % SKILL_COLORS.length]}`}
                >
                  {s}
                </span>
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
