import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';

// Replace with your actual logo image path if available
import logoImg from '../../assets/logo.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#about' },
    { name: 'Featured Books', href: '#products' },
    { name: 'Store Gallery', href: '#gallery' },
    { name: 'Customer Reviews', href: '#reviews' },
    { name: 'Contact Us', href: '#contact' },
  ];

  const categories = [
    { name: 'MBBS Textbooks', href: '#products' },
    { name: 'Nursing & B.Sc Guides', href: '#products' },
    { name: 'Pharmacy & D.Pharm', href: '#products' },
    { name: 'Lab Records & Stationery', href: '#products' },
    { name: 'Medical Models & Kits', href: '#products' },
  ];

  return (
    <footer className="footer-section pt-5 pb-3 mt-5 position-relative">
      <Container>
        {/* Main Footer Glass Card */}
        <div className="glass-card p-4 p-md-5 mb-4">
          <Row className="gy-4 gy-lg-0">
            {/* Column 1: Brand Info & Socials */}
            <Col lg={4} md={6}>
              <div className="d-flex align-items-center gap-2 mb-3">
                {logoImg ? (
                  <img 
                    src={logoImg} 
                    alt="Chennai Medical Logo" 
                    style={{ width: '42px', height: '42px', objectFit: 'contain' }}
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                ) : null}
                <div 
                  className="rounded-circle bg-primary text-white align-items-center justify-content-center" 
                  style={{ width: '42px', height: '42px', display: logoImg ? 'none' : 'flex' }}
                >
                  <i className="bi bi-book-half fs-5"></i>
                </div>
                <span className="fw-bold text-dark fs-5" style={{ fontFamily: 'Outfit', letterSpacing: '-0.5px' }}>
                  CMBC Health Care & Co
                </span>
              </div>

              <p className="text-muted fs-6 mb-4" style={{ lineHeight: '1.6' }}>
                Your premier source for high-quality medical, nursing, and pharmacy textbooks, lab essentials, and academic stationery in Chrompet, Chennai.
              </p>

              <div className="d-flex gap-2">
                <motion.a 
                  whileHover={{ y: -3, scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="https://wa.me/918056095445" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="social-btn btn-whatsapp"
                  aria-label="WhatsApp"
                >
                  <i className="bi bi-whatsapp fs-5"></i>
                </motion.a>
                <motion.a 
                  whileHover={{ y: -3, scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="https://maps.app.goo.gl/EAPxvuCthTuTS1m9A" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="social-btn btn-location"
                  aria-label="Google Maps Location"
                >
                  <i className="bi bi-geo-alt-fill fs-5"></i>
                </motion.a>
                <motion.a 
                  whileHover={{ y: -3, scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="tel:08124127608" 
                  className="social-btn btn-phone"
                  aria-label="Phone Call"
                >
                  <i className="bi bi-telephone-fill fs-5"></i>
                </motion.a>
              </div>
            </Col>

            {/* Column 2: Quick Links */}
            <Col lg={2} md={6} sm={6}>
              <h6 className="fw-bold text-dark mb-3 font-heading text-uppercase tracking-wider">
                Quick Links
              </h6>
              <ul className="list-unstyled footer-links mb-0">
                {quickLinks.map((link, idx) => (
                  <li key={idx} className="mb-2">
                    <a href={link.href} className="text-muted text-decoration-none">
                      <i className="bi bi-chevron-right me-1 small text-primary"></i>
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </Col>

            {/* Column 3: Book Categories */}
            <Col lg={3} md={6} sm={6}>
              <h6 className="fw-bold text-dark mb-3 font-heading text-uppercase tracking-wider">
                Categories
              </h6>
              <ul className="list-unstyled footer-links mb-0">
                {categories.map((cat, idx) => (
                  <li key={idx} className="mb-2">
                    <a href={cat.href} className="text-muted text-decoration-none">
                      <i className="bi bi-bookmark-fill me-1 small text-primary opacity-75"></i>
                      {cat.name}
                    </a>
                  </li>
                ))}
              </ul>
            </Col>

            {/* Column 4: Store Info & Working Hours */}
            <Col lg={3} md={6}>
              <h6 className="fw-bold text-dark mb-3 font-heading text-uppercase tracking-wider">
                Visit Our Store
              </h6>
              <div className="d-flex flex-column gap-3 fs-6 text-muted">
                <div className="d-flex gap-2">
                  <i className="bi bi-geo-alt text-primary fs-5 flex-shrink-0 mt-1"></i>
                  <span>No.22 CLC Work Road, opp. Rela Hospital /
                     SBMCA Near : Rahaat Rooms Chrompet, Chennai-600044 
                     </span>
                </div>
                <div className="d-flex gap-2">
                  <i className="bi bi-clock text-primary fs-5 flex-shrink-0"></i>
                  <span>Mon - Sat: 10:00 AM – 8:00 PM<br /><small className="text-muted">(Sunday Closed)</small></span>
                </div>
                <div className="d-flex gap-2">
                  <i className="bi bi-telephone text-primary fs-5 flex-shrink-0"></i>
                  <a href="tel:08056095445" className="text-muted text-decoration-none fw-medium">
                    +91 81241 27608
                  </a>
                </div>
              </div>
            </Col>
          </Row>
        </div>

        {/* Bottom Copyright Bar */}
        <div className="text-center text-muted fs-6 py-2 d-flex flex-column flex-sm-row justify-content-between align-items-center gap-2">
          <span>&copy; {currentYear} Chennai Medical Book Centre. All Rights Reserved.</span>
          <span className="small">Designed for Academic Excellence</span>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;