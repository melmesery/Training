import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { E, brands } from "../Data";
import padel from "../assets/images/padel-nav.jpg";

const FifthDropdown = () => {
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
            <img src={padel} className="w-100" alt="" />
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
                <Link className="nav-link mb-2">Caps & Visors</Link>
              </li>
              <li>
                <Link className="nav-link mb-2">Racket Accessories</Link>
              </li>
            </ul>

            <p className="fw-bold mt-4">Padel Clothing</p>
            <ul className="list-unstyled">
              <li>
                <Link className="nav-link mb-2">Shirts</Link>
              </li>
              <li>
                <Link className="nav-link mb-2">Shorts</Link>
              </li>
              <li>
                <Link className="nav-link mb-2">Skirts</Link>
              </li>
              <li>
                <Link className="nav-link mb-2">Sweaters</Link>
              </li>
              <li>
                <Link className="nav-link mb-2">Pants</Link>
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
                <Link className="nav-link mb-2">Padel Shoes</Link>
              </li>
              <li>
                <Link className="nav-link mb-2">Padel Rackets</Link>
              </li>
              <li>
                <Link className="nav-link mb-2">Padel Clothing</Link>
              </li>
              <li>
                <Link className="nav-link mb-2">Padel Bags</Link>
              </li>
              <li>
                <Link className="nav-link mb-2">Padel Accessories</Link>
              </li>
            </ul>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default FifthDropdown;
