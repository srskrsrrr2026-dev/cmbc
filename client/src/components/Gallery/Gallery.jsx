import React from "react";
import { Container, Row, Col } from "react-bootstrap"

import CmbcImg from "../../assets/cmbc.png";
import ApronsImg from "../../assets/aprons.png";
import CollectionImg from "../../assets/collecction.png";
import EquipmentsImg from "../../assets/equipments.png";
import StatinoryImg from "../../assets/statinory.png";

const galleryImages = [
  {
    url: CmbcImg,
    title: "Location (Opp. Rela Hospital)",
    category: "Store & Location",
  },
  {
    url: CollectionImg,
    title: "Medical & Nursing Books",
    category: "Academic Collection",
  },
  {
    url: EquipmentsImg,
    title: "Diagnostic Equipments",
    category: "Stethoscopes & BP Monitors",
  },
  {
    url: ApronsImg,
    title: "Doctor Aprons & Lab Coats",
    category: "Clinical Attire",
  },
  {
    url: StatinoryImg,
    title: "Lab Manuals & Record Books",
    category: "Stationery Section",
  },
];

const Gallery = () => {
  return (
    <section id="gallery" className="py-5 bg-light position-relative">
      <Container className="py-4">
        <div className="text-center mb-5" data-aos="fade-up">
          <span className="text-primary fw-bold text-uppercase tracking-wider">
            VISUAL TOUR
          </span>
          <h2 className="display-5 fw-bold text-dark mt-1">
            Store & Products Gallery
          </h2>
          <p className="text-muted fs-6">
            Explore our inventory of textbooks, diagnostic instruments, and
            clinical attire.
          </p>
        </div>

        <Row className="g-4">
          {galleryImages.map((img, idx) => (
            <Col
              key={idx}
              md={idx < 2 ? 6 : 4}
              data-aos="fade-up"
              data-aos-delay={idx * 100}
            >
              <div
                className="glass-card overflow-hidden position-relative group"
                style={{ height: "280px" }}
              >
                <img
                  src={img.url}
                  alt={img.title}
                  className="w-100 h-100 object-fit-cover transition-transform duration-500 hover-scale"
                  style={{ transition: "transform 0.5s ease" }}
                  onError={(e) => {
                    // Fallback image if network fails
                    e.target.src =
                      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=600";
                  }}
                />
                <div className="position-absolute bottom-0 start-0 end-0 p-3 bg-dark bg-opacity-60 text-white backdrop-blur">
                  <small
                    className="text-info text-uppercase fw-semibold d-block mb-1"
                    style={{ fontSize: "11px" }}
                  >
                    {img.category}
                  </small>
                  <h6 className="mb-0 fw-semibold">{img.title}</h6>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Gallery;
