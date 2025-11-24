import "./App.css";
import { useTypewriter } from "./hooks/useTypewriter";
import ContactSection from "./components/Contact";
export default function LandingPage() {
  const text = useTypewriter([
    "Frontend Developer",
    "React / Next.js Engineer",
    "UI/UX Enthusiast",
  ]);

  return (
    <div
      className="w-screen w-full bg-white text-white
                flex justify-center items-start md:items-center"
    >
      <div className="w-full max-w-lg px-6 py-10 bg-gray-950">
        {/* Profile picture */}
        <div className="flex justify-center mb-6">
          <img
            src="profile.jpeg"
            alt="Ivan's Profile Picture"
            className="w-36 h-36 rounded-full border-4 border-indigo-500 shadow-xl object-cover"
          />
        </div>

        {/* HERO */}
        <section className="text-center mb-12">
          <h1 className="text-4xl font-bold">
            Hello, I'm{" "}
            <span className="bg-gradient-to-r from-indigo-400 to-blue-600 bg-clip-text text-transparent">
              Ivan
            </span>
          </h1>

          <h2 className="text-2xl font-semibold mt-2 h-10">
            <span>{text}</span>
            <span className="animate-pulse">|</span>
          </h2>

          <p className="text-gray-400 mt-4">
            I build elegant, fast, and modern web apps with React, TypeScript,
            and Next.js.
          </p>

          <div className="mt-8 flex gap-4 justify-center">
            <a
              href="#experience"
              className="px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 transition shadow-lg shadow-indigo-600/30"
            >
              Experience
            </a>
            <a
              href="#contact"
              className="px-6 py-3 rounded-xl border border-gray-600 hover:border-indigo-500 transition"
            >
              Contact
            </a>
          </div>
        </section>

        {/* ABOUT */}
        <section id="about" className="mb-10">
          <h3 className="text-xl font-bold mb-2">About Me</h3>
          <p className="bg-gradient-to-r from-indigo-200 via-white-200 to-indigo-200 bg-clip-text text-transparent">
            Frontend Engineer with 6 years of experience building scalable,
            responsive, and user-focused web applications. Skilled in React,
            React Native, Next.js, and modern JavaScript frameworks, with a
            proven track record of delivering high-quality features across
            desktop, mobile web, and apps. Passionate about solving problems,
            collaborating across teams, and staying current with emerging
            technologies. Let's collaborate!
          </p>
        </section>

        {/* EXPERIENCE */}
        <section id="experience" className="mb-10">
          <h3 className="text-xl font-bold mb-4">Experience</h3>

          <div className="bg-gray-900 rounded-xl p-4 mb-4 border border-gray-800">
            <p className="font-semibold">Frontend Developer — Travelio</p>
            <p className="text-gray-400 text-sm">2019 – Present</p>
            <p className="text-gray-400 mt-2">
              Develop high-quality web and apps using Next.js and React Native.
            </p>
          </div>

          <div className="bg-gray-900 rounded-xl p-4 border border-gray-800">
            <p className="font-semibold">Frontend Developer — Mileapp</p>
            <p className="text-gray-400 text-sm">2019</p>
            <p className="text-gray-400 mt-2">
              Develop a landing page and web applications using Vue.js
            </p>
          </div>
        </section>

        {/* SKILLS */}
        <section id="skills" className="mb-10">
          <h3 className="text-xl font-bold mb-4">Skills</h3>
          <div className="flex flex-wrap gap-2">
            {[
              "HTML",
              "css",
              "React",
              "React Native",
              "Next.js",
              "TypeScript",
              "TailwindCSS",
              "Redux",
              "UI/UX",
              "Node.js",
              "Express",
              "GIT",
              "Unit Testing",
            ].map((s) => (
              <span
                key={s}
                className="px-3 py-1 bg-gray-900 border border-gray-700 rounded-lg text-sm"
              >
                {s}
              </span>
            ))}
          </div>
        </section>

        {/* CONTACT */}
        <ContactSection />
      </div>
    </div>
  );
}
