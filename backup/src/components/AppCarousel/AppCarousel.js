import React from "react";
import PropTypes from "prop-types";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './AppCarousel.scss';

function AppCarousel (props) {
  return (
    <Carousel className="carousel_wrapper" autoPlay="true" infiniteLoop="true" emulateTouch="true" showThumbs="false">
      <div>
        <img src="https://placehold.co/600x400" alt="Carousel" />
      </div>
      <div>
        <img src="https://placehold.co/600x400" alt="Carousel" />
      </div>
      <div>
        <img src="https://placehold.co/600x400" alt="Carousel" />
      </div>
    </Carousel>
  );
}

AppCarousel.propTypes = {};

export default AppCarousel;
