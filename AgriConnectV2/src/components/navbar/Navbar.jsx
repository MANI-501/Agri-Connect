import { Link, useNavigate } from "react-router-dom";
import SearchBar from "../searchBar/SearchBar";
import { useSelector } from "react-redux";
import "./Navbar.css";

const Navbar = () => {
    // get user from localStorage 
    const user = JSON.parse(localStorage.getItem('users'));

    // navigate 
    const navigate = useNavigate();

    // logout function 
    const logout = () => {
        localStorage.clear('users');
        navigate("/login")
    }

    // CartItems
    const cartItems = useSelector((state) => state.cart);

    // navList Data
    const navList = (
        <ul className="d-flex flex-row align-items-center">
            {/* Home */}
            <li>
                <Link to={'/'} className="navItem ms-3">Home</Link>
            </li>

            {/* About */}
            <li>
                <Link to={'/about'} className="navItem ms-3">About</Link>
            </li>

            {/* Services */}
            <li>
                <Link to={'/services'} className="navItem ms-3">Services</Link>
            </li>


            {/* All Product */}
            <li>
                <Link to={'/allproduct'} className="navItem ms-3">All Product</Link>
            </li>

            {/* Signup */}
            {!user ? <li>
                <Link to={'/signup'} className="navItem ms-3">Signup</Link>
            </li> : ""}

            {/* Signup */}
            {!user ? <li>
                <Link to={'/login'} className="navItem ms-3">Login</Link>
            </li> : ""}

            {/* User */}
            {user?.role === "user" && <li>
                <Link to={'/user-dashboard'} className="navItem ms-3">User</Link>
            </li>}

            {/* Admin */}
            {user?.role === "admin" && <li>
                <Link to={'/admin-dashboard'} className="navItem ms-3">Admin</Link>
            </li>}

            {user?.role === "farmer" && <li>
                <Link to={'/farmer-dashboard'} className="navItem ms-3">Farmer</Link>
            </li>}

            {/* logout */}
            {user && <li className=" cursor-pointer navItem ms-3 d-flex align-items-center" onClick={logout} >
                Logout
            </li>}

            {/* Cart */}
            <li>
                <Link to={'/cart'} className="navItem ms-3">
                    Cart({cartItems.length})
                </Link>
            </li>

            {/* Cart */}
            <li>
                <Link to={'/contact'} className="navItem ms-3">
                    Contact Us
                </Link>
            </li>
        </ul>
    )
    return (
        <div>
            <div class="container-fluid px-5 hidden lg:block my-2">
                <div class="row gx-5 py-2 flex items-center">
                    <div class="col-lg-3">
                        <div class="flex items-center justify-center">
                            <i class="fa-solid fa-phone-volume me-2"></i>
                            <span class="font-bold phoneNo">+33 782508109</span>
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <div class="flex items-center justify-center">
                            <a href="/" class="no-underline">
                                <div class="navbar-brand ms-lg-5">
                                    <span class=" font-bold header">Agri</span>
                                    <span class=" connectText">Connect</span>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <nav className="bg-orange-600 sticky top-0">
                {/* main  */}
                <div className="lg:flex lg:justify-center items-center lg:px-3 navBarr ">
                    {/* left  */}
                    {/* <div className="left py-3 lg:py-0">
                        <Link to={'/'}>
                            <h2 className=" font-bold text-white text-2xl text-center"><span className="header">Agri</span>
                                <span className="connectText">Connect</span></h2>
                        </Link>
                    </div> */}

                    {/* right  */}
                    <div className="right flex justify-center lg:mb-0">
                        {navList}
                    </div>

                    {/* Search Bar  */}
                    {/* <SearchBar /> */}
                </div>
            </nav>
        </div>
    );
}

export default Navbar;
