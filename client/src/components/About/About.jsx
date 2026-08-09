import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const About = () => {
  const highlights = [
    { icon: "bi-book-half", label: "Medical Books" },
    { icon: "bi-heart-pulse", label: "Nursing Books" },
    { icon: "bi-capsule", label: "Pharmacy Books" },
    { icon: "bi-bandaid", label: "Medical Equipments" },
    { icon: "bi-person-workspace", label: "Doctor & Lab Aprons" },
    { icon: "bi-journal-check", label: "Educational Materials" },
    { icon: "bi-pen", label: "Stationery Supplies" },
  ];

  return (
    <section id="about" className="py-5 my-5">
      <Container className="py-4">
        <Row className="align-items-center gy-4">
          {/* Left Column: Visual Image with Location Badge */}
          <Col lg={6} data-aos="fade-right">
            <div className="position-relative">
              <img
                src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=800"
                alt="Healthcare Education and Supplies"
                className="img-fluid rounded-4 shadow-lg"
              />
              <div className="glass-card p-4 position-absolute bottom-0 end-0 m-3 d-flex gap-3 align-items-center">
                <i className="bi bi-geo-alt-fill text-danger fs-1"></i>
                <div>
                  <h6 className="mb-0 fw-bold">Prime Location</h6>
                  <small className="text-muted">
                    Opposite Rela Hospital, Chrompet
                  </small>
                </div>
              </div>
            </div>
          </Col>

          {/* Right Column: Content and List */}
          <Col lg={6} data-aos="fade-left">
            <div className="ps-lg-4 text-center text-lg-start">
              <span className="text-primary fw-semibold uppercase tracking-wider d-block">
                About Us
              </span>
              <h2 className="display-5 fw-bold mt-2 mb-3">
                Dedicated to Empowering Healthcare Education
              </h2>

              {/* Added Tagline Bar */}
              <div className="d-flex flex-wrap justify-content-center justify-content-lg-start gap-2 gap-sm-3 mb-4">
                <span className="badge bg-primary-subtle text-primary fw-bold px-3 py-2 rounded-pill">
                  ✓ Best Quality
                </span>
                <span className="badge bg-primary-subtle text-primary fw-bold px-3 py-2 rounded-pill">
                  ✓ Best Price
                </span>
                <span className="badge bg-primary-subtle text-primary fw-bold px-3 py-2 rounded-pill">
                  ✓ Best Service
                </span>
              </div>

              <p className="lead text-secondary mb-4">
                Chennai Medical Book Centre is conveniently located opposite
                Rela Hospital, Chrompet, Chennai. We serve as a comprehensive
                single-source supplier for medical students, doctors, nurses,
                and healthcare professionals.
              </p>

              {/* Itemized Points with Icons */}
              <div className="row g-3 mb-4 text-start">
                {highlights.map((item, index) => (
                  <div key={index} className="col-6">
                    <div className="d-flex align-items-center gap-2">
                      <i className={`bi ${item.icon} text-primary fs-5`}></i>
                      <span className="fw-medium text-dark">{item.label}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Dedicated Equipment & Apron Quick-Feature Bar */}
              <div className="p-3 bg-light rounded-3 mb-4 border d-flex align-items-center gap-3 text-start">
                <div className="d-flex align-items-center gap-2 text-primary fw-semibold fs-6">
                  <i className="bi bi-patch-check-fill"></i>
                  <span>Equipments & Clinical Attire:</span>
                </div>
                <div className="text-muted small">
                  Stethoscopes, BP Monitors, Dissection Kits & Full/Half-Sleeve
                  Aprons with Custom Embroidery.
                </div>
              </div>

              {/* Stats Bar */}
              <div className="d-flex flex-column flex-sm-row gap-4 pt-3 border-top text-start">
                <div className="d-flex align-items-center gap-2">
                  <h3 className="fw-bold text-primary mb-0">27+</h3>
                  <span className="fw-semibold text-dark">
                    Years of Excellence in Medical Books trade
                  </span>
                </div>
                <div className="vr d-none d-sm-block"></div>
                <div className="d-flex align-items-center gap-2">
                  <h3 className="fw-bold text-primary mb-0">16+</h3>
                  <span className="fw-semibold text-dark">
                    Years of Trusted Service to Medical Professionals
                  </span>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;