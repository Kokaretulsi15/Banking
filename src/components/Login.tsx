import React from "react";
import { useNavigate } from "react-router-dom";
import { Button, Form, Container } from "react-bootstrap";

const Login: React.FC = () => {
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Add real auth check here
    navigate("/dashboard");
  };

  return (
    <Container className="mt-5" style={{ maxWidth: "400px" }}>
      <h3 className="mb-3">Login</h3>
      <Form onSubmit={handleLogin}>
        <Form.Group className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Enter email" required />
        </Form.Group>

        <Form.Group className="mb-2">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" required />
        </Form.Group>

        <div className="mb-3 text-end">
          <a href="/forgot-password">Forgot Password?</a>
        </div>

        <Button type="submit" className="w-100">
          Login
        </Button>

        <div className="mt-3 text-center">
          <a href="/register">Don't have an account? Register</a>
        </div>
      </Form>
    </Container>
  );
};

export default Login;
