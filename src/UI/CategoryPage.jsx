import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const CategoryPage = () => {
  return (
    <Container>
      <Row>
        <Col md="4">
          <h6>ABCDEFGH</h6>
          <div>
            <ul className="list-unstyled">
              <li>
                <Link className="nav-link">ABCDE</Link>
              </li>
              <li>
                <Link className="nav-link">ABCDE</Link>
              </li>
              <li>
                <Link className="nav-link">ABCDE</Link>
              </li>
              <li>
                <Link className="nav-link">ABCDE</Link>
              </li>
              <li>
                <Link className="nav-link">ABCDE</Link>
              </li>
              <li>
                <Link className="nav-link">ABCDE</Link>
              </li>
              <li>
                <Link className="nav-link">ABCDE</Link>
              </li>
              <li>
                <Link className="nav-link">ABCDE</Link>
              </li>
            </ul>
          </div>
        </Col>
        <Col md="8"></Col>
      </Row>
    </Container>
  );
};

export default CategoryPage;
