import Carousel from "react-bootstrap/Carousel";
import "../../Styles/Home.css"
import img1 from "../../assets/images/img1.jpg";
import img2 from "../../assets/images/img2.jpg";
import img3 from "../../assets/images/img3.jpg";
import img4 from "../../assets/images/img4.jpg";

function Hero() {
  return (
    <Carousel>
      <Carousel.Item>
        <img src={img4} alt="" className="carousel-img w-100" />
      </Carousel.Item>
      <Carousel.Item>
        <img src={img1} alt="" className="carousel-img w-100" />
      </Carousel.Item>
      <Carousel.Item>
        <img src={img2} alt="" className="carousel-img w-100" />
      </Carousel.Item>
      <Carousel.Item>
        <img src={img3} alt="" className="carousel-img w-100" />
      </Carousel.Item>
    </Carousel>
  );
}

export default Hero;
