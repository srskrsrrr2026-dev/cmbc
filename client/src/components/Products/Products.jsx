import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const productsData = [
  {
    category: "Medical Books",
    icon: "bi-hospital",
    items: [
      "MBBS Textbooks",
      "Anatomy & Physiology",
      "Pathology & Pharmacology",
      "Surgery & Specialties",
    ],
  },
  {
    category: "Nursing Books",
    icon: "bi-heart-pulse",
    items: [
      "B.Sc Nursing Guides",
      "GNM Textbooks",
      "Diploma Nursing",
      "Entrance Exam Guides",
    ],
  },
  {
    category: "Pharmacy Books",
    icon: "bi-capsule",
    items: [
      "D.Pharm Manuals",
      "B.Pharm Textbooks",
      "Medicinal Chemistry",
      "Pharmacognosy",
    ],
  },
  {
    category: "Equipments & Tools",
    icon: "bi-clipboard2-pulse",
    items: [
      "Stethoscopes",
      "BP Monitors",
      "Surgical Dissection Boxes",
      "Pulse Oximeters",
    ],
  },
  {
    category: "Aprons & Attire",
    icon: "bi-person-workspace",
    items: [
      "Full-Sleeve Lab Coats",
      "Half-Sleeve Doctor Aprons",
      "Scrub Suits (OT & Ward)",
      "Custom Name Embroidery",
    ],
  },
  {
    category: "Stationery & Supplies",
    icon: "bi-journal-bookmark",
    items: [
      "Lab Record Books",
      "Practical Charts",
      "Pens & Highlighters",
      "Calculators & Folders",
    ],
  },
];

const Products = () => {
  return (
    <section id="products" className="py-5 bg-light position-relative">
      <Container className="py-4">
        <div className="text-center mb-5" data-aos="fade-up">
          <span className="text-primary fw-bold">OUR INVENTORY</span>
          <h2 className="display-5 fw-bold text-dark">
            Comprehensive Catalog & Supplies
          </h2>
          <p className="text-muted">
            Discover authentic textbooks, diagnostic equipment, and tailored
            clinical attire.
          </p>
        </div>
        <Row className="g-4">
          {productsData.map((prod, idx) => (
            <Col
              key={idx}
              md={6}
              lg={4}
              data-aos="fade-up"
              data-aos-delay={idx * 100}
            >
              <div className="glass-card h-100 p-4 d-flex flex-column justify-content-between">
                <div>
                  <div className="rounded-circle bg-primary bg-opacity-10 text-primary d-inline-flex p-3 mb-3">
                    <i className={`bi ${prod.icon} fs-3`}></i>
                  </div>
                  <h4 className="fw-bold mb-3">{prod.category}</h4>
                  <ul className="list-unstyled mb-4">
                    {prod.items.map((item, i) => (
                      <li
                        key={i}
                        className="mb-2 text-secondary d-flex align-items-center gap-2"
                      >
                        <i className="bi bi-check-circle-fill text-success fs-6"></i>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <a
                  href="#contact"
                  className="btn btn-outline-primary btn-sm rounded-pill fw-semibold w-100"
                >
                  Inquire Now
                </a>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Products;
