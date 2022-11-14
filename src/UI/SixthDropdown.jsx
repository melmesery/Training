import React from 'react'
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { F, brands } from "../Data";
import running from "../assets/images/running-nav.jpg";

const SixthDropdown = () => {
  return (
    <Container>
    <Row>
      <Col lg="4" className="bg-light">
        <ul className="list-unstyled p-3">
          {F.map((item) => {
            return (
              <li>
                <Link className="nav-link mb-2">{item}</Link>
              </li>
            );
          })}
          <li className="text-danger">
            <Link className="nav-link mb-2">Running Sale</Link>
          </li>
        </ul>
        <div className="p-3">
          <img src={running} className="w-100" alt="" />
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
          <p className="fw-bold">Running Shoes</p>
          <ul className="list-unstyled">
            <li>
              <Link className="nav-link mb-2">Race</Link>
            </li>
            <li>
              <Link className="nav-link mb-2">Road</Link>
            </li>
            <li>
              <Link className="nav-link mb-2">Trail</Link>
            </li>
            <li>
              <Link className="nav-link mb-2">Track</Link>
            </li>
          </ul>

          <p className="fw-bold mt-4">Pronation</p>
          <ul className="list-unstyled">
            <li>
              <Link className="nav-link mb-2">Neutral Running Shoes</Link>
            </li>
            <li>
              <Link className="nav-link mb-2">Overpronation Running Shoes</Link>
            </li>
          </ul>

          <p className="fw-bold mt-4">MORE</p>
          <ul className="list-unstyled">
            <li>
              <Link className="nav-link mb-2">Shoe Accessories</Link>
            </li>
            <li>
              <Link className="nav-link mb-2">Sports Nutrition</Link>
            </li>
          </ul>
        </div>
      </Col>
    </Row>
  </Container>
  )
}

export default SixthDropdown