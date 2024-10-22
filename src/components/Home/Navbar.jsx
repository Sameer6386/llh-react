import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const toggleNavbar = () => {
    setNavbarOpen(!navbarOpen);
  };
  // Handle scroll behavior to show/hide the top navbar
  const handleScroll = () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > lastScrollY) {
      // If scrolling down, hide the navbar
      setShowNavbar(false);
    } else {
      // If scrolling up, show the navbar
      setShowNavbar(true);
    }
    setLastScrollY(currentScrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <>
      <div
        className={`header fixed z-[999] top-0 bg-white w-full shadow-xl
                    
                    transition-transform duration-500 ${
                      showNavbar ? "translate-y-0" : "-translate-y-full"
                    }`}
      >
        <div className="nav h-32 w-full px-8 py-6">
          <div className="hidden nav1 px-20 md:flex gap-4 justify-end">
            <Link className="text-md" to="/about">
              About Us
            </Link>
            <Link className="text-md" to="/contact">
              Contact Us
            </Link>
            <Link className="text-md" to="/login">
              Login/Signup
            </Link>
          </div>

          {/* Main navigation for large screens */}
          <div className="hidden nav2 md:flex items-center justify-evenly">
            <Link className="text-5xl font-bold text-[#4F185A]" to="/">
              LHH
            </Link>
            <Link className="text-lg" to="/search">
              Search Jobs
            </Link>
            <Link className="text-lg" to="/find">
              Find Great Talent
            </Link>
            <Link className="text-lg" to="/join">
              Join Us
            </Link>
            <Link className="text-lg" to="/solution">
              Solutions
            </Link>
            <Link className="text-lg" to="/about">
              Our Expertise
            </Link>
          </div>

          {/* Button to toggle sidebar on mobile */}
          <div className="md:hidden flex justify-between">
            <h1 className="text-6xl font-bold text-purple-900">LHH</h1>
            <button onClick={toggleNavbar}>{navbarOpen ? "" : "OPEN"}</button>
          </div>
        </div>
      </div>

      {/* Sidebar for mobile */}
      <div
        className={`fixed top-0 left-0 h-full z-[999] bg-white shadow-lg w-[100%] transform transition-transform duration-500 ${
          navbarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-6 flex flex-col h-full justify-between">
          <div>
            <div className="flex justify-between  ">
              <Link
                className="text-5xl font-bold text-[#4F185A] mb-8 block"
                to="/"
                onClick={toggleNavbar}
              >
                LHH
              </Link>
              <button onClick={toggleNavbar}>
                {navbarOpen ? "CLOSE" : "OPEN"}
              </button>
            </div>

            <div className="flex  flex-col gap-20">
              <Link className="text-3xl" to="/search" onClick={toggleNavbar}>
                Search Jobs
              </Link>
              <Link className="text-3xl" to="/find" onClick={toggleNavbar}>
                Find Great Talent
              </Link>
              <Link className="text-3xl" to="/join" onClick={toggleNavbar}>
                Join Us
              </Link>
              <Link className="text-3xl" to="/solution" onClick={toggleNavbar}>
                Solutions
              </Link>
              <Link className="text-3xl" to="/about" onClick={toggleNavbar}>
                Our Expertise
              </Link>
            </div>
          </div>

          <div className="border-t mt-6 pt-4 ">
            <div className="flex flex-col mb-20 gap-20">
              <Link className="text-2xl" to="/about" onClick={toggleNavbar}>
                About Us
              </Link>
              <Link className="text-2xl" to="/contact" onClick={toggleNavbar}>
                Contact Us
              </Link>
              <Link className="text-2xl" to="/login" onClick={toggleNavbar}>
                Login/Signup
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Overlay to close the sidebar */}
      {navbarOpen && (
        <div
          className="fixed inset-0 z-[998] bg-black opacity-50"
          onClick={toggleNavbar}
        ></div>
      )}
    </>
  );
};

export default Navbar;
