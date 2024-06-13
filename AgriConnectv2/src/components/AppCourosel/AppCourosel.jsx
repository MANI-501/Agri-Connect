import { Carousel } from "react-bootstrap";
import "./AppCarousel.css";
import carousel1 from "../../../src/assets/img/carousel-1.jpg";
import carousel2 from "../../../src/assets/img/carousel-2.jpg";
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";

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
              <Link to={"/allProduct"} className="btn py-4 px-8 me-3 bg-[#ff9933] border border-[#ff9933] text-white font-bold text-[16px] leading-none">
                Explore
              </Link>
              <Link to={"/contact"} className="btn py-4 px-8 bg-[#34ad54] border border-[#34ad54] text-white font-bold text-[16px] leading-none">
                Contact
              </Link>
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
              <a href="" class="btn py-4 px-8 me-3 bg-[#ff9933] border border-[#ff9933] text-white font-bold text-[16px] leading-none">
                Explore
              </a>
              <a href="" class="btn py-4 px-8 bg-[#34ad54] border border-[#34ad54] text-white font-bold text-[16px] leading-none">
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
