import React, { useRef, useState } from 'react';
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const formRef = useRef();
  const [status, setStatus] = useState({ loading: false, success: null, message: '' });

  
  const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;;     
  const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;   
  const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;    

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus({ loading: true, success: null, message: '' });

    emailjs.sendForm(
      SERVICE_ID,
      TEMPLATE_ID,
      formRef.current,
      PUBLIC_KEY // Passing the public key directly as the 4th parameter
    )
    .then((result) => {
      setStatus({ 
        loading: false, 
        success: true, 
        message: 'Thank you! Your message has been sent successfully.' 
      });
      formRef.current.reset(); // Clear form fields on success
    })
    .catch((error) => {
      console.error('EmailJS Error:', error);
      setStatus({ 
        loading: false, 
        success: false, 
        message: 'Failed to send message. Please try calling us directly.' 
      });
    });
  };

  return (
    <section id="contact" className="py-5 bg-light">
      <Container className="py-4">
        <div className="text-center mb-5" data-aos="fade-up">
          <span className="text-primary fw-bold text-uppercase">GET IN TOUCH</span>
          <h2 className="display-5 fw-bold text-dark">Contact Us</h2>
          <p className="text-muted">Visit our Chrompet store or send us a message below.</p>
        </div>

        <Row className="justify-content-center">
          <Col lg={8} data-aos="fade-up">
            <div className="glass-card p-4 p-md-5">
              {status.message && (
                <Alert variant={status.success ? 'success' : 'danger'} dismissible onClose={() => setStatus({ ...status, message: '' })}>
                  {status.message}
                </Alert>
              )}

              <Form ref={formRef} onSubmit={handleSubmit}>
                <Row className="g-3">
                  <Col md={6}>
                    <Form.Group controlId="from_name">
                      <Form.Label className="fw-semibold text-dark">Your Name</Form.Label>
                      <Form.Control type="text" autoComplete="name" name="from_name" placeholder="Dr. / Student Name" required />
                    </Form.Group>
                  </Col>

                  <Col md={6}>
                    <Form.Group controlId="reply_to">
                      <Form.Label className="fw-semibold text-dark">Email Address</Form.Label>
                      <Form.Control type="email" autoComplete="email" name="reply_to" placeholder="name@example.com" required />
                    </Form.Group>
                  </Col>

                  <Col md={6}>
                    <Form.Group controlId="phone">
                      <Form.Label className="fw-semibold text-dark">Phone / WhatsApp</Form.Label>
                      <Form.Control type="tel" autoComplete="tel" name="phone" placeholder="+91 " required />
                    </Form.Group>
                  </Col>

                  <Col md={6}>
                    <Form.Group controlId="category">
                      <Form.Label className="fw-semibold text-dark">Inquiry Type</Form.Label>
                      <Form.Select name="category" required>
                        <option value="Medical Books">Medical Books</option>
                        <option value="Nursing Books">Nursing Books</option>
                        <option value="Pharmacy Books">Pharmacy Books</option>
                        <option value="Medical Equipments">Medical Equipments</option>
                        <option value="Doctor Aprons & Scrubs">Doctor Aprons & Scrubs</option>
                        <option value="General Inquiry">General Inquiry</option>
                      </Form.Select>
                    </Form.Group>
                  </Col>

                  <Col md={12}>
                    <Form.Group controlId="message">
                      <Form.Label className="fw-semibold text-dark">Message / Book Requirements</Form.Label>
                      <Form.Control as="textarea" rows={4} name="message" placeholder="Specify book titles, equipment models, or apron sizes needed..." required />
                    </Form.Group>
                  </Col>

                  <Col md={12} className="text-end">
                    <Button 
                      type="submit" 
                      disabled={status.loading} 
                      className="btn-gradient px-4 py-2 rounded-pill fw-semibold"
                    >
                      {status.loading ? 'Sending...' : 'Send Message'}
                    </Button>
                  </Col>
                </Row>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;