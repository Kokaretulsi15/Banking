import React, { useState } from "react";
import { Button, Form, Container, Alert } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

// Email validation regex
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

const Register: React.FC = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    termsAccepted: false,
  });
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    termsAccepted: "",
  });
  const [showPassword, setShowPassword] = useState(false);

  // Handle form input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  // Validate the form fields
  const validateForm = () => {
    const newErrors: any = {};
    let isValid = true;

    // Name validation
    if (!formData.name) {
      newErrors.name = "Name is required.";
      isValid = false;
    }

    // Email validation
    if (!emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
      isValid = false;
    }

    // Password validation
    if (formData.password.length < 6) {
      newErrors.password = "Password should be at least 6 characters.";
      isValid = false;
    }

    // Confirm password validation
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match.";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (validateForm()) {
      // Simulate successful registration
      console.log("Registration successful:", formData);
      navigate("/dashboard"); // Navigate to the dashboard after registration
    }
  };

  return (
    <Container className="mt-5" style={{ maxWidth: "400px" }}>
      <h3 className="mb-3">Register</h3>

      {/* Show error messages */}
      {Object.values(errors).some((error) => error) && (
        <Alert variant="danger">
          <ul>
            {Object.entries(errors)
              .filter(([_, value]) => value)
              .map(([key, value]) => (
                <li key={key}>{value}</li>
              ))}
          </ul>
        </Alert>
      )}

      <Form onSubmit={handleSubmit}>
        {/* Name input */}
        <Form.Group className="mb-3">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            isInvalid={!!errors.name}
            required
          />
        </Form.Group>

        {/* Email input */}
        <Form.Group className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            isInvalid={!!errors.email}
            required
          />
        </Form.Group>

        {/* Password input */}
        <Form.Group className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type={showPassword ? "text" : "password"}
            placeholder="Enter password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            isInvalid={!!errors.password}
            required
          />
        </Form.Group>

        {/* Confirm Password input */}
        <Form.Group className="mb-3">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            type={showPassword ? "text" : "password"}
            placeholder="Confirm password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            isInvalid={!!errors.confirmPassword}
            required
          />
        </Form.Group>

        {/* Show password toggle */}
        <Form.Check
          type="checkbox"
          label="Show Password"
          checked={showPassword}
          onChange={() => setShowPassword(!showPassword)}
        />

        <Button type="submit" className="w-100">
          Register
        </Button>

        <div className="mt-3 text-center">
          <a href="/login">Already have an account? Login</a>
        </div>
      </Form>
    </Container>
  );
};

export default Register;
