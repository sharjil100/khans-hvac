import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Our Team | Khan's HVAC Solutions",
  description: "Meet the leadership team behind Khan's HVAC Solutions - experts in industrial and commercial HVAC systems.",
};

export default function TeamPage() {
  const teamMembers = [
    {
      name: "Kamrul Islam Khan",
      role: "CEO & Director",
      image: "/team/kamrul-khan.jpg",
      contacts: [
        { type: "phone", value: "+880 1743-833916" },
        { type: "phone", value: "+880 1716-949906" },
      ],
    },
    {
      name: "Golam G Johnny",
      role: "International Marketing Manager (IIM)",
      image: "/team/golam-johnny.jpg",
      contacts: [
        { type: "location", label: "UK", value: "23 Vickers Way, Chester, CH4 0FX" },
        { type: "phone", label: "UK", value: "+447596699868" },
        { type: "phone", label: "Morocco", value: "+212 (0) 6 75 63 01 85" },
        { type: "phone", label: "Bangladesh", value: "+8801818733575" },
      ],
    },
    {
      name: "Sharjil Khan",
      role: "Head of Sales & International Relations",
      image: "/team/sharjil-khan.jpg",
      contacts: [
        { type: "phone", value: "+880 1756-785842" },
      ],
    },
    {
      name: "Nizam-ul Alam Shimanto",
      role: "Sales & Marketing Executive",
      image: "/team/nizam-shimanto.jpg",
      contacts: [
        { type: "phone", value: "+880 1313-321419" },
      ],
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 pt-24 md:pt-32 pb-16 md:pb-20">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent" />
        
        <div className="relative max-w-6xl mx-auto px-4 md:px-6">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium tracking-widest text-white/70 uppercase mb-6">
              Our Leadership
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Meet Our Team
            </h1>
            <p className="text-lg md:text-xl text-white/75 max-w-3xl mx-auto">
              Dedicated professionals with decades of combined experience in HVAC engineering and industrial climate control solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Team Members Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-2xl overflow-hidden border border-gray-200 hover:border-blue-300 transition-all duration-300 hover:shadow-xl"
              >
                {/* Image Container */}
                <div className="relative aspect-[4/5] bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden">
                  {/* Placeholder until actual images are added */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-32 h-32 rounded-full bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center">
                      <span className="text-5xl font-bold text-white">
                        {member.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                  </div>
                  
                  {/* Uncomment when images are available */}
                  {/* <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  /> */}
                  
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-slate-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Info Container */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 text-center">
                    {member.name}
                  </h3>
                  <p className="text-sm font-medium text-blue-600 mb-4 text-center">
                    {member.role}
                  </p>
                  
                  {/* Contact Information */}
                  {member.contacts && member.contacts.length > 0 && (
                    <div className="mt-4 pt-4 border-t border-gray-200 space-y-2">
                      {member.contacts.map((contact, idx) => (
                        <div key={idx} className="text-sm text-gray-700">
                          {contact.type === 'location' ? (
                            <div>
                              {contact.label && <span className="font-semibold text-gray-900">{contact.label}: </span>}
                              <span className="text-gray-600">{contact.value}</span>
                            </div>
                          ) : (
                            <div className="flex items-center gap-2">
                              <svg className="w-4 h-4 text-blue-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                              </svg>
                              <a href={`tel:${contact.value.replace(/[^0-9+]/g, '')}`} className="hover:text-blue-600 transition-colors">
                                {contact.label && <span className="font-semibold text-gray-900">{contact.label}: </span>}
                                {contact.value}
                              </a>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="mt-16 md:mt-20 text-center">
            <div className="inline-flex flex-col sm:flex-row gap-4">
              <Link
                href="/careers"
                className="inline-flex items-center justify-center px-8 py-3.5 text-sm font-semibold bg-blue-600 text-white hover:bg-blue-700 rounded-xl transition-colors shadow-lg"
              >
                Join Our Team
              </Link>
              <Link
                href="/quote"
                className="inline-flex items-center justify-center px-8 py-3.5 text-sm font-semibold border-2 border-gray-300 text-gray-700 hover:border-blue-600 hover:text-blue-600 rounded-xl transition-colors"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Values
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The principles that guide our team and drive our commitment to excellence.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Excellence", description: "Delivering superior HVAC solutions" },
              { title: "Integrity", description: "Honest and transparent business practices" },
              { title: "Innovation", description: "Cutting-edge climate control technology" },
              { title: "Commitment", description: "Dedicated to client success" },
            ].map((value, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-lg bg-blue-600 flex items-center justify-center mb-4">
                  <span className="text-2xl text-white leading-none flex items-center justify-center">✓</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{value.title}</h3>
                <p className="text-sm text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
