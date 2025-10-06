import { Code, Brain, Coins, Cloud, ArrowRight } from 'lucide-react';

interface ServicesProps {
  darkMode: boolean;
}

export default function Services({ darkMode }: ServicesProps) {
  const services = [
    {
      icon: Code,
      title: 'Full-Stack Development',
      description:
        'End-to-end web application development with Python/Django, React, and Next.js. From concept to production deployment.',
      features: [
        'Responsive UI/UX Design',
        'RESTful API Development',
        'Database Architecture',
        'Performance Optimization',
      ],
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Brain,
      title: 'AI & Prompt Engineering',
      description:
        'Leverage cutting-edge AI models like ChatGPT, Claude, and DeepSeek to build intelligent applications and automate workflows.',
      features: [
        'Custom AI Chatbots',
        'Natural Language Processing',
        'Prompt Optimization',
        'AI Workflow Automation',
      ],
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      icon: Coins,
      title: 'Web3 & Crypto Solutions',
      description:
        'Build secure, decentralized applications with smart contracts, wallet integration, and blockchain technology.',
      features: [
        'Smart Contract Development',
        'DApp Architecture',
        'Wallet Integration',
        'NFT Marketplace',
      ],
      gradient: 'from-amber-500 to-orange-500',
    },
    {
      icon: Cloud,
      title: 'Cloud Scaling & DevOps',
      description:
        'Deploy and scale applications on AWS with automated CI/CD pipelines, monitoring, and performance optimization.',
      features: [
        'AWS Infrastructure',
        'CI/CD Pipelines',
        'Load Balancing',
        'Performance Monitoring',
      ],
      gradient: 'from-teal-500 to-emerald-500',
    },
  ];

  return (
    <section
      id="services"
      className={`py-24 ${
        darkMode
          ? 'bg-gradient-to-b from-gray-900 to-gray-800'
          : 'bg-gradient-to-b from-white to-gray-50'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2
            className={`text-3xl sm:text-4xl md:text-5xl font-bold mb-4 px-4 ${
              darkMode ? 'text-white' : 'text-gray-900'
            }`}
          >
            Services That Drive <span className="text-gradient">Real Results</span>
          </h2>
          <p
            className={`text-lg sm:text-xl max-w-3xl mx-auto px-4 ${
              darkMode ? 'text-gray-400' : 'text-gray-600'
            }`}
          >
            From intelligent AI systems to blockchain-powered platforms, I deliver solutions that
            scale with your business
          </p>
        </div>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`group relative p-6 sm:p-8 rounded-3xl transition-all duration-300 hover:scale-105 hover:-translate-y-2 ${
                darkMode
                  ? 'glass-dark hover:bg-gray-800/60'
                  : 'glass hover:bg-white/80 shadow-lg'
              }`}
            >
              <div
                className={`absolute top-0 left-0 right-0 h-1 rounded-t-3xl bg-gradient-to-r ${service.gradient}`}
              />

              <div
                className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}
              >
                <service.icon className="text-white" size={32} />
              </div>

              <h3
                className={`text-2xl font-bold mb-4 ${
                  darkMode ? 'text-white' : 'text-gray-900'
                }`}
              >
                {service.title}
              </h3>

              <p
                className={`text-lg mb-6 ${
                  darkMode ? 'text-gray-300' : 'text-gray-600'
                }`}
              >
                {service.description}
              </p>

              <ul className="space-y-3 mb-6">
                {service.features.map((feature, fIndex) => (
                  <li
                    key={fIndex}
                    className={`flex items-center space-x-2 ${
                      darkMode ? 'text-gray-400' : 'text-gray-600'
                    }`}
                  >
                    <div
                      className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${service.gradient}`}
                    />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className={`inline-flex items-center space-x-2 font-semibold group-hover:translate-x-2 transition-transform ${
                  darkMode ? 'text-primary-400' : 'text-primary-600'
                }`}
              >
                <span>Get Started</span>
                <ArrowRight size={20} />
              </a>
            </div>
          ))}
        </div>

        <div
          className={`mt-16 p-8 rounded-3xl text-center ${
            darkMode
              ? 'bg-gradient-to-r from-gray-800 to-gray-900 border border-gray-700'
              : 'bg-gradient-to-r from-primary-50 to-secondary-50 border border-primary-200'
          }`}
        >
          <h3 className={`text-2xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            Need a Custom Solution?
          </h3>
          <p className={`text-lg mb-6 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            Every project is unique. Let's discuss how I can help bring your vision to life.
          </p>
          <a
            href="#contact"
            className="inline-block px-8 py-4 bg-gradient-to-r from-primary-500 to-secondary-500 text-white rounded-lg font-semibold transition-all hover:scale-105 hover:shadow-xl"
          >
            Schedule a Consultation
          </a>
        </div>
      </div>
    </section>
  );
}
