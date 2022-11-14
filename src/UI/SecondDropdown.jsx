import React from 'react'
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { B, brands } from "../Data";
import hockey from "../assets/images/hockey-nav.jpg";

const SecondDropdown = () => {
  return (
    <Container>
    <Row>
      <Col lg="4" className="bg-light">
        <ul className="list-unstyled p-3">
          {B.map((item) => {
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
          <img src={hockey} className="w-100" alt="" />
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
          <p className="fw-bold">Also Usefull</p>
          <ul className="list-unstyled">
            <li>
              <Link className="nav-link mb-2">Hockey Balls</Link>
            </li>
            <li>
              <Link className="nav-link mb-2">Hockey Presents</Link>
            </li>
          </ul>

          <p className="fw-bold mt-4">Hockey Clothing</p>
          <ul className="list-unstyled">
            <li>
              <Link className="nav-link mb-2">Hockey Shirts</Link>
            </li>
            <li>
              <Link className="nav-link mb-2">Hockey Shorts</Link>
            </li>
            <li>
              <Link className="nav-link mb-2">Hockey Sweaters</Link>
            </li>
            <li>
              <Link className="nav-link mb-2">Hockey Jacks</Link>
            </li>
            <li>
              <Link className="nav-link mb-2">Hockey Trainingpants</Link>
            </li>
            <li>
              <Link className="nav-link mb-2">Hockey Poloshirts</Link>
            </li>
            <li>
              <Link className="nav-link mb-2">All Hockey Clothing</Link>
            </li>
          </ul>

          <p className="fw-bold mt-4">SALE</p>
          <ul className="list-unstyled">
            <li>
              <Link className="nav-link mb-2">Hockey Shoes</Link>
            </li>
            <li>
              <Link className="nav-link mb-2">Hockey Sticks</Link>
            </li>
            <li>
              <Link className="nav-link mb-2">Hockey Clothing</Link>
            </li>
            <li>
              <Link className="nav-link mb-2">Hockey Bags</Link>
            </li>
            <li>
              <Link className="nav-link mb-2">Hockey Accessories</Link>
            </li>
          </ul>
        </div>
      </Col>
    </Row>
  </Container>
  )
}

export default SecondDropdown