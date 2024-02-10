import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";

const HeaderComp = () => {
  const controls = useAnimation();
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const navigate = useNavigate();

  const handleScroll = () => {
    // mevcut scrool pozisyonu alnıyor
    const currentScrollPos = window.scrollY;

    if (currentScrollPos > prevScrollPos) {
      // Aşağı kaydırılıyor
      controls.start({ opacity: 0, y: -50 });
    } else {
      // Yukarı kaydırılıyor
      controls.start({ opacity: 1, y: 0 });
    }

    setPrevScrollPos(currentScrollPos);
  };
  /* sayfalar arası geçiş yönlendrmeleri */
  const redirectToContact = () => {
    navigate("/contact");
  };
  const redirect = () => {
    navigate("/about");
  };

  const articleRedirect = () => {
    navigate("/articles");
  };

  const redirectImage = () => {
    navigate("/");
  };
  /* sayfalar arası geçiş yönlendrmeleri bitiş */

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);

  return (
    <motion.div className="all  ">
      <motion.div className="header  " animate={controls}>
        <div className="img-field d-flex flex-column  ">
          <img
            onClick={redirectImage}
            width={150}
            height={150}
            src="ERDEM HUKUK BÜROSU (4).png"
            alt=""
          />
        </div>

        <nav className="navbar navbar-expand-lg link-field">
          <div className="container-fluid">
            <a className="navbar-brand fw-bolder fs-3" href="#"></a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse nav" id="navbarNav">
              <ul className="navbar-nav gap-5">
                <li className="nav-item">
                  <Link
                    to={"/"}
                    className="nav-link"
                    aria-current="page"
                    href="#"
                  >
                    Anasayfa
                  </Link>
                </li>
                <li className="nav-item">
                  <a id="info" onClick={redirect} className="nav-link" href="#">
                    Hakkımızda
                  </a>
                </li>
                <div className="dropdown  ">
                  <button
                    className="btn text-white fw-bolder dropdown-toggle drop"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Çalışma Alanlarımız
                  </button>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item text-dark " href="#">
                        Ceza Hukuku
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item text-dark " href="#">
                        Aile Hukuku{" "}
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item text-dark" href="#">
                        Miras Hukuku
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item text-dark" href="#">
                        iş Ve Sosyal Güvenlik Hukuku
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item text-dark" href="#">
                        Ticaret Ve Şirketler Hukuku
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item text-dark" href="#">
                        İcra Ve İflas Hukuku
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item text-dark" href="#">
                        Gayrimenkul Ve İnşaat Hukuku
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item text-dark" href="#">
                        {" "}
                        Tüketici Hukuku
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item text-dark" href="#">
                        {" "}
                        Kişisel Verilerin Korunması Hukuku
                      </a>
                    </li>
                  </ul>
                </div>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    onClick={articleRedirect}
                    to="articles"
                    href="#"
                  >
                    Makaleler
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" onClick={redirectToContact} href="#">
                    İletişim
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </motion.div>
      <Link to={"/"} className="link-to-home" style={{ display: "none" }} />
    </motion.div>
  );
};
export default HeaderComp;
