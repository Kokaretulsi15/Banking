import React from "react";
import NavBar from "../components/NavBar";
import { Card, Button, Row, Col } from "react-bootstrap";

const Dashboard: React.FC = () => {
  return (
    <>
      <NavBar />

      <div
        style={{
          backgroundColor: "#f0f4f8",
          minHeight: "100vh",
          paddingTop: "20px",
        }}
      >
        <div className="container">
          <h4 className="mb-4 text-primary">Welcome to Bank</h4>

          {/* Banking Services */}
          <h5 className="mb-3">Banking Services</h5>
          <Row className="mb-4">
            <Col md={3} sm={6} xs={12} className="mb-3">
              <Card className="text-center shadow-sm h-100">
                <Card.Body>
                  <div style={{ fontSize: "2rem" }}>🏦</div>
                  <Card.Title>Accounts</Card.Title>
                  <Card.Text>View and manage your bank accounts.</Card.Text>
                  <Button variant="outline-primary" size="sm">
                    Open
                  </Button>
                </Card.Body>
              </Card>
            </Col>
            <Col md={3} sm={6} xs={12} className="mb-3">
              <Card className="text-center shadow-sm h-100">
                <Card.Body>
                  <div style={{ fontSize: "2rem" }}>💰</div>
                  <Card.Title>Loans</Card.Title>
                  <Card.Text>
                    Explore home, personal, and vehicle loans.
                  </Card.Text>
                  <Button variant="outline-primary" size="sm">
                    Apply
                  </Button>
                </Card.Body>
              </Card>
            </Col>
            <Col md={3} sm={6} xs={12} className="mb-3">
              <Card className="text-center shadow-sm h-100">
                <Card.Body>
                  <div style={{ fontSize: "2rem" }}>🛡️</div>
                  <Card.Title>Insurance</Card.Title>
                  <Card.Text>
                    Get protection for your life and property.
                  </Card.Text>
                  <Button variant="outline-primary" size="sm">
                    Explore
                  </Button>
                </Card.Body>
              </Card>
            </Col>
            <Col md={3} sm={6} xs={12} className="mb-3">
              <Card className="text-center shadow-sm h-100">
                <Card.Body>
                  <div style={{ fontSize: "2rem" }}>📥</div>
                  <Card.Title>Deposits</Card.Title>
                  <Card.Text>Open FDs, RDs and check interest rates.</Card.Text>
                  <Button variant="outline-primary" size="sm">
                    Invest
                  </Button>
                </Card.Body>
              </Card>
            </Col>
            <Col md={3} sm={6} xs={12} className="mb-3">
              <Card className="text-center shadow-sm h-100">
                <Card.Body>
                  <div style={{ fontSize: "2rem" }}>📈</div>
                  <Card.Title>Investments</Card.Title>
                  <Card.Text>
                    Track mutual funds and equity portfolios.
                  </Card.Text>
                  <Button variant="outline-primary" size="sm">
                    Track
                  </Button>
                </Card.Body>
              </Card>
            </Col>
            <Col md={3} sm={6} xs={12} className="mb-3">
              <Card className="text-center shadow-sm h-100">
                <Card.Body>
                  <div style={{ fontSize: "2rem" }}>🎁</div>
                  <Card.Title>Offers</Card.Title>
                  <Card.Text>
                    Check latest offers on banking products.
                  </Card.Text>
                  <Button variant="outline-primary" size="sm">
                    Check
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>

          {/* Quick Actions */}
          <div className="mb-5">
            <h5>Quick Actions</h5>
            <Button variant="success" className="me-2 mb-2">
              💸 Transfer
            </Button>
            <Button variant="warning" className="me-2 mb-2">
              🧾 Pay Bills
            </Button>
            <Button variant="info" className="mb-2">
              📱 Recharge
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
