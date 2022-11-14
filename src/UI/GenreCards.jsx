import React from "react";
import { Card, Col } from "react-bootstrap";

const FeaturesCards = ({ item }) => {
  const { image, title, desc, btn } = item;
  return (
    <Col>
      <Card className="img-card border-0">
        <img src={image} alt="" />
      </Card>

      <Card className="data-card text-center rounded-0 p-3">
        <p className="title mb-1 fw-bold">{title}</p>
        <p className="desc">{desc}</p>
        <p className="feat-btn mb-1 fw-bold p-2">{btn}</p>
      </Card>
    </Col>
  );
};

export default FeaturesCards;
