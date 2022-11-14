import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "../Styles/Auth.css";
import { BsCheckLg } from "react-icons/bs";

const SignUp = () => {
  return (
    <div>
      <section className="pt-5">
        <Container>
          <Row className="g-5">
            <Col md="6">
              <div className="sign-up-form">
                <h3 className="fw-bold">Create Account</h3>
                <p className="fw-bold mt-2">
                  First Name<sup>*</sup>
                </p>
                <input
                  type="text"
                  placeholder="First name"
                  className="form-input"
                />
                <p className="fw-bold mt-2">
                  Last Name<sup>*</sup>
                </p>
                <input
                  type="text"
                  placeholder="Last name"
                  className="form-input"
                />
                <p className="fw-bold mt-2">
                  Email Address<sup>*</sup>
                </p>
                <input
                  type="text"
                  placeholder="Email address"
                  className="form-input"
                />
                <p className="fw-bold mt-2">
                  Birth Date<sup>*</sup>
                </p>
                <div className="d-flex align-items-center gap-2">
                  <input type="text" placeholder="DD" className="form-input" />
                  <input type="text" placeholder="MM" className="form-input" />
                  <input
                    type="text"
                    placeholder="YYYY"
                    className="form-input"
                  />
                </div>
                <div className="d-flex align-items-center gap-3 my-2">
                  <input type="radio" name="Male" id="male" />
                  <label htmlFor="male" className="fw-bold">
                    Male
                  </label>
                  <input type="radio" name="Male" id="female" />
                  <label htmlFor="female" className="fw-bold">
                    Female
                  </label>
                </div>
                <p className="fw-bold mt-2">
                  Password<sup>*</sup>
                </p>
                <input
                  type="text"
                  placeholder="Password"
                  className="form-input"
                />
                <p className="fw-bold mt-2">
                  Confirm Password<sup>*</sup>
                </p>
                <input
                  type="text"
                  placeholder="Confirm Password"
                  className="form-input"
                />
                <div className="d-flex align-items-center gap-3 my-2">
                  <input type="radio" name="" id="" checked />
                  <label htmlFor="" className="fw-bold">
                    Subscribe to our newsletter
                  </label>
                </div>
                <button className="sign-up-btn">Create Account</button>
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
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default SignUp;
