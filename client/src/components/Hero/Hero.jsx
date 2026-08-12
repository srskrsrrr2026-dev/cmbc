// src/components/Hero/Hero.jsx
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";

import HeroImg from "../../assets/heroimg.png"

const Hero = () => {
  return (
    <section
      id="home"
      className="min-vh-100 d-flex align-items-center pt-5 position-relative"
    >
      <Container className="py-5">
        <Row className="align-items-center gy-5">
          <Col lg={7}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="badge bg-primary-subtle text-primary border border-primary-subtle rounded-pill px-3 py-2 mb-3 fw-semibold">
                <i className="bi bi-patch-check-fill me-2"></i>Leading Medical Bookstore in Chromepet
              </span>
              <h1
                className="display-3 fw-bold text-dark mb-3"
                style={{ lineHeight: 1.15 }}
              >
                CMBC HEALTH <br />
                <span
                  className="text-transparent bg-clip-text"
                  style={{
                    backgroundImage:
                      "linear-gradient(135deg, #2563EB, #06B6D4)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  Care & Co.
                </span>
              </h1>
              <p className="fs-4 fw-medium text-secondary mb-2">
                Your Trusted Medical Books & Stationery Store in Chennai.
              </p>
              <p className="lead text-muted mb-4">
                MBBS Textbooks | Nursing Books | Pharmacy Manuals | Stethoscopes | Doctor Lab Coats | Lab Records <br />
                Serving Students and Doctors with Authorized Medical Literature.
              </p>
              <div className="d-flex flex-wrap gap-2 mb-4 justify-content-start">
                <a
                  href="tel:08124127608"
                  className="btn btn-gradient btn-sm px-3 py-2 fw-semibold"
                  aria-label="Call CMBC Healthcare Store"
                >
                  <i className="bi bi-telephone-fill me-1"></i>Call Store
                </a>
                <a
                  href="https://wa.me/918056095445"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline-dark btn-sm rounded-pill px-3 py-2 fw-semibold"
                  aria-label="Chat with CMBC Healthcare on WhatsApp"
                >
                  <i className="bi bi-whatsapp me-1 text-success"></i>WhatsApp Order
                </a>
                <a
                  href="https://maps.app.goo.gl/EAPxvuCthTuTS1m9A"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-light btn-sm rounded-pill px-3 py-2 fw-semibold glass-card"
                  aria-label="Get Directions to CMBC Store in Chrompet"
                >
                  <i className="bi bi-geo-alt-fill me-1 text-danger"></i>Get Directions
                </a>
              </div>
            </motion.div>
          </Col>
          <Col lg={5}>
            <div className="position-relative">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
                className="glass-panel p-4 position-relative overflow-hidden"
              >
                <img
                  src={HeroImg}
                  alt="Medical textbooks and reference manuals collection at CMBC Healthcare Chennai"
                  className="img-fluid rounded-4 shadow-sm w-100 object-fit-cover"
                  style={{ maxHeight: "420px" }}
                  width="800"
                  height="420"
                />
              </motion.div>

              <motion.div
                animate={{ y: [0, -12, 0] }}
                transition={{
                  repeat: Infinity,
                  duration: 4,
                  ease: "easeInOut",
                }}
                className="glass-card mt-4 p-3 position-absolute top-0 start-0 translate-middle-y ms-n3 d-none d-sm-flex align-items-center gap-3"
              >
                <div className="rounded-circle bg-primary bg-opacity-10 p-3 text-primary">
                  <i className="bi bi-journals fs-3"></i>
                </div>
                <div>
                  <h5 className="mb-0 fw-bold">10,000+</h5>
                  <small className="text-muted">Medical Titles Stocked</small>
                </div>
              </motion.div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Hero;