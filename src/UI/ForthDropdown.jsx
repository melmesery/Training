import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { D, brands } from "../Data";
import korfball from "../assets/images/korfball-nav.jpg";

const ForthDropdown = () => {
  return <Container>
  <Row>
    <Col lg="4" className="bg-light">
      <ul className="list-unstyled p-3">
        {D.map((item) => {
          return (
            <li>
              <Link className="nav-link mb-2">{item}</Link>
            </li>
          );
        })}
        <li className="text-danger">
          <Link className="nav-link mb-2">Korfball Sale</Link>
        </li>
      </ul>
      <div className="p-3">
        <img src={korfball} className="w-100" alt="" />
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
            <Link className="nav-link mb-2">Korfball Baskets</Link>
          </li>
          <li>
            <Link className="nav-link mb-2">I Love Korfball</Link>
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
            <Link className="nav-link mb-2">Skorts</Link>
          </li>
          <li>
            <Link className="nav-link mb-2">Sweaters</Link>
          </li>
          <li>
            <Link className="nav-link mb-2">Tranning Pants</Link>
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
            <Link className="nav-link mb-2">Korfball Shoes</Link>
          </li>
          <li>
            <Link className="nav-link mb-2">Korfball clothing</Link>
          </li>
          <li>
            <Link className="nav-link mb-2">Accessories</Link>
          </li>
        </ul>
      </div>
    </Col>
  </Row>
</Container>
};

export default ForthDropdown;
