import Image from "next/image";
import Link from "next/link";

export default function CleanRoomPage() {
  const features = [
    {
      title: "ISO Certified Classes",
      description: "Design and installation for ISO Class 1 through Class 100,000 clean room environments.",
      icon: "✓",
    },
    {
      title: "HEPA/ULPA Filtration",
      description: "Advanced filtration systems remove 99.99% of particles ensuring pristine air quality.",
      icon: "🔬",
    },
    {
      title: "Precise Control",
      description: "Maintain tight tolerances for temperature, humidity, and pressure differentials.",
      icon: "🎯",
    },
    {
      title: "Energy Recovery",
      description: "Integrated heat recovery systems reduce operating costs while maintaining standards.",
      icon: "♻️",
    },
    {
      title: "Continuous Monitoring",
      description: "Real-time sensors and alarms ensure immediate response to any deviation.",
      icon: "📊",
    },
    {
      title: "Validated Systems",
      description: "Complete documentation and validation protocols for regulatory compliance.",
      icon: "📋",
    },
  ];

  const cleanroomClasses = [
    {
      class: "ISO Class 1-3",
      particles: "≤ 1,000 particles/m³",
      applications: ["Semiconductor Manufacturing", "Nanotechnology Research", "Advanced Microelectronics"],
    },
    {
      class: "ISO Class 4-5",
      particles: "≤ 100,000 particles/m³",
      applications: ["Pharmaceutical Manufacturing", "Medical Device Assembly", "Biotechnology"],
    },
    {
      class: "ISO Class 6-7",
      particles: "≤ 1,000,000 particles/m³",
      applications: ["Food Processing", "Cosmetics Production", "Electronics Assembly"],
    },
    {
      class: "ISO Class 8",
      particles: "≤ 3,500,000 particles/m³",
      applications: ["Packaging Areas", "General Manufacturing", "Laboratory Support Areas"],
    },
  ];

  const specifications = [
    { label: "Clean Room Classes", value: "ISO Class 1 to 100,000" },
    { label: "Temperature Control", value: "±0.5°C accuracy" },
    { label: "Humidity Control", value: "±2% RH accuracy" },
    { label: "Air Changes", value: "15 to 600 ACH" },
    { label: "Pressure Differential", value: "5 to 20 Pa" },
    { label: "Filtration", value: "HEPA H13/H14, ULPA U15/U16" },
  ];

  const industries = [
    "Pharmaceutical & Biotech",
    "Semiconductor & Electronics",
    "Medical Devices",
    "Food & Beverage",
    "Cosmetics & Personal Care",
    "Research Laboratories",
    "Aerospace Components",
    "Optical Manufacturing",
  ];

  return (
    <>
      {/* Hero */}
      <section className="relative bg-slate-950 pt-32 pb-16">
        <div className="max-w-6xl mx-auto px-6">
          <Link href="/" className="inline-flex items-center text-blue-400 hover:text-blue-300 mb-6 text-sm font-medium">
            ← Back to Home
          </Link>
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight">
              Clean Room HVAC
            </h1>
            <p className="text-xl text-white/75">
              Precision-engineered controlled environment HVAC systems for pharmaceutical, electronics, medical device, and research facilities requiring the highest levels of air quality and contamination control.
            </p>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6 tracking-tight">
                Controlled Environment Expertise
              </h2>
              <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
                <p>
                  Clean room HVAC systems are critical infrastructure for industries where product quality, safety, and regulatory compliance depend on maintaining pristine environmental conditions.
                </p>
                <p>
                  We design, install, and validate complete clean room HVAC systems from ISO Class 1 to Class 100,000, incorporating advanced filtration, precise temperature and humidity control, and positive/negative pressure management.
                </p>
                <p>
                  Our systems integrate seamlessly with building automation, providing real-time monitoring, alarm systems, and complete documentation for FDA, WHO, and other regulatory compliance requirements.
                </p>
              </div>
            </div>
            <div className="relative h-96 bg-gray-200 rounded-2xl overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-blue-100 to-gray-100">
                <div className="text-8xl opacity-20">🔬</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 tracking-tight">
              Clean Room HVAC Features
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive solutions for contamination-free environments
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-8 border border-gray-200">
                <div className="text-5xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Clean Room Classes */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 tracking-tight">
              ISO Clean Room Classifications
            </h2>
            <p className="text-lg text-gray-600">
              We design and validate systems for all ISO 14644-1 classifications
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {cleanroomClasses.map((item, idx) => (
              <div key={idx} className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{item.class}</h3>
                <p className="text-blue-600 font-semibold mb-6">{item.particles}</p>
                <div className="space-y-2">
                  <p className="font-semibold text-gray-900 text-sm uppercase tracking-wide mb-3">Typical Applications:</p>
                  {item.applications.map((app, aidx) => (
                    <p key={aidx} className="text-gray-700 flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      <span>{app}</span>
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Specifications & Industries */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-8 tracking-tight">
                Technical Specifications
              </h2>
              <div className="space-y-4">
                {specifications.map((spec, idx) => (
                  <div key={idx} className="flex justify-between items-center py-4 border-b border-gray-200">
                    <span className="font-semibold text-gray-900">{spec.label}</span>
                    <span className="text-gray-600 text-right">{spec.value}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-8 tracking-tight">
                Industries Served
              </h2>
              <div className="bg-white rounded-2xl p-8">
                <ul className="space-y-3">
                  {industries.map((industry, idx) => (
                    <li key={idx} className="flex items-start text-gray-700">
                      <span className="text-blue-600 mr-3 mt-1">✓</span>
                      <span className="text-lg">{industry}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* System Components */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center tracking-tight">
            Complete System Integration
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gray-50 rounded-2xl p-6 text-center">
              <div className="text-4xl mb-3">🌬️</div>
              <h3 className="font-bold text-gray-900 mb-2">Air Handling Units</h3>
              <p className="text-sm text-gray-600">Custom AHUs with HEPA/ULPA filtration</p>
            </div>
            <div className="bg-gray-50 rounded-2xl p-6 text-center">
              <div className="text-4xl mb-3">❄️</div>
              <h3 className="font-bold text-gray-900 mb-2">Precision Cooling</h3>
              <p className="text-sm text-gray-600">Tight temperature & humidity control</p>
            </div>
            <div className="bg-gray-50 rounded-2xl p-6 text-center">
              <div className="text-4xl mb-3">⚙️</div>
              <h3 className="font-bold text-gray-900 mb-2">Building Automation</h3>
              <p className="text-sm text-gray-600">Integrated BMS monitoring & control</p>
            </div>
            <div className="bg-gray-50 rounded-2xl p-6 text-center">
              <div className="text-4xl mb-3">📋</div>
              <h3 className="font-bold text-gray-900 mb-2">Validation Services</h3>
              <p className="text-sm text-gray-600">Complete IQ/OQ/PQ documentation</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-blue-900 to-slate-950">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            Need a Clean Room HVAC System?
          </h2>
          <p className="text-xl text-white/80 mb-10 leading-relaxed">
            Our clean room specialists will design a validated solution meeting your exact requirements and regulatory standards.
          </p>
          <Link
            href="/quote"
            className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold bg-white text-blue-900 hover:bg-gray-100 rounded-xl transition-colors shadow-lg"
          >
            Request Clean Room Quote
          </Link>
        </div>
      </section>
    </>
  );
}
