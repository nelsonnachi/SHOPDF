import React from "react";
import { Link } from "react-router-dom";
import { FaInstagram, FaFacebook, FaPhone, FaMapPin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";

const Footer = () => {
  const footerLinks = [
    { title: "Shop", links: ["Men", "Women", "New"] },
    { title: "Support", links: ["Shipping", "Returns", "FAQs"] },
    { title: "Company", links: ["About", "Careers", "Terms"] },
  ];

  const socialIcons = [
    { icon: <FaFacebook />, path: "#" },
    { icon: <FaInstagram />, path: "#" },
    { icon: <FaTwitter />, path: "#" },
  ];

  return (
    <footer className="bg-[#fafaf9] pt-16 pb-12 border-t border-gray-100">
      <div className="container mx-auto max-w-300 px-6">
        {/* Mobile View: Logo and Bio first */}
        <div className="flex flex-col items-center text-center lg:items-start lg:text-left mb-12">
          <Link
            to="/"
            className="font-poppins text-3xl font-black text-text-dark tracking-tighter uppercase mb-4"
          >
            <div className="shrink-0">
              <span className="text-primary">SHOP</span>PFD
              
            </div>
          </Link>
          <p className="text-text-light text-sm leading-relaxed max-w-xs">
            Premium quality essentials for the modern lifestyle.
          </p>
        </div>

        {/* The "App-Style" Grid: 2 columns on mobile, 4 columns on desktop */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-10 gap-x-4 mb-16">
          {footerLinks.map((section) => (
            <div key={section.title} className="group">
              <h4 className="text-[11px] font-bold uppercase tracking-[0.2em] text-text-dark/50 mb-5">
                {section.title}
              </h4>
              <ul className="space-y-3">
                {section.links.map((item) => (
                  <li key={item}>
                    <Link
                      to={`/${item.toLowerCase().replace(" ", "-")}`}
                      className="text-text-dark text-sm font-medium hover:text-primary transition-all"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Socials as the 4th column on mobile too */}
          <div>
            <h4 className="text-[11px] font-bold uppercase tracking-[0.2em] text-text-dark/50 mb-5">
              Follow Us
            </h4>
            <div className="flex gap-3">
              {socialIcons.map((social, i) => (
                <Link
                  key={i}
                  href={social.path}
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-extra-light text-text-dark hover:bg-primary hover:text-white transition-all"
                >
                  {social.icon}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Utility Bar */}
        <div className="pt-8 border-t border-gray-50 flex flex-col-reverse md:flex-row justify-between items-center gap-6">
          <p className="text-text-light text-[11px] font-medium uppercase tracking-widest">
            © {new Date().getFullYear()} MYLOGO
          </p>

          <div className="flex gap-8">
            <div className="flex items-center gap-2 text-[11px] font-bold text-text-dark uppercase">
              <FaMapPin className="text-primary" />
              <span>NG</span>
            </div>
            <div className="flex items-center gap-2 text-[11px] font-bold text-text-dark uppercase">
              <FaPhone className="text-primary" />
              <span>Contact</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
