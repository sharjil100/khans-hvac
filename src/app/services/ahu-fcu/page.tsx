import Image from "next/image";
import Link from "next/link";

export default function AHUFCUPage() {
  const features = [
    {
      title: "High Efficiency",
      description: "EC motors and advanced heat exchangers deliver superior energy performance and reduced operating costs.",
      icon: "⚡",
    },
    {
      title: "Modular Design",
      description: "Flexible configuration with standard and custom modules to meet specific project requirements.",
      icon: "🔧",
    },
    {
      title: "Low Noise",
      description: "Sound-attenuated panels and aerodynamic fan design ensure quiet operation in occupied spaces.",
      icon: "🔇",
    },
    {
      title: "Hygienic Construction",
      description: "Smooth internal surfaces and drainage systems prevent bacterial growth and contamination.",
      icon: "✨",
    },
    {
      title: "Easy Maintenance",
      description: "Access doors, removable panels, and slide-out components simplify service and reduce downtime.",
      icon: "🔨",
    },
    {
      title: "Smart Controls",
      description: "Integrated BMS connectivity with advanced sensors for optimal comfort and efficiency.",
      icon: "📱",
    },
  ];

  const ahuTypes = [
    {
      title: "Standard AHU",
      capacity: "2,000 to 50,000 CFM",
      features: [
        "Indoor/outdoor installation",
        "Supply & return configurations",
        "Multiple filtration stages",
        "Heat recovery options",
      ],
    },
    {
      title: "Packaged AHU",
      capacity: "5,000 to 100,000 CFM",
      features: [
        "Factory assembled & tested",
        "Quick installation",
        "Integrated controls",
        "Weather-resistant enclosure",
      ],
    },
    {
      title: "Clean Room AHU",
      capacity: "1,000 to 20,000 CFM",
      features: [
        "HEPA/ULPA filtration",
        "Stainless steel construction",
        "Validation protocols",
        "Zero air leakage design",
      ],
    },
    {
      title: "Hygienic AHU",
      capacity: "2,000 to 30,000 CFM",
      features: [
        "Food-grade materials",
        "Smooth internal finish",
        "Easy cleaning access",
        "Antimicrobial coatings",
      ],
    },
  ];

  const fcuTypes = [
    {
      title: "Concealed FCU",
      description: "Ceiling-mounted units with ducted air distribution for discreet installation.",
      applications: ["Offices", "Hotels", "Apartments"],
    },
    {
      title: "Exposed FCU",
      description: "Wall or ceiling-mounted units with direct air delivery for flexible placement.",
      applications: ["Commercial Spaces", "Retail", "Restaurants"],
    },
    {
      title: "Cassette FCU",
      description: "Ceiling-recessed units with 360° air distribution for uniform comfort.",
      applications: ["Open Offices", "Lobbies", "Conference Rooms"],
    },
    {
      title: "Vertical FCU",
      description: "Floor-standing or wall-mounted vertical units for high wall applications.",
      applications: ["Stairwells", "Corridors", "Utility Areas"],
    },
  ];

  const specifications = [
    { label: "AHU Capacity", value: "1,000 to 100,000 CFM" },
    { label: "FCU Capacity", value: "200 to 2,000 CFM" },
    { label: "Filtration", value: "G4, F7, F9, HEPA H13/H14" },
    { label: "Heat Exchangers", value: "Copper tube aluminum fin" },
    { label: "Fan Types", value: "Centrifugal, EC motors" },
    { label: "Control Options", value: "Manual, BMS, VAV" },
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
              AHU & FCU Systems
            </h1>
            <p className="text-xl text-white/75">
              High-performance Air Handling Units and Fan Coil Units engineered for precise temperature control, energy efficiency, and reliable operation in commercial and industrial applications.
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
                Precision Air Distribution
              </h2>
              <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
                <p>
                  Air Handling Units (AHU) and Fan Coil Units (FCU) are essential components of modern HVAC systems, responsible for conditioning and distributing air throughout buildings.
                </p>
                <p>
                  We supply and install complete AHU and FCU systems featuring modular construction, energy-efficient components, and advanced controls for optimal comfort and performance.
                </p>
                <p>
                  From standard commercial units to specialized clean room and hygienic configurations, our systems are engineered to meet the most demanding requirements for air quality, energy efficiency, and operational reliability.
                </p>
              </div>
            </div>
            <div className="relative h-96 bg-gray-200 rounded-2xl overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-blue-100 to-gray-100">
                <div className="text-8xl opacity-20">🌬️</div>
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
              Advanced Features
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Engineered for performance, efficiency, and comfort
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

      {/* AHU Types */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 tracking-tight">
              Air Handling Unit Types
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {ahuTypes.map((type, idx) => (
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

      {/* FCU Types */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 tracking-tight">
              Fan Coil Unit Types
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {fcuTypes.map((type, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-8 border border-gray-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{type.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{type.description}</p>
                <div>
                  <p className="font-semibold text-gray-900 text-sm uppercase tracking-wide mb-3">Ideal For:</p>
                  <div className="flex flex-wrap gap-2">
                    {type.applications.map((app, aidx) => (
                      <span key={aidx} className="bg-blue-50 text-blue-700 px-3 py-1 rounded-lg text-sm">
                        {app}
                      </span>
                    ))}
                  </div>
                </div>
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

      {/* Applications */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center tracking-tight">
            Applications
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-2xl p-6 text-center">
              <div className="text-4xl mb-3">🏢</div>
              <h3 className="font-bold text-gray-900">Commercial Buildings</h3>
            </div>
            <div className="bg-white rounded-2xl p-6 text-center">
              <div className="text-4xl mb-3">🏭</div>
              <h3 className="font-bold text-gray-900">Industrial Facilities</h3>
            </div>
            <div className="bg-white rounded-2xl p-6 text-center">
              <div className="text-4xl mb-3">🏥</div>
              <h3 className="font-bold text-gray-900">Healthcare</h3>
            </div>
            <div className="bg-white rounded-2xl p-6 text-center">
              <div className="text-4xl mb-3">🏨</div>
              <h3 className="font-bold text-gray-900">Hospitality</h3>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-blue-900 to-slate-950">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            Need AHU or FCU Systems?
          </h2>
          <p className="text-xl text-white/80 mb-10 leading-relaxed">
            Our engineering team will specify the optimal air handling solution for your project.
          </p>
          <Link
            href="/quote"
            className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold bg-white text-blue-900 hover:bg-gray-100 rounded-xl transition-colors shadow-lg"
          >
            Request AHU/FCU Quote
          </Link>
        </div>
      </section>
    </>
  );
}
