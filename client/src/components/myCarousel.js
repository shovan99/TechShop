import React from "react";
import { Carousel } from "react-bootstrap";

const myCarousel = () => {
  return (
    <div style={{ marginTop: "80px" }}>
      <Carousel>
        <Carousel.Item interval={1000}>
          <img
            height={440}
            className="d-block w-100"
            src="https://kalidas365itsolutions.files.wordpress.com/2014/06/every-sale.jpg"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img
            height={440}
            className="d-block w-100"
            src="https://kalidas365itsolutions.files.wordpress.com/2014/06/confirmed-delivery.jpg"
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            height={440}
            className="d-block w-100"
            src="https://kalidas365itsolutions.files.wordpress.com/2014/06/sell-first.jpg"
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default myCarousel;
