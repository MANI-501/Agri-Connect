import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "./NavBarComponent.module.scss";
import LanguageDropdown from "../LanguageDropdown/LanguageDropdown";

function NavbarComponent() {
  const location = useLocation();
  const [activeNavLink, setActiveNavLink] = useState("");

  // Update active NavLink based on the current pathname
  useEffect(() => {
    setActiveNavLink(location.pathname);
  }, [location]);

  return (
    <nav
      className={`navbar navbar-expand-lg navbar-dark shadow-sm py-3 py-lg-0 px-3 px-lg-5 ${styles.navBar}`}
    >
      <Link
        to="/"
        className="navbar-brand d-flex d-lg-none text-decoration-none"
      >
        <h1 className="m-0 display-4 text-secondary">
          <span className="text-white">Agri</span>Connect
        </h1>
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarCollapse"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarCollapse">
        <div className="navbar-nav mx-auto py-0">
          <Link
            to="/"
            className={`nav-item nav-link p-4 ${styles.navItem
              } text-decoration-none ${activeNavLink === "/" ? styles.active : ""
              }`}
          >
            Home
          </Link>
          <Link
            to="/about"
            className={`nav-item nav-link p-4 ${styles.navItem
              } text-decoration-none ${activeNavLink === "/about" ? styles.active : ""
              }`}
          >
            About
          </Link>
          <Link
            to="/service"
            className={`nav-item nav-link p-4 ${styles.navItem
              } text-decoration-none ${activeNavLink === "/service" ? styles.active : ""
              }`}
          >
            Service
          </Link>
          <Link
            to="/product"
            className={`nav-item nav-link p-4 ${styles.navItem
              } text-decoration-none ${activeNavLink === "/product" ? styles.active : ""
              }`}
          >
            Product
          </Link>
          <Link
            to="/contact"
            className={`nav-item nav-link p-4 ${styles.navItem
              } text-decoration-none ${activeNavLink === "/contact" ? styles.active : ""
              }`}
          >
            Contact
          </Link>
          <Link
            to="/login"
            className={`nav-item nav-link p-4 ${styles.navItem
              } text-decoration-none ${activeNavLink === "/login" ? styles.active : ""
              }`}
          >
            <div className="d-flex justify-content-space-between">
              <i className="fa-solid fa-user me-2"></i>
              Login
            </div>
          </Link>

        </div>
      </div>
    </nav>
  );
}

export default NavbarComponent;
