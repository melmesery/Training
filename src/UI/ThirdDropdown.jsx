import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { E, brands } from "../Data";
import handball from "../assets/images/handball-nav.jpg";

const ThirdDropdown = () => {
  return (
    <Container>
      <Row>
        <Col lg="4" className="bg-light">
          <ul className="list-unstyled p-3">
            {E.map((item) => {
              return (
                <li>
                  <Link className="nav-link mb-2">{item}</Link>
                </li>
              );
            })}
            <li className="text-danger">
              <Link className="nav-link mb-2">Padel Sale</Link>
            </li>
          </ul>
          <div className="p-3">
            <img src={handball} className="w-100" alt="" />
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
            <p className="fw-bold mt-4">Handball Clothing</p>
            <ul className="list-unstyled">
              <li>
                <Link className="nav-link mb-2">Shirts</Link>
              </li>
              <li>
                <Link className="nav-link mb-2">Shorts</Link>
              </li>
              <li>
                <Link className="nav-link mb-2">Socks</Link>
              </li>
              <li>
                <Link className="nav-link mb-2">All Clothing</Link>
              </li>
            </ul>

            <p className="fw-bold mt-4">SALE</p>
            <ul className="list-unstyled">
              <li>
                <Link className="nav-link mb-2">Handball Shoes</Link>
              </li>
              <li>
                <Link className="nav-link mb-2">Handballs</Link>
              </li>
              <li>
                <Link className="nav-link mb-2">Handball Clothing</Link>
              </li>
              <li>
                <Link className="nav-link mb-2">Accessories</Link>
              </li>
            </ul>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ThirdDropdown;
