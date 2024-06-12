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
        </ul>
    )
    return (
        <div>
            <div className="flex align-items-center justif-content-space-between headContainer">

                <div className="flex align-items-center justify-content-center phone">
                    <i
                        className={`fa-solid fa-phone-volume phoneIcon me-2`}
                    ></i>
                    <span className="phoneNo ps-2">+33 782508109</span>
                </div>

                <div className="flex align-items-center justify-content-center agriHead">
                    <Link to={"/"} className="text-decoration-none">
                        <div className="navbar-brand ms-lg-5">
                            <span className="header">Agri</span>
                            <span className="connectText">Connect</span>
                        </div>
                    </Link>

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