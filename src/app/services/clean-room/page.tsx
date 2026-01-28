import Image from "next/image";
import Link from "next/link";

export default function CleanRoomPage() {
  const features = [
    {
      title: "Lightweight EPS Panels",
      description: "10-14 kg/m² sandwich panels with excellent thermal insulation (0.032 kcal/m·h·°C) for fast installation and superior energy efficiency.",
      icon: "🧱",
    },
    {
      title: "Airtight Door Systems",
      description: "Fully sealed stainless steel and aluminum doors with automatic bottom/top sealing and silicone rubber gaskets to maintain pressure differentials.",
      icon: "🚪",
    },
    {
      title: "Temperature Control ±1-2°C",
      description: "Achieve precise temperature stability of 23-24°C with minimal deviation for sensitive manufacturing processes.",
      icon: "🌡️",
    },
    {
      title: "Humidity Control ±5%",
      description: "Maintain 45-55% relative humidity with tight control for electronics assembly and pharmaceutical production.",
      icon: "💧",
    },
    {
      title: "Fast Construction Cycle",
      description: "Tongue & groove and corrugated interlocking panels enable quick installation with reduced labor costs and project timelines.",
      icon: "⚡",
    },
    {
      title: "Class 10,000 Performance",
      description: "Proven cleanroom performance in large-scale electronics manufacturing with complete contamination control.",
      icon: "✓",
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
    { label: "Cleanroom Class", value: "Class 10,000" },
    { label: "Temperature Control", value: "23-24°C ±1-2°C" },
    { label: "Humidity Control", value: "45-55% ±5%" },
    { label: "Panel Thickness", value: "50-250 mm (various options)" },
    { label: "Panel Weight", value: "10-14 kg/m²" },
    { label: "Thermal Insulation", value: "0.032 kcal/m·h·°C" },
    { label: "Door Sizes", value: "900-1500 mm × 2100 mm" },
    { label: "Wall Widths", value: "950, 1050, 1150 mm effective" },
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
              Complete cleanroom envelope solutions featuring EPS sandwich panels, airtight stainless steel and aluminum doors, and integrated HVAC systems for pharmaceutical, electronics, and medical facilities requiring controlled environments.
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
                Complete Cleanroom Envelope Solutions
              </h2>
              <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
                <p>
                  Our cleanroom systems serve critical pharmaceutical and medical production facilities including tablet/capsule manufacturing, injectable drug production, vaccine labs, IV fluid production, sterile packaging rooms, and medical device assembly. We provide complete airtight enclosures using lightweight EPS sandwich panels (10-14 kg/m²) with excellent thermal insulation.
                </p>
                <p>
                  Delivering Class 10,000 cleanroom performance with precise temperature control (23-24°C ±1-2°C) and humidity management (45-55% ±5%), our systems feature fully airtight stainless steel and aluminum doors with embedded silicone sealing to maintain pressure differentials essential for pharmaceutical and medical manufacturing.
                </p>
                <p>
                  Successfully deployed across pharmaceuticals, medical device production, and large-scale electronics manufacturing including TV production, refrigerator assembly, mobile phone manufacturing, PCB fabrication, and compressor workshops—with projects spanning up to 20,000 sqm workshop areas.
                </p>
              </div>
            </div>
            <div className="space-y-4">
              <div>
                <div className="relative h-64 bg-gray-100 rounded-2xl overflow-hidden">
                  <Image
                    src="/products/cleanroom1.png"
                    alt="Cleanroom Air Shower with Interlocking Airtight Doors"
                    fill
                    className="object-contain"
                  />
                </div>
                <p className="text-sm text-gray-900 font-bold mt-2 text-center">
                  Cleanroom Air Shower with Interlocking Airtight Doors
                </p>
              </div>
              <div>
                <div className="relative h-64 bg-gray-100 rounded-2xl overflow-hidden">
                  <Image
                    src="/products/cleanroom2.jpeg"
                    alt="Cleanroom Air Handling Unit (AHU) / Clean Operating Room HVAC Unit"
                    fill
                    className="object-contain"
                  />
                </div>
                <p className="text-sm text-gray-900 font-bold mt-2 text-center">
                  Cleanroom Air Handling Unit (AHU) / Clean Operating Room HVAC Unit
                </p>
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

      {/* Product Systems */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 tracking-tight">
              Cleanroom System Components
            </h2>
            <p className="text-lg text-gray-600">
              Complete envelope solutions for airtight, controlled environments
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">EPS Sandwich Panels</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Lightweight wall and ceiling panels with polystyrene core and pre-painted steel outer layers.
              </p>
              <ul className="space-y-3 text-gray-700 text-sm">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Thickness: 50-250 mm</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Weight: 10-14 kg/m²</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Widths: 950/1050/1150 mm</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Tongue & groove interlocking</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>High stiffness (L/240 deformation)</span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Stainless Steel Doors</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Fully airtight doors with SUS304 stainless steel construction and embedded silicone sealing.
              </p>
              <ul className="space-y-3 text-gray-700 text-sm">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Sizes: 900-1500 × 2100 mm</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Frame: 1.2-1.5 mm steel/SUS304</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Automatic sealing mechanism</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Single/double/vision panel types</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Wire drawing finish option</span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Aluminum Airtight Doors</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Lightweight magnetic doors with sandblasted aluminum frames and antimicrobial coating.
              </p>
              <ul className="space-y-3 text-gray-700 text-sm">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Sizes: 900-1500 × 2100 mm</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Magnetic bumper pad sealing</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Sandblasted & oxidized frame</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Paper/aluminum honeycomb core</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Automatic up/down sealing</span>
                </li>
              </ul>
            </div>
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
                Industries & Applications
              </h2>
              <div className="bg-white rounded-2xl p-8">
                <p className="text-gray-700 font-semibold mb-4">Pharmaceutical & Medical Production:</p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start text-gray-700">
                    <span className="text-blue-600 mr-3 mt-1">✓</span>
                    <span className="text-lg">Tablet / Capsule Manufacturing</span>
                  </li>
                  <li className="flex items-start text-gray-700">
                    <span className="text-blue-600 mr-3 mt-1">✓</span>
                    <span className="text-lg">Injectable Drug Production</span>
                  </li>
                  <li className="flex items-start text-gray-700">
                    <span className="text-blue-600 mr-3 mt-1">✓</span>
                    <span className="text-lg">Vaccine Production Labs</span>
                  </li>
                  <li className="flex items-start text-gray-700">
                    <span className="text-blue-600 mr-3 mt-1">✓</span>
                    <span className="text-lg">IV Fluid Production</span>
                  </li>
                  <li className="flex items-start text-gray-700">
                    <span className="text-blue-600 mr-3 mt-1">✓</span>
                    <span className="text-lg">Sterile Packaging Rooms</span>
                  </li>
                  <li className="flex items-start text-gray-700">
                    <span className="text-blue-600 mr-3 mt-1">✓</span>
                    <span className="text-lg">Medical Device Assembly</span>
                  </li>
                </ul>
                <p className="text-gray-700 font-semibold mb-4 mt-6">Electronics Manufacturing:</p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start text-gray-700">
                    <span className="text-blue-600 mr-3 mt-1">✓</span>
                    <span className="text-lg">TV Manufacturing Workshop</span>
                  </li>
                  <li className="flex items-start text-gray-700">
                    <span className="text-blue-600 mr-3 mt-1">✓</span>
                    <span className="text-lg">Mobile Phone Manufacturing</span>
                  </li>
                  <li className="flex items-start text-gray-700">
                    <span className="text-blue-600 mr-3 mt-1">✓</span>
                    <span className="text-lg">PCB Fabrication Workshop</span>
                  </li>
                  <li className="flex items-start text-gray-700">
                    <span className="text-blue-600 mr-3 mt-1">✓</span>
                    <span className="text-lg">Refrigerator & Compressor Assembly</span>
                  </li>
                </ul>
                <div className="bg-blue-50 rounded-lg p-4 mt-6">
                  <p className="text-sm text-gray-700">
                    <strong>Project Scale:</strong> Up to 20,000 sqm workshop areas with 1,000 sqm cleanroom zones
                  </p>
                </div>
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
