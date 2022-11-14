import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { A, brands } from "../Data";
import basketball from "../assets/images/basketball-nav.jpg";

const FirstDropdown = () => {
  return (
    <Container>
      <Row>
        <Col lg="4" className="bg-light">
          <ul className="list-unstyled p-3">
            {A.map((item) => {
              return (
                <li>
                  <Link className="nav-link mb-2">{item}</Link>
                </li>
              );
            })}
            <li className="text-danger">
              <Link className="nav-link mb-2">Basketball Sale</Link>
            </li>
          </ul>
          <div className="p-3">
            <img src={basketball} className="w-100" alt="" />
          </div>
        </Col>
        <Col lg="4">
          <div className="p-3">
            <p className="fw-bold">Brands</p>
            <ul className="list-unstyled">
              {brands.map((item) => {
                return (
                  <li>
                    <Link className="nav-link mb-2">{item}</Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </Col>
        <Col lg="4">
          <div className="p-3">
            <p className="fw-bold">Basketballs</p>
            <ul className="list-unstyled">
              <li>
                <Link className="nav-link mb-2">Indoor</Link>
              </li>
              <li>
                <Link className="nav-link mb-2">Outdoor</Link>
              </li>
              <li>
                <Link className="nav-link mb-2">Skills</Link>
              </li>
            </ul>

            <p className="fw-bold mt-4">Basketball Clothing</p>
            <ul className="list-unstyled">
              <li>
                <Link className="nav-link mb-2">Shirts/Jerseys</Link>
              </li>
              <li>
                <Link className="nav-link mb-2">T-Shirts</Link>
              </li>
              <li>
                <Link className="nav-link mb-2">Shorts</Link>
              </li>
              <li>
                <Link className="nav-link mb-2">Socks</Link>
              </li>
              <li>
                <Link className="nav-link mb-2">More</Link>
              </li>
            </ul>

            <p className="fw-bold mt-4">SALE</p>
            <ul className="list-unstyled">
              <li>
                <Link className="nav-link mb-2">Basketball Shoes</Link>
              </li>
              <li>
                <Link className="nav-link mb-2">Basketball Clothing</Link>
              </li>
              <li>
                <Link className="nav-link mb-2">Basketballs</Link>
              </li>
              <li>
                <Link className="nav-link mb-2">Basketball Accessories</Link>
              </li>
            </ul>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default FirstDropdown;
