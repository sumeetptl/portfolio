"use client";
import React, { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import {
  // Shield,
  RefreshCw,
  Lock,
  MessageSquare,
  Grid,
  GitBranch,
  // Clock,
  FileText,
  Headphones,
  ExternalLink,
  Github,
  Users,
  Activity,
  Zap,
  Globe,
  Brain,
  Clock,
  Cpu,
  FileCode,
  Gauge,
  Shield,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface ProjectMetric {
  text: string;
  icon: LucideIcon;
}

interface Project {
  title: string;
  description: string;
  tech: string[];
  metrics: ProjectMetric[];
  image: string;
  link: string;
  github: string;
  gradient: string;
}

interface ProjectsProps {
  darkMode: boolean;
}

export default function Projects({ darkMode }: ProjectsProps) {
  const projects: Project[] = [
    {
      title: "The Real Crypto G",
      description:
        "A comprehensive cryptocurrency insights platform serving 5,000+ daily users with real-time market analysis, trading signals, and educational content.",
      tech: ["React", "Django", "PostgreSQL", "Redis", "AWS"],
      metrics: [
        { text: "5K+ Daily Users", icon: Users },
        { text: "99.9% Uptime", icon: Activity },
        { text: "Real-time Data", icon: Zap },
      ],
      image: "assets/trcg.png",
      link: "www.therealcryptog.com",
      github: "https://github.com/cryptog-dev/real-crypto-g-landing",
      gradient: "from-orange-500 to-red-500",
    },
    {
      title: "Bookscape",
      description:
        "E-commerce platform optimized for book sales with advanced search, personalized recommendations, and seamless checkout experience.",
      tech: ["Django", "React", "Stripe", "Elasticsearch", "Redis"],
      metrics: [
        { text: "40% Faster", icon: Gauge },
        { text: "Smart Search", icon: Brain },
        { text: "Secure Payments", icon: Shield },
      ],
      image: "assets/Bookscape.png",
      link: "https://www.bookscape.com",
      github: "#",
      gradient: "from-indigo-500 to-blue-500",
    },
    {
      title: "JWT Server",
      description:
        "A production-ready JWT authentication server with secure token management, refresh token rotation, and role-based access control. Built for scalable applications requiring enterprise-grade security.",
      tech: ["Python", "Django", "DRF", "PostgreSQL", "JWT"],
      metrics: [
        { text: "Secure Auth", icon: Shield },
        { text: "Token Rotation", icon: RefreshCw },
        { text: "RBAC Ready", icon: Lock },
      ],
      image: "assets/jwt.png",
      link: "#",
      github: "https://github.com/sumeetptl/full_jwt_server",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      title: "StudyPulse",
      description:
        "An interactive educational collaboration platform connecting students through category-based chatrooms. Real-time Q&A, peer-to-peer learning, and instant help for enhanced academic success.",
      tech: ["Django", "Redis", "PostgreSQL", "React", "Tailwind CSS"],
      metrics: [
        { text: "Real-time Chat", icon: MessageSquare },
        { text: "Multi-Category", icon: Grid },
        { text: "Peer Learning", icon: Users },
      ],
      image: "assets/studypulse.png",
      link: "#",
      github: "#",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      title: "Jira Automation Agent",
      description:
        "An intelligent workflow automation system that streamlines project management by automatically creating and moving Jira tickets. Reduces manual overhead and accelerates sprint velocity.",
      tech: ["Python", "FastAPI", "Jira API", "GPT-4 API", "PostgreSQL"],
      metrics: [
        { text: "Auto-Creation", icon: Zap },
        { text: "Smart Routing", icon: GitBranch },
        { text: "80% Time Saved", icon: Clock },
      ],
      image: "assets/jira.png",
      link: "#",
      github: "#",
      gradient: "from-indigo-500 to-blue-500",
    },
    {
      title: "Bhumika Citizen Services",
      description:
        "A comprehensive digital platform for government document processing and travel bookings. Simplifying passport applications, PAN cards, visas, and flight reservations with fast, hassle-free service.",
      tech: ["React", "Next.js", "Tailwind CSS", "Vercel", "TypeScript"],
      metrics: [
        { text: "Fast Processing", icon: FileText },
        { text: "Secure Docs", icon: Shield },
        { text: "24/7 Support", icon: Headphones },
      ],
      image: "assets/bhumika.png",
      link: "https://bhumikacitizenservices.vercel.app/",
      github: "#",
      gradient: "from-green-500 to-emerald-500",
    },
    {
      title: "Cloud Infrastructure Platform",
      description:
        "Automated cloud deployment and scaling solution with CI/CD pipelines, monitoring dashboards, and cost optimization.",
      tech: ["AWS", "Terraform", "Kubernetes", "Prometheus", "Grafana"],
      metrics: [
        { text: "Auto-Scaling", icon: Activity },
        { text: "Cost Optimized", icon: Gauge },
        { text: "High Availability", icon: Shield },
      ],
      image:
        "https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg?auto=compress&cs=tinysrgb&w=800",
      link: "#",
      github: "#",
      gradient: "from-gray-600 to-gray-800",
    },
  ];

  const autoplay = useRef(
    Autoplay({ delay: 4000, stopOnInteraction: true, stopOnMouseEnter: true })
  );
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "start", slidesToScroll: 1 },
    [autoplay.current]
  );

  const scrollPrev = () => emblaApi && emblaApi.scrollPrev();
  const scrollNext = () => emblaApi && emblaApi.scrollNext();

  useEffect(() => {
    if (emblaApi) emblaApi.reInit();
  }, [emblaApi]);

  return (
    <section
      id="projects"
      className={`py-24 transition-all ${
        darkMode ? "bg-gray-950 text-white" : "bg-white text-gray-900"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-gradient">
          Projects That Make Impact
        </h2>
        <p
          className={`text-lg md:text-xl max-w-3xl mx-auto mb-16 ${
            darkMode ? "text-gray-400" : "text-gray-600"
          }`}
        >
          Real-world applications solving complex problems for startups and
          enterprises
        </p>

        <div className="relative group">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {projects.map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex-[0_0_100%] sm:flex-[0_0_50%] lg:flex-[0_0_33.333%] p-4"
                >
                  <div
                    className={`group rounded-3xl overflow-hidden transition-all duration-300 hover:scale-105 hover:-translate-y-2 ${
                      darkMode
                        ? "bg-gray-800 border border-gray-700"
                        : "bg-white border border-gray-200 shadow-lg"
                    }`}
                  >
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                    </div>

                    <div className="p-6 space-y-4 text-left">
                      <h3
                        className={`text-2xl font-bold ${
                          darkMode ? "text-white" : "text-gray-900"
                        }`}
                      >
                        {project.title}
                      </h3>
                      <p
                        className={`text-sm leading-relaxed ${
                          darkMode ? "text-gray-300" : "text-gray-600"
                        }`}
                      >
                        {project.description}
                      </p>

                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech, i) => (
                          <span
                            key={i}
                            className={`px-3 py-1 text-xs font-medium rounded-full ${
                              darkMode
                                ? "bg-gray-700 text-gray-300"
                                : "bg-gray-100 text-gray-700"
                            }`}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      <div className="flex flex-wrap gap-3 pt-2">
                        {project.metrics.map((metric, i) => (
                          <span
                            key={i}
                            className={`flex items-center space-x-1.5 text-xs font-semibold ${
                              darkMode ? "text-primary-400" : "text-primary-600"
                            }`}
                          >
                            <metric.icon size={14} />
                            <span>{metric.text}</span>
                          </span>
                        ))}
                      </div>

                      <div className="flex space-x-4 pt-4">
                        {project.link !== "#" && (
                          <a
                            href={project.link}
                            className={`flex items-center space-x-2 text-sm font-medium transition-colors ${
                              darkMode
                                ? "text-gray-400 hover:text-white"
                                : "text-gray-600 hover:text-gray-900"
                            }`}
                          >
                            <ExternalLink size={16} />
                            <span>View Project</span>
                          </a>
                        )}
                        {project.github !== "#" && (
                          <a
                            href={project.github}
                            className={`flex items-center space-x-2 text-sm font-medium transition-colors ${
                              darkMode
                                ? "text-gray-400 hover:text-white"
                                : "text-gray-600 hover:text-gray-900"
                            }`}
                          >
                            <Github size={16} />
                            <span>Code</span>
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Navigation buttons */}
          <button
            onClick={scrollPrev}
            className={`absolute left-0 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full shadow-md opacity-0 group-hover:opacity-100 transition ${
              darkMode
                ? "bg-gray-800 hover:bg-gray-700 text-white"
                : "bg-white hover:bg-gray-100 text-gray-900"
            }`}
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={scrollNext}
            className={`absolute right-0 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full shadow-md opacity-0 group-hover:opacity-100 transition ${
              darkMode
                ? "bg-gray-800 hover:bg-gray-700 text-white"
                : "bg-white hover:bg-gray-100 text-gray-900"
            }`}
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  );
}
