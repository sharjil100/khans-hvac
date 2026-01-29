import Image from "next/image";
import Link from "next/link";

export default function DehumidificationPage() {
  const features = [
    {
      title: "Swedish Desiccant Rotor Technology",
      description: "Industrial-grade desiccant wheel from Sweden ensures continuous duty operation with exceptional reliability and longevity.",
      icon: "🎯",
    },
    {
      title: "Extreme Temperature Operation",
      description: "Operates reliably from –20°C to +60°C where compressor-based systems fail due to frosting.",
      icon: "❄️",
    },
    {
      title: "Ultra-Low Humidity Capability",
      description: "Achieves very low RH levels for critical applications requiring precise moisture control below 20% RH.",
      icon: "💧",
    },
    {
      title: "Military-Grade Temperature Control",
      description: "SCR controller with PT100 high-precision sensor ensures accurate regeneration temperature up to 120°C.",
      icon: "🎚️",
    },
    {
      title: "PTC Ceramic Heater",
      description: "92% heating efficiency with advanced PTC ceramic regeneration heater designed for industrial duty.",
      icon: "🔥",
    },
    {
      title: "Premium Electrical Components",
      description: "ABB, OMRON, and Schneider components ensure industrial panel integration and long-term reliability.",
      icon: "⚡",
    },
  ];

  const systemTypes = [
    {
      title: "Small & Medium Capacity",
      capacity: "0.6 to 6.2 kg/h",
      description: "Compact desiccant rotor units for laboratories, pharmaceutical rooms, and smaller industrial applications.",
      models: "GZB-200L to GZB-800L",
      features: [
        "220V or 380V operation",
        "45 m³ to 200 m³ space coverage",
        "1.5 kW to 9.8 kW power range",
        "7-15 days lead time",
      ],
    },
    {
      title: "Large Industrial Systems",
      capacity: "10.2 to 30.2 kg/h",
      description: "Heavy-duty rotary desiccant systems for large manufacturing plants, warehouses, and critical facilities.",
      models: "GZB-1000L to GZB-4500L",
      features: [
        "380V 3-phase power",
        "80 m² to 350 m² area coverage",
        "14.2 kW to 46.7 kW capacity",
        "15-25 days lead time",
      ],
    },
  ];

  const applications = [
    {
      title: "Pharmaceutical Production",
      description: "Tablet rooms, packaging areas, and sterile manufacturing require precise low-humidity control.",
      icon: "💊",
    },
    {
      title: "Lithium Battery Manufacturing",
      description: "Dry rooms for battery cell production demand extremely low dew point environments.",
      icon: "🔋",
    },
    {
      title: "Electronics & Semiconductors",
      description: "Prevent corrosion and electrostatic discharge in precision electronics manufacturing.",
      icon: "⚡",
    },
    {
      title: "Food Packaging & Storage",
      description: "Extend shelf life and maintain quality in cold storage and processing facilities.",
      icon: "🍱",
    },
    {
      title: "Museums & Archives",
      description: "Preserve artifacts, documents, and artwork with stable humidity control in any climate.",
      icon: "🏛️",
    },
    {
      title: "Chemical Industry",
      description: "Maintain process conditions and protect hygroscopic materials from moisture exposure.",
      icon: "🧪",
    },
    {
      title: "Hospitals & Medical Facilities",
      description: "Critical care areas, operating rooms, and medical storage require continuous humidity control.",
      icon: "🏥",
    },
    {
      title: "Military & Civil Defense",
      description: "Underground facilities, shelters, and military installations in challenging environments.",
      icon: "🛡️",
    },
    {
      title: "Laboratories & Research",
      description: "University labs and research facilities need precise environmental control for sensitive work.",
      icon: "🔬",
    },
  ];

  const specifications = [
    { label: "Dehumidification Capacity", value: "0.6 to 30.2 kg/h" },
    { label: "Process Air Flow", value: "220 to 4500 m³/h" },
    { label: "Operating Temperature", value: "–20°C to +60°C" },
    { label: "Applied Temperature Range", value: "–20°C to +70°C" },
    { label: "Regeneration Temperature", value: "Up to 120°C" },
    { label: "Desiccant Rotor", value: "Swedish Industrial Grade" },
    { label: "Heating Efficiency", value: "92% (PTC Ceramic Heater)" },
    { label: "Control System", value: "SCR + PT100 Military Grade" },
    { label: "Electrical Standards", value: "ABB, OMRON, Schneider" },
    { label: "Certifications", value: "ISO9000, CE, CCC" },
  ];

  const problems = [
    {
      problem: "Low Temperature Failure",
      solution: "Desiccant rotor technology operates reliably at –20°C where compressor-based systems freeze and fail.",
    },
    {
      problem: "Ultra-Low Humidity Requirements",
      solution: "Achieves very low RH levels (<20%) essential for lithium battery, pharmaceutical, and semiconductor manufacturing.",
    },
    {
      problem: "Continuous Industrial Duty",
      solution: "No compressor cycling means stable, uninterrupted operation for 24/7 industrial processes and clean rooms.",
    },
    {
      problem: "Precise Process Control",
      solution: "Military-grade SCR controller and PT100 sensor provide exact humidity control for critical applications.",
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
              Industrial Desiccant Rotor Dehumidification
            </h1>
            <p className="text-xl text-white/75">
              Industrial rotary desiccant dehumidifiers with Swedish rotor technology. Engineered for low temperature operation, ultra-low humidity control, and continuous industrial duty in the most demanding environments.
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
                Where Compressor Systems Fail, Desiccant Rotors Excel
              </h2>
              <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
                <p>
                  Our industrial desiccant rotor systems use Swedish wheel technology — designed specifically for applications requiring low temperature operation (–20°C to +60°C), ultra-low humidity levels, and continuous industrial duty.
                </p>
                <p>
                  Unlike refrigerant-based dehumidifiers that freeze below 5°C and cannot achieve very low RH, desiccant rotor systems use adsorption and heated regeneration to deliver stable performance in pharmaceutical manufacturing, lithium battery dry rooms, electronics fabrication, and military installations.
                </p>
                <p>
                  With military-grade SCR temperature control, PTC ceramic heaters at 92% efficiency, and premium ABB/OMRON/Schneider components, these systems are built for precision, reliability, and integration into critical industrial processes.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-6">
              <div className="relative h-64 bg-gray-200 rounded-2xl overflow-hidden">
                <Image
                  src="/products/Dehumidifier1.png"
                  alt="Industrial Desiccant Rotor Dehumidifier"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-64 bg-gray-200 rounded-2xl overflow-hidden">
                <Image
                  src="/products/Dehumidifier2.png"
                  alt="Industrial Desiccant Dehumidifier Installation"
                  fill
                  className="object-cover"
                />
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
              Industrial Engineering Features
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Certified ISO9000, CE, CCC — Built for pharmaceutical, military, and critical manufacturing
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
              GZ Series Model Range
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              From compact laboratory units to large-scale industrial systems
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {systemTypes.map((type, idx) => (
              <div key={idx} className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{type.title}</h3>
                <p className="text-blue-600 font-semibold mb-1">{type.capacity}</p>
                <p className="text-sm text-gray-500 mb-4">{type.models}</p>
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
              Critical Industrial Applications
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Proven in pharmaceutical, biotechnology, lithium battery, and defense sectors
            </p>
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
            Why Desiccant Rotor vs. Compressor Systems
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
          <p className="text-center text-gray-600 mb-8">
            Swedish Desiccant Rotor Technology — Industrial Grade Systems
          </p>
          <div className="bg-white rounded-2xl p-8">
            <div className="space-y-4">
              {specifications.map((spec, idx) => (
                <div key={idx} className="flex justify-between items-center py-4 border-b border-gray-200 last:border-0">
                  <span className="font-semibold text-gray-900">{spec.label}</span>
                  <span className="text-gray-600 text-right">{spec.value}</span>
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
            Need Industrial Dehumidification?
          </h2>
          <p className="text-xl text-white/80 mb-10 leading-relaxed">
            Our engineers will specify the optimal desiccant rotor system for your pharmaceutical, lithium battery, electronics, or critical facility application.
          </p>
          <Link
            href="/quote"
            className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold bg-white text-blue-900 hover:bg-gray-100 rounded-xl transition-colors shadow-lg"
          >
            Request Technical Consultation
          </Link>
        </div>
      </section>
    </>
  );
}
