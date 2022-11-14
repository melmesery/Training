import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../Styles/Footer.css";
import { BiMobileAlt } from "react-icons/bi";
import { BsPatchQuestion } from "react-icons/bs";
import { SlSocialFacebook, SlSocialInstagram, SlSocialTwitter } from "react-icons/sl";


const Footer = () => {
  return (
    <footer className="py-5">
      <Container>
        <Row>
          <Col md="3" sm='6' xs='6'>
            <h6 className="fw-bold">How Can We Help You?</h6>
            <ul className="list-unstyled">
              <li>
                <Link to="/" className="nav-link">
                  Customer Service
                </Link>
              </li>
              <li>
                <Link to="/" className="nav-link">
                  Printing and embroidery
                </Link>
              </li>
              <li>
                <Link to="/" className="nav-link">
                  Frequently Asked Questions
                </Link>
              </li>
              <li>
                <Link to="/" className="nav-link">
                  Delivery time and costs
                </Link>
              </li>
              <li>
                <Link to="/" className="nav-link">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/" className="nav-link">
                  Warranty
                </Link>
              </li>
              <li>
                <Link to="/" className="nav-link">
                  Returns
                </Link>
              </li>
              <li>
                <Link to="/" className="nav-link">
                  Cookies
                </Link>
              </li>
            </ul>
          </Col>

          <Col md="3" sm='6' xs='6'>
            <h6 className="fw-bold">Choose Your Sport</h6>
            <ul className="list-unstyled">
              <li>
                <Link to="/" className="nav-link">
                  Running
                </Link>
              </li>
              <li>
                <Link to="/" className="nav-link">
                  Basketball
                </Link>
              </li>
              <li>
                <Link to="/" className="nav-link">
                  Handball
                </Link>
              </li>
              <li>
                <Link to="/" className="nav-link">
                  Field Hockey
                </Link>
              </li>
              <li>
                <Link to="/" className="nav-link">
                  Volleyball
                </Link>
              </li>
              <li>
                <Link to="/" className="nav-link">
                  Padel
                </Link>
              </li>
              <li>
                <Link to="/" className="nav-link">
                  Tennis
                </Link>
              </li>
              <li>
                <Link to="/" className="nav-link">
                  Korfball
                </Link>
              </li>
            </ul>
          </Col>

          <Col md="3" sm='6' xs='6'>
            <h6 className="fw-bold">About Us</h6>
            <ul className="list-unstyled">
              <li>
                <Link to="/" className="nav-link">
                  About us
                </Link>
              </li>
              <li>
                <Link to="/" className="nav-link">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/" className="nav-link">
                  Service
                </Link>
              </li>
            </ul>

            <ul className="social list-unstyled">
              <li>
                <a href=" " className="nav-link">
                  <SlSocialFacebook />
                </a>
              </li>
              <li>
                <a href=" " className="nav-link">
                  <SlSocialInstagram />
                </a>
              </li>
              <li>
                <a href=" " className="nav-link">
                  <SlSocialTwitter />{" "}
                </a>
              </li>
            </ul>
          </Col>

          <Col md="3" sm='6' xs='6'>
            <h6 className="fw-bold">Advice</h6>
            <p className="mb-4">
              Our customer service is today open <br /> until 21.00 hours
            </p>
            <div className="d-flex align-items-center gap-3">
              <span className="m-0">
                <BiMobileAlt />
              </span>
              <div>
                <p className="mb-0">For advice call</p>
                <p className="mb-0">+31-416-652803</p>
              </div>
            </div>
            <div className="d-flex align-items-center gap-3">
              <span className="m-0">
                <BsPatchQuestion />
              </span>
              <div>
                <p className="mb-0">
                  Take a look at our{" "}
                  <Link className="text-white">
                    customer <br /> service
                  </Link>{" "}
                  page.
                </p>
              </div>
            </div>

            <div className="mt-5">
              <h6 className="fw-bold mt-3">Newsletter</h6>

              <div className="input-group mb-3 rounded">
                <input
                  type="text"
                  className="form-control rounded-0 py-2"
                  placeholder="Email address"
                  aria-label="Recipient's username"
                  aria-describedby="button-addon2"
                />
                <button
                  className="rounded-0 pe-3"
                  type="button"
                  id="button-addon2"
                >
                  Subscribe
                </button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
