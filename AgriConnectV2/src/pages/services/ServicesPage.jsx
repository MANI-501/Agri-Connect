import { Link } from "react-router-dom";
import Layout from "../../components/layout/Layout";
import "./ServicesPage.css";
import { FaCarrot, FaAppleAlt, FaDog, FaTractor, FaSeedling } from 'react-icons/fa';


const ServicesPage = () => {
    return (
        <Layout>

            <div class="container-fluid bg-primary py-5 bg-hero mb-5">
                <div class="container py-5">
                    <div class="row justify-content-start">
                        <div class="col-lg-8 text-center text-lg-start">
                            <h1 class="display-1 text-white mb-md-4">Our Services</h1>
                            <Link to={"/"} className="btn btn-primary exploreBtn py-md-3 px-md-5 me-3">
                                Home
                            </Link>
                            <Link to={"/services"} className="btn btn-secondary contactBtn py-md-3 px-md-5">
                                Services
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid py-5">
                <div className="container mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                        <div className="mb-8">
                            <h6 className="text-primary text-lg uppercase font-bold serviceText">Services</h6>
                            <h1 className="text-4xl font-bold">Farm Services</h1>
                            <p className="mt-4">We offer comprehensive Farm Services, from soil health assessments to sustainable crop management. Our expertise ensures your farm produces high-quality, chemical-free produce.</p>
                            <a href="#" className="btn contactBtn mt-4 py-3 px-5 inline-block">Contact Us</a>
                        </div>
                        <div className="service-item flex flex-column align-items-center bg-gray-100 p-5 rounded-lg text-center">
                            <FaCarrot className=" text-4xl mb-3" style={{ color: "#34ad54" }} />
                            <h4 className="text-xl font-bold">Fresh Vegetables</h4>
                            <p className="mt-2">We produce 100% healthy food for everyone. Experience the pure taste of nature with our sustainably grown produce.</p>
                        </div>
                        <div className="service-item flex flex-column align-items-center bg-gray-100 p-5 rounded-lg text-center">
                            <FaAppleAlt className=" text-4xl mb-3" style={{ color: "#34ad54" }} />
                            <h4 className="text-xl font-bold">Fresh Fruits</h4>
                            <p className="mt-2">We produce 100% healthy food for everyone. Experience the pure taste of nature with our sustainably grown produce.</p>
                        </div>
                        <div className="service-item flex flex-column align-items-center bg-gray-100 p-5 rounded-lg text-center">
                            <FaDog className=" text-4xl mb-3" style={{ color: "#34ad54" }} />
                            <h4 className="text-xl font-bold">Healthy Cattle</h4>
                            <p className="mt-2">We produce 100% healthy food for everyone. Experience the pure taste of nature with our sustainably grown produce.</p>
                        </div>
                        <div className="service-item flex flex-column align-items-center bg-gray-100 p-5 rounded-lg text-center">
                            <FaTractor className=" text-4xl mb-3" style={{ color: "#34ad54" }} />
                            <h4 className="text-xl font-bold">Modern Truck</h4>
                            <p className="mt-2">We produce 100% healthy food for everyone. Experience the pure taste of nature with our sustainably grown produce.</p>
                        </div>
                        <div className="service-item flex flex-column align-items-center bg-gray-100 p-5 rounded-lg text-center">
                            <FaSeedling className=" text-4xl mb-3" style={{ color: "#34ad54" }} />
                            <h4 className="text-xl font-bold">Farming Plans</h4>
                            <p className="mt-2">We produce 100% healthy food for everyone. Experience the pure taste of nature with our sustainably grown produce.</p>
                        </div>
                    </div>
                </div>
            </div>



        </Layout>
    );
}

export default ServicesPage;
