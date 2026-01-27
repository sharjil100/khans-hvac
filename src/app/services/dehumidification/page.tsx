import Image from "next/image";
import Link from "next/link";

export default function DehumidificationPage() {
  const features = [
    {
      title: "Precise Humidity Control",
      description: "Maintain exact humidity levels from 20% to 80% RH with ±2% accuracy for sensitive applications.",
      icon: "🎯",
    },
    {
      title: "Energy Efficient",
      description: "Advanced desiccant and refrigerant technologies minimize energy consumption while maximizing performance.",
      icon: "⚡",
    },
    {
      title: "Corrosion Protection",
      description: "Prevent rust, oxidation, and material degradation in storage and manufacturing environments.",
      icon: "🛡️",
    },
    {
      title: "Mold Prevention",
      description: "Eliminate conditions that support mold, mildew, and bacterial growth in critical spaces.",
      icon: "✓",
    },
    {
      title: "Product Quality",
      description: "Protect moisture-sensitive products and processes from humidity-related defects.",
      icon: "📦",
    },
    {
      title: "24/7 Operation",
      description: "Continuous monitoring and control systems ensure consistent humidity management.",
      icon: "🔄",
    },
  ];

  const systemTypes = [
    {
      title: "Refrigerant Dehumidifiers",
      capacity: "20 to 500 liters/day",
      description: "Condensing technology for moderate humidity control in commercial and industrial spaces.",
      features: [
        "Cost-effective operation",
        "Compact design",
        "Low maintenance",
        "Suitable for 40-90% RH",
      ],
    },
    {
      title: "Desiccant Dehumidifiers",
      capacity: "50 to 2000 liters/day",
      description: "Chemical absorption for deep drying in cold storage, pharmaceuticals, and critical applications.",
      features: [
        "Low temperature operation",
        "Very low humidity (20% RH)",
        "Regenerative technology",
        "No condensate water",
      ],
    },
    {
      title: "Industrial Dehumidifiers",
      capacity: "100 to 5000 liters/day",
      description: "Heavy-duty systems for large facilities, warehouses, and manufacturing plants.",
      features: [
        "High capacity",
        "Robust construction",
        "Ducted distribution",
        "BMS integration",
      ],
    },
    {
      title: "Pool Dehumidifiers",
      capacity: "50 to 1000 liters/day",
      description: "Specialized units for swimming pools, spas, and aquatic facilities with corrosion-resistant construction.",
      features: [
        "Chlorine resistant",
        "Heat recovery",
        "Energy efficient",
        "Low noise operation",
      ],
    },
  ];

  const applications = [
    {
      title: "Pharmaceuticals",
      description: "Protect active ingredients and maintain stability in manufacturing and storage areas.",
      icon: "💊",
    },
    {
      title: "Electronics",
      description: "Prevent corrosion and static discharge in semiconductor and electronics manufacturing.",
      icon: "⚡",
    },
    {
      title: "Food Storage",
      description: "Extend shelf life and maintain quality in cold storage and warehouses.",
      icon: "🍱",
    },
    {
      title: "Museums & Archives",
      description: "Preserve artifacts, documents, and artwork with precise climate control.",
      icon: "🏛️",
    },
    {
      title: "Data Centers",
      description: "Protect IT equipment from condensation and humidity-related failures.",
      icon: "💾",
    },
    {
      title: "Indoor Pools",
      description: "Control humidity and prevent structural damage in aquatic facilities.",
      icon: "🏊",
    },
  ];

  const specifications = [
    { label: "Capacity Range", value: "20 to 5000 liters/day" },
    { label: "Humidity Control", value: "20% to 90% RH" },
    { label: "Operating Temperature", value: "5°C to 40°C" },
    { label: "Control Accuracy", value: "±2% RH" },
    { label: "Technology", value: "Refrigerant / Desiccant" },
    { label: "Energy Recovery", value: "Up to 80% heat recovery" },
  ];

  const problems = [
    {
      problem: "Condensation & Water Damage",
      solution: "Remove excess moisture to prevent surface condensation, water damage, and structural issues.",
    },
    {
      problem: "Product Deterioration",
      solution: "Protect hygroscopic materials, pharmaceuticals, and food products from moisture absorption.",
    },
    {
      problem: "Corrosion & Rust",
      solution: "Eliminate humidity-accelerated oxidation of metals, equipment, and infrastructure.",
    },
    {
      problem: "Mold & Odors",
      solution: "Control humidity below 60% RH to prevent microbial growth and musty odors.",
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
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight">
              Dehumidification Systems
            </h1>
            <p className="text-xl text-white/75">
              Precision humidity control solutions for moisture-sensitive environments, protecting products, equipment, and facilities from the damaging effects of excess humidity.
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
                Control Moisture, Protect Assets
              </h2>
              <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
                <p>
                  Excess humidity causes corrosion, mold growth, product degradation, and condensation damage. Proper dehumidification is essential for protecting equipment, inventory, and building infrastructure.
                </p>
                <p>
                  We provide complete dehumidification solutions using refrigerant and desiccant technologies, engineered to maintain precise humidity levels in storage facilities, manufacturing plants, archives, and specialty applications.
                </p>
                <p>
                  From small commercial units to large industrial systems, our dehumidifiers deliver reliable moisture control with energy-efficient operation and intelligent monitoring for critical environments.
                </p>
              </div>
            </div>
            <div className="relative h-96 bg-gray-200 rounded-2xl overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-blue-100 to-gray-100">
                <div className="text-8xl opacity-20">💧</div>
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
              Advanced Humidity Control
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Engineered for precision and reliability
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

      {/* System Types */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 tracking-tight">
              Dehumidification Technologies
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {systemTypes.map((type, idx) => (
              <div key={idx} className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{type.title}</h3>
                <p className="text-blue-600 font-semibold mb-4">{type.capacity}</p>
                <p className="text-gray-600 mb-6 leading-relaxed">{type.description}</p>
                <ul className="space-y-2">
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

      {/* Applications */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 tracking-tight">
              Applications
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {applications.map((app, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-8 border border-gray-200">
                <div className="text-5xl mb-4">{app.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{app.title}</h3>
                <p className="text-gray-600 leading-relaxed">{app.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Problems & Solutions */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center tracking-tight">
            Humidity Problems We Solve
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {problems.map((item, idx) => (
              <div key={idx} className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.problem}</h3>
                <p className="text-gray-600 leading-relaxed">{item.solution}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Specifications */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-gray-900 mb-8 tracking-tight text-center">
            Technical Specifications
          </h2>
          <div className="bg-white rounded-2xl p-8">
            <div className="space-y-4">
              {specifications.map((spec, idx) => (
                <div key={idx} className="flex justify-between items-center py-4 border-b border-gray-200 last:border-0">
                  <span className="font-semibold text-gray-900">{spec.label}</span>
                  <span className="text-gray-600">{spec.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-blue-900 to-slate-950">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            Need Humidity Control?
          </h2>
          <p className="text-xl text-white/80 mb-10 leading-relaxed">
            Our humidity control specialists will design the optimal dehumidification solution for your facility.
          </p>
          <Link
            href="/quote"
            className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold bg-white text-blue-900 hover:bg-gray-100 rounded-xl transition-colors shadow-lg"
          >
            Request Dehumidification Quote
          </Link>
        </div>
      </section>
    </>
  );
}
