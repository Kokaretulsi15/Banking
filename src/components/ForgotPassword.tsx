import React from "react";
import { Form, Button, Container, Alert } from "react-bootstrap";

const ForgotPassword: React.FC = () => {
  const [emailSent, setEmailSent] = React.useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate sending reset email
    setEmailSent(true);
  };

  return (
    <Container className="mt-5" style={{ maxWidth: "400px" }}>
      <h3 className="mb-3">Forgot Password</h3>

      {emailSent ? (
        <Alert variant="success">
          If an account with that email exists, password reset instructions have
          been sent.
        </Alert>
      ) : (
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter your email"
              required
            />
          </Form.Group>

          <Button type="submit" className="w-100">
            Send Reset Link
          </Button>
        </Form>
      )}
    </Container>
  );
};

export default ForgotPassword;
