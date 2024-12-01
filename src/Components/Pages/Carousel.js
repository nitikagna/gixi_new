import React from "react";
import Slider from "react-slick";
import "./Carousel.css";


const Carousel = () => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    swipeToSlide: true,
    arrows: true,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const items = [
    { id: 1, content: "This is content for Item 1." },
    { id: 2, content: "This is content for Item 2." },
    { id: 3, content: "This is content for Item 3." },
    { id: 4, content: "This is content for Item 4." },
    { id: 5, content: "This is content for Item 5." },
    { id: 6, content: "This is content for Item 6." },
  ];

  const handleButtonClick = (url) => {
    window.location.href = url; 
  };

  return (
    <div className="carousel-container">
      <h2 className="carousel-title">My Listing: </h2>
      <Slider {...settings}>
        {items.map((item) => (
          <div key={item.id} className="carousel-item">
            <div className="carousel-content">
              <p>{item.content}</p>
              <div className="carousel-buttons">
                <button
                  className="carousel-button"
                  onClick={() => handleButtonClick("/page1")}
                >
                  B1
                </button>
                <button
                  className="carousel-button"
                  onClick={() => handleButtonClick("/page2")}
                >
                  B2
                </button>
                <button
                  className="carousel-button"
                  onClick={() => handleButtonClick("/page3")}
                >
                  B3
                </button>
                <button
                  className="carousel-button"
                  onClick={() => handleButtonClick("/page4")}
                >
                  B4
                </button>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

const CustomNextArrow = (props) => {
  const { onClick, currentSlide, slideCount } = props;
  return currentSlide === slideCount - 3 ? null : (
    <div className="custom-arrow next-arrow" onClick={onClick}>
      →
    </div>
  );
};

const CustomPrevArrow = (props) => {
  const { onClick, currentSlide } = props;
  return currentSlide === 0 ? null : (
    <div className="custom-arrow prev-arrow" onClick={onClick}>
      ←
    </div>
  );
};

export default Carousel;
