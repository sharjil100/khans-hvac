import Image from "next/image";
import Link from "next/link";

export default function IndustrialHVACPage() {
  const features = [
    {
      title: "Heavy-Duty Construction",
      description: "Industrial-grade components designed for continuous operation in harsh environments.",
      icon: "🏗️",
    },
    {
      title: "Process Integration",
      description: "Seamless integration with manufacturing processes and production equipment.",
      icon: "⚙️",
    },
    {
      title: "Energy Efficiency",
      description: "Variable speed drives and heat recovery reduce operating costs significantly.",
      icon: "⚡",
    },
    {
      title: "Large Capacity",
      description: "Systems engineered to handle massive air volumes and extreme thermal loads.",
      icon: "📏",
    },
    {
      title: "Environmental Control",
      description: "Precise management of temperature, humidity, dust, and contaminants.",
      icon: "🌡️",
    },
    {
      title: "24/7 Reliability",
      description: "Redundant systems and robust design ensure continuous production uptime.",
      icon: "🔄",
    },
  ];

  const applications = [
    {
      title: "Manufacturing Facilities",
      description: "Climate control for textile, garment, automotive, and general manufacturing plants.",
      icon: "🏭",
    },
    {
      title: "Warehouses & Logistics",
      description: "Temperature and humidity control for storage facilities and distribution centers.",
      icon: "📦",
    },
    {
      title: "Food Processing",
      description: "Sanitary HVAC systems for food production, packaging, and cold storage facilities.",
      icon: "🍱",
    },
    {
      title: "Chemical Processing",
      description: "Corrosion-resistant systems with explosion-proof components for hazardous areas.",
      icon: "⚗️",
    },
    {
      title: "Power Plants",
      description: "Cooling systems for control rooms, switchgear areas, and turbine halls.",
      icon: "⚡",
    },
    {
      title: "Data Centers",
      description: "Precision cooling with N+1 redundancy for mission-critical IT infrastructure.",
      icon: "💾",
    },
  ];

  const systemTypes = [
    {
      title: "Make-Up Air Units",
      features: ["Fresh air introduction", "Temperature pre-conditioning", "Filtration & purification", "Energy recovery options"],
    },
    {
      title: "Rooftop Units",
      features: ["Self-contained systems", "Easy installation", "Weather-resistant", "Factory tested"],
    },
    {
      title: "Ducted Systems",
      features: ["Centralized distribution", "Zone control capability", "Efficient air movement", "Low noise levels"],
    },
    {
      title: "Spot Cooling",
      features: ["Localized cooling", "Flexible deployment", "Quick temperature reduction", "Process-specific"],
    },
  ];

  const specifications = [
    { label: "Air Volume", value: "5,000 to 500,000 CFM" },
    { label: "Cooling Capacity", value: "50 TR to 1000 TR" },
    { label: "Operating Environment", value: "-20°C to 60°C" },
    { label: "Construction", value: "Stainless Steel / Galvanized" },
    { label: "Control System", value: "PLC / BMS Integration" },
    { label: "Efficiency", value: "Variable Speed Drives" },
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
              Industrial HVAC Systems
            </h1>
            <p className="text-xl text-white/75">
              Heavy-duty climate control solutions engineered for manufacturing facilities, warehouses, and industrial complexes requiring robust performance in demanding environments.
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
                Built for Industrial Demands
              </h2>
              <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
                <p>
                  Industrial HVAC systems must withstand harsh conditions while maintaining precise environmental control to support manufacturing processes, protect equipment, and ensure worker comfort.
                </p>
                <p>
                  We engineer complete climate control solutions for factories, warehouses, production facilities, and industrial complexes, incorporating heavy-duty components, redundant systems, and intelligent controls.
                </p>
                <p>
                  From small workshops to massive manufacturing plants, our industrial HVAC systems deliver reliable performance, energy efficiency, and the flexibility to adapt to changing production requirements.
                </p>
              </div>
            </div>
            <div className="relative h-96 bg-gray-200 rounded-2xl overflow-hidden">
              <Image
                src="/products/industrial_hvac1.png"
                alt="Industrial HVAC System"
                fill
                className="object-cover"
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
              Industrial-Grade Features
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Engineered for the toughest industrial environments
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

      {/* Applications */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 tracking-tight">
              Industrial Applications
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {applications.map((app, idx) => (
              <div key={idx} className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
                <div className="text-5xl mb-4">{app.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{app.title}</h3>
                <p className="text-gray-600 leading-relaxed">{app.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* System Types */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 tracking-tight">
              System Configurations
            </h2>
            <p className="text-lg text-gray-600">
              Flexible solutions for every industrial requirement
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {systemTypes.map((type, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-6 border border-gray-200">
                <h3 className="text-lg font-bold text-gray-900 mb-4">{type.title}</h3>
                <ul className="space-y-2">
                  {type.features.map((feature, fidx) => (
                    <li key={fidx} className="flex items-start text-sm text-gray-600">
                      <span className="text-blue-600 mr-2">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Specifications */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-gray-900 mb-8 tracking-tight text-center">
            Technical Specifications
          </h2>
          <div className="bg-gray-50 rounded-2xl p-8">
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

      {/* Key Benefits */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center tracking-tight">
            Why Choose Our Industrial HVAC Systems
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 text-center">
              <div className="text-5xl mb-4">💪</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Proven Reliability</h3>
              <p className="text-gray-600">Industrial-grade components engineered for 24/7 operation in the harshest conditions.</p>
            </div>
            <div className="bg-white rounded-2xl p-8 text-center">
              <div className="text-5xl mb-4">💰</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Lower Operating Costs</h3>
              <p className="text-gray-600">Energy-efficient designs and heat recovery systems reduce utility expenses significantly.</p>
            </div>
            <div className="bg-white rounded-2xl p-8 text-center">
              <div className="text-5xl mb-4">🔧</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Easy Maintenance</h3>
              <p className="text-gray-600">Accessible design and preventive maintenance programs minimize downtime.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-blue-900 to-slate-950">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            Need an Industrial HVAC System?
          </h2>
          <p className="text-xl text-white/80 mb-10 leading-relaxed">
            Our industrial HVAC specialists will design a solution tailored to your facility and production requirements.
          </p>
          <Link
            href="/quote"
            className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold bg-white text-blue-900 hover:bg-gray-100 rounded-xl transition-colors shadow-lg"
          >
            Request Industrial HVAC Quote
          </Link>
        </div>
      </section>
    </>
  );
}
