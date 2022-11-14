import React, { Fragment } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import collection from "../../assets/images/collection.jpg";
import handball from "../../assets/images/handball.jpg";
import running from "../../assets/images/running.jpg";
import sale from "../../assets/images/sale.jpg";
import team from "../../assets/images/team.jpg";
import tennis from "../../assets/images/tennis.jpg";
import "../../Styles/Home.css";
import Brands from "./Brands";
import GenreA from "./GenreA";
import Hero from "./Hero";
import PopularItems from "./PopularItems";

const Home = () => {
  return (
    <Fragment>
      {/* Hero */}
      <section className="hero">
        <Hero />
      </section>

      {/* Popular Products */}
      <section className="popular py-5">
        <Container>
          <h3 className="fw-bold">Popular Items</h3>
          <PopularItems />
        </Container>
      </section>

      {/* Genre A */}
      <section className="genreA">
        <GenreA />
      </section>

      {/* Brands */}
      <section className="pt-5">
        <Container>
          <Brands />
        </Container>
      </section>

      {/* Collection */}
      <section className="py-5">
        <Container>
          <div>
            <Card className="img-card border-0">
              <img src={collection} alt="" />
            </Card>

            <Card className="data-card text-center rounded-0 p-3">
              <p className="title mb-1 fw-bold">Indoor Shoes</p>
              <p className="desc">
                Whether you are playing handball or volleyball, you will find
                your favorite indoorshoes with us!
              </p>
              <p className="feat-btn mb-1 fw-bold p-2">View Collection</p>
            </Card>
          </div>
        </Container>
      </section>

      {/* Tennis & Running */}
      <section>
        <Container>
          <Row>
            <Col md="6">
              <Card className="img-card border-0">
                <img src={tennis} alt="" />
              </Card>

              <Card className="data-card text-center rounded-0 p-3">
                <p className="title mb-1 fw-bold">Tennis Rackets</p>
                <p className="desc">
                  Big collection tennis rackets from brands as Head, Babolat,
                  Dunlop and Wilson.
                </p>
                <p className="feat-btn mb-1 fw-bold p-2">View Tennis</p>
              </Card>
            </Col>

            <Col md="6">
              <Card className="img-card border-0">
                <img src={running} alt="" />
              </Card>

              <Card className="data-card text-center rounded-0 p-3">
                <p className="title mb-1 fw-bold">Running Clothing</p>
                <p className="desc">
                  Combine style and performance? With our running clothing you
                  will get the best out of yourself!
                </p>
                <p className="feat-btn mb-1 fw-bold p-2">View Running</p>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Handball */}
      <section className="py-5">
        <Container>
          <div>
            <Card className="img-card border-0">
              <img src={handball} alt="" />
            </Card>

            <Card className="data-card text-center rounded-0 p-3">
              <p className="title mb-1 fw-bold">Buy your new handball</p>
              <p className="desc">
                On Sportshop.com you will find the biggest collection handballs.
              </p>
              <p className="feat-btn mb-1 fw-bold p-2">View Handball</p>
            </Card>
          </div>
        </Container>
      </section>

      {/* sale & Order */}
      <section>
        <Container>
          <Row>
            <Col md="6">
              <Card className="img-card border-0">
                <img src={sale} alt="" />
              </Card>

              <Card className="data-card text-center rounded-0 p-3">
                <p className="title mb-1 fw-bold">SALE</p>
                <p className="desc">
                  Buy high-quality articles for the best prices. Discounts from
                  25% to 80%
                </p>
                <p className="feat-btn mb-1 fw-bold p-2">View Sale</p>
              </Card>
            </Col>

            <Col md="6">
              <Card className="img-card border-0">
                <img src={team} alt="" />
              </Card>

              <Card className="data-card text-center rounded-0 p-3">
                <p className="title mb-1 fw-bold">
                  Ordering for your entire team or club?
                </p>
                <p className="desc">
                  Are you looking for teamwear, balls or training equipment for
                  your team?
                </p>
                <p className="feat-btn mb-1 fw-bold p-2">
                  Request A Quoatation
                </p>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* about */}
      <section>
        <Container>
          <Row className="py-5">
            <Col md="6">
              <h4 className="fw-bold">
                Training.com, your sport is our speciality
              </h4>
              <p>
                Training.com is the online sports specialty store for anyone who
                loves sports, wants to feel fit or just enjoys being active. The
                wide range, the specialistic products and the sporty service are
                just a few points that are extremely important for us.
              </p>
              <br />
              <h4 className="fw-bold">Our sports</h4>
              <p>
                Training.com is the online specialist for everybody who loves to
                sport, wants to feel fit or enjoys working out. Our large
                collection, specialist products and our excellent service are
                just a few things that are of huge importance for us. At the
                moment we specialize in field hockey, running, volleyball,
                korfball, handball, padel, basketball and tennis. The employees
                of Training.com perform top sport every day. They help you with
                the right answer to difficult and naturally easy questions, give
                you the right specialist advice when necessary, jump in the air
                if they are allowed to pack your order and make sure that the
                latest products are the first. online here. The employees of
                Training.com work out every day just for you. They are ready to
                answer all your difficult questions and they are happy to give
                you advice. When your order arrives we run as fast as we can to
                collect the items and ship them to you. Some of our colleagues
                are continuously looking to find the best products just for you!
              </p>
            </Col>
            <Col md="6">
              <h4 className="fw-bold">20 Years of experience</h4>
              <p>
                We have been a serious player in the sports market for 20 years
                and our team now consists of more than 200 people. With our
                sport-specific web shops we now serve athletes at every level
                and age in all countries of the world. Do you want to enjoy the
                best sports products, specialist service and targeted advice,
                then we can only say…
                <br />
                <span className="fw-bold">Ready, Set, GOOOO!</span>
              </p>
            </Col>
          </Row>
        </Container>
      </section>
    </Fragment>
  );
};

export default Home;
