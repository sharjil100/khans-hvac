import Link from "next/link";

export default function SolutionsPage() {
  const solutions = [
    {
      title: "Pharmaceutical & Clean Room HVAC",
      description: "Controlled environment systems engineered for pharmaceutical manufacturing, biotechnology, and sterile production facilities.",
      deliverables: [
        "Clean rooms ISO Class 1 to 100,000",
        "Positive/negative pressure control",
        "HEPA/ULPA filtration systems",
        "Temperature & humidity precision control",
        "ISO 14644 & GMP compliance validation",
        "Particle monitoring integration",
      ],
      icon: "💊",
      link: "/services/clean-room",
    },
    {
      title: "Hospital & Healthcare HVAC",
      description: "Medical-grade climate control systems for operating theaters, isolation rooms, ICUs, and diagnostic facilities.",
      deliverables: [
        "Operating theater laminar flow systems",
        "Isolation room pressure cascades",
        "Infection control airflow design",
        "Medical gas pipeline coordination",
        "Emergency backup systems",
        "ASHRAE 170 compliance",
      ],
      icon: "🏥",
      link: "#contact",
    },
    {
      title: "Industrial & Factory Ventilation",
      description: "Heavy-duty ventilation and climate control for manufacturing plants, warehouses, and industrial production facilities.",
      deliverables: [
        "Process heat load management",
        "Fresh air supply & exhaust systems",
        "Dust & fume extraction",
        "Worker comfort ventilation",
        "Make-up air units (MAU)",
        "Energy recovery ventilation",
      ],
      icon: "🏭",
      link: "/services/industrial-hvac",
    },
    {
      title: "Commercial Building Climate Control",
      description: "Integrated HVAC solutions for office buildings, banks, corporate headquarters, and commercial complexes.",
      deliverables: [
        "VRF multi-zone systems",
        "Central AHU distribution",
        "Floor-by-floor FCU control",
        "Building automation integration",
        "Energy-efficient design",
        "Occupancy-based controls",
      ],
      icon: "🏢",
      link: "/services/vrf-systems",
    },
    {
      title: "Chiller & Central Cooling Plants",
      description: "Complete central plant engineering including chillers, pumping systems, cooling towers, and distribution networks.",
      deliverables: [
        "Air-cooled & water-cooled chillers",
        "Primary/secondary pumping systems",
        "Cooling tower selection & installation",
        "Chilled water distribution piping",
        "Thermal energy storage",
        "Plant automation & optimization",
      ],
      icon: "❄️",
      link: "/services/chiller-systems",
    },
    {
      title: "Humidity & Dehumidification Control",
      description: "Precision moisture control systems for textile manufacturing, pharmaceutical storage, and humidity-sensitive environments.",
      deliverables: [
        "Refrigerant & desiccant dehumidifiers",
        "Textile production humidity control",
        "Warehouse condensation prevention",
        "Pharmaceutical storage protection",
        "Mold & corrosion prevention",
        "Continuous RH monitoring",
      ],
      icon: "💧",
      link: "/services/dehumidification",
    },
    {
      title: "HVAC Retrofitting & System Upgrades",
      description: "Modernization of existing HVAC infrastructure to improve performance, reduce energy costs, and extend system life.",
      deliverables: [
        "Existing system performance audit",
        "Chiller & AHU replacement",
        "Variable speed drive retrofits",
        "Control system modernization",
        "Energy efficiency optimization",
        "Minimal operational disruption",
      ],
      icon: "🔧",
      link: "#contact",
    },
  ];

  return (
    <>
      {/* Hero */}
      <section className="relative bg-slate-950 pt-32 pb-16">
        <div className="max-w-6xl mx-auto px-6">
          <Link href="/" className="inline-flex items-center text-blue-400 hover:text-blue-300 mb-6 text-sm font-medium">
            ← Back to Home
          </Link>
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight">
              HVAC Solutions Engineered for Every Environment
            </h1>
            <p className="text-xl text-white/75 leading-relaxed">
              We deliver complete climate control systems tailored to the unique requirements of pharmaceutical facilities, hospitals, manufacturing plants, commercial buildings, and central cooling infrastructure. Each solution is engineered for performance, compliance, and operational reliability.
            </p>
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="text-blue-600 font-semibold tracking-wider uppercase text-sm mb-4 block">
              Industry Solutions
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
              Tailored HVAC Systems by Application
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              From controlled clean room environments to large-scale industrial ventilation, we engineer complete solutions that meet your industry's specific requirements.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((solution, idx) => (
              <div
                key={idx}
                className="bg-white border border-gray-200 rounded-2xl p-8 hover:border-blue-600 hover:shadow-2xl transition-all duration-300 group"
              >
                <div className="text-5xl mb-6">{solution.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 tracking-tight">
                  {solution.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  {solution.description}
                </p>
                <div className="mb-6">
                  <p className="text-sm font-semibold text-gray-900 uppercase tracking-wide mb-3">
                    Solution Includes:
                  </p>
                  <ul className="space-y-2">
                    {solution.deliverables.map((item, didx) => (
                      <li key={didx} className="flex items-start text-sm text-gray-700">
                        <span className="text-blue-600 mr-2 mt-0.5">✓</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <Link
                  href={solution.link}
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

      {/* Key Differentiators */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 tracking-tight">
              Our Solution Engineering Process
            </h2>
            <p className="text-lg text-gray-600">
              A structured approach to delivering optimized HVAC systems
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-2xl p-8 text-center border border-gray-200">
              <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Site Assessment</h3>
              <p className="text-gray-600 leading-relaxed">
                Detailed evaluation of facility requirements, heat loads, airflow patterns, and operational constraints.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 text-center border border-gray-200">
              <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">System Design</h3>
              <p className="text-gray-600 leading-relaxed">
                Engineering calculations, equipment selection, duct/piping design, and compliance verification.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 text-center border border-gray-200">
              <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Installation</h3>
              <p className="text-gray-600 leading-relaxed">
                Professional installation by experienced technicians following project specifications and safety standards.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 text-center border border-gray-200">
              <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">4</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Validation</h3>
              <p className="text-gray-600 leading-relaxed">
                Testing, commissioning, performance verification, and comprehensive documentation delivery.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Served */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center tracking-tight">
            Industries We Serve
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {[
              { name: "Pharmaceuticals", icon: "💊" },
              { name: "Healthcare", icon: "🏥" },
              { name: "Manufacturing", icon: "🏭" },
              { name: "Textile", icon: "🧵" },
              { name: "Food Processing", icon: "🍱" },
              { name: "Banking", icon: "🏦" },
              { name: "Hospitality", icon: "🏨" },
              { name: "Data Centers", icon: "💾" },
              { name: "Education", icon: "🎓" },
              { name: "Commercial", icon: "🏢" },
            ].map((industry, idx) => (
              <div
                key={idx}
                className="bg-gray-50 rounded-xl p-6 text-center hover:bg-blue-50 transition-colors"
              >
                <div className="text-4xl mb-2">{industry.icon}</div>
                <p className="font-semibold text-gray-900 text-sm">{industry.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-blue-900 to-slate-950">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            Not Sure Which Solution Fits Your Facility?
          </h2>
          <p className="text-xl text-white/80 mb-10 leading-relaxed">
            Our engineering team will assess your requirements and recommend the optimal HVAC solution for your specific application and industry.
          </p>
          <Link
            href="/quote"
            className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold bg-white text-blue-900 hover:bg-gray-100 rounded-xl transition-colors shadow-lg"
          >
            Request HVAC Consultation
          </Link>
        </div>
      </section>
    </>
  );
}
