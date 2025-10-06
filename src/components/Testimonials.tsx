"use client";
import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Testimonial {
  name: string;
  role: string;
  content: string;
  avatar: string;
}

interface TestimonialsProps {
  darkMode?: boolean;
}

const testimonials: Testimonial[] = [
  {
    name: "Davis Davasia",
    role: "Co-founder, VolotBot",
    content:
      "Sumeet architected our scalable ecommerce platform from the ground up. His expertise in building robust systems for book inventory management was exceptional.",
    avatar: "https://randomuser.me/api/portraits/men/15.jpg",
  },
  {
    name: "Praveen Suryavanshi",
    role: "Founder, Owl Eye Alerts",
    content:
      "The high-converting website Sumeet built for our product exceeded all expectations. His attention to UX design and conversion optimization truly made a difference.",
    avatar: "https://randomuser.me/api/portraits/men/28.jpg",
  },
  {
    name: "Siddik Shaik",
    role: "Senior Software Engineer, Haptiq",
    content:
      "Collaborating with Sumeet on our learning platform was fantastic. His full-stack skills and understanding of educational tech requirements were invaluable.",
    avatar: "https://randomuser.me/api/portraits/men/42.jpg",
  },
  {
    name: "Karan Mehra",
    role: "Assistant VP Technology, Bookscape.com",
    content:
      "Sumeet's backend and DevOps optimization work revolutionized our infrastructure. Performance improvements were dramatic and deployment cycles shortened significantly.",
    avatar: "https://randomuser.me/api/portraits/men/56.jpg",
  },
  {
    name: "Sanjeev Talwar",
    role: "Director, JiffJaff",
    content:
      "The automation workflow Sumeet developed for our healthcare documentation saved our team hours daily. Brilliant problem-solving and clean implementation.",
    avatar: "https://randomuser.me/api/portraits/men/63.jpg",
  },
  {
    name: "Anton Torato",
    role: "Infrastructure Platform Engineer, Humanitec",
    content:
      "Working with Sumeet on infrastructure solutions was a pleasure. His technical depth and collaborative approach made complex challenges feel manageable.",
    avatar: "https://randomuser.me/api/portraits/men/74.jpg",
  },
];

const Testimonials: React.FC<TestimonialsProps> = ({ darkMode = false }) => {
  const autoplay = useRef(
    Autoplay({ delay: 4000, stopOnInteraction: true, stopOnMouseEnter: true })
  );

  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: "start",
      slidesToScroll: 1,
    },
    [autoplay.current]
  );

  const scrollPrev = () => emblaApi && emblaApi.scrollPrev();
  const scrollNext = () => emblaApi && emblaApi.scrollNext();

  useEffect(() => {
    if (emblaApi) emblaApi.reInit();
  }, [emblaApi]);

  return (
    <section
      className={`py-20 transition-all duration-500 ${
        darkMode ? "bg-gray-950 text-white" : "bg-white text-gray-900"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-12 text-center">
        <h2 className="text-4xl sm:text-5xl font-extrabold mb-10 text-gradient">
          Success Stories
        </h2>
        <p
          className={`max-w-2xl mx-auto text-lg mb-16 ${
            darkMode ? "text-gray-400" : "text-gray-600"
          }`}
        >
          Real feedback from clients who’ve worked with me across Web, Crypto,
          and AI-driven projects.
        </p>

        {/* Carousel */}
        <div className="relative group">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex-[0_0_100%] sm:flex-[0_0_50%] lg:flex-[0_0_33.333%] p-4"
                >
                  <div
                    className={`h-full p-6 sm:p-8 rounded-3xl transition-all hover:scale-105 ${
                      darkMode
                        ? "bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700"
                        : "bg-gradient-to-br from-white to-gray-50 border border-gray-200 shadow-lg"
                    }`}
                  >
                    <div className="flex flex-col items-center text-center">
                      {/* Removed testimonial image */}
                      <h3 className="text-xl font-bold mb-1">
                        {testimonial.name}
                      </h3>
                      <p
                        className={`text-sm mb-4 ${
                          darkMode ? "text-indigo-400" : "text-indigo-600"
                        }`}
                      >
                        {testimonial.role}
                      </p>
                      <p
                        className={`text-base leading-relaxed ${
                          darkMode ? "text-gray-300" : "text-gray-700"
                        }`}
                      >
                        “{testimonial.content}”
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
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

        {/* CTA Section */}
        <div className="mt-24 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white py-12 px-8 rounded-3xl shadow-lg">
          <h3 className="text-2xl sm:text-3xl font-bold mb-4">
            Ready to Build Something Amazing?
          </h3>
          <p className="text-lg mb-6 opacity-90">
            Let’s discuss your next big idea — whether it’s a web app, trading
            system, or AI-powered tool.
          </p>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block bg-white text-indigo-600 font-semibold px-8 py-3 rounded-full shadow-md hover:shadow-xl transition"
          >
            Get in Touch
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
