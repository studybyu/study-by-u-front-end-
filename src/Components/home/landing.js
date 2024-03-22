import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";

import logo from "../../assets/6222537.jpg";

function Landing() {
  // State for countdown timer
  const [countDown, setCountDown] = useState(12 * 24 * 60 * 60 * 1000); // 12 days in milliseconds

  // Update the countdown
  useEffect(() => {
    const interval = setInterval(() => {
      setCountDown((prevCountDown) => prevCountDown - 1000);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // Convert milliseconds into days, hours, minutes, and seconds
  const seconds = Math.floor((countDown / 1000) % 60);
  const minutes = Math.floor((countDown / 1000 / 60) % 60);
  const hours = Math.floor((countDown / (1000 * 60 * 60)) % 24);
  const days = Math.floor(countDown / (1000 * 60 * 60 * 24));

  return (
    <Container className="mt-5 pt-5">
      <Row>
        <Col xs={12} md={6}>
          <img src={logo} alt="logo" className="img-fluid" />
        </Col>
        <Col xs={12} md={6} className="d-flex align-items-center">
          <div>
            <h1>Coming Soon</h1>
            <h2>{`${days}d ${hours}h ${minutes}m ${seconds}s`}</h2>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Landing;
