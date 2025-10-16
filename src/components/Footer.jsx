import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhoneAlt,
} from "react-icons/fa";

const quickLinks = [
  { label: "Home", url: "/" },
  { label: "Services", url: "/services" },
  { label: "Free Consultation", url: "/consultation" },
  { label: "FAQs", url: "/faqs" },
  { label: "Portfolio", url: "/portfolio" },
  { label: "About Us", url: "/about" },
  { label: "Privacy Policy", url: "/privacy" },
  { label: "Terms & Conditions", url: "/terms" },
];

const services = [
  "Website Development",
  "Web App Development",
  "PWA Development",
  "Android Development",
  "IOS Development",
  "Digital Marketing",
  "Graphic Designing",
  "Video Editing",
  "Promotional Videos",
];

const socials = [
  { icon: <FaFacebookF />, url: "#" },
  { icon: <FaInstagram />, url: "#" },
  { icon: <FaLinkedinIn />, url: "#" },
  { icon: <FaYoutube />, url: "#" },
];

const contactInfo = [
  {
    icon: <FaMapMarkerAlt className="text-yellow-400" />,
    text: "Aligarh, Uttar Pradesh, India",
  },
  {
    icon: <FaEnvelope className="text-yellow-400" />,
    text: "novacoders007@gmail.com",
    link: "mailto:novacoders007@gmail.com",
  },
  {
    icon: <FaPhoneAlt className="text-yellow-400" />,
    text: "+91 6397973513",
    link: "tel:+916397973513",
  },
];

const Footer = () => (
  <div className="relative">

    <footer
      className="w-full bg-slate-900 text-slate-200 rounded-t-4xl relative"
      style={{ borderTop: "5px solid #67e8f9" }}
    >

      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-cyan-300">
          {/* Brand */}
          <div className="space-y-3">
            <Link to="/" className="flex items-center ">
              <img
                className="h-20"
                src="/logo.png"
                alt="Nova Coders logo"
              />
              <span className="text-2xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-sky-400 to-emerald-300">
                Nova Coders
              </span>
            </Link>
            <p className="text-sm text-slate-400">
              A student-driven tech community empowering learners to explore
              cutting-edge technologies through collaboration and projects.
            </p>

            <div className="flex items-center gap-2">
              {socials.map(({ icon, url }, idx) => (
                <a
                  key={idx}
                  href={url}
                  aria-label={`Follow us on social ${idx + 1}`}
                  className="bg-transparent border border-cyan-400 rounded-lg p-2 text-white hover:bg-cyan-400 hover:text-black transition text-2xl"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
            <ul className="space-y-2 text-sm text-slate-300">
              {quickLinks.map((link) => (
                <li key={link.url}>
                  <Link
                    to={link.url}
                    className="hover:text-emerald-400 transition"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-2">Services</h3>
            <ul className="grid grid-cols-1 gap-2 text-sm text-slate-300">
              {services.map((s) => (
                <li
                  key={s}
                  className="before:content-['•'] before:mr-2 before:text-emerald-400 "
                >
                  {s}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact / Newsletter */}
          <div className="space-y-3">
            <h3 className="text-lg font-semibold mb-2">Contact</h3>
            <ul className="space-y-2 text-sm text-slate-300">
              {contactInfo.map((item, idx) => (
                <li key={idx} className="flex items-center gap-3">
                  <div className="text-amber-400 bg-transparent border border-cyan-400 rounded-lg text-2xl p-2">
                    {item.icon}
                  </div>
                  {item.link ? (
                    <a
                      href={item.link}
                      className="hover:text-emerald-400 break-words"
                    >
                      {item.text}
                    </a>
                  ) : (
                    <span className="text-slate-300">{item.text}</span>
                  )}
                </li>
              ))}
            </ul>

            <div>
              <h4 className="text-sm font-medium text-slate-300 mb-2">
                Subscribe to our newsletter
              </h4>
              <form
                onSubmit={(e) => e.preventDefault()}
                className="flex gap-2"
                aria-label="Subscribe"
              >
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="flex-1 rounded-md bg-slate-800 border border-slate-700 px-3 py-2 text-sm placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-400"
                  aria-label="Email address"
                />
                <button
                  type="submit"
                  className="px-4 py-2 bg-emerald-500 text-slate-900 rounded-md text-sm font-medium hover:bg-emerald-600 transition"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-slate-800 text-center text-sm text-slate-400">
          <div>
            &copy; {new Date().getFullYear()} Nova Coders. All rights reserved.
          </div>
          <div className="mt-1">
            <Link to="/privacy" className="mx-2 hover:text-emerald-400">
              Privacy
            </Link>
            |
            <Link to="/terms" className="mx-2 hover:text-emerald-400">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  </div>
);

export default Footer;

{
  /* Your Content/Components */
}
