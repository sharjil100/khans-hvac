import Image from "next/image";
import Link from "next/link";

export default function AHUFCUPage() {
  const features = [
    {
      title: "European Standard Double Skin Construction",
      description: "Anti-cold bridge aluminum frame with double skin fire-resistant polyurethane insulation panels (25-100mm). EN1886 compliant, 1000 Pa leakage test rated.",
      icon: "🏗️",
    },
    {
      title: "30+ Years Patented Technology",
      description: "Thermal bridge-free design with anti-condensation structure. Galvanized steel, color steel, or stainless steel panel options.",
      icon: "🔬",
    },
    {
      title: "Multi-Stage Cleanroom Filtration",
      description: "G2-G4 primary, F5-F9 bag filters, H10-H13 HEPA capability. Optional activated carbon and self-cleaning filters for pharmaceutical and electronics applications.",
      icon: "🔬",
    },
    {
      title: "High-Efficiency Double Inlet Fans",
      description: "Dynamically balanced centrifugal fans with steel frame assembly. Belt driven for easy maintenance. Low noise, high airflow reliability.",
      icon: "🌀",
    },
    {
      title: "Advanced Coil Technology",
      description: "Copper tube + aluminum fin heat exchangers with stainless steel option. Supports chilled water, steam heating, and DX refrigerant coils. Freeze protection with alarm.",
      icon: "❄️",
    },
    {
      title: "Integrated Humidification Systems",
      description: "Dry steam humidifier (stainless steel, precise control) or electrode humidifier for <100 kg/h capacity. Uniform distribution with horizontal/vertical mounting.",
      icon: "💧",
    },
    {
      title: "DDC/PLC Intelligent Control",
      description: "Optional VFD cabinet, soft starter, or intelligent DDC/PLC control systems. IP55 Class F motors (380V/3P/50Hz) with >95% vibration damping.",
      icon: "🎛️",
    },
    {
      title: "Inspection & Maintenance Access",
      description: "2000 Pa rated inspection windows with 24V waterproof service lights. Access doors with sealing for positive/negative pressure sections.",
      icon: "🔧",
    },
  ];

  const ahuTypes = [
    {
      title: "Type A – Negative Pressure Configuration",
      capacity: "Fan at end, most sections under negative pressure",
      features: [
        "High purification demand applications",
        "Pharmaceutical manufacturing",
        "Cleanroom operating rooms",
        "Prevents contamination spread",
      ],
    },
    {
      title: "Type B – Positive Pressure Coil Section",
      capacity: "Fan before coil, coils in positive pressure",
      features: [
        "Protects coils from contamination",
        "Medical facilities",
        "Biological laboratories",
        "Extended coil life",
      ],
    },
    {
      title: "Type C – Fan in Middle (Balanced)",
      capacity: "Balanced pressure design for wide application",
      features: [
        "Most common purification AC layout",
        "Electronics manufacturing",
        "Tobacco industry facilities",
        "Optimal pressure control",
      ],
    },
    {
      title: "Type D – Supply & Return Combined",
      capacity: "Double fan system for standard applications",
      features: [
        "Non-strict purification processes",
        "Commercial cleanrooms",
        "Industrial air conditioning",
        "Cost-effective solution",
      ],
    },
  ];

  const flhsModels = [
    {
      model: "FLHS-7HP",
      airflow: "3,500 m³/h",
      cooling: "18 kW",
      heating: "9 kW",
      humidifying: "6 kg/h",
      fanPower: "2.2 kW",
    },
    {
      model: "FLHS-10HP",
      airflow: "5,000 m³/h",
      cooling: "28 kW",
      heating: "16 kW",
      humidifying: "10 kg/h",
      fanPower: "3 kW",
    },
    {
      model: "FLHS-15HP",
      airflow: "8,000 m³/h",
      cooling: "36 kW",
      heating: "21 kW",
      humidifying: "12 kg/h",
      fanPower: "4 kW",
    },
    {
      model: "FLHS-20HP",
      airflow: "10,000 m³/h",
      cooling: "53 kW",
      heating: "27 kW",
      humidifying: "16 kg/h",
      fanPower: "5.5 kW",
    },
  ];

  const fcuComponents = [
    {
      title: "Coil Section (Water/DX)",
      description: "Copper tube + aluminum fin with stainless steel option. Flanged connections, freeze protection, antifreeze alarm integration.",
      applications: ["Chilled Water", "Steam Heating", "Direct Expansion"],
    },
    {
      title: "Motor & Fan Assembly",
      description: "IP55 Class F fully enclosed 3-phase motors with centrifugal fans. VFD compatible, >95% vibration damping, European pulleys.",
      applications: ["Low Noise", "High Efficiency", "Easy Maintenance"],
    },
    {
      title: "Multi-Stage Filtration",
      description: "G2-G4 primary, F5-F9 medium efficiency bag filters, H10-H13 sub-HEPA. Activated carbon and self-cleaning options.",
      applications: ["Cleanrooms", "Laboratories", "Medical Facilities"],
    },
    {
      title: "Air Volume Control Dampers",
      description: "Aluminum opposed blade dampers with low torque ABS gears. Manual or actuator operated with rubber edge sealing.",
      applications: ["Precise Airflow", "Zone Control", "Tight Sealing"],
    },
  ];

  const specifications = [
    { label: "Airflow Range", value: "2,000 to 200,000 m³/h" },
    { label: "FLHS Series Range", value: "3,500 to 10,000 m³/h" },
    { label: "Operating Temperature", value: "18°C to 26°C (cleanroom standard)" },
    { label: "Operating Humidity", value: "55% ±5%" },
    { label: "Panel Thickness", value: "25 to 100 mm (fire-resistant PU)" },
    { label: "Filtration Stages", value: "G2-G4, F5-F9, H10-H13 HEPA" },
    { label: "Pressure Rating", value: "1000 Pa leakage test (EN1886)" },
    { label: "Motor Standard", value: "IP55 Class F, 380V/3P/50Hz" },
    { label: "Humidification", value: "6 to 16 kg/h (up to 100 kg/h electrode)" },
    { label: "Control Options", value: "Manual, VFD, DDC/PLC" },
    { label: "Frame Material", value: "Aluminum alloy anti-cold bridge" },
    { label: "Coil Types", value: "Water cooling, Steam heating, DX refrigerant" },
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
              Clean Room AHU & FCU Systems
            </h1>
            <p className="text-xl text-white/75">
              Pharmaceutical-grade Air Handling Units with European EN1886 standard construction. 30+ years of patented technology for cleanroom purification in medical, pharmaceutical, electronics, and biological applications.
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
                Full-Function Purification Air Handling
              </h2>
              <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
                <p>
                  Our Clean Room AHU systems perform complete air conditioning: cooling, heating, dehumidification, humidification, multi-stage filtration, and air purification — specifically engineered for pharmaceutical manufacturing, clean operating rooms, electronics fabrication, and biological laboratories.
                </p>
                <p>
                  These are not comfort AHUs. They are European-standard cleanroom purification units with double skin fire-resistant polyurethane panels (25-100mm), anti-cold bridge aluminum frames, and EN1886 compliance with 1000 Pa leakage testing.
                </p>
                <p>
                  Modular section design allows flexible configuration with H13 HEPA filtration, integrated humidification, chilled water/steam/DX coils, and intelligent DDC/PLC control — handling airflows from 2,000 to 200,000 m³/h with pharmaceutical-grade construction quality.
                </p>
              </div>
            </div>
            <div className="relative h-96 bg-gray-200 rounded-2xl overflow-hidden">
              <Image
                src="/products/Ahu1.png"
                alt="Industrial Clean Room Air Handling Unit"
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
              Industrial Cleanroom Engineering
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              EN1886 compliant construction with 30+ years patented technology
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
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
              AHU Configuration Types for Cleanroom Applications
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Four standard pressure arrangements for pharmaceutical, medical, and electronics facilities
            </p>
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

      {/* FCU Components */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 tracking-tight">
              FCU Modular Components
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Same industrial-grade modules used in both AHU and FCU construction
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {fcuComponents.map((type, idx) => (
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

      {/* FLHS Series Models */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 tracking-tight">
              FLHS Series Cleanroom AHU Models
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Complete air conditioning with cooling, heating, dehumidification, humidification, and filtration
            </p>
          </div>

          <div className="bg-gray-50 rounded-2xl p-8 overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-gray-300">
                  <th className="text-left py-4 px-4 font-bold text-gray-900">Model</th>
                  <th className="text-left py-4 px-4 font-bold text-gray-900">Airflow</th>
                  <th className="text-left py-4 px-4 font-bold text-gray-900">Cooling</th>
                  <th className="text-left py-4 px-4 font-bold text-gray-900">Heating</th>
                  <th className="text-left py-4 px-4 font-bold text-gray-900">Humidifying</th>
                  <th className="text-left py-4 px-4 font-bold text-gray-900">Fan Power</th>
                </tr>
              </thead>
              <tbody>
                {flhsModels.map((model, idx) => (
                  <tr key={idx} className="border-b border-gray-200">
                    <td className="py-4 px-4 font-semibold text-blue-600">{model.model}</td>
                    <td className="py-4 px-4 text-gray-700">{model.airflow}</td>
                    <td className="py-4 px-4 text-gray-700">{model.cooling}</td>
                    <td className="py-4 px-4 text-gray-700">{model.heating}</td>
                    <td className="py-4 px-4 text-gray-700">{model.humidifying}</td>
                    <td className="py-4 px-4 text-gray-700">{model.fanPower}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p className="text-sm text-gray-600 mt-6">
              Operating Conditions: 18–26°C, 55% ±5% RH | Refrigerant: R22 | Voltage: 380V 3-Phase
            </p>
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
            European Standard Clean Room Equipment — Pharmaceutical Grade AHU Systems
          </p>
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

      {/* Applications */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center tracking-tight">
            Cleanroom & Purification Applications
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gray-50 rounded-2xl p-6 text-center">
              <div className="text-4xl mb-3">💊</div>
              <h3 className="font-bold text-gray-900">Pharmaceutical Manufacturing</h3>
            </div>
            <div className="bg-gray-50 rounded-2xl p-6 text-center">
              <div className="text-4xl mb-3">🏭</div>
              <h3 className="font-bold text-gray-900">Clean Operating Rooms</h3>
            </div>
            <div className="bg-gray-50 rounded-2xl p-6 text-center">
              <div className="text-4xl mb-3">⚡</div>
              <h3 className="font-bold text-gray-900">Electronics Fabrication</h3>
            </div>
            <div className="bg-gray-50 rounded-2xl p-6 text-center">
              <div className="text-4xl mb-3">🧬</div>
              <h3 className="font-bold text-gray-900">Biological Laboratories</h3>
            </div>
            <div className="bg-gray-50 rounded-2xl p-6 text-center">
              <div className="text-4xl mb-3">🍃</div>
              <h3 className="font-bold text-gray-900">Tobacco Industry</h3>
            </div>
            <div className="bg-gray-50 rounded-2xl p-6 text-center">
              <div className="text-4xl mb-3">🏛️</div>
              <h3 className="font-bold text-gray-900">Medical Facilities</h3>
            </div>
            <div className="bg-gray-50 rounded-2xl p-6 text-center">
              <div className="text-4xl mb-3">🔬</div>
              <h3 className="font-bold text-gray-900">Research Institutions</h3>
            </div>
            <div className="bg-gray-50 rounded-2xl p-6 text-center">
              <div className="text-4xl mb-3">🏭</div>
              <h3 className="font-bold text-gray-900">Industrial Cleanrooms</h3>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-blue-900 to-slate-950">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            Need Cleanroom AHU Systems?
          </h2>
          <p className="text-xl text-white/80 mb-10 leading-relaxed">
            Our engineers will design pharmaceutical-grade AHU solutions for your cleanroom, medical facility, or electronics manufacturing application.
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
