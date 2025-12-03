import React from "react";
import { Link } from "react-router-dom";
import {
  Code2,
  MonitorSmartphone,
  BarChart3,
  PenTool,
  Database,
  Share2,
  ShoppingCart,
  Megaphone,
} from "lucide-react";

const services = [
  {
    title: "Web Development",
    path: "web",
    icon: <Code2 size={28} className="text-white" />,
    bg: "bg-red-500",
    text: "We build modern, responsive websites tailored for results.",
  },
  {
    title: "App Development",
    path: "app",
    icon: <MonitorSmartphone size={28} className="text-white" />,
    bg: "bg-blue-500",
    text: "We develop scalable mobile apps for Android & iOS.",
  },
  {
    title: "Digital Marketing",
    path: "digital-marketing",
    icon: <Megaphone size={28} className="text-white" />,
    bg: "bg-green-500",
    text: "Grow your business online using modern marketing techniques.",
  },
  {
    title: "SEO Optimization",
    path: "seo",
    icon: <BarChart3 size={28} className="text-white" />,
    bg: "bg-yellow-500",
    text: "Improve your website ranking organically.",
  },
  {
    title: "Graphic Designing",
    path: "graphic",
    icon: <PenTool size={28} className="text-white" />,
    bg: "bg-purple-500",
    text: "Creative logo & branding designs for your business.",
  },
  {
    title: "Database Management",
    path: "software",
    icon: <Database size={28} className="text-white" />,
    bg: "bg-orange-500",
    text: "Secure and optimized database solutions.",
  },
  {
    title: "E-commerce Solutions",
    path: "software", // SAME CONTENT USED FOR SOFTWARE DEVELOPMENT
    icon: <ShoppingCart size={28} className="text-white" />,
    bg: "bg-pink-500",
    text: "Complete e-commerce website setup.",
  },
  {
    title: "Social Media Branding",
    path: "brand",
    icon: <Share2 size={28} className="text-white" />,
    bg: "bg-teal-500",
    text: "Boost your social media presence with branding.",
  },
];

const ServiceCard = () => {
  return (
    <>
      <div className="max-w-full mx-auto py-16 px-6 font-sans bg-black">
        <h2 className="text-6xl font-bold text-center mb-12 text-[#ff7515]">
          Our Services
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl shadow-lg cursor-pointer transition-transform duration-300 hover:scale-105 hover:-translate-y-2 bg-white"
            >
              <div
                className={`w-14 h-14 rounded-full flex items-center justify-center ${service.bg} mb-4`}
              >
                {service.icon}
              </div>

              <h3 className="text-2xl font-bold mb-3 text-[#ff7515]">
                {service.title}
              </h3>

              <p className="text-black text-sm font-semibold leading-relaxed mb-4">
                {service.text}
              </p>

              <Link
                to={`/service/${service.path}`}
                className="mt-2 px-4 py-2 bg-black text-white text-sm rounded-lg font-semibold hover:bg-[#ff7515] hover:text-black transition inline-block"
              >
                Read More
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ServiceCard;
