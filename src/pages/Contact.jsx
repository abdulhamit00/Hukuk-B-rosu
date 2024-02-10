import React from "react";
import { Link } from "react-router-dom";
import { useSpring, animated } from "react-spring";
import FooterComp from "../components/FooterComp";
import HeaderComp from "../components/HeaderComp";
import { motion } from "framer-motion";
import { FaMapMarker } from "react-icons/fa";
import { BsFillTelephoneFill } from "react-icons/bs";
import { IoMdMail } from "react-icons/io";

const Contact = () => {
  const fadeIn = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 1000 },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const name = formData.get("name");
    const email = formData.get("email");
    const phone = formData.get("phone");
    const message = formData.get("message");
  
    e.target.reset();
  };

  return (
    <>
      <HeaderComp />
      <h1 className="d-flex  fw-bolder  border justify-content-center  mt-5">
        İletişim
      </h1>

      <div className="google-map mt-4 d-flex align-items-center justify-content-center">
        <iframe
          className="map  "
          title="Google Maps"
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d2029488.0230422786!2d34.56926812323849!3d39.453233428342266!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1str!2str!4v1707163731721!5m2!1str!2str"
          width="50%"
          height="400"
          allowFullScreen=""
          loading="lazy"
          style={{ border: 0 }}
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 50 }}
        transition={{ duration: 0.5 }}
      ></motion.div>

      <animated.div className="container mt-5   map-header " style={fadeIn}>
        <form
          onSubmit={handleSubmit}
          className="d-md-flex  gap-5 mt-md-4  fw-bold "
          action=""
        >
          <div className="left d-flex flex-column  ">
            <span>Bize Ulaşın</span>
            <div className=" d-flex flex-column form-group  ">
              <label className=" fw-normal" htmlFor="">
                Adınız Soyadınız
              </label>
              <input name="name" className="form-control" type="text" />
            </div>
            <div className=" d-flex flex-column form-group  ">
              <label className=" fw-normal" htmlFor="">
                E-posta adresiniz
              </label>
              <input name="email" className="form-control" type="email" />
            </div>
            <div className=" d-flex flex-column form-group  ">
              <label className=" fw-normal" htmlFor="">
                Telefon Numaranız
              </label>
              <input name="phone" className="form-control" type="number" />
            </div>
            <div className=" d-flex flex-column form-group  ">
              <label className=" fw-normal" htmlFor="">
                Mesajınız
              </label>
              <textarea
                name="message"
                maxLength={200}
                cols="20"
                rows="3"
              ></textarea>
            </div>
            <button
              type="submit"
              className="btn btn-dark btn-lg btn-block mt-3"
            >
              Gönder
            </button>
          </div>

          <div className="right  mt-md-0   d-flex  flex-column  gap-3    justify-content-sm-start mt-sm-5 ">
            <span>İletişim</span>
            <div className="d-flex gap-3 align-items-center">
              <FaMapMarker />
              <p className="lead">
                Örnek Mahalle, Örnek Sokak No: 123, İstanbul
              </p>
            </div>
            <div className="d-flex  gap-3 align-items-center">
              <BsFillTelephoneFill />
              <p className="lead">555-555-5555</p>
            </div>
            <div className="d-flex gap-3 align-items-center">
              <IoMdMail />
              <p className="lead ">info@erdemhukuk.com</p>
            </div>
          </div>
        </form>
      </animated.div>
      <Link
        to={"/contact"}
        className="link-to-home"
        style={{ display: "none" }}
      />

      <FooterComp />
    </>
  );
};

export default Contact;
