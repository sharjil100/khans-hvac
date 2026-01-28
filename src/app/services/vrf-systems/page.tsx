import Image from "next/image";
import Link from "next/link";

export default function VRFSystemsPage() {
  const features = [
    {
      title: "Full DC Inverter Technology",
      description: "Wide adjustment range for flexible cooling/heating capacity, improved energy efficiency, and precise temperature control.",
      icon: "⚡",
    },
    {
      title: "Enhanced Vapor Injection (EVI) Compressor",
      description: "Superior heating performance in cold climates with non-vapor injection technology for optimal efficiency.",
      icon: "🔥",
    },
    {
      title: "Advanced Subcooling Technology",
      description: "EEV control for enhanced system efficiency, improving overall performance and energy savings.",
      icon: "❄️",
    },
    {
      title: "Low Standby Power Consumption",
      description: "60-step energy management reduces power consumption by 35% (30W reduction from traditional 55W VRF systems).",
      icon: "💡",
    },
    {
      title: "Wide Operation Range",
      description: "Cooling: -10°C to 54°C outdoor temperature. Heating: -30°C to 30°C. Reliable performance in extreme conditions.",
      icon: "🌡️",
    },
    {
      title: "Auto Dust-Clean Function",
      description: "Self-cleaning technology maintains optimal performance and reduces maintenance requirements.",
      icon: "🔄",
    },
    {
      title: "HyperLink Communication",
      description: "Greatly simplifies installation and saves costs with advanced communication technology.",
      icon: "🔗",
    },
    {
      title: "SuperSense Technology",
      description: "High reliability, stable operation, and enhanced comfort through intelligent sensing and control.",
      icon: "🎯",
    },
  ];

  const specifications = [
    { label: "Capacity Range", value: "76,000 - 870,000 BTU" },
    { label: "Indoor Unit Types", value: "12+ configurations available" },
    { label: "Cooling Range", value: "-10°C to 54°C outdoor" },
    { label: "Heating Range", value: "-30°C to 30°C outdoor" },
    { label: "Power Consumption", value: "35W standby (30W reduction)" },
    { label: "Control Options", value: "Wireless, wired, centralized" },
  ];

  const applications = [
    "Commercial Office Buildings",
    "Hotels & Resorts",
    "Hospitals & Healthcare",
    "Retail Shopping Centers",
    "Residential Apartments",
    "Educational Institutions",
    "Restaurants & Cafes",
    "Bank Branches",
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
              VRF Systems
            </h1>
            <p className="text-xl text-white/75">
              Advanced Variable Refrigerant Flow systems featuring Full DC Inverter Technology, Enhanced Vapor Injection compressors, and 60-step energy management for superior performance in extreme climates.
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
                VRF Systems by SIMILAR
              </h2>
              <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
                <p>
                  Experience world-class climate control with VRF systems engineered in Thailand and certified by leading international standards. Our ERV8 and ERVc max series deliver exceptional performance with capacities ranging from 76,000 to 870,000 BTU.
                </p>
                <p>
                  Featuring Full DC Inverter Technology and Enhanced Vapor Injection (EVI) compressors, these systems provide reliable heating even in -30°C conditions and cooling in up to 54°C outdoor temperatures. Advanced subcooling technology and 60-step energy management reduce standby power consumption by 35%.
                </p>
                <p>
                  With ShieldBox protection, HyperLink communication, and SuperSense technology, our VRF systems offer flexible installation with arbitrary topology support including daisy chain, star, ring, and tree connections.
                </p>
              </div>
            </div>
            <div className="relative h-96 bg-gray-100 rounded-2xl overflow-hidden">
              <Image
                src="/products/vrf1.png"
                alt="ERV8 VRF System"
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
              Key Features & Benefits
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Engineered for performance, efficiency, and reliability
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

      {/* Specifications */}
      <section className="py-20 bg-white">
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
              <div className="bg-gray-50 rounded-2xl p-8">
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

      {/* Product Series */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 tracking-tight">
              Our VRF System Series
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Choose from our advanced ERV8 and ERVc max series for optimal performance
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-white rounded-2xl p-8 border-2 border-blue-600">
              <div className="inline-block bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-semibold mb-4">
                Featured
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">ERV8</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Our flagship series featuring Enhanced Vapor Injection compressor technology for superior heating performance in extreme cold climates down to -30°C.
              </p>
              <ul className="space-y-3 text-gray-700 mb-6">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3 text-xl">✓</span>
                  <span>Full DC Inverter Technology</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3 text-xl">✓</span>
                  <span>EVI Compressor for cold climate</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3 text-xl">✓</span>
                  <span>Advanced Subcooling Technology</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3 text-xl">✓</span>
                  <span>35W standby power (30W reduction)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3 text-xl">✓</span>
                  <span>ERVB wiring with anti-interference</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3 text-xl">✓</span>
                  <span>Wide capacity range available</span>
                </li>
              </ul>
              <div className="bg-blue-50 rounded-lg p-4">
                <p className="text-sm text-gray-700">
                  <strong>Operating Range:</strong> Cooling -10°C to 54°C | Heating -30°C to 30°C
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-gray-200">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">ERVc max</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Maximum efficiency series designed for optimal performance in standard climate conditions with advanced energy management systems.
              </p>
              <ul className="space-y-3 text-gray-700 mb-6">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3 text-xl">✓</span>
                  <span>60-step Energy Management</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3 text-xl">✓</span>
                  <span>HyperLink simplified installation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3 text-xl">✓</span>
                  <span>SuperSense high reliability</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3 text-xl">✓</span>
                  <span>ShieldBox all-weather protection</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3 text-xl">✓</span>
                  <span>Built-in circulating fan & PTC heater</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3 text-xl">✓</span>
                  <span>All microchannel refrigerant cooling</span>
                </li>
              </ul>
              <div className="bg-gray-50 rounded-lg p-4">
                <p className="text-sm text-gray-700">
                  <strong>Ideal for:</strong> Commercial buildings, hotels, offices, and residential complexes
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Indoor Unit Types */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 tracking-tight">
              Indoor Unit Lineup
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Flexible configurations to suit any space requirement
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-gray-50 rounded-xl p-6 text-center">
              <div className="text-3xl mb-3">🏢</div>
              <h4 className="font-semibold text-gray-900 mb-2">Wall Mounted</h4>
              <p className="text-sm text-gray-600">Space-saving design</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6 text-center">
              <div className="text-3xl mb-3">⬜</div>
              <h4 className="font-semibold text-gray-900 mb-2">Ceiling & Floor</h4>
              <p className="text-sm text-gray-600">Versatile installation</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6 text-center">
              <div className="text-3xl mb-3">📦</div>
              <h4 className="font-semibold text-gray-900 mb-2">Cassette Types</h4>
              <p className="text-sm text-gray-600">1-way to 4-way options</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6 text-center">
              <div className="text-3xl mb-3">🔲</div>
              <h4 className="font-semibold text-gray-900 mb-2">Duct Types</h4>
              <p className="text-sm text-gray-600">Concealed installation</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6 text-center">
              <div className="text-3xl mb-3">🏭</div>
              <h4 className="font-semibold text-gray-900 mb-2">Air Handling Unit</h4>
              <p className="text-sm text-gray-600">Large capacity spaces</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6 text-center">
              <div className="text-3xl mb-3">📍</div>
              <h4 className="font-semibold text-gray-900 mb-2">Floor Standing</h4>
              <p className="text-sm text-gray-600">Easy maintenance</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6 text-center">
              <div className="text-3xl mb-3">🌬️</div>
              <h4 className="font-semibold text-gray-900 mb-2">Fresh Air Processing</h4>
              <p className="text-sm text-gray-600">Ventilation system</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6 text-center">
              <div className="text-3xl mb-3">⚙️</div>
              <h4 className="font-semibold text-gray-900 mb-2">Custom Solutions</h4>
              <p className="text-sm text-gray-600">Tailored configurations</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-blue-900 to-slate-950">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            Need a VRF System Quote?
          </h2>
          <p className="text-xl text-white/80 mb-10 leading-relaxed">
            Our engineering team will help you design the optimal VRF solution for your building requirements.
          </p>
          <Link
            href="/quote"
            className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold bg-white text-blue-900 hover:bg-gray-100 rounded-xl transition-colors shadow-lg"
          >
            Request VRF System Quote
          </Link>
        </div>
      </section>
    </>
  );
}
