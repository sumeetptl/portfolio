import { useState, useEffect } from "react";
import { ArrowRight, Download, Sparkles } from "lucide-react";

interface HeroProps {
  darkMode: boolean;
}

interface Stat {
  value: string;
  label: string;
}

export default function Hero({ darkMode }: HeroProps) {
  const [animatedStats, setAnimatedStats] = useState<Stat[]>([
    { value: "0%", label: "Uptime" },
    { value: "0%", label: "Faster Apps" },
    { value: "0K+", label: "Daily Requests" },
    { value: "0+", label: "AI Workflows" },
  ]);

  useEffect(() => {
    const finalStats = [
      { value: "99.9%", label: "Uptime" },
      { value: "40%", label: "Faster Apps" },
      { value: "5K+", label: "Daily Requests" },
      { value: "50+", label: "Projects" },
    ];

    const timer = setTimeout(() => {
      setAnimatedStats(finalStats);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      id="home"
      className={`min-h-screen flex items-center justify-center relative overflow-hidden ${
        darkMode
          ? "bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"
          : "bg-gradient-to-br from-blue-50 via-purple-50 to-teal-50"
      }`}
    >
      <div className="absolute inset-0 overflow-hidden">
        <div
          className={`absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl opacity-20 animate-float ${
            darkMode ? "bg-primary-500" : "bg-primary-300"
          }`}
        />
        <div
          className={`absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full blur-3xl opacity-20 animate-float ${
            darkMode ? "bg-secondary-500" : "bg-secondary-300"
          }`}
          style={{ animationDelay: "2s" }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 pt-32 relative z-10">
        <div className="text-center space-y-8 animate-fade-in">
          <div className="flex justify-center mb-2">
            <img
              src="assets/profile-pic.png"
              alt="Sumeet Patil"
              className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-4 border-primary-500 shadow-2xl"
            />
          </div>

          <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-primary-500/10 border border-primary-500/20">
            <Sparkles className="text-primary-500" size={16} />
            <span
              className={`text-sm font-medium ${
                darkMode ? "text-primary-400" : "text-primary-600"
              }`}
            >
              Available for New Projects
            </span>
          </div>

          <h1
            className={`text-4xl sm:text-5xl md:text-7xl font-bold leading-tight ${
              darkMode ? "text-white" : "text-gray-900"
            }`}
          >
            Full-Stack, AI & Web3 Developer
            <br />
            <span className="text-gradient">
              Who Builds Platforms That Scale
            </span>
          </h1>

          <p
            className={`text-lg sm:text-xl md:text-2xl max-w-3xl mx-auto px-4 ${
              darkMode ? "text-gray-300" : "text-gray-600"
            }`}
          >
            I design intelligent, blockchain-secure, and AI-powered apps using
            ChatGPT, Claude, and DeepSeek.
          </p>

          <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-4 pt-4 px-4">
            <a
              href="#contact"
              className="group w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-primary-500 to-secondary-500 text-white rounded-lg font-semibold transition-all hover:scale-105 hover:shadow-xl flex items-center justify-center space-x-2 animate-glow"
            >
              <span>Start Your Project</span>
              <ArrowRight
                className="group-hover:translate-x-1 transition-transform"
                size={20}
              />
            </a>

            <a
              href="#projects"
              className={`w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold transition-all hover:scale-105 border-2 text-center ${
                darkMode
                  ? "bg-white/5 border-white/20 text-white hover:bg-white/10"
                  : "bg-white border-gray-200 text-gray-900 hover:border-primary-300 hover:bg-gray-50"
              }`}
            >
              View My Work
            </a>

            <a
              href="../assets/resume.pdf"
              download
              className={`w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold transition-all hover:scale-105 flex items-center justify-center space-x-2 ${
                darkMode
                  ? "bg-accent-500/10 border-2 border-accent-500/30 text-accent-400 hover:bg-accent-500/20"
                  : "bg-accent-50 border-2 border-accent-200 text-accent-700 hover:bg-accent-100"
              }`}
            >
              <Download size={20} />
              <span>Download Resume</span>
            </a>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 pt-12 max-w-4xl mx-auto px-4">
            {animatedStats.map((stat, index) => (
              <div
                key={index}
                className={`p-6 rounded-2xl backdrop-blur-sm transition-all duration-700 ${
                  darkMode
                    ? "bg-white/5 border border-white/10"
                    : "bg-white/60 border border-gray-200"
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div
                  className={`text-3xl md:text-4xl font-bold mb-2 ${
                    darkMode ? "text-white glow-text" : "text-gray-900"
                  }`}
                >
                  {stat.value}
                </div>
                <div
                  className={`text-sm ${
                    darkMode ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div
          className={`w-6 h-10 border-2 rounded-full flex justify-center ${
            darkMode ? "border-white/30" : "border-gray-400"
          }`}
        >
          <div
            className={`w-1.5 h-3 mt-2 rounded-full ${
              darkMode ? "bg-white/50" : "bg-gray-500"
            }`}
          />
        </div>
      </div>
    </section>
  );
}
