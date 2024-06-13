import { Carousel } from "react-bootstrap";
import "./AppCarousel.css";
import carousel1 from "../../../src/assets/img/carousel-1.jpg";
import carousel2 from "../../../src/assets/img/carousel-2.jpg";
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';


function AppCarousel() {
  return (
    <div className="container-fluid p-0 container">
      <Carousel fade>
        <Carousel.Item>
          <img className="w-full" src={carousel1} alt="First slide" />
          <Carousel.Caption className="absolute top-0 bottom-0 left-0 right-0 flex flex-col items-center justify-center carouselCaption">
            <div
              className="text-left p-5 captionContent"
              style={{ maxWidth: "900px" }}
            >
              <h3 className="text-white subText">Vegetables</h3>
              <h1 className="text-6xl text-white mb-8 heading">
                Quality Vegetables For Healthy Life
              </h1>
              <a href="" className="btn py-4 px-8 me-3 exploreBtn">
                Explore
              </a>
              <a href="" className="btn py-4 px-8 contactBtn">
                Contact
              </a>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="w-full" src={carousel2} alt="Second slide" />
          <Carousel.Caption className="absolute top-0 bottom-0 left-0 right-0 flex flex-col items-center justify-center carouselCaption">
            <div
              className="text-left p-5 captionContent"
              style={{ maxWidth: "900px" }}
            >
              <h3 className="text-white subText">Fruits</h3>
              <h1 className="text-6xl text-white mb-8 heading">
                Quality Fruits For Better Health
              </h1>
              <a href="" className="btn py-4 px-8 me-3 exploreBtn">
                Explore
              </a>
              <a href="" className="btn py-4 px-8 contactBtn">
                Contact
              </a>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default AppCarousel;
