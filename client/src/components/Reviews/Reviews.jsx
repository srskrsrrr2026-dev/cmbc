import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const reviews = [
  {
    name: "Dr. Rajesh Kumar",
    text: "Excellent collection of medical books. Found all my MBBS final year reference books easily.",
    rating: 5
  },
  {
    name: "Priya Sundaram",
    text: "Very helpful owner. They quickly ordered a specific pharmacy textbook I needed urgently.",
    rating: 5
  },
  {
    name: "Arun V.",
    text: "Best medical book store near Rela Hospital. Convenient location and genuine prices.",
    rating: 5
  }
];

const Reviews = () => {
  return (
    <section id="reviews" className="py-5">
      <Container className="py-4">
        <div className="text-center mb-5" data-aos="fade-up">
          <span className="text-primary fw-bold">TESTIMONIALS</span>
          <h2 className="display-5 fw-bold">Customer Reviews</h2>
        </div>
        <Row className="g-4">
          {reviews.map((rev, index) => (
            <Col key={index} md={4} data-aos="fade-up" data-aos-delay={index * 100}>
              <div className="glass-card p-4 h-100 d-flex flex-column justify-content-between">
                <div>
                  <div className="text-warning mb-3">
                    {[...Array(rev.rating)].map((_, i) => (
                      <i key={i} className="bi bi-star-fill me-1"></i>
                    ))}
                  </div>
                  <p className="text-secondary fst-italic mb-4">"{rev.text}"</p>
                </div>
                <div className="d-flex align-items-center gap-3">
                  <div className="rounded-circle bg-primary text-white d-flex align-items-center justify-content-center fw-bold" style={{ width: '40px', height: '40px' }}>
                    {rev.name[0]}
                  </div>
                  <div>
                    <h6 className="mb-0 fw-bold">{rev.name}</h6>
                    <small className="text-muted">Verified Customer</small>
                  </div>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Reviews;