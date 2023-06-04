import React, { useState } from "react";

const Nav = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="sticky top-0 z-10 bg-teal-700 text-white">
     
      <section
        id="mobile-menu"
        className={`${
          isMobileMenuOpen ? "flex" : "hidden"
        } top-68 justify-content-center absolute w-full origin-top animate-open-menu flex-col bg-black text-5xl`}
      >
        <nav
          className="flex min-h-screen flex-col items-center py-8"
          aria-label="mobile"
        >
          <a href="#hero" className="w-full py-6 text-center hover:opacity-90">
            Home
          </a>
          <a
            href="#rockets"
            className="w-full py-6 text-center hover:opacity-90"
          >
            Our Rockets
          </a>
          <a
            href="#testimonials"
            className="w-full py-6 text-center hover:opacity-90"
          >
            Testimonials
          </a>
          <a
            href="#contact"
            className="w-full py-6 text-center hover:opacity-90"
          >
            Contact Us
          </a>
          <a
            href="#footer"
            className="w-full py-6 text-center hover:opacity-90"
          >
            Legal
          </a>
        </nav>
      </section>
    </header>
  );
};

export default Nav;
