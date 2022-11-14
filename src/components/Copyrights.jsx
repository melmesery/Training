import React from "react";
import { Container } from "react-bootstrap";
import "../Styles/Copyrights.css";

const Copyrights = () => {
  return (
    <Container>
      <div className="py-4 d-flex align-items-center gap-4">
        <p className="mb-0">© 2022 Training.com</p>
        <p className="mb-0 create">Created by: Mohamed Elmesery</p>
      </div>
    </Container>
  );
};

export default Copyrights;
