import Link from "next/link";
import Image from "next/image";

export function Footer() {
  const services = [
    "Industrial HVAC Systems",
    "Clean Room Solutions",
    "Chiller Systems",
    "AHU & FCU Systems",
    "Dehumidification",
    "VRF Systems",
  ];

  const industries = [
    "Pharmaceutical",
    "Manufacturing",
    "Healthcare",
    "Data Centers",
    "Food Processing",
    "Automotive",
  ];

  const company = [
    { name: "About Us", href: "/#about" },
    { name: "Our Projects", href: "/projects" },
    { name: "Certifications", href: "#certifications" },
    { name: "Careers", href: "/careers" },
  ];

  return (
    <footer className="bg-dark text-white/75">
      {/* Main Footer */}
      <div className="max-w-6xl mx-auto px-6 py-8 lg:py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <Image
                src="/logo.svg"
                alt="Khan's HVAC Logo"
                width={48}
                height={48}
                className="object-contain"
              />
              <div className="flex flex-col">
                <span className="font-bold text-xl text-white tracking-tight">
                  KHAN'S Authentic HVAC Systems
                </span>
                <span className="text-xs tracking-wider text-white/55">
                  Complete Air-Conditioning Solution
                </span>
              </div>
            </div>
            <p className="text-white/75 mb-4 leading-relaxed max-w-md">
              Leading provider of industrial and commercial HVAC solutions.
              Specializing in end-to-end design, installation, and commissioning
              of advanced climate control systems.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.linkedin.com/company/khans-hvac/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 hover:bg-blue-600 flex items-center justify-center transition-colors"
              >
                <span className="sr-only">LinkedIn</span>
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-bold text-sm tracking-wider mb-4 uppercase">
              Services
            </h4>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service}>
                  <Link
                    href="#services"
                    className="text-white/70 hover:text-white transition-colors text-sm"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h4 className="text-white font-bold text-sm tracking-wider mb-4 uppercase">
              Industries
            </h4>
            <ul className="space-y-2">
              {industries.map((industry) => (
                <li key={industry}>
                  <Link
                    href="#industries"
                    className="text-white/70 hover:text-white transition-colors text-sm"
                  >
                    {industry}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-bold text-sm tracking-wider mb-4 uppercase">
              Company
            </h4>
            <ul className="space-y-2">
              {company.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-white/70 hover:text-white transition-colors text-sm"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-5">
              <h4 className="text-white font-bold text-sm tracking-wider mb-4 uppercase">
                Contact
              </h4>
              <p className="text-white/70 text-sm">
                Email: contact@khanshvac.com
                <br />
                Phone: +880 1743833916
                <br />
                Phone: +880 1756785842
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-white/55 text-sm">
              © {new Date().getFullYear()} Khan's HVAC Solutions. All rights
              reserved.
            </p>
            <div className="flex space-x-6">
              <Link
                href="#"
                className="text-white/55 hover:text-white/75 text-sm transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="#"
                className="text-white/55 hover:text-white/75 text-sm transition-colors"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
