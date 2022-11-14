import React, { Component } from "react";
import Slider from "react-slick";
import brand1 from "../../assets/images/brand1.svg";
import brand2 from "../../assets/images/brand2.svg";
import brand3 from "../../assets/images/brand3.svg";
import brand4 from "../../assets/images/brand4.svg";
import brand5 from "../../assets/images/brand5.svg";
import brand6 from "../../assets/images/brand6.svg";
import brand7 from "../../assets/images/brand7.svg";
import brand8 from "../../assets/images/brand8.jpg";
import brand9 from "../../assets/images/brand9.jpg";

export default class MultipleItems extends Component {
  render() {
    var settings = {
      infinite: true,
      slidesToShow: 6,
      slidesToScroll: 1,
      speed: 2000,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 2,
            infinite: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
      ],
    };

    const brands = [
      brand1,
      brand2,
      brand3,
      brand4,
      brand5,
      brand6,
      brand7,
      brand8,
      brand9,
    ];

    return (
      <div>
        <h3 className="fw-bold">Our brands</h3>
        <Slider {...settings}>
          {brands.map((brand) => {
            return (
              <div className="brand d-flex align-items-center justify-content-center" key={brand.id}>
                <img
                  src={brand} 
                  alt="brand"
                  className="brand-img w-50 mx-auto"
                />
              </div>
            );
          })}
        </Slider>
      </div>
    );
  }
}
