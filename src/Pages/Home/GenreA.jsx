import React from "react";
import { Container, Row } from "react-bootstrap";
import feat1 from "../../assets/images/feat1.jpg";
import feat2 from "../../assets/images/feat2.webp";
import feat3 from "../../assets/images/feat3.webp";
import GenreCards from "../../UI/GenreCards";

const GenreA = () => {
  const GenreA = [
    {
      id: 1,
      image: feat1,
      title: "Tennis Clothing",
      desc: "A huge collection tennis clothes for men, woman and kids",
      btn: "Shop Tennis",
    },
    {
      id: 2,
      image: feat2,
      title: "Field Hockey Sticks",
      desc: "Sticks from different well-known brands like Dita, Brabo and adidas",
      btn: "View Field Hockey",
    },
    {
      id: 3,
      image: feat3,
      title: "Basketballs",
      desc: "A simple or colourful basketball? Look at our collection here!",
      btn: "View Basketball",
    },
  ];

  return (
    <Container>
      <Row>
        {GenreA.map((item) => {
          return <GenreCards item={item} key={item.id} />;
        })}
      </Row>
    </Container>
  );
};

export default GenreA;
