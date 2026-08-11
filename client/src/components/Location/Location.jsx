// src/components/Location/Location.jsx
import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Location = () => {
  return (
    <section id="location" className="py-5 bg-light position-relative">
      <Container className="py-4">
        <Row className="align-items-center gy-4">
          <Col lg={5} data-aos="fade-right">
            <div className="text-center text-lg-start">
              <span className="text-primary fw-bold text-uppercase tracking-wider">
                CHENNAI STORE LOCATION
              </span>
              <h2 className="display-5 fw-bold mb-3 text-dark">
                Visit CMBC Healthcare Co. in Chrompet
              </h2>
              <p className="text-muted fs-6 mb-4">
                Conveniently located in Chrompet, Chennai—directly opposite Dr. Rela Hospital & Institute. 
                We serve MBBS students, nurses, and medical clinicians across Chennai and Tamil Nadu.
              </p>
            </div>

            <div className="glass-panel p-4 mb-4">
              <div className="d-flex gap-3 mb-3">
                <i className="bi bi-geo-alt-fill text-danger fs-3 flex-shrink-0 mt-1"></i>
                <div>
                  <h6 className="fw-bold mb-1 text-dark">Store Address</h6>
                  <address className="text-muted mb-0 fst-normal">
                    No. 22 CLC Works Road, Opp. Rela Hospital / SBMCA,<br />
                    Near Rahaat Rooms, Chromepet,<br />
                    Chennai, Tamil Nadu – 600044
                  </address>
                </div>
              </div>

              <div className="d-flex gap-3 mb-3">
                <i className="bi bi-clock-fill text-primary fs-4 flex-shrink-0"></i>
                <div>
                  <h6 className="fw-bold mb-1 text-dark">Store Timings</h6>
                  <p className="text-muted mb-0">
                    Monday – Saturday: 10:00 AM – 8:00 PM<br />
                    <small className="text-danger fw-semibold">(Sunday Closed)</small>
                  </p>
                </div>
              </div>

              <div className="d-flex gap-3">
                <i className="bi bi-telephone-fill text-success fs-4 flex-shrink-0"></i>
                <div>
                  <h6 className="fw-bold mb-1 text-dark">Direct Store Contact</h6>
                  <p className="mb-0">
                    <a href="tel:+918124127608" className="text-decoration-none text-dark fw-medium me-3">
                      +91 81241 27608
                    </a>
                    <a href="tel:+918056095445" className="text-decoration-none text-dark fw-medium">
                      +91 80560 95445
                    </a>
                  </p>
                </div>
              </div>
            </div>

            <div className="d-flex flex-wrap justify-content-center justify-content-lg-start gap-2">
              <a
                href="https://maps.app.goo.gl/EAPxvuCthTuTS1m9A"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-gradient px-4 py-2"
                aria-label="Open CMBC Healthcare Co. in Google Maps"
              >
                <i className="bi bi-map-fill me-2"></i>Open in Google Maps
              </a>
              <a
                href="https://wa.me/918056095445?text=Hi%20CMBC%20Healthcare,%20I%20want%20to%20inquire%20about%20book%20availability"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline-success rounded-pill px-4 py-2 fw-semibold"
                aria-label="Contact CMBC Healthcare via WhatsApp"
              >
                <i className="bi bi-whatsapp me-2"></i>WhatsApp Store
              </a>
            </div>
          </Col>

          <Col lg={7} data-aos="fade-left">
            <div
              className="glass-card p-2 overflow-hidden shadow-lg"
              style={{ height: "420px", borderRadius: "16px" }}
            >
              <iframe
                title="CMBC Healthcare Co. Google Maps Location Chrompet Chennai"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.2849230220418!2d80.13533517358873!3d12.953611115275464!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525f5fafa80021%3A0x7af387c50d5078e5!2sCHENNAI%20MEDICAL%20BOOK%20CENTRE!5e0!3m2!1sen!2sin!4v1786007938924!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0, borderRadius: "12px" }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Location;