import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import slide_image_1 from "/wesley-tingey-9z9fxr_7Z-k-unsplash.jpg";
import slide_image_2 from "/liv-bruce-odIhQypCuUk-unsplash.jpg";
import slide_image_3 from "/inheritance law ad9fb4e3-fb16-4ec4-a144-b6539cbcf0ec.png";
import slide_image_4 from "/labor and socia dac49a85-cb04-4d92-9e51-e80066dababf.png";
import slide_image_5 from "/bolek-hukuk-ticaret-hukuku.jpg";
import slide_image_6 from "/icra-ve-iflas-hukuku.jpg";
import slide_image_7 from "/gayrimenkul-tasinmaz-insaat-hukuku.jpg";
import slide_image_8 from "/tuketici-hukuku-001-b.jpg";
import slide_image_9 from "/kisisel-verilerin-korunmasi-001-b.jpg";

const CarouselComponent = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <div className="container   ">
      <h2 className="heading fw-bolder d-flex align-items-center justify-content-center mb-5 mt-5">
        Çalışma Alanlarımız
      </h2>

      <Slider {...settings}>
        <div className=" d-flex  flex-column align-items-center justify-content-center">
          <img
            className=" d-flex align-items-center justify-content-center"
            src={slide_image_1}
            width={600}
            height={600}
            alt="slide_image_1"
          />
          <h2 className="mt-3">Ceza Hukuku</h2>
        </div>
        <div className=" d-flex  flex-column align-items-center justify-content-center">
          <img
            className=" d-flex align-items-center justify-content-center"
            src={slide_image_2}
            width={600}
            height={600}
            alt="slide_image_2"
          />
          <h2 className="mt-3">Aile Hukuku</h2>
        </div>
        <div className=" d-flex  flex-column align-items-center justify-content-center">
          <img
            className=" d-flex align-items-center justify-content-center"
            src={slide_image_3}
            width={600}
            height={600}
            alt="slide_image_3"
          />
          <h2 className="mt-3"> Miras Hukuku</h2>
        </div>
        <div className=" d-flex  flex-column align-items-center justify-content-center">
          <img
            className=" d-flex align-items-center justify-content-center"
            src={slide_image_4}
            width={600}
            height={600}
            alt="slide_image_4"
          />
          <h2 className="mt-3">İş Ve Sosyal Güvenlik Hukuku</h2>
        </div>
        <div className=" d-flex  flex-column align-items-center justify-content-center">
          <img
            className=" d-flex align-items-center justify-content-center"
            src={slide_image_5}
            width={600}
            height={600}
            alt="slide_image_4"
          />
          <h2 className="mt-3">Ticaret ve Şirketler Hukuku</h2>
        </div>
        <div className=" d-flex  flex-column align-items-center justify-content-center">
          <img
            className=" d-flex align-items-center justify-content-center"
            src={slide_image_6}
            width={600}
            height={600}
            alt="slide_image_4"
          />
          <h2 className="mt-3">İcra Ve İflas Hukuku</h2>
        </div>
        <div className=" d-flex flex-column align-items-center justify-content-center">
          <img
            className=" d-flex align-items-center justify-content-center"
            src={slide_image_7}
            width={600}
            height={600}
            alt="slide_image_4"
          />
          <h2 className="mt-3">Gayrimenkul Ve İnşaat Hukuku</h2>
        </div>
        <div className=" d-flex  flex-column align-items-center justify-content-center">
          <img
            className=" d-flex align-items-center justify-content-center"
            src={slide_image_8}
            width={600}
            height={600}
            alt="slide_image_4"
          />
          <h2 className="mt-3">Tüketici Hukuku</h2>
        </div>
        <div className=" d-flex  flex-column align-items-center justify-content-center">
          <img
            className=" d-flex align-items-center justify-content-center"
            src={slide_image_9}
            width={600}
            height={600}
            alt="slide_image_4"
          />
          <h2 className="mt-3">Kişisel Verilenin Korunması Hukuku</h2>
        </div>
      </Slider>
    </div>
  );
};

export default CarouselComponent;
