import React from "react";
import pop1 from "../../assets/images/pop1.webp";
import pop2 from "../../assets/images/pop2.webp";
import pop3 from "../../assets/images/pop3.webp";
import pop4 from "../../assets/images/pop4.webp";
import pop5 from "../../assets/images/pop5.webp";
import pop6 from "../../assets/images/pop6.webp";
import pop7 from "../../assets/images/pop7.webp";
import ProductsCard from "../../UI/ProductsCard";
import Slider from "react-slick";

const PopularItems = () => {
  const items = [
    {
      id: 1,
      product: pop1,
      brand: "Hummel",
      des: "Hummel Valencia Shirt Women",
      priceAfter: 20.95,
      priceBefore: 16.95,
    },
    {
      id: 2,
      product: pop2,
      brand: "Mizuno",
      des: "Minzuno Wave Stealth Neo",
      priceAfter: 159.95,
      priceBefore: 119.0,
    },
    {
      id: 3,
      product: pop3,
      brand: "Mizuno",
      des: "Mizuno Elite Sock",
      priceAfter: 5.95,
      priceBefore: 3.95,
    },
    {
      id: 4,
      product: pop4,
      brand: "Hummel",
      des: "Hummel Authentic Shirt Women",
      priceAfter: 22.95,
      priceBefore: 19.95,
    },
    {
      id: 5,
      product: pop5,
      brand: "Nike",
      des: "Nike Court Victory Straight Skirt Women",
      priceAfter: 40.0,
      priceBefore: 20.0,
    },
    {
      id: 6,
      product: pop6,
      brand: "Nike",
      des: "Nike Reversible Tanktop Men",
      priceAfter: 37.95,
      priceBefore: 27.95,
    },
    {
      id: 7,
      product: pop7,
      brand: "Spalding",
      des: "Spalding Marble",
      priceAfter: 24.95,
      priceBefore: 17.0,
    },
  ];

  var settings = {
      infinite: true,
      slidesToShow: 5,
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

  return (
    <Slider {...settings} className="m-0">
      {items.map((item) => {
        return <ProductsCard item={item} key={item.id} />;
      })}
    </Slider>
  );
};

export default PopularItems;
