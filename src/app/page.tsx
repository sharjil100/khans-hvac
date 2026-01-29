import Link from "next/link";
import Image from "next/image";

export default function HomePage() {
  // Company logos - add logo path if available, otherwise null for text-only
  const companies = [
    { name: "Abdul Monem Limited", logo: "/logos/Abdul Monem.png" },
    { name: "Akij Group", logo: "/logos/Akij Group.png" },
    { name: "AD-DIN Group of Companies", logo: "/logos/AD-DIN.png" },
    { name: "Bashundhara Group", logo: "/logos/Bashundhara Group.png" },
    { name: "Badsha Group of Companies", logo: "/logos/Badsha Textiles.png" },
    { name: "Mutual Trust Bank PLC", logo: "/logos/MTB.png" },
    { name: "Labaid Group", logo: "/logos/Labaid.png" },
    { name: "Renata Limited", logo: "/logos/Renata ltf.png" },
    { name: "Square Knit Fabrics Limited", logo: "/logos/Square textiles.png" },
    { name: "United Commercial Bank PLC", logo: "/logos/UCB.png" },
    { name: "Natore Tower", logo: null },
    { name: "Suvastu Arcade", logo: null },
    { name: "Hotel Sarina", logo: "/logos/Hotel Sarina.png" },
    { name: "Aristopharma Ltd", logo: "/logos/Aristopharma.png" },
    { name: "Biogen Pharmaceuticals Ltd", logo: "/logos/Biogen.png" },
    { name: "Maxfair & Company Ltd", logo: "/logos/Maxfair.png" },
    { name: "Experience Group BD", logo: "/logos/Experience Group.png" },
    { name: "Tamishna Group", logo: "/logos/Tamishna Group.png" },
    { name: "BTI", logo: "/logos/bti.png" },
    { name: "Panna Battery Limited", logo: "/logos/Panna Group.png" },
    { name: "Scan Cement Factory", logo: "/logos/SCAN Cement.png" },
    { name: "Auko Tex", logo: "/logos/Auko-Tex.png" },
    { name: "Pioneer Textile", logo: "/logos/Pioneer.png" },
    { name: "Heritage Bangla Fusion Cuisine", logo: null },
    { name: "Specialized Physiotherapy Hospital", logo: "/logos/specialized physiotherapy hospital.png" },
    { name: "Flaxen Group", logo: "/logos/Flaxen Group.png" },
    { name: "Hitech Multicare Hospital", logo: "/logos/Hitech Multicare Hospital.png" },
    { name: "Yunusco BD Ltd", logo: "/logos/Yunusco.png" },
    { name: "Cats Eye", logo: "/logos/Cats Eye.png" },
    { name: "Altu Khan Jute Mill", logo: "/logos/Altu Khan jute mills ltd..png" },
    { name: "Partex Group", logo: "/logos/Partex group.png" },
    { name: "IBN SINA Hospital", logo: "/logos/IBN SINA.png" },
    { name: "Yokohama Levels & Printing (BD) Co., Ltd", logo: "/logos/yokohama.png" },
    { name: "Asian Pacific University", logo: "/logos/Asia Pacific University.png" },
    { name: "Greatwall Ceramic Industries Limited", logo: "/logos/Great Wall ceramic.png" },
  ];

  const services = [
    {
      title: "Industrial HVAC Systems",
      description:
        "Complete climate control solutions for manufacturing facilities, warehouses, and industrial complexes.",
      icon: "🏭",
      link: "/services/industrial-hvac",
    },
    {
      title: "Clean Room HVAC",
      description:
        "Controlled environment HVAC for pharmaceutical, electronics, and medical facilities.",
      icon: "🔬",
      link: "/services/clean-room",
    },
    {
      title: "Chiller Systems",
      description:
        "Air-cooled, water-cooled, and centrifugal chillers with energy-efficient performance.",
      icon: "❄️",
      link: "/services/chiller-systems",
    },
    {
      title: "AHU & FCU Systems",
      description:
        "High-performance air handling and fan coil systems for stable temperature control.",
      icon: "🌬️",
      link: "/services/ahu-fcu",
    },
    {
      title: "VRF Systems",
      description:
        "Variable Refrigerant Flow solutions for flexible and efficient multi-zone control.",
      icon: "⚙️",
      link: "/services/vrf-systems",
    },
    {
      title: "Dehumidification",
      description:
        "Precision humidity control for moisture-sensitive environments and processes.",
      icon: "💧",
      link: "/services/dehumidification",
    },
  ];

  const capabilities = [
    { label: "Design Engineering", value: "End-to-End Solutions" },
    { label: "Installation", value: "Expert Teams" },
    { label: "Testing & Commissioning", value: "Full Validation" },
    { label: "Maintenance", value: "24/7 Support" },
  ];

  const heroCapabilities = [
    { label: "Design Engineering", value: "End-to-End Solutions" },
    { label: "Installation", value: "Expert Teams" },
    { label: "Testing & Commissioning", value: "Full Validation" },
  ];

  // Establishment per profile: April 1998 (use "Since 1998" for credibility)
  const stats = [
    { value: "Since 1998", label: "Established" },
    { value: "End-to-End", label: "Design to Commissioning" },
    { value: "Industrial", label: "Commercial & Heavy Duty" },
    { value: "Quality", label: "ISO Standards" },
  ];

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-slate-950">
        {/* Soft gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-blue-950/55 via-slate-950 to-slate-950" />
        {/* Subtle radial glow */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent" />
        {/* Pattern on RIGHT half only (keeps it premium, not noisy) */}
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/2 opacity-[0.035] [background-image:radial-gradient(circle_at_1px_1px,white_1px,transparent_0)] [background-size:26px_26px]" />

        <div className="relative max-w-6xl mx-auto px-4 md:px-6 pt-28 md:pt-36 lg:pt-40 pb-12 md:pb-16">
          <div className="grid lg:grid-cols-12 gap-8 md:gap-12 items-center relative z-10">
            {/* Left */}
            <div className="lg:col-span-7 lg:col-start-1 text-center lg:text-left flex flex-col items-center lg:items-start">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium tracking-widest text-white/70 uppercase">
                Industrial HVAC Excellence
              </div>

              <h1 className="mt-5 md:mt-7 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold leading-[1.05] tracking-tight text-white">
                Engineering <br />
                Climate Control Solutions
              </h1>

              <p className="mt-4 md:mt-6 max-w-2xl text-base md:text-lg lg:text-xl leading-relaxed text-white/75">
                End-to-End HVAC systems for industrial and commercial facilities.
                From design to commissioning, we deliver precision climate
                control that powers your operations.
              </p>

              <div className="mt-6 md:mt-9 flex flex-col sm:flex-row gap-3 md:gap-4 w-full sm:w-auto">
                <Link
                  href="#contact"
                  className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-7 py-3.5 text-sm font-semibold text-white hover:bg-blue-500 transition-colors shadow-lg shadow-blue-600/15 w-full sm:w-auto"
                >
                  Request Consultation
                </Link>
                <Link
                  href="#services"
                  className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/5 px-7 py-3.5 text-sm font-semibold text-white hover:bg-white/10 transition-colors w-full sm:w-auto"
                >
                  Explore Services
                </Link>
              </div>

              {/* Small credibility row (keeps left column “engineer-grade”) */}
              <div className="mt-10 flex flex-wrap items-center justify-center lg:justify-start gap-x-6 gap-y-3 text-sm text-white/60">
                <div className="inline-flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-blue-400/80" />
                  Design • Supply • Installation
                </div>
                <div className="inline-flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-blue-400/80" />
                  Testing & Commissioning
                </div>
                <div className="inline-flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-blue-400/80" />
                  After-sales Support
                </div>
              </div>
            </div>

            {/* Right */}
            <div className="lg:col-span-5 lg:col-start-8">
              {/* Capabilities Panel (single strong panel instead of “dashboard cards”) */}
              <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/6 to-white/[0.02] p-7 lg:p-6 backdrop-blur-sm shadow-[0_20px_70px_rgba(0,0,0,0.35)]">
                <div className="mb-5">
                  <div className="text-lg font-semibold text-white">
                    Core Capabilities
                  </div>
                  <div className="mt-1 text-sm text-white/60">
                    Comprehensive HVAC engineering delivery
                  </div>
                </div>

                <div className="space-y-4">
                  {heroCapabilities.map((cap) => (
                    <div
                      key={cap.label}
                      className="flex items-start justify-between gap-4 pb-4 border-b border-white/10 last:border-0 last:pb-0"
                    >
                      <div>
                        <div className="text-sm font-semibold text-white/90">
                          {cap.label}
                        </div>
                        <div className="mt-1 text-xs text-white/55">
                          {cap.value}
                        </div>
                      </div>

                      <div className="mt-0.5 text-blue-300/90 text-sm font-semibold">✓</div>
                    </div>
                  ))}
                </div>

                <div className="mt-5 flex flex-col items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-5 py-3 text-center">
                  <div className="text-xs tracking-widest text-white/60 uppercase">
                    Certified Excellence
                  </div>
                  <div className="flex flex-wrap justify-center gap-2">
                    <span className="rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-white/80">
                      ISO 9001
                    </span>
                    <span className="rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-white/80">
                      ISO 14644
                    </span>
                    <span className="rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-white/80">
                      ASHRAE
                    </span>
                  </div>
                </div>

                {/* Quick focus areas */}
                <div className="mt-5 grid grid-cols-2 gap-4 auto-rows-fr">
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-5 h-full flex flex-col items-center text-center">
                    <div className="h-10 w-10 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 text-xl">
                      ❄️
                    </div>

                    <div className="mt-4 text-base font-semibold text-white/90">Chiller Systems</div>
                    <div className="mt-2 text-sm text-white/60 leading-6">
                      Air & water-cooled solutions
                    </div>

                    <div className="mt-auto pt-6 text-[11px] tracking-widest text-blue-300/80">
                      SPECIALIZED
                    </div>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-5 h-full flex flex-col items-center text-center">
                    <div className="h-10 w-10 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 text-xl">
                      ⚙️
                    </div>

                    <div className="mt-4 text-base font-semibold text-white/90">VRF Systems</div>
                    <div className="mt-2 text-sm text-white/60 leading-6">
                      Multi-zone control
                    </div>

                    <div className="mt-auto pt-6 text-[11px] tracking-widest text-blue-300/80">
                      FLEXIBLE
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* end right */}
          </div>
        </div>
      </section>

      {/* Stats Band */}
      <section className="bg-slate-950 py-16 border-t border-white/5">
        <div className="max-w-6xl mx-auto px-6">
          <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm px-10 py-10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-10 text-center">
              <div>
                <div className="text-3xl font-semibold text-white">Since 1998</div>
                <div className="mt-2 text-sm text-white/60">Established</div>
              </div>

              <div>
                <div className="text-3xl font-semibold text-white">End-to-End</div>
                <div className="mt-2 text-sm text-white/60">
                  Design to Commissioning
                </div>
              </div>

              <div>
                <div className="text-3xl font-semibold text-white">Industrial</div>
                <div className="mt-2 text-sm text-white/60">
                  Commercial & Heavy Duty
                </div>
              </div>

              <div>
                <div className="text-3xl font-semibold text-white">Quality</div>
                <div className="mt-2 text-sm text-white/60">
                  ISO Standards
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section id="about" className="py-20 lg:py-28 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-blue-600 font-semibold tracking-wider uppercase text-sm mb-4 block">
                About Us
              </span>
              <h2 className="text-gray-900 mb-6 text-4xl md:text-5xl font-bold tracking-tight">
                Engineering Climate Control Since 1998
              </h2>
              <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                <p>
                  Khan's Authentic HVAC Systems has been delivering industrial and commercial HVAC solutions across Bangladesh for over 25 years. Established in April 1998, we have built our foundation on engineering capability, project discipline, and long-term client relationships.
                </p>
                <p>
                  Our work spans pharmaceutical manufacturing facilities, hospitals, textile plants, commercial buildings, banks, factories, and corporate offices. We handle complete HVAC project lifecycles—from initial system design and equipment supply to installation, commissioning, and ongoing support.
                </p>
                <p>
                  With a specialized focus on industrial HVAC systems, clean room environments (Class 1-100,000), chiller installations, and precision air handling, we provide the technical depth required for mission-critical climate control applications.
                </p>
              </div>
            </div>
            <div>
              <div className="bg-gradient-to-br from-blue-50 to-gray-50 rounded-2xl p-10">
                <div className="space-y-8">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-xl font-bold">25+</span>
                    </div>
                    <div>
                      <div className="font-bold text-gray-900 text-lg">Years of Experience</div>
                      <div className="text-gray-600 mt-1">Serving Bangladesh since April 1998</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-xl">🏭</span>
                    </div>
                    <div>
                      <div className="font-bold text-gray-900 text-lg">Industrial Expertise</div>
                      <div className="text-gray-600 mt-1">Pharmaceuticals, hospitals, textiles, commercial buildings</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-xl">✓</span>
                    </div>
                    <div>
                      <div className="font-bold text-gray-900 text-lg">End-to-End Delivery</div>
                      <div className="text-gray-600 mt-1">Design, supply, installation, commissioning, support</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-xl">👥</span>
                    </div>
                    <div>
                      <div className="font-bold text-gray-900 text-lg">Trusted Partners</div>
                      <div className="text-gray-600 mt-1">Abdul Monem, Akij, Bashundhara, AD-DIN, Badsha Groups</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CUSTOMER LOGOS SLIDER */}
      <section className="bg-white border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-6 py-12 flex flex-col items-center justify-center">
          <div className="text-center mb-12">
            <p className="text-base md:text-lg font-bold tracking-wider uppercase text-gray-600">
              Trusted by Industry Leaders
            </p>
          </div>

          <div className="relative overflow-hidden flex items-center">
            {/* Gradient overlays */}
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10" />

            {/* Sliding logos */}
            <div className="flex w-max gap-16 animate-scroll hover:[animation-play-state:paused] items-center">
              {/* First set */}
              {companies.map((company, idx) => (
                <div
                  key={`first-${idx}`}
                  className="flex-shrink-0 flex items-center justify-center h-[160px]"
                >
                  {company.logo ? (
                    <Image
                      src={company.logo}
                      alt={company.name}
                      width={280}
                      height={140}
                      className="object-contain transition-all duration-300 max-h-[140px]"
                    />
                  ) : (
                    <div className="text-2xl font-bold text-gray-300 whitespace-nowrap">
                      {company.name}
                    </div>
                  )}
                </div>
              ))}
              {/* Duplicate set for seamless loop */}
              {companies.map((company, idx) => (
                <div
                  key={`second-${idx}`}
                  className="flex-shrink-0 flex items-center justify-center h-[160px]"
                >
                  {company.logo ? (
                    <Image
                      src={company.logo}
                      alt={company.name}
                      width={280}
                      height={140}
                      className="object-contain transition-all duration-300 max-h-[140px]"
                    />
                  ) : (
                    <div className="text-2xl font-bold text-gray-300 whitespace-nowrap">
                      {company.name}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-20 lg:py-28 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-3xl mb-14">
            <span className="text-blue-600 font-semibold tracking-wider uppercase text-sm mb-4 block">
              Our Services
            </span>
            <h2 className="text-gray-900 mb-6 text-4xl md:text-5xl font-bold tracking-tight">
              Comprehensive HVAC Solutions
            </h2>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
              We deliver end-to-end HVAC systems tailored to your industry’s
              unique requirements, backed by engineering expertise and proven
              delivery capability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div
                key={service.title}
                className="bg-white border border-gray-200 hover:border-blue-600 transition-all duration-300 hover:shadow-2xl group p-8 hover:-translate-y-1 rounded-2xl"
              >
                <div className="text-5xl mb-6">{service.icon}</div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 tracking-tight">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  {service.description}
                </p>
                <Link
                  href={service.link}
                  className="inline-flex items-center text-blue-600 font-semibold text-sm group-hover:translate-x-1 transition-transform"
                >
                  Learn More
                  <svg
                    className="w-5 h-5 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CAPABILITIES / END-TO-END */}
      <section className="py-20 lg:py-28 bg-gradient-to-br from-blue-900 to-slate-950">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div>
              <span className="text-blue-300 font-semibold tracking-wider uppercase text-sm mb-4 block">
                End-to-End Delivery
              </span>
              <h2 className="text-white mb-6 text-4xl md:text-5xl font-bold tracking-tight">
                Complete Project Lifecycle Management
              </h2>
              <p className="text-lg md:text-xl text-white/75 leading-relaxed mb-10">
                From initial consultation to final commissioning, our integrated
                approach ensures smooth execution with a focus on performance,
                compliance, and reliability.
              </p>

              <div className="space-y-3">
                {capabilities.map((cap) => (
                  <div
                    key={cap.label}
                    className="flex items-center justify-between gap-6 py-3 border-b border-white/10"
                  >
                    <span className="text-base md:text-lg font-semibold text-white">
                      {cap.label}
                    </span>
                    <span className="text-blue-300 font-medium">
                      {cap.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6 auto-rows-fr h-full">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-8 h-full flex flex-col">
                <div className="h-12 w-12 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 text-2xl">
                  📋
                </div>

                <div className="mt-6 text-lg font-semibold text-white/90">Design</div>
                <div className="mt-3 text-base text-white/60 leading-7">
                  Custom engineering solutions
                </div>

                <div className="mt-auto pt-8 text-xs tracking-widest text-blue-300/80">
                  END-TO-END
                </div>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-8 h-full flex flex-col">
                <div className="h-12 w-12 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 text-2xl">
                  🔧
                </div>

                <div className="mt-6 text-lg font-semibold text-white/90">Supply</div>
                <div className="mt-3 text-base text-white/60 leading-7">
                  Premium equipment sourcing
                </div>

                <div className="mt-auto pt-8 text-xs tracking-widest text-blue-300/80">
                  SOURCING
                </div>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-8 h-full flex flex-col">
                <div className="h-12 w-12 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 text-2xl">
                  ⚡
                </div>

                <div className="mt-6 text-lg font-semibold text-white/90">Install</div>
                <div className="mt-3 text-base text-white/60 leading-7">
                  Expert installation teams
                </div>

                <div className="mt-auto pt-8 text-xs tracking-widest text-blue-300/80">
                  ON-SITE
                </div>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-8 h-full flex flex-col">
                <div className="h-12 w-12 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 text-2xl">
                  ✓
                </div>

                <div className="mt-6 text-lg font-semibold text-white/90">Commission</div>
                <div className="mt-3 text-base text-white/60 leading-7">
                  Testing & validation
                </div>

                <div className="mt-auto pt-8 text-xs tracking-widest text-blue-300/80">
                  VERIFIED
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="py-20 lg:py-28 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="rounded-3xl bg-gradient-to-br from-blue-600 to-blue-800 p-12 lg:p-16 shadow-xl">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-white mb-5 text-4xl md:text-5xl font-bold tracking-tight">
                Ready to Start Your Project?
              </h2>
              <p className="text-lg md:text-xl text-blue-100 mb-9 leading-relaxed">
                Contact our engineering team for a comprehensive consultation on
                your HVAC requirements.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/quote"
                  className="inline-flex items-center justify-center px-8 py-3.5 text-sm font-semibold bg-white text-blue-700 hover:bg-gray-100 rounded-xl transition-colors shadow-lg"
                >
                  Schedule Consultation
                </Link>
                <Link
                  href="#"
                  className="inline-flex items-center justify-center px-8 py-3.5 text-sm font-semibold border border-white/70 text-white hover:bg-white hover:text-blue-700 rounded-xl transition-colors"
                >
                  Download Brochure
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
