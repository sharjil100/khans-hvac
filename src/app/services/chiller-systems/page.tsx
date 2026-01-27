import Image from "next/image";
import Link from "next/link";

export default function ChillerSystemsPage() {
  const features = [
    {
      title: "High Efficiency",
      description: "Advanced compressor technology and heat exchangers deliver superior energy performance and reduced operating costs.",
      icon: "⚡",
    },
    {
      title: "Modular Design",
      description: "Scalable capacity to match your cooling requirements with flexible configuration options.",
      icon: "🔧",
    },
    {
      title: "Reliable Operation",
      description: "Industrial-grade components ensure continuous performance in demanding environments.",
      icon: "✓",
    },
    {
      title: "Smart Controls",
      description: "Intelligent monitoring and control systems optimize performance and enable remote management.",
      icon: "📊",
    },
    {
      title: "Low Maintenance",
      description: "Designed for easy servicing with accessible components and extended service intervals.",
      icon: "🔨",
    },
    {
      title: "Environmental",
      description: "Eco-friendly refrigerants and efficient operation minimize environmental impact.",
      icon: "🌱",
    },
  ];

  const chillerTypes = [
    {
      title: "Air-Cooled Chillers",
      capacity: "20 TR to 500 TR",
      features: [
        "No cooling tower required",
        "Lower installation cost",
        "Ideal for water-scarce areas",
        "Quick installation",
      ],
    },
    {
      title: "Water-Cooled Chillers",
      capacity: "50 TR to 2000 TR",
      features: [
        "Higher energy efficiency",
        "Lower operating cost",
        "Quieter operation",
        "Longer equipment life",
      ],
    },
    {
      title: "Screw Chillers",
      capacity: "100 TR to 1500 TR",
      features: [
        "Reliable twin-screw technology",
        "Wide operating range",
        "Part-load efficiency",
        "Reduced vibration",
      ],
    },
    {
      title: "Centrifugal Chillers",
      capacity: "200 TR to 3000 TR",
      features: [
        "Highest efficiency",
        "Low maintenance",
        "Oil-free operation options",
        "Large capacity applications",
      ],
    },
  ];

  const applications = [
    "Manufacturing Facilities",
    "Data Centers",
    "Pharmaceutical Plants",
    "Food Processing",
    "Chemical Processing",
    "Commercial Buildings",
    "Hospitals & Healthcare",
    "Hotels & Resorts",
  ];

  const specifications = [
    { label: "Capacity Range", value: "20 TR to 3000 TR" },
    { label: "Refrigerants", value: "R134a, R410A, R407C, R513A" },
    { label: "Cooling Method", value: "Air-Cooled / Water-Cooled" },
    { label: "Energy Efficiency", value: "EER 2.8 to 6.5" },
    { label: "Control System", value: "Microprocessor PLC" },
    { label: "Operating Range", value: "-10°C to 45°C ambient" },
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
              Chiller Systems
            </h1>
            <p className="text-xl text-white/75">
              Industrial-grade air-cooled, water-cooled, and centrifugal chiller systems engineered for reliability, efficiency, and precision cooling in demanding applications.
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
                Precision Process Cooling
              </h2>
              <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
                <p>
                  Our chiller systems deliver reliable, efficient cooling for industrial processes, manufacturing facilities, and commercial buildings requiring precise temperature control.
                </p>
                <p>
                  From compact air-cooled units to large-capacity water-cooled and centrifugal chillers, we provide solutions engineered for 24/7 operation in the most demanding environments.
                </p>
                <p>
                  Each system features advanced controls, energy-efficient components, and robust construction to ensure maximum uptime and minimal operating costs throughout the system lifecycle.
                </p>
              </div>
            </div>
            <div className="relative h-96 bg-gray-200 rounded-2xl overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-blue-100 to-gray-100">
                <div className="text-8xl opacity-20">❄️</div>
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
              Engineered for Performance
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Advanced features for industrial reliability and efficiency
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

      {/* Chiller Types */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 tracking-tight">
              Chiller System Types
            </h2>
            <p className="text-lg text-gray-600">
              Comprehensive range for every application requirement
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {chillerTypes.map((type, idx) => (
              <div key={idx} className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{type.title}</h3>
                <p className="text-blue-600 font-semibold mb-6">{type.capacity}</p>
                <ul className="space-y-3">
                  {type.features.map((feature, fidx) => (
                    <li key={fidx} className="flex items-start text-gray-700">
                      <span className="text-blue-600 mr-3 mt-1">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Specifications & Applications */}
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
                    <span className="text-gray-600">{spec.value}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-8 tracking-tight">
                Applications
              </h2>
              <div className="bg-white rounded-2xl p-8">
                <ul className="space-y-3">
                  {applications.map((app, idx) => (
                    <li key={idx} className="flex items-start text-gray-700">
                      <span className="text-blue-600 mr-3 mt-1">✓</span>
                      <span className="text-lg">{app}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center tracking-tight">
            Why Choose Our Chiller Systems
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="flex gap-4">
              <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                <span className="text-white text-xl">💰</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Energy Savings</h3>
                <p className="text-gray-600">Advanced efficiency technologies reduce energy consumption by up to 30% compared to conventional systems.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                <span className="text-white text-xl">⏱️</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Quick Installation</h3>
                <p className="text-gray-600">Pre-configured and factory-tested units enable rapid deployment with minimal site preparation.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                <span className="text-white text-xl">🔧</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Easy Maintenance</h3>
                <p className="text-gray-600">Accessible design and diagnostic tools simplify service and minimize downtime.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                <span className="text-white text-xl">📱</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Remote Monitoring</h3>
                <p className="text-gray-600">Cloud-based monitoring enables real-time performance tracking and predictive maintenance.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-blue-900 to-slate-950">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            Need a Chiller System Quote?
          </h2>
          <p className="text-xl text-white/80 mb-10 leading-relaxed">
            Our engineering team will design the optimal chiller solution for your cooling requirements.
          </p>
          <Link
            href="/quote"
            className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold bg-white text-blue-900 hover:bg-gray-100 rounded-xl transition-colors shadow-lg"
          >
            Request Chiller System Quote
          </Link>
        </div>
      </section>
    </>
  );
}
