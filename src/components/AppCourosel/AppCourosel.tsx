import { Carousel } from "react-bootstrap";
import styles from "./AppCarousel.module.scss";
import carousel1 from "src/assets/img/carousel-1.jpg";
import carousel2 from "src/assets/img/carousel-2.jpg";

function AppCarousel() {
    return (
      <div className={`container-fluid p-0 ${styles.container}`}>
          <Carousel fade>
              <Carousel.Item>
                  <img className="w-100" src={carousel1} alt="First slide" />
                  <Carousel.Caption className={`top-0 bottom-0 start-0 end-0 d-flex flex-column align-items-center justify-content-center ${styles.carouselCaption}`}>
                      <div className={`text-start p-5 ${styles.captionContent}`} style={{ maxWidth: '900px' }}>
                          <h3 className={`text-white ${styles.subText}`}>Vegetables</h3>
                          <h1 className={`display-1 text-white mb-md-4 ${styles.heading}`}>Quality Vegetables For Healthy Life</h1>
                          <a href="" className={`btn py-md-3 px-md-5 me-3 ${styles.exploreBtn}`}>Explore</a>
                          <a href="" className={`btn py-md-3 px-md-5 ${styles.contactBtn}`}>Contact</a>
                      </div>
                  </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                  <img className="w-100" src={carousel2} alt="Second slide" />
                  <Carousel.Caption className={`top-0 bottom-0 start-0 end-0 d-flex flex-column align-items-center justify-content-center ${styles.carouselCaption}`}>
                      <div className={`text-start p-5 ${styles.captionContent}`} style={{ maxWidth: '900px' }}>
                          <h3 className={`text-white ${styles.subText}`}> Fruits</h3>
                          <h1 className={`display-1 text-white mb-md-4 ${styles.heading}`}>Quality Fruits For Better Health</h1>
                          <a href="" className={`btn py-md-3 px-md-5 me-3 ${styles.exploreBtn}`}>Explore</a>
                          <a href="" className={`btn py-md-3 px-md-5 ${styles.contactBtn}`}>Contact</a>
                      </div>
                  </Carousel.Caption>
              </Carousel.Item>
          </Carousel>
      </div>
  );
}

export default AppCarousel;
