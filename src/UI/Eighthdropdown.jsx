import React from 'react'
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { H, brands } from "../Data";
import vollyball from "../assets/images/vollyball-nav.jpg";

const Eighthdropdown = () => {
  return (
    <Container>
      <Row>
        <Col lg="4" className="bg-light">
          <ul className="list-unstyled p-3">
            {H.map((item) => {
              return (
                <li>
                  <Link className="nav-link mb-2">{item}</Link>
                </li>
              );
            })}
            <li className="text-danger">
              <Link className="nav-link mb-2">Vollyball Sale</Link>
            </li>
          </ul>
          <div className="p-3">
            <img src={vollyball} className="w-100" alt="" />
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
          
            <p className="fw-bold">Vollyball Clothing</p>
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
                <Link className="nav-link mb-2">All clothing</Link>
              </li>
            </ul>

            <p className="fw-bold mt-4">SALE</p>
            <ul className="list-unstyled">
              <li>
                <Link className="nav-link mb-2">Vollyball Shoes</Link>
              </li>
              <li>
                <Link className="nav-link mb-2">Vollyballs</Link>
              </li>
              <li>
                <Link className="nav-link mb-2">Vollyball Clothing</Link>
              </li>
              <li>
                <Link className="nav-link mb-2">Vollyball Accessories</Link>
              </li>
            </ul>
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default Eighthdropdown