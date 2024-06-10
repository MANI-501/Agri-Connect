import { Link } from "react-router-dom";
import styles from "./TopBar.module.scss";
import { useTranslation } from 'react-i18next';

function TopBar() {
  const { t, i18n } = useTranslation();

  return (
    <div className="container-fluid px-5 d-none d-lg-block my-2">
      <div className="row gx-5 py-3 align-items-center">
        <div className="col-lg-3">
          <div className="d-flex align-items-center justify-content-center">
            <i
              className={`fa-solid fa-phone-volume ${styles.phoneIcon} me-2`}
            ></i>
            <span className={styles.phoneNo}>+33 782508109</span>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="d-flex align-items-center justify-content-center">
            <Link to={"/"} className="text-decoration-none">
              <div className="navbar-brand ms-lg-5">
                  <span className={styles.header}>{t("Agri")}</span>
                  <span className={styles.connectText}>{t("Connect")}</span>
              </div>
            </Link>
          </div>
        </div>
        <div className="col-lg-3">
          <div className="d-flex align-items-center justify-content-end">
            <a
              className={`btn btn-primary btn-square rounded-circle me-2 ${styles.icon}`}
              href="https://x.com/"
            >
              <i className="fab fa-twitter"></i>
            </a>
            <a
              className={`btn btn-primary btn-square rounded-circle me-2 ${styles.icon}`}
              href="https://facebook.com/"
            >
              <i className="fab fa-facebook-f"></i>
            </a>
            <a
              className={`btn btn-primary btn-square rounded-circle me-2 ${styles.icon}`}
              href="https://linkedin.com/"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a
              className={`btn btn-primary btn-square rounded-circle me-2 ${styles.icon}`}
              href="https://youtube.com/"
            >
              <i className="fab fa-youtube"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopBar;
