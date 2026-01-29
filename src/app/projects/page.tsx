"use client";

import Image from "next/image";
import { useState } from "react";

function ProjectCard({ project }: { project: any }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="bg-white rounded-2xl overflow-hidden border border-gray-200 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        setCurrentImageIndex(0);
      }}
    >
      <div className="h-64 bg-gradient-to-br from-blue-100 to-gray-100 relative overflow-hidden">
        <Image
          src={isHovered && project.images[currentImageIndex] ? project.images[currentImageIndex] : project.thumbnail}
          alt={project.title}
          fill
          className="object-cover transition-all duration-500"
          onError={(e) => {
            e.currentTarget.style.display = 'none';
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
        
        {/* Image navigation dots on hover */}
        {isHovered && project.images.length > 1 && (
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 z-10">
            {project.images.map((_: any, idx: number) => (
              <button
                key={idx}
                onClick={(e) => {
                  e.stopPropagation();
                  setCurrentImageIndex(idx);
                }}
                className={`w-2 h-2 rounded-full transition-all ${
                  idx === currentImageIndex ? 'bg-white w-6' : 'bg-white/50 hover:bg-white/75'
                }`}
              />
            ))}
          </div>
        )}
      </div>
      <div className="p-6">
        <div className="flex items-center justify-between mb-3">
          <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 text-xs font-semibold rounded-full uppercase tracking-wider">
            {project.category}
          </span>
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-2">
          {project.title}
        </h3>
        <div className="space-y-2 text-sm text-gray-600 mb-4">
          <div className="flex items-start">
            <span className="font-semibold mr-2">Client:</span>
            <span>{project.client}</span>
          </div>
          <div className="flex items-start">
            <span className="font-semibold mr-2">Location:</span>
            <span>{project.location}</span>
          </div>
        </div>
        <div className="pt-4 border-t border-gray-100">
          <p className="text-sm text-gray-700 leading-relaxed">
            {project.scope}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function ProjectsPage() {
  const projects = [
    {
      title: "Feni Garden City",
      client: "Confidential",
      location: "Feni",
      scope: "Central HVAC System, VRF Systems, Commercial Air Conditioning",
      year: "2026",
      category: "Commercial",
      thumbnail: "/projects/feni-thumb.png",
      images: ["/projects/feni-1.jpeg", "/projects/feni-2.jpeg", "/projects/feni-3.jpeg"],
    },
    {
      title: "Mirpur Shopping Complex",
      client: "Confidential",
      location: "Mirpur, Dhaka",
      scope: "Central HVAC System, VRF Systems, Commercial Climate Control",
      year: "2014",
      category: "Commercial",
      thumbnail: "/projects/mirpur-thumb.jpg",
      images: ["/projects/mirpur-thumb.jpg", "/projects/mirpur-1.jpg", "/projects/mirpur-2.jpg"],
    },
    {
      title: "Yokohama Levels & Printing Factory",
      client: "Yokohama",
      location: "Bangladesh",
      scope: "Industrial HVAC System, Climate Control, Ventilation",
      year: "2026",
      category: "Manufacturing",
      thumbnail: "/projects/yokohama-thumb.jpg",
      images: ["/projects/yokohama-1.jpg", "/projects/yokohama-2.jpg", "/projects/yokohama-3.jpg"],
    },
    {
      title: "Aristopharma Manufacturing Facility",
      client: "Aristopharma Ltd.",
      location: "Dhaka",
      scope: "Clean Room HVAC (Class 10,000), AHU Systems, Dehumidification, Temperature & Humidity Control",
      year: "2026",
      category: "Pharmaceutical",
      thumbnail: "/Aristopharma/WhatsApp Image 2026-01-26 at 3.51.02 PM.jpeg",
      images: [
        "/Aristopharma/WhatsApp Image 2026-01-26 at 3.51.02 PM.jpeg",
        "/Aristopharma/WhatsApp Image 2026-01-26 at 3.51.06 PM (1).jpeg",
        "/Aristopharma/WhatsApp Image 2026-01-26 at 3.51.06 PM (2).jpeg",
        "/Aristopharma/WhatsApp Image 2026-01-26 at 3.51.26 PM (1).jpeg",
      ],
    },
    {
      title: "Suvastu Shopping Market",
      client: "Confidential",
      location: "Dhaka",
      scope: "Central HVAC System, VRF Systems, Commercial Climate Control",
      year: "2023",
      category: "Commercial",
      thumbnail: "/projects/Suvastu1.jpeg",
      images: ["/projects/Suvastu1.jpeg", "/projects/Suvastu2.jpeg"],
    },
    {
      title: "Flaxen Garments Factory",
      client: "Flaxen Group",
      location: "Bangladesh",
      scope: "Industrial HVAC System, Climate Control, Ventilation",
      year: "2022",
      category: "Manufacturing",
      thumbnail: "/projects/Flaxen1.jpeg",
      images: ["/projects/Flaxen1.jpeg", "/projects/flaxen2.jpeg", "/projects/flaxen3.jpeg"],
    },
  ];

  const categories = ["All", "Pharmaceutical", "Healthcare", "Manufacturing", "Commercial"];

  return (
    <>
      {/* Hero */}
      <section className="relative bg-slate-950 pt-32 pb-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-3xl">
            <span className="text-blue-400 font-semibold tracking-wider uppercase text-sm mb-4 block">
              Our Work
            </span>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight">
              Some of Our Projects
            </h1>
            <p className="text-xl text-white/75">
              Representative HVAC installations across pharmaceutical, healthcare, manufacturing, and commercial sectors in Bangladesh.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-white py-16 border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">100+</div>
              <div className="text-sm text-gray-600 font-semibold uppercase tracking-wider">Projects Completed</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">25+</div>
              <div className="text-sm text-gray-600 font-semibold uppercase tracking-wider">Years Experience</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">50+</div>
              <div className="text-sm text-gray-600 font-semibold uppercase tracking-wider">Corporate Clients</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">100%</div>
              <div className="text-sm text-gray-600 font-semibold uppercase tracking-wider">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 lg:py-28 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, idx) => (
              <ProjectCard key={idx} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
              Project Capabilities
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Our technical scope covers the full range of industrial and commercial HVAC applications, from design to commissioning.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Clean Room HVAC",
                items: ["Class 1 to Class 100,000", "HEPA/ULPA Filtration", "Pressure Control", "Pharmaceutical Grade"],
              },
              {
                title: "Chiller Systems",
                items: ["Air-Cooled Chillers", "Water-Cooled Chillers", "Centrifugal Systems", "Energy Optimization"],
              },
              {
                title: "AHU & FCU",
                items: ["Air Handling Units", "Fan Coil Units", "Ducted Systems", "Control Integration"],
              },
              {
                title: "VRF Systems",
                items: ["Multi-Zone Control", "Variable Refrigerant Flow", "Energy Efficiency", "Flexible Installation"],
              },
              {
                title: "Dehumidification",
                items: ["Industrial Grade", "Precision Control", "Process Critical", "Moisture Management"],
              },
              {
                title: "Installation & Commissioning",
                items: ["Pipework & Ducting", "Electrical Integration", "Testing & Validation", "System Handover"],
              },
            ].map((capability, idx) => (
              <div
                key={idx}
                className="bg-gray-50 rounded-2xl p-8 border border-gray-200"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {capability.title}
                </h3>
                <ul className="space-y-2">
                  {capability.items.map((item, itemIdx) => (
                    <li key={itemIdx} className="flex items-start text-gray-700">
                      <span className="text-blue-600 mr-2">•</span>
                      <span className="text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-blue-900 to-slate-950">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            Discuss Your HVAC Project
          </h2>
          <p className="text-xl text-white/80 mb-10 leading-relaxed">
            Contact our engineering team to discuss design requirements, system specifications, and project timelines.
          </p>
          <a
            href="/quote"
            className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold bg-white text-blue-900 hover:bg-gray-100 rounded-xl transition-colors shadow-lg"
          >
            Request Project Consultation
          </a>
        </div>
      </section>
    </>
  );
}
