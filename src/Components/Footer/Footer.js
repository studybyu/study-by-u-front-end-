import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function Footer() {
  return (
    <footer className="mt-auto py-3 bg-light">
      <Container>
        <Row>
          <Col className="text-center">
            <span className="text-muted">© 2024 Study By U </span>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
