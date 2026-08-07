import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const features = [
  { title: "Genuine Medical Books", desc: "100% authentic publications from authorized publishers.", icon: "bi-shield-check" },
  { title: "Affordable Prices", desc: "Competitive pricing tailored for students and institutions.", icon: "bi-tag" },
  { title: "Latest Editions", desc: "Always stocked with updated syllabi and current prints.", icon: "bi-book" },
  { title: "Friendly Service", desc: "Expert guidance from store personnel to find exact titles.", icon: "bi-emoji-smile" },
  { title: "Stationery Available", desc: "Complete solution including record books, manuals & tools.", icon: "bi-pen" },
  { title: "Easy Parking", desc: "Hassle-free parking right in front of the store location.", icon: "bi-p-circle" }
];

const WhyChooseUs = () => {
  return (
    <section className="py-5">
      <Container className="py-4">
        <div className="text-center mb-5" data-aos="fade-up">
          <h2 className="display-5 fw-bold">Why Choose Us</h2>
          <p className="text-muted">The preferred medical bookstore for students across Chennai</p>
        </div>
        <Row className="g-4">
          {features.map((item, index) => (
            <Col key={index} md={6} lg={4} data-aos="zoom-in" data-aos-delay={index * 50}>
              <div className="glass-card p-4 h-100 d-flex gap-3 align-items-start">
                <div className="p-3 bg-primary text-white rounded-3">
                  <i className={`bi ${item.icon} fs-4`}></i>
                </div>
                <div>
                  <h5 className="fw-bold mb-1">{item.title}</h5>
                  <p className="text-muted mb-0 small">{item.desc}</p>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default WhyChooseUs;