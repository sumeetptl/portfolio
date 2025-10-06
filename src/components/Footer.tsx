import { Heart, ArrowUp } from "lucide-react";

interface FooterProps {
  darkMode: boolean;
}

export default function Footer({ darkMode }: FooterProps) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  const footerLinks = [
    {
      title: "Quick Links",
      links: [
        { name: "Home", href: "#home" },
        { name: "About", href: "#about" },
        { name: "Services", href: "#services" },
        { name: "Projects", href: "#projects" },
      ],
    },
    {
      title: "Services",
      links: [
        { name: "Full-Stack Development", href: "#services" },
        { name: "AI & Prompt Engineering", href: "#services" },
        { name: "Web3 & Crypto", href: "#services" },
        { name: "Cloud & DevOps", href: "#services" },
      ],
    },
    {
      title: "Connect",
      links: [
        { name: "Contact", href: "#contact" },
        { name: "LinkedIn", href: "https://linkedin.com" },
        { name: "GitHub", href: "https://github.com" },
        { name: "Twitter", href: "https://twitter.com" },
      ],
    },
  ];

  return (
    <footer
      className={`relative ${
        darkMode
          ? "bg-gradient-to-b from-gray-900 to-black"
          : "bg-gradient-to-b from-gray-50 to-white"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-1">
            <h3
              className={`text-2xl font-bold mb-4 ${
                darkMode ? "text-white" : "text-gray-900"
              }`}
            >
              <span className="text-gradient">Sumeet Patil</span>
            </h3>
            <p
              className={`text-sm ${
                darkMode ? "text-gray-400" : "text-gray-600"
              }`}
            >
              Full-Stack Developer specializing in Web3, AI, and modern web
              technologies. Building the future, one line of code at a time.
            </p>
          </div>

          {footerLinks.map((section, index) => (
            <div key={index}>
              <h4
                className={`text-lg font-semibold mb-4 ${
                  darkMode ? "text-white" : "text-gray-900"
                }`}
              >
                {section.title}
              </h4>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href={link.href}
                      className={`text-sm transition-colors hover:text-primary-500 ${
                        darkMode ? "text-gray-400" : "text-gray-600"
                      }`}
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div
          className={`border-t pt-8 ${
            darkMode ? "border-gray-800" : "border-gray-200"
          }`}
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <button
              onClick={scrollToTop}
              className={`p-3 rounded-lg transition-all hover:scale-110 ${
                darkMode
                  ? "bg-gray-800 border border-gray-700 text-gray-400 hover:text-white"
                  : "bg-white border border-gray-200 text-gray-600 hover:text-primary-600"
              }`}
              aria-label="Scroll to top"
            >
              <ArrowUp size={20} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
