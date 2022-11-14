import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../Styles/Auth.css";

import { BsCheckLg } from "react-icons/bs";

const Login = () => {
  return (
    <div>
      <section className="py-5">
        <Container>
          <Row className="g-5">
            <Col md="6">
              <div className="login-form p-4">
                <h3 className="fw-bold mb-3">Login</h3>
                <p className="fw-bold">Email address</p>
                <input type="text" placeholder="Email address" />
                <p className="fw-bold mt-2">Password</p>
                <input type="text" placeholder="Password" />
                <div className="d-flex align-items-center gap-3 mt-3">
                  <button>Login</button>
                  <Link className="nav-link">Forget password?</Link>
                </div>
              </div>
            </Col>
            <Col md="6">
              <div className="sign-up">
                <h3 className="fw-bold mb-3">New Customers</h3>
                <ul className="list-unstyled">
                  <li>
                    <div className="d-flex align-items-center gap-4">
                      <span>
                        <BsCheckLg />
                      </span>
                      <div>
                        <p className="fw-bold mb-0">Checkout faster</p>
                        <p>Proceed through checkout faster</p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="d-flex align-items-center gap-4">
                      <span>
                        <BsCheckLg />
                      </span>
                      <div>
                        <p className="fw-bold mb-0">Status of orders</p>
                        <p>Check the status of orders</p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="d-flex align-items-center gap-4">
                      <span>
                        <BsCheckLg />
                      </span>
                      <div>
                        <p className="fw-bold mb-0">Save your basket</p>
                        <p>Shopping basket stored anytime, anywhere</p>
                      </div>
                    </div>
                  </li>
                </ul>
                <button className="customers-btn">
                  <Link to="/sign-up" className="nav-link">
                    Create Account
                  </Link>
                </button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default Login;
