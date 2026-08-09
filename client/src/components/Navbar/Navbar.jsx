import React, { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { motion, AnimatePresence } from "framer-motion";

// Replace with your actual logo image path (e.g., '/assets/logo.png' or imported SVG)
import logoImg from "../../assets/logo.png";

const NavigationBar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Closes mobile menu when a nav link is clicked
  const handleLinkClick = () => {
    setExpanded(false);
  };

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Products", href: "#products" },
    { name: "Gallery", href: "#gallery" },
    { name: "Reviews", href: "#reviews" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <Navbar
      expand="lg"
      fixed="top"
      expanded={expanded}
      className={`custom-nav ${scrolled ? "scrolled" : ""}`}
    >
      <Container>
        {/* Brand Logo & Responsive Name */}
        <Navbar.Brand
          href="#home"
          className="fw-bold d-flex align-items-center gap-2 me-auto me-lg-4"
        >
          {logoImg ? (
            <motion.img
              whileHover={{ rotate: 5, scale: 1.05 }}
              src={logoImg}
              alt="Chennai Medical Logo"
              style={{ width: "40px", height: "40px", objectFit: "contain" }}
              onError={(e) => {
                // Fallback icon if image file isn't found
                e.target.style.display = "none";
                if (e.target.nextSibling) {
                  e.target.nextSibling.style.display = "flex";
                }
              }}
            />
          ) : null}

          {/* Fallback Icon Container */}
          <div
            className="rounded-circle bg-primary text-white align-items-center justify-content-center flex-shrink-0"
            style={{
              width: "40px",
              height: "40px",
              display: logoImg ? "none" : "flex",
            }}
          >
            <i className="bi bi-book-half fs-5"></i>
          </div>

          {/* Responsive Brand Text Container */}
          <div className="d-flex flex-column leading-tight">
            <span
              className="fw-extrabold text-dark lh-1"
              style={{
                fontFamily: "Outfit",
                fontWeight: 800,
                fontSize: "clamp(0.95rem, 2.5vw, 1.2rem)",
                color: "#0F172A",
                letterSpacing: "-0.5px",
                whiteSpace: "normal",
              }}
            >
              CMBC HEALTH CARE & CO
            </span>
            <small
              className="text-muted d-block"
              style={{
                fontSize: "10px",
                letterSpacing: "0.3px",
                fontWeight: 500,
              }}
            >
              Medical Books & Clinical Supplies
            </small>
          </div>
        </Navbar.Brand>

        {/* Animated Toggle Button (Hamburger to X) */}
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          onClick={() => setExpanded(!expanded)}
          className="border-0 shadow-none p-1 ms-2"
        >
          <motion.div
            key={expanded ? "close" : "open"}
            initial={{ rotate: -90, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            exit={{ rotate: 90, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="d-flex align-items-center justify-content-center"
          >
            <i
              className={`bi ${expanded ? "bi-x-lg" : "bi-list"} fs-2 text-dark`}
            ></i>
          </motion.div>
        </Navbar.Toggle>

        {/* Collapsible Nav Links */}
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto align-items-lg-center gap-2 gap-lg-3 py-3 py-lg-0">
            {navLinks.map((link, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Nav.Link
                  href={link.href}
                  onClick={handleLinkClick}
                  className="fw-medium text-dark px-2"
                >
                  {link.name}
                </Nav.Link>
              </motion.div>
            ))}

            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="tel:08124127608"
              onClick={handleLinkClick}
              className="btn btn-gradient text-white ms-lg-2 mt-2 mt-lg-0 d-inline-flex align-items-center justify-content-center"
            >
              <i className="bi bi-telephone-fill me-2"></i>Call Now
            </motion.a>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
