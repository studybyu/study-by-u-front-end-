import React, { useState } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import icon from "../assets/Kids Studying from Home-bro.png";

const Login = () => {
  const [loginInfo, setLoginInfo] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginInfo({ ...loginInfo, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Login Request", loginInfo);
  };

  return (
    <Container className="p-5">
      <Row className="justify-content-md-center align-items-center login-background">

      <Col xs={16} md={6} className="pb-4" >
        <h1 className="text-center" style={{color: "white", font: "3rem"}}>Sign-In</h1>
          <div className="login-card">
            
            <p className="" style={{color: "white", wordSpacing: "2px"}}>Login to your account</p>

            <hr />
            
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  placeholder="Enter email"
                  value={loginInfo.email}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={loginInfo.password}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Button variant="primary" type="submit">
                Login
              </Button>
            </Form>
          </div>
        </Col>



        {/*  */}
        <Col
          xs={12}
          md={6}
          className="d-flex justify-content-center align-items-center"
        >
          <img src={icon} alt="icon" className="img-fluid p-4" />
        </Col>

      
      </Row>
    </Container>
  );
};

export default Login;
