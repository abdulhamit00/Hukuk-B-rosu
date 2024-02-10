import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import {
  faMapMarker,
  faPhone,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import { useInView } from "react-intersection-observer";
import AOS from "aos";
import "aos/dist/aos.css";

function FooterComp() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    rootMargin: "-100px 0px",
  });

  useEffect(() => {
    if (inView) {
      // AOS kütüphanesini başlat
      AOS.init({
        duration: 1000, // Animasyon süresi (milisaniye cinsinden)
        easing: "ease-out", // Animasyon geçiş efekti
      });
    }
  }, [inView]);

  return (
    <div className="footer mt-5 fs-2" ref={ref} data-aos="fade-up">
      <div className="section p-4 d-flex flex-column align-items-center justify-content-center">
        <h3 className="fw-bolder">Hakkımızda</h3>
        <p className="lead fs-5">
          Erdem Hukuk Bürosu, hukuki çözümler sunan deneyimli bir avukat
          ekibiyle hizmet vermektedir.
        </p>
      </div>

      <div className="section p-4 d-flex flex-column align-items-center justify-content-center">
        <h3 className="fw-bolder">İletişim Bilgileri</h3>
        <p className="lead fs-5 d-md-flex ">
          <FontAwesomeIcon icon={faMapMarker} className="me-2 " />
          Adres: Örnek Mahalle, Örnek Sokak No: 123, İstanbul
        </p>
        <p className="lead fs-5">
          <FontAwesomeIcon icon={faPhone} className="me-2 " />
          Telefon: 555-555-5555
        </p>
        <p className="lead fs-5">
          <FontAwesomeIcon icon={faEnvelope} className="me-2" />
          E-posta: info@erdemhukuk.com
        </p>
      </div>

      <div className="social-media p-4 d-flex flex-column align-items-center justify-content-center">
        <h3 className="fw-bolder">Sosyal Medya</h3>
        <div className="social-icons d-flex gap-4 align-items-center justify-content-center">
          <a href="#" target="_blank">
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a href="#" target="_blank">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a href="#" target="_blank">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </div>
      </div>
    </div>
  );
}

export default FooterComp;
