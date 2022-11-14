import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { BsCartCheck } from "react-icons/bs";
import { GiSelfLove } from "react-icons/gi";
import { MdOutlineThumbUp } from "react-icons/md";
import "../Styles/Features.css";

const Features = () => {
  return (
    <Container className="py-5">
      <hr />
      <Row className="features d-flex align-items-baseline text-center">
        <Col md="4">
          <span>
            <BsCartCheck />
          </span>
          <h6 className="my-2 fw-bold">LARGE ASSORTMENT</h6>
          <p>
            Huge assortment with more than <br /> 21.000+ articles
          </p>
        </Col>
        <Col md="4" className="middle">
          <span>
            <MdOutlineThumbUp />
          </span>
          <h6 className="my-2 fw-bold">PASSION FOR SPORT</h6>
          <p>
            Passion for the sport. Our specialists <br /> have an answer to your
            questions.
          </p>
        </Col>
        <Col md="4">
          <span>
            <GiSelfLove />
          </span>
          <h6 className="my-2 fw-bold">FAST SHIPMENT</h6>
          <p>
            Orders are shipped on the day of <br /> ordering
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default Features;
