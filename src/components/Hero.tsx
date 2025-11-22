import { useTypewriter } from "../hooks/useTypewriter";

export default function Hero() {
  const text = useTypewriter([
    "Frontend Developer",
    "React + Next.js Engineer",
    "UI/UX Enthusiast",
  ]);

  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-950 text-white px-6">
      <div className="text-center">
        {/* headline */}
        <h1 className="text-4xl sm:text-6xl font-bold mb-4">
          Hi, I'm{" "}
          <span className="bg-gradient-to-r from-indigo-400 to-blue-600 bg-clip-text text-transparent">
            Ivan
          </span>
        </h1>

        {/* typewriter */}
        <h2 className="text-2xl sm:text-4xl font-semibold h-12">
          <span>{text}</span>
          <span className="animate-pulse">|</span>
        </h2>

        {/* subtitle */}
        <p className="text-gray-400 mt-4 max-w-lg mx-auto">
          I build clean, modern, and fast web applications using React,
          TypeScript, and Next.js.
        </p>

        {/* CTA buttons */}
        <div className="mt-8 flex gap-4 justify-center">
          <a
            href="#projects"
            className="px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 transition shadow-lg shadow-indigo-600/30"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="px-6 py-3 rounded-xl border border-gray-600 hover:border-indigo-500 transition"
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
}
