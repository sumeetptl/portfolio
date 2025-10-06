import { useState } from "react";
import { Mail, MapPin, Linkedin, Github, Twitter, Send } from "lucide-react";

interface ContactProps {
  darkMode: boolean;
}

export default function Contact({ darkMode }: ContactProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "",
    budget: "",
    timeline: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Thank you for reaching out! I will get back to you soon.");
    setFormData({
      name: "",
      email: "",
      projectType: "",
      budget: "",
      timeline: "",
      message: "",
    });
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "thesumeetpatil@gmail.com",
      link: "mailto:thesumeetpatil@gmail.com",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Available Worldwide",
      link: null,
    },
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      link: "https://www.linkedin.com/in/sumeet-patil/",
      label: "LinkedIn",
    },
    { icon: Github, link: "https://github.com/sumeetptl", label: "GitHub" },
    { icon: Twitter, link: "https://x.com/thesumeetpatil", label: "Twitter" },
  ];

  return (
    <section
      id="contact"
      className={`py-24 ${
        darkMode
          ? "bg-gradient-to-b from-gray-900 to-gray-800"
          : "bg-gradient-to-b from-white to-gray-50"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2
            className={`text-3xl sm:text-4xl md:text-5xl font-bold mb-4 px-4 ${
              darkMode ? "text-white" : "text-gray-900"
            }`}
          >
            Let's Build Something <span className="text-gradient">Amazing</span>
          </h2>
          <p
            className={`text-lg sm:text-xl max-w-3xl mx-auto px-4 ${
              darkMode ? "text-gray-400" : "text-gray-600"
            }`}
          >
            Ready to transform your ideas into reality? Get in touch and let's
            discuss your project
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          <div className="space-y-8">
            <div>
              <h3
                className={`text-2xl font-bold mb-6 ${
                  darkMode ? "text-white" : "text-gray-900"
                }`}
              >
                Get In Touch
              </h3>
              <p
                className={`text-lg mb-8 ${
                  darkMode ? "text-gray-300" : "text-gray-600"
                }`}
              >
                Whether you need a full-stack web application, AI integration,
                Web3 solution, or cloud infrastructure, I'm here to help bring
                your vision to life.
              </p>

              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <div
                    key={index}
                    className={`flex items-center space-x-4 p-4 rounded-2xl transition-all hover:scale-105 ${
                      darkMode
                        ? "bg-gray-800 border border-gray-700"
                        : "bg-white border border-gray-200"
                    }`}
                  >
                    <div
                      className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                        darkMode
                          ? "bg-primary-500/20 text-primary-400"
                          : "bg-primary-100 text-primary-600"
                      }`}
                    >
                      <info.icon size={24} />
                    </div>
                    <div>
                      <div
                        className={`text-sm ${
                          darkMode ? "text-gray-400" : "text-gray-600"
                        }`}
                      >
                        {info.label}
                      </div>
                      {info.link ? (
                        <a
                          href={info.link}
                          className={`font-semibold hover:text-primary-500 ${
                            darkMode ? "text-white" : "text-gray-900"
                          }`}
                        >
                          {info.value}
                        </a>
                      ) : (
                        <div
                          className={`font-semibold ${
                            darkMode ? "text-white" : "text-gray-900"
                          }`}
                        >
                          {info.value}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <h4
                  className={`text-lg font-semibold mb-4 ${
                    darkMode ? "text-white" : "text-gray-900"
                  }`}
                >
                  Connect With Me
                </h4>
                <div className="space-y-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      className={`flex items-center space-x-4 p-4 rounded-2xl transition-all hover:scale-105 ${
                        darkMode
                          ? "bg-gray-800 border border-gray-700"
                          : "bg-white border border-gray-200"
                      }`}
                    >
                      <div
                        className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                          darkMode
                            ? "bg-primary-500/20 text-primary-400"
                            : "bg-primary-100 text-primary-600"
                        }`}
                      >
                        <social.icon size={24} />
                      </div>
                      <div>
                        <div
                          className={`text-sm ${
                            darkMode ? "text-gray-400" : "text-gray-600"
                          }`}
                        >
                          {social.label}
                        </div>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div>
            <form
              onSubmit={handleSubmit}
              className={`p-6 sm:p-8 rounded-3xl ${
                darkMode
                  ? "bg-gray-800 border border-gray-700"
                  : "bg-white border border-gray-200 shadow-lg"
              }`}
            >
              <div className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className={`block text-sm font-medium mb-2 ${
                      darkMode ? "text-gray-300" : "text-gray-700"
                    }`}
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className={`w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-primary-500 transition-all ${
                      darkMode
                        ? "bg-gray-900 border-gray-700 text-white"
                        : "bg-white border-gray-300 text-gray-900"
                    }`}
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className={`block text-sm font-medium mb-2 ${
                      darkMode ? "text-gray-300" : "text-gray-700"
                    }`}
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className={`w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-primary-500 transition-all ${
                      darkMode
                        ? "bg-gray-900 border-gray-700 text-white"
                        : "bg-white border-gray-300 text-gray-900"
                    }`}
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="projectType"
                    className={`block text-sm font-medium mb-2 ${
                      darkMode ? "text-gray-300" : "text-gray-700"
                    }`}
                  >
                    Project Type
                  </label>
                  <select
                    id="projectType"
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleChange}
                    required
                    className={`w-full appearance-none px-4 py-3 rounded-lg border focus:ring-2 focus:ring-primary-500 transition-all ${
                      darkMode
                        ? "bg-gray-900 border-gray-700 text-white"
                        : "bg-white border-gray-300 text-gray-900"
                    }`}
                  >
                    <option value="">Select a project type</option>
                    <option value="full-stack">Full-Stack Development</option>
                    <option value="ai">AI & Prompt Engineering</option>
                    <option value="web3">Web3 & Crypto</option>
                    <option value="cloud">Cloud & DevOps</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="budget"
                      className={`block text-sm font-medium mb-2 ${
                        darkMode ? "text-gray-300" : "text-gray-700"
                      }`}
                    >
                      Budget Range
                    </label>
                    <select
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      required
                      className={`w-full appearance-none px-4 py-3 rounded-lg border focus:ring-2 focus:ring-primary-500 transition-all ${
                        darkMode
                          ? "bg-gray-900 border-gray-700 text-white"
                          : "bg-white border-gray-300 text-gray-900"
                      }`}
                    >
                      <option value="">Select budget</option>
                      <option value="5k-10k">$5k - $10k</option>
                      <option value="10k-25k">$10k - $25k</option>
                      <option value="25k-50k">$25k - $50k</option>
                      <option value="50k+">$50k+</option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="timeline"
                      className={`block text-sm font-medium mb-2 ${
                        darkMode ? "text-gray-300" : "text-gray-700"
                      }`}
                    >
                      Timeline
                    </label>
                    <select
                      id="timeline"
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleChange}
                      required
                      className={`w-full appearance-none px-4 py-3 rounded-lg border focus:ring-2 focus:ring-primary-500 transition-all ${
                        darkMode
                          ? "bg-gray-900 border-gray-700 text-white"
                          : "bg-white border-gray-300 text-gray-900"
                      }`}
                    >
                      <option value="">Select timeline</option>
                      <option value="1-2weeks">1-2 weeks</option>
                      <option value="1month">1 month</option>
                      <option value="2-3months">2-3 months</option>
                      <option value="3months+">3+ months</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className={`block text-sm font-medium mb-2 ${
                      darkMode ? "text-gray-300" : "text-gray-700"
                    }`}
                  >
                    Project Details
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className={`w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-primary-500 transition-all resize-none ${
                      darkMode
                        ? "bg-gray-900 border-gray-700 text-white"
                        : "bg-white border-gray-300 text-gray-900"
                    }`}
                    placeholder="Tell me about your project..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full px-8 py-4 bg-gradient-to-r from-primary-500 to-secondary-500 text-white rounded-lg font-semibold transition-all hover:scale-105 hover:shadow-xl flex items-center justify-center space-x-2"
                >
                  <span>Send Message</span>
                  <Send size={20} />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
