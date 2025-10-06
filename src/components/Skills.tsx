import { useEffect, useState } from "react";

interface SkillsProps {
  darkMode: boolean;
}

interface Skill {
  name: string;
  level: number;
}

interface SkillCategory {
  category: string;
  skills: Skill[];
  color: string;
}

export default function Skills({ darkMode }: SkillsProps) {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setAnimate(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById("skills");
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  const skillCategories: SkillCategory[] = [
    {
      category: "Backend Development",
      color: "from-blue-500 to-blue-600",
      skills: [
        { name: "Python/Django", level: 95 },
        { name: "Node.js", level: 88 },
        { name: "PostgreSQL", level: 90 },
        { name: "Redis", level: 85 },
      ],
    },
    {
      category: "Frontend Development",
      color: "from-cyan-500 to-teal-600",
      skills: [
        { name: "React", level: 93 },
        { name: "Next.js", level: 90 },
        { name: "TypeScript", level: 92 },
        { name: "Tailwind CSS", level: 95 },
      ],
    },
    {
      category: "AI & Machine Learning",
      color: "from-purple-500 to-pink-600",
      skills: [
        { name: "ChatGPT API", level: 95 },
        { name: "Claude API", level: 93 },
        { name: "DeepSeek", level: 88 },
        { name: "Prompt Engineering", level: 97 },
      ],
    },
    {
      category: "Web3 & Blockchain",
      color: "from-orange-500 to-red-600",
      skills: [
        { name: "Solidity", level: 87 },
        { name: "Ethers.js", level: 90 },
        { name: "Smart Contracts", level: 88 },
        { name: "Web3.js", level: 85 },
      ],
    },
    {
      category: "Cloud & DevOps",
      color: "from-emerald-500 to-teal-600",
      skills: [
        { name: "AWS", level: 92 },
        { name: "Docker", level: 90 },
        { name: "CI/CD", level: 88 },
        { name: "Kubernetes", level: 82 },
      ],
    },
    {
      category: "Tools & Others",
      color: "from-amber-500 to-orange-600",
      skills: [
        { name: "Git", level: 95 },
        { name: "REST APIs", level: 97 },
        { name: "GraphQL", level: 85 },
        { name: "Testing", level: 88 },
      ],
    },
  ];

  return (
    <section
      id="skills"
      className={`py-24 ${
        darkMode
          ? "bg-gradient-to-b from-gray-800 to-gray-900"
          : "bg-gradient-to-b from-gray-50 to-white"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2
            className={`text-3xl sm:text-4xl md:text-5xl font-bold mb-4 px-4 ${
              darkMode ? "text-white" : "text-gray-900"
            }`}
          >
            Technical <span className="text-gradient">Expertise</span>
          </h2>
          <p
            className={`text-lg sm:text-xl max-w-3xl mx-auto px-4 ${
              darkMode ? "text-gray-400" : "text-gray-600"
            }`}
          >
            A comprehensive toolkit spanning modern web technologies, AI, and
            blockchain
          </p>
        </div>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className={`p-6 rounded-3xl transition-all hover:scale-105 ${
                darkMode
                  ? "bg-gray-800 border border-gray-700"
                  : "bg-white border border-gray-200 shadow-lg"
              }`}
            >
              <h3
                className={`text-xl font-bold mb-6 bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}
              >
                {category.category}
              </h3>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between mb-2">
                      <span
                        className={`text-sm font-medium ${
                          darkMode ? "text-gray-300" : "text-gray-700"
                        }`}
                      >
                        {skill.name}
                      </span>
                      <span
                        className={`text-sm font-semibold ${
                          darkMode ? "text-gray-400" : "text-gray-600"
                        }`}
                      >
                        {skill.level}%
                      </span>
                    </div>
                    <div
                      className={`h-2 rounded-full overflow-hidden ${
                        darkMode ? "bg-gray-700" : "bg-gray-200"
                      }`}
                    >
                      <div
                        className={`h-full bg-gradient-to-r ${category.color} transition-all duration-1000 ease-out`}
                        style={{
                          width: animate ? `${skill.level}%` : "0%",
                          transitionDelay: `${
                            categoryIndex * 100 + skillIndex * 50
                          }ms`,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div
          className={`mt-16 p-8 rounded-3xl ${
            darkMode
              ? "bg-gradient-to-r from-gray-800 to-gray-900 border border-gray-700"
              : "bg-gradient-to-r from-primary-50 to-secondary-50 border border-primary-200"
          }`}
        >
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div
                className={`text-4xl font-bold mb-2 ${
                  darkMode ? "text-white" : "text-gray-900"
                }`}
              >
                10+
              </div>
              <div
                className={`${darkMode ? "text-gray-400" : "text-gray-600"}`}
              >
                Technologies Mastered
              </div>
            </div>
            <div>
              <div
                className={`text-4xl font-bold mb-2 ${
                  darkMode ? "text-white" : "text-gray-900"
                }`}
              >
                5+
              </div>
              <div
                className={`${darkMode ? "text-gray-400" : "text-gray-600"}`}
              >
                Years Experience
              </div>
            </div>
            <div>
              <div
                className={`text-4xl font-bold mb-2 ${
                  darkMode ? "text-white" : "text-gray-900"
                }`}
              >
                50+
              </div>
              <div
                className={`${darkMode ? "text-gray-400" : "text-gray-600"}`}
              >
                Projects Delivered
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
