import Image from "next/image";
import Link from "next/link";

export default function ChillerSystemsPage() {
  const features = [
    {
      title: "Advanced Twin-Rotor Screw Compressor",
      description: "Semi-hermetic compressor with optimized 5-6 teeth profile design for high volumetric efficiency, smooth operation, and minimal refrigerant leakage.",
      icon: "⚙️",
    },
    {
      title: "Enclosed Motor Design",
      description: "Motor positioned at compressor gas inlet with refrigerant cooling ensures full motor cooling without heat dissipation concerns.",
      icon: "🔌",
    },
    {
      title: "Flooded Evaporator",
      description: "High-efficiency design with optimized refrigerant distribution for superior heat exchange and improved evaporation temperature.",
      icon: "❄️",
    },
    {
      title: "Stepless Capacity Adjustment",
      description: "Capacity adjust slide valve with solenoid valve and oil pressure piston enables smooth, stepless capacity control from 25-100%.",
      icon: "📊",
    },
    {
      title: "Eco-Friendly R134a Refrigerant",
      description: "Environmentally responsible refrigerant with zero ozone depletion potential, complying with the Montreal Protocol.",
      icon: "🌱",
    },
    {
      title: "Intelligent Control System",
      description: "Real-time load prediction, safe unit monitoring with automatic adjustments, and intelligent failure response for reliable operation.",
      icon: "🧠",
    },
    {
      title: "Reliable Oil Management",
      description: "Three-stage oil separation (99.99% efficiency), differential pressure-type oil supply, and double oil return system for stable operation.",
      icon: "🛢️",
    },
    {
      title: "Quiet Operation",
      description: "Sound level as low as 65 dB(A) at partial load with shock-absorbing cushion installation and built-in discharge muffler.",
      icon: "🔇",
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
    { label: "Series", value: "CWE (Water-Cooled)" },
    { label: "Compressor Type", value: "Semi-hermetic twin-rotor screw" },
    { label: "Refrigerant", value: "R134a (Eco-friendly)" },
    { label: "Capacity Control", value: "Stepless 25-100%" },
    { label: "Evaporator", value: "Flooded type high-efficiency" },
    { label: "Condenser", value: "Double-side reinforced shell & tube" },
    { label: "Oil Separation", value: "99.99% efficiency (3-stage)" },
    { label: "Noise Level", value: "As low as 65 dB(A)" },
    { label: "Control Panel", value: "Touch screen with intelligent control" },
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
              Water-cooled and air-cooled screw chiller systems featuring advanced twin-rotor compressors, eco-friendly R134a refrigerant, and intelligent control for industrial precision cooling.
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
                CWE Series Water-Cooled Screw Chillers
              </h2>
              <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
                <p>
                  Experience superior cooling performance with CWE Series water-cooled screw chillers. Featuring advanced twin-rotor semi-hermetic compressors with 5-6 teeth profile design, these systems deliver exceptional volumetric efficiency and reliability.
                </p>
                <p>
                  Our enclosed motor design ensures complete cooling without heat dissipation issues, while the flooded-type evaporator with optimized refrigerant distribution maximizes heat exchange efficiency. The new double-side reinforced condenser tube optimizes subcooling and reduces pressure loss.
                </p>
                <p>
                  With stepless capacity adjustment from 25-100%, eco-friendly R134a refrigerant, and intelligent control systems featuring real-time load prediction, the CWE Series provides precise temperature control with industry-leading energy efficiency and quiet operation as low as 65 dB(A).
                </p>
              </div>
            </div>
            <div className="relative h-96 bg-gray-100 rounded-2xl overflow-hidden">
              <Image
                src="/products/watercooled chiller1.png"
                alt="CWE Series Water-Cooled Screw Chiller"
                fill
                className="object-contain"
              />
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

      {/* Chiller Series */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 tracking-tight">
              Our Chiller System Series
            </h2>
            <p className="text-lg text-gray-600">
              Water-cooled and air-cooled solutions for every requirement
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Water-Cooled CWE Series */}
            <div className="bg-white rounded-2xl p-8 border-2 border-blue-600">
              <div className="inline-block bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-semibold mb-4">
                Featured
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">CWE Series</h3>
              <p className="text-blue-600 font-semibold mb-2">Water-Cooled Screw Chiller</p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Advanced twin-rotor semi-hermetic screw compressor system with superior efficiency and reliability.
              </p>
              <ul className="space-y-3 text-gray-700 mb-6">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3 text-xl">✓</span>
                  <span>Semi-hermetic twin-rotor screw compressor</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3 text-xl">✓</span>
                  <span>Eco-friendly R134a refrigerant</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3 text-xl">✓</span>
                  <span>Stepless capacity adjustment (25-100%)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3 text-xl">✓</span>
                  <span>Flooded evaporator high efficiency</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3 text-xl">✓</span>
                  <span>Intelligent control with touch screen</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3 text-xl">✓</span>
                  <span>Quiet operation (65 dB(A))</span>
                </li>
              </ul>
              <div className="bg-blue-50 rounded-lg p-4">
                <p className="text-sm text-gray-700">
                  <strong>Best for:</strong> Manufacturing, pharmaceutical plants, data centers, food processing
                </p>
              </div>
            </div>

            {/* Air-Cooled CAS & CAE Series */}
            <div className="bg-white rounded-2xl p-8 border border-gray-200">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">CAS & CAE Series</h3>
              <p className="text-blue-600 font-semibold mb-2">Air-Cooled Screw Chiller</p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Efficient air-cooled solutions requiring no cooling tower, ideal for water-scarce locations.
              </p>
              <ul className="space-y-3 text-gray-700 mb-6">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3 text-xl">✓</span>
                  <span>No cooling tower required</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3 text-xl">✓</span>
                  <span>Lower installation cost</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3 text-xl">✓</span>
                  <span>Screw compressor technology</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3 text-xl">✓</span>
                  <span>Compact footprint design</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3 text-xl">✓</span>
                  <span>Quick installation & commissioning</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3 text-xl">✓</span>
                  <span>Flexible outdoor placement</span>
                </li>
              </ul>
              <div className="bg-gray-50 rounded-lg p-4">
                <p className="text-sm text-gray-700">
                  <strong>Best for:</strong> Commercial buildings, hotels, hospitals, offices
                </p>
              </div>
            </div>
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
