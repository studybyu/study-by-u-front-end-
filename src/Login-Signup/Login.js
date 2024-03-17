import React, { useState } from 'react';
import { Form, Button, Container, Row, Col, Card } from 'react-bootstrap';

const Login = () => {
  const [loginInfo, setLoginInfo] = useState({
    email: '',
    password: '',
  });

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginInfo({ ...loginInfo, [name]: value });
  };

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    // Here you would validate the input and then send a login request to your authentication service
    console.log('Login Request', loginInfo);
    // Upon successful login, you might redirect the user to a different page or perform some other action
  };

  return (
    <Container className="mt-5 ">
      <Row className="justify-content-md-center">
        <Col xs={12} md={6}>

        <Card className="p-4" style={{ borderRadius: '1rem' }} shadow="sm">

          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" name="email" placeholder="Enter email" value={loginInfo.email} onChange={handleChange} required />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" name="password" placeholder="Password" value={loginInfo.password} onChange={handleChange} required />
            </Form.Group>

            <Button variant="primary" type="submit">
              Login
            </Button>
          </Form>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
