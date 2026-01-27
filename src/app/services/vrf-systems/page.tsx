import Image from "next/image";
import Link from "next/link";

export default function VRFSystemsPage() {
  const features = [
    {
      title: "Energy Efficiency",
      description: "Advanced inverter technology delivers powerful performance while reducing operating costs and environmental impact.",
      icon: "⚡",
    },
    {
      title: "Multi-Zone Control",
      description: "Independently control temperature in multiple zones with a single outdoor unit for flexible comfort.",
      icon: "🎯",
    },
    {
      title: "Space Saving",
      description: "Compact design requires minimal installation space compared to traditional systems.",
      icon: "📏",
    },
    {
      title: "Quiet Operation",
      description: "Low noise levels ensure comfortable indoor environments in offices, hotels, and residential buildings.",
      icon: "🔇",
    },
    {
      title: "Simultaneous Heating & Cooling",
      description: "Heat recovery systems allow different zones to heat and cool simultaneously for optimal comfort.",
      icon: "🔄",
    },
    {
      title: "Long Piping Length",
      description: "Extended refrigerant piping capability allows flexible installation in large buildings.",
      icon: "📐",
    },
  ];

  const specifications = [
    { label: "Capacity Range", value: "4.0 TR to 50 TR" },
    { label: "Indoor Units", value: "Up to 64 units per system" },
    { label: "Piping Length", value: "Up to 1,000 meters" },
    { label: "Height Difference", value: "Up to 90 meters" },
    { label: "Energy Efficiency", value: "SEER up to 22" },
    { label: "Operating Range", value: "-20°C to 50°C" },
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
              Variable Refrigerant Flow air conditioning systems deliver precise temperature control, exceptional energy efficiency, and flexible installation for modern commercial and residential buildings.
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
                Advanced Climate Control Technology
              </h2>
              <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
                <p>
                  VRF (Variable Refrigerant Flow) systems represent the latest advancement in air conditioning technology, offering superior comfort control and energy efficiency for buildings of all sizes.
                </p>
                <p>
                  These systems use inverter-driven compressors to precisely control refrigerant flow to multiple indoor units, ensuring optimal comfort while minimizing energy consumption. A single outdoor unit can serve dozens of indoor units across multiple zones.
                </p>
                <p>
                  Ideal for commercial offices, hotels, hospitals, and large residential projects, VRF systems provide simultaneous heating and cooling capabilities, making them perfect for buildings with varying thermal requirements.
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

      {/* Product Types */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 tracking-tight">
              VRF System Types
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 border border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Heat Pump</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                All indoor units operate in the same mode (cooling or heating). Ideal for buildings with uniform temperature requirements.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Cost-effective solution</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Simple operation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>High efficiency</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Heat Recovery</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Allows simultaneous heating and cooling in different zones. Perfect for buildings with varying thermal loads.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Simultaneous heating/cooling</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Energy recovery</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Maximum flexibility</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Water Source</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Uses water as a heat source/sink. Suitable for buildings with existing water loops or cooling towers.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Efficient heat exchange</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Reduced outdoor units</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Quiet operation</span>
                </li>
              </ul>
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
