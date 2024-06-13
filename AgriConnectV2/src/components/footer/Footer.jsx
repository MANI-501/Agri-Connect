import { Link } from "react-router-dom";
import { Button, IconButton } from "@material-tailwind/react";
import { FaTwitter, FaFacebookF, FaLinkedinIn, FaYoutube } from 'react-icons/fa';

const Footer = () => {
    return (
        <div>
            <div className="container-fluid bg-footer bg-black text-white mt-5">
                <div className="container">
                    <div className="row gx-5">
                        <div className="col-lg-8 col-md-6">
                            <div className="row gx-5">
                                <div className="col-lg-4 col-md-12 pt-5 mb-5">
                                    <h4 className="text-white mb-4">Get In Touch</h4>
                                    <div className="d-flex mb-2">
                                        <i className="bi bi-geo-alt text-white me-2"></i>
                                        <p className="text-white mb-0">11 rue curial,  Paris,  France</p>
                                    </div>
                                    <div className="d-flex mb-2">
                                        <i className="bi bi-envelope-open text-white me-2"></i>
                                        <p className="text-white mb-0">ParisAgriconnect@gmail.com</p>
                                    </div>
                                    <div className="d-flex mb-2">
                                        <i className="bi bi-telephone text-white me-2"></i>
                                        <p className="text-white mb-0">+33 7825081090</p>
                                    </div>
                                    <div className="d-flex mt-4">
                                        <a href="https://x.com/" target="_blank" rel="noopener noreferrer">
                                            <IconButton className="bg-blue-500 text-white rounded-full me-2">
                                                <FaTwitter size={20} />
                                            </IconButton>
                                        </a>
                                        <a href="https://facebook.com/" target="_blank" rel="noopener noreferrer">
                                            <IconButton className="bg-blue-600 text-white rounded-full me-2">
                                                <FaFacebookF size={20} />
                                            </IconButton>
                                        </a>
                                        <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer">
                                            <IconButton className="bg-blue-700 text-white rounded-full me-2">
                                                <FaLinkedinIn size={20} />
                                            </IconButton>
                                        </a>
                                        <a href="https://youtube.com/" target="_blank" rel="noopener noreferrer">
                                            <IconButton className="bg-red-600 text-white rounded-full me-2">
                                                <FaYoutube size={20} />
                                            </IconButton>
                                        </a>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-12 pt-0 pt-lg-5 mb-5">
                                    <h4 className="text-white mb-4">Quick Links</h4>
                                    <div className="d-flex flex-column justify-content-start">
                                        <Link to="/" className="text-white mb-2"><i className="bi bi-arrow-right text-white me-2"></i>Home</Link>
                                        <Link to="/about" className="text-white mb-2"><i className="bi bi-arrow-right text-white me-2"></i>About Us</Link>
                                        <Link to="/services" className="text-white mb-2"><i className="bi bi-arrow-right text-white me-2"></i>Our Services</Link>
                                        {/* <Link to="/team" className="text-white mb-2"><i className="bi bi-arrow-right text-white me-2"></i>Meet The Team</Link>
                                        <Link to="/blog" className="text-white mb-2"><i className="bi bi-arrow-right text-white me-2"></i>Latest Blog</Link> */}
                                        <Link to="/contact" className="text-white"><i className="bi bi-arrow-right text-white me-2"></i>Contact Us</Link>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-12 pt-0 pt-lg-5 mb-5">
                                    <h4 className="text-white mb-4">Popular Links</h4>
                                    <div className="d-flex flex-column justify-content-start">
                                        <Link to="/" className="text-white mb-2"><i className="bi bi-arrow-right text-white me-2"></i>Home</Link>
                                        <Link to="/about" className="text-white mb-2"><i className="bi bi-arrow-right text-white me-2"></i>About Us</Link>
                                        <Link to="/services" className="text-white mb-2"><i className="bi bi-arrow-right text-white me-2"></i>Our Services</Link>
                                        {/* <Link to="/team" className="text-white mb-2"><i className="bi bi-arrow-right text-white me-2"></i>Meet The Team</Link>
                                        <Link to="/blog" className="text-white mb-2"><i className="bi bi-arrow-right text-white me-2"></i>Latest Blog</Link> */}
                                        <Link to="/contact" className="text-white"><i className="bi bi-arrow-right text-white me-2"></i>Contact Us</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 mt-lg-n5">
                            <div className="d-flex flex-column align-items-center justify-content-center text-center h-100 bg-secondary p-5">
                                <h4 className="text-white">Newsletter</h4>
                                <h6 className="text-white">Subscribe Our Newsletter</h6>
                                <p>Join us in promoting healthy, sustainable living for a better tomorrow!</p>
                                <form action="">
                                    <div className="input-group mt-2">
                                        <input type="text" className="form-control border-white p-3" placeholder="Your Email" />
                                        <button className="btn btn-primary">Sign Up</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid bg-dark text-white py-4">
                <div className="container text-center">
                    <p className="mb-0">&copy; <a className="text-secondary fw-bold" href="https://x.com/">AgriConnect</a>. All Rights Reserved. Designed by <a className="text-secondary fw-bold" href="#">AgriConnect Team</a></p>
                </div>
            </div>
        </div>
    );
}

export default Footer;
