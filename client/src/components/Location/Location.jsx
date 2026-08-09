import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Location = () => {
  return (
    <section className="py-5 bg-light">
      <Container className="py-4">
        <Row className="align-items-center gy-4">
          <Col lg={5} data-aos="fade-right">
            <span className="text-primary fw-bold">FIND US</span>
            <h2 className="display-5 fw-bold mb-4">Visit Our Store</h2>
            <div className="glass-panel p-4 mb-4">
              <div className="d-flex gap-3 mb-3">
                <i className="bi bi-geo-alt-fill text-danger fs-3"></i>
                <div>
                  <h6 className="fw-bold mb-1">Address</h6>
                  <p className="text-muted mb-0">
                    No.22 CLC Work Road, opp. Rela Hospital / SBMCA Near :
                    Rahaat Rooms Chrompet, Chennai-600044
                  </p>
                </div>
              </div>
              <div className="d-flex gap-3">
                <i className="bi bi-clock-fill text-primary fs-4"></i>
                <div>
                  <h6 className="fw-bold mb-1">Working Hours</h6>
                  <p className="text-muted mb-0">
                    Monday - Saturday: 10:00 AM - 8:00 PM
                  </p>
                </div>
              </div>
            </div>
            <div className="d-flex flex-wrap gap-2">
              <a
                href="https://maps.app.goo.gl/EAPxvuCthTuTS1m9A"
                target="_blank"
                rel="noreferrer"
                className="btn btn-gradient"
              >
                <i className="bi bi-map-fill me-2"></i>Open Maps
              </a>
              <a
                href="tel:08124127608"
                className="btn btn-outline-dark rounded-pill"
              >
                <i className="bi bi-telephone-fill me-2"></i>Call Store
              </a>
              <a
                href="https://wa.me/918056095445"
                target="_blank"
                rel="noreferrer"
                className="btn btn-outline-success rounded-pill"
              >
                <i className="bi bi-whatsapp me-2"></i>WhatsApp
              </a>
            </div>
          </Col>
          <Col lg={7} data-aos="fade-left">
            <div
              className="glass-card p-2 overflow-hidden shadow-lg"
              style={{ height: "400px" }}
            >
              <iframe
                title="Google Map Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.2849230220418!2d80.13533517358873!3d12.953611115275464!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525f5fafa80021%3A0x7af387c50d5078e5!2sCHENNAI%20MEDICAL%20BOOK%20CENTRE!5e0!3m2!1sen!2sin!4v1786007938924!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0, borderRadius: "12px" }}
                loading="lazy"
              ></iframe>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Location;
