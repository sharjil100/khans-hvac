"use client";

import Link from "next/link";
import { useState } from "react";

export default function CareersPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    position: "",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const positions = [
    "HVAC Engineer",
    "Diploma Engineer",
    "Site Supervisor",
    "HVAC Technician",
    "Duct & Pipe Fabricator",
    "Electrician",
    "Welder & Installer",
    "Other",
  ];

  const roles = [
    {
      title: "HVAC Engineers",
      description: "Design, supervision, and execution of industrial HVAC projects. Work on chillers, AHUs, clean rooms, and central plants for pharma, manufacturing, and commercial facilities.",
      icon: "👷",
    },
    {
      title: "Diploma Engineers",
      description: "On-site project coordination, technical supervision, and installation oversight. Ensure execution matches design specifications and client requirements.",
      icon: "📐",
    },
    {
      title: "Site Supervisors",
      description: "Lead installation teams, manage site activities, coordinate trades, ensure safety compliance, and maintain project schedules on active HVAC sites.",
      icon: "🔧",
    },
    {
      title: "HVAC Technicians",
      description: "Installation, commissioning, maintenance, and troubleshooting of HVAC equipment including chillers, AHUs, FCUs, VRF systems, and controls.",
      icon: "⚙️",
    },
    {
      title: "Duct & Pipe Fabricators",
      description: "Fabrication and installation of HVAC ductwork, refrigerant piping, chilled water piping, and associated supports following project drawings.",
      icon: "🔨",
    },
    {
      title: "Electricians",
      description: "Electrical wiring, panel installation, motor connections, control circuits, and BMS integration for HVAC equipment and systems.",
      icon: "⚡",
    },
    {
      title: "Welders & Installers",
      description: "Welding of piping systems, equipment installation, structural supports, and mechanical assembly for chillers, AHUs, and cooling towers.",
      icon: "🔥",
    },
  ];

  const benefits = [
    {
      title: "Real Industrial Projects",
      description: "Work on pharmaceutical plants, factories, hospitals, and commercial buildings with complex HVAC requirements.",
    },
    {
      title: "Diverse HVAC Systems",
      description: "Gain experience with chillers, AHUs, VRF systems, clean rooms, dehumidification, and central cooling plants.",
    },
    {
      title: "Strong Engineering Team",
      description: "Learn from experienced HVAC engineers and work alongside skilled technicians on challenging installations.",
    },
    {
      title: "Hands-On Field Experience",
      description: "Get extensive site work exposure on long-term projects with quality-focused execution standards.",
    },
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const form = e.currentTarget;
      const formDataToSend = new FormData(form);

      const response = await fetch("/api/careers", {
        method: "POST",
        body: formDataToSend,
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to submit application");
      }

      setStatus("success");
      setFormData({
        fullName: "",
        phone: "",
        email: "",
        position: "",
        message: "",
      });
      form.reset();
    } catch (error) {
      setStatus("error");
      setErrorMessage(error instanceof Error ? error.message : "Something went wrong");
    }
  };

  return (
    <>
      {/* Hero */}
      <section className="relative bg-slate-950 pt-32 pb-16">
        <div className="max-w-6xl mx-auto px-6">
          <Link href="/" className="inline-flex items-center text-blue-400 hover:text-blue-300 mb-6 text-sm font-medium">
            ← Back to Home
          </Link>
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight">
              Build Your Career in Industrial HVAC Engineering
            </h1>
            <p className="text-xl text-white/75 leading-relaxed">
              Khan's Authentic HVAC Systems executes industrial HVAC projects across Bangladesh—from pharmaceutical clean rooms and hospital installations to factory ventilation and commercial chiller plants. We're building a team of skilled HVAC engineers, technicians, and installation professionals who want to work on real industrial systems.
            </p>
          </div>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="text-blue-600 font-semibold tracking-wider uppercase text-sm mb-4 block">
              Why Join Us
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
              Grow Your HVAC Engineering Career
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Work on challenging industrial HVAC projects and develop expertise in complex systems
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {benefits.map((benefit, idx) => (
              <div key={idx} className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed text-lg">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Roles */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
              Roles We Commonly Hire For
            </h2>
            <p className="text-lg text-gray-600">
              From engineering to field installation, we need skilled HVAC professionals
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {roles.map((role, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-8 border border-gray-200 hover:border-blue-600 hover:shadow-xl transition-all duration-300"
              >
                <div className="text-5xl mb-4">{role.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{role.title}</h3>
                <p className="text-gray-600 leading-relaxed">{role.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* No Opening Section */}
      <section className="py-16 bg-white border-y border-gray-200">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Don't See an Opening?</h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            We're always interested in connecting with talented HVAC professionals. Submit your CV below and we'll reach out when a suitable position opens up.
          </p>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-10">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 tracking-tight">
              Submit Your Application
            </h2>
            <p className="text-gray-600">
              Fill out the form below and attach your CV
            </p>
          </div>

          {/* No Openings Notice */}
          <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6 mb-8 text-center">
            <div className="text-4xl mb-3">📋</div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">No Active Openings at This Time</h3>
            <p className="text-gray-700 leading-relaxed">
              We currently have no active vacancies. 
              Wish you all the best!!
            </p>
          </div>

          <div className="relative bg-gray-50 rounded-2xl p-8 md:p-10 border border-gray-200">
            {/* Blur Overlay */}
            <div className="absolute inset-0 bg-white/60 backdrop-blur-sm rounded-2xl z-10 pointer-events-none"></div>
            
            {status === "success" ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Application Submitted!</h3>
                <p className="text-gray-600 mb-8">
                  Thank you for your interest. We'll review your application and get back to you soon.
                </p>
                <button
                  onClick={() => setStatus("idle")}
                  className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition-colors"
                >
                  Submit Another Application
                </button>
              </div>
            ) : (
              <form className="space-y-6 relative z-0 pointer-events-none" onSubmit={handleSubmit}>
              {/* Full Name */}
              <div>
                <label htmlFor="fullName" className="block text-sm font-semibold text-gray-900 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                  disabled
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 outline-none transition-all bg-gray-100 cursor-not-allowed"
                  placeholder="Enter your full name"
                />
              </div>

              {/* Phone & Email */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-gray-900 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    disabled
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 outline-none transition-all bg-gray-100 cursor-not-allowed"
                    placeholder="+880 1XXX-XXXXXX"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-900 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    disabled
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 outline-none transition-all bg-gray-100 cursor-not-allowed"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              {/* Position */}
              <div>
                <label htmlFor="position" className="block text-sm font-semibold text-gray-900 mb-2">
                  Position Applying For *
                </label>
                <select
                  id="position"
                  name="position"
                  value={formData.position}
                  onChange={handleChange}
                  required
                  disabled
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 outline-none transition-all bg-gray-100 cursor-not-allowed"
                >
                  <option value="">Select a position</option>
                  {positions.map((pos, idx) => (
                    <option key={idx} value={pos}>
                      {pos}
                    </option>
                  ))}
                </select>
              </div>

              {/* CV Upload */}
              <div>
                <label htmlFor="cv" className="block text-sm font-semibold text-gray-900 mb-2">
                  Upload CV *
                </label>
                <input
                  type="file"
                  id="cv"
                  name="cv"
                  accept=".pdf,.doc,.docx"
                  required
                  disabled
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 outline-none transition-all bg-gray-100 cursor-not-allowed file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:bg-gray-400 file:text-white file:font-semibold file:cursor-not-allowed"
                />
                <p className="text-sm text-gray-500 mt-2">PDF, DOC, or DOCX (Max 5MB)</p>
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-900 mb-2">
                  Cover Letter / Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  disabled
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 outline-none transition-all resize-none bg-gray-100 cursor-not-allowed"
                  placeholder="Tell us about your HVAC experience and why you want to join our team..."
                />
              </div>

              {/* Error Message */}
              {status === "error" && (
                <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                  <p className="text-red-800 text-sm">{errorMessage}</p>
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={status === "loading"}
                className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed text-white font-semibold py-4 rounded-xl transition-colors text-lg"
              >
                {status === "loading" ? "Submitting..." : "Submit Application"}
              </button>
            </form>
            )}
          </div>
        </div>
      </section>

      {/* Closing Statement */}
      <section className="py-20 bg-gradient-to-br from-blue-900 to-slate-950">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight leading-tight">
            Great HVAC Systems Are Built by Skilled Engineers and Technicians
          </h2>
          <p className="text-xl text-white/80 leading-relaxed">
            Join our team and build systems that power industries across Bangladesh.
          </p>
        </div>
      </section>
    </>
  );
}
