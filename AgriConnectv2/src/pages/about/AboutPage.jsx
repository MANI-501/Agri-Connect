import Layout from "../../components/layout/Layout";
import 'bootstrap/dist/css/bootstrap.min.css';
import about from "../../assets/img/about.png";
import "./AboutPage.css";
import { FaLeaf, FaStar } from 'react-icons/fa';
import { Link } from "react-router-dom";

const AboutPage = () => {
    return (
        <Layout>
            <div class="container-fluid bg-primary py-5 bg-hero mb-5">
                <div class="container py-5">
                    <div class="row justify-content-start">
                        <div class="col-lg-8 text-center text-lg-start">
                            <h1 class="display-1 text-white mb-md-4">About Us</h1>
                            <Link to={"/"} className="btn btn-primary exploreBtn py-md-3 px-md-5 me-3">
                                Home
                            </Link>
                            <Link to={"/about"} className="btn btn-secondary contactBtn py-md-3 px-md-5">
                                About Us
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div class="container-fluid bg-about pt-5">
                <div class="container mx-auto">
                    <div class="grid grid-cols-1 lg:grid-cols-2 gap-5">
                        <div class="mb-5 lg:mb-0">
                            <div class="flex h-full border-5 greenBorder border-b-0 pt-4">
                                <img class="mx-auto my-auto" src={about} alt="About Image" />
                            </div>
                        </div>
                        <div class="pb-5">
                            <div class="mb-3 pb-2">
                                <h6 class="text-uppercase aboutText">About Us</h6>
                                <h1 class="text-5xl font-bold">We Produce Healthy Food For Your Family</h1>
                            </div>
                            <p class="mb-4">We produce healthy food for your family, ensuring fresh, healthy, and chemical-free produce. Our commitment is to quality and sustainability in every bite.</p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div className="flex items-center flex-col text-center">
                                    <div className="mb-4 flex flex-column align-items-center">
                                        <span className="text-secondary text-4xl mb-2">
                                            <FaLeaf style={{ color: "#34ad54" }} />

                                        </span>
                                        <h4 className="font-bold">100% Assured</h4>
                                    </div>
                                    <p className="text-center mb-0">
                                        100% healthy, naturally grown produce. Experience the pure taste of nature with our sustainably cultivated foods. Guaranteed quality for your health and well-being.

                                    </p>
                                </div>
                                <div className="flex items-center flex-col text-center sm:mt-0">
                                    <div className="mb-4 flex flex-column align-items-center">
                                        <span className="text-secondary text-4xl mb-2">
                                            <FaStar style={{ color: "#34ad54" }} />
                                        </span>
                                        <h4 className="font-bold">Award Winning</h4>
                                    </div>
                                    <p className="text-center mb-0">
                                        Award-winning 100% healthy food. Enjoy fresh, flavorful produce grown sustainably and recognized for excellence. Taste the difference with nature’s best.
                                    </p>
                                </div>
                            </div>


                        </div>
                    </div>
                </div>
            </div>

        </Layout>
    );
}

export default AboutPage;
