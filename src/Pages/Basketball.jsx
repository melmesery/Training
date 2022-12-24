import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import "../Styles/Basketball.css";
import Pages from "../UI/Pages";

const Basketball = () => {
  const [pages, setPages] = useState([]);

  useEffect(() => {
    fetch("https://my-json-server.typicode.com/melmesery/Sports-Pages/posts")
      .then((response) => response.json())
      .then((json) => setPages(json));
  }, []);

  return (
    <div className="basketball">
      <Container>
        <Row>
          {pages.map((page) => {
            return (
              <Col md={{ span: 4 }} className="d-flex justify-content-center mb-5">
                <Pages page={page} />
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
};

export default Basketball;

