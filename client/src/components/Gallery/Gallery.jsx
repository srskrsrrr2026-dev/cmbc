import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const galleryImages = [
  {
    url: "https://images.jdmagicbox.com/v2/comp/chennai/z8/044pxx44.xx44.230106001622.a5z8/catalogue/dr-bala-guhan-dr-rela-institute-and-medical-centre-chromepet-chennai-dentists-7u11n7l7pk.jpg",
    title: "Location (Opp. Rela Hospital)",
    category: "Store & Location",
  },
  {
    url: "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcQPyGDB5IZAspf91ueVZbSoRnkRnhKB546J98udlU3qW3f2bs7BtWukBpCCHU4MXWwVZ4vN4jRRaa0XxcI",
    title: "Medical & Nursing Books",
    category: "Academic Collection",
  },
  {
    url: "https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcQa7WE1FAceM_d6FE4XR-t3gyjqd9T9vgKvvR6rgjbOXywouSWg74nfyYycbySgLSmPLEz7L2I0qNbxgLQ",
    title: "Diagnostic Equipments",
    category: "Stethoscopes & BP Monitors",
  },
  {
    url: "https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcSQprvvi_ZVLUeOULCn1zkXob1w6QI21LgyIkSKYrPKlHRrqWHNIH67N7_gpF7lJTbqdHzDfo_s_8mwD98",
    title: "Doctor Aprons & Lab Coats",
    category: "Clinical Attire",
  },
  {
    url: "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcQJfFZ9u5kBJ7hmLmBWM6845bCZsw3XZg-AX2Ggy2qhNRg0klmNbsIkBpJU-Qnqqj5VG786ierbBaaTHAk",
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
