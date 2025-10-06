import { Code2, Rocket, Users, Award } from 'lucide-react';

interface AboutProps {
  darkMode: boolean;
}

export default function About({ darkMode }: AboutProps) {
  const highlights = [
    {
      icon: Code2,
      title: 'Full-Stack Expertise',
      description: 'Python/Django, React, Next.js with production-grade architecture',
    },
    {
      icon: Rocket,
      title: 'Founder Experience',
      description: 'Built and scaled The Real Crypto G to thousands of daily users',
    },
    {
      icon: Users,
      title: 'Enterprise Solutions',
      description: 'Delivered mission-critical systems for Fortune 500 clients',
    },
    {
      icon: Award,
      title: 'AI Innovation',
      description: 'Pioneering ChatGPT, Claude, and DeepSeek integrations',
    },
  ];

  return (
    <section
      id="about"
      className={`py-24 ${
        darkMode ? 'bg-gray-900' : 'bg-white'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2
            className={`text-3xl sm:text-4xl md:text-5xl font-bold mb-4 px-4 ${
              darkMode ? 'text-white' : 'text-gray-900'
            }`}
          >
            Turning Complex Problems Into{' '}
            <span className="text-gradient">Elegant Solutions</span>
          </h2>
          <p
            className={`text-lg sm:text-xl max-w-3xl mx-auto px-4 ${
              darkMode ? 'text-gray-400' : 'text-gray-600'
            }`}
          >
            Building the future with code, AI, and blockchain technology
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center mb-16">
          <div className="space-y-6">
            <p
              className={`text-lg leading-relaxed ${
                darkMode ? 'text-gray-300' : 'text-gray-700'
              }`}
            >
              I'm Sumeet Patil, a full-stack developer with a passion for creating intelligent
              systems that solve real-world problems. With expertise spanning Web3, AI, and
              modern web technologies, I build applications that don't just work—they excel.
            </p>
            <p
              className={`text-lg leading-relaxed ${
                darkMode ? 'text-gray-300' : 'text-gray-700'
              }`}
            >
              As the founder of <span className="font-semibold text-primary-500">The Real Crypto G</span>,
              I've built a platform serving thousands of users daily with real-time cryptocurrency
              insights. My work combines technical excellence with business impact—delivering
              40% faster applications, 99.9% uptime, and systems handling 5,000+ requests daily.
            </p>
            <p
              className={`text-lg leading-relaxed ${
                darkMode ? 'text-gray-300' : 'text-gray-700'
              }`}
            >
              Whether it's building AI-powered chatbots with ChatGPT and Claude, deploying smart
              contracts on Ethereum, or architecting scalable cloud infrastructure on AWS, I bring
              a unique blend of innovation and reliability to every project.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
            {highlights.map((item, index) => (
              <div
                key={index}
                className={`p-6 rounded-2xl transition-all hover:scale-105 ${
                  darkMode
                    ? 'bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700'
                    : 'bg-gradient-to-br from-gray-50 to-white border border-gray-200'
                }`}
              >
                <div
                  className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${
                    darkMode
                      ? 'bg-primary-500/20 text-primary-400'
                      : 'bg-primary-100 text-primary-600'
                  }`}
                >
                  <item.icon size={24} />
                </div>
                <h3
                  className={`font-semibold mb-2 ${
                    darkMode ? 'text-white' : 'text-gray-900'
                  }`}
                >
                  {item.title}
                </h3>
                <p
                  className={`text-sm ${
                    darkMode ? 'text-gray-400' : 'text-gray-600'
                  }`}
                >
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div
          className={`p-8 rounded-3xl text-center ${
            darkMode
              ? 'bg-gradient-to-r from-primary-500/10 via-secondary-500/10 to-accent-500/10 border border-primary-500/20'
              : 'bg-gradient-to-r from-primary-50 via-secondary-50 to-accent-50 border border-primary-200'
          }`}
        >
          <p className={`text-2xl font-semibold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            "I don't just write code—I architect experiences that scale, secure assets with
            blockchain, and automate workflows with AI."
          </p>
          <p className={`text-lg ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            - Sumeet Patil, Full-Stack Developer & Founder
          </p>
        </div>
      </div>
    </section>
  );
}
