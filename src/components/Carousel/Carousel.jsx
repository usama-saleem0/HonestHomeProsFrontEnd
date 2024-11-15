import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ThreeBoxSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // 3 boxes to show at a time
    slidesToScroll: 3, // Move 3 boxes at a time
    responsive: [
      {
        breakpoint: 768, // On smaller screens
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const boxes = [
    { id: 1, content: "Box 1" },
    { id: 2, content: "Box 2" },
    { id: 3, content: "Box 3" },
    { id: 4, content: "Box 4" },
    { id: 5, content: "Box 5" },
    { id: 6, content: "Box 6" },
  ];

  return (
    <Slider {...settings}>
      {boxes.map((box) => (
        <div key={box.id} style={{ padding: "20px", background: "#ccc", margin: "10px", textAlign: "center" }}>
          <h3>{box.content}</h3>
        </div>
      ))}
    </Slider>
  );
};

export default ThreeBoxSlider;
