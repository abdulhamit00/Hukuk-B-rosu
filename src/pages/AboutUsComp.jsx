import React from "react";
import HeaderComp from "../components/HeaderComp";
import FooterComp from "../components/FooterComp";
import { Link } from "react-router-dom";

const AboutUsComp = () => {
  return (
    <>
      <HeaderComp />
      <div>
        <h1 className="mt-5 d-flex align-items-center justify-content-center fw-bolder">
          Hakkımızda
        </h1>
        <div className="d-flex  wrap   align-items-center justify-content-center flex-wrap">
          <div></div>
          <div className="text-container col-md-6">
            <div className="d-flex flex-column align-items-center justify-content-center p-5">
              <div className="image-container d-flex align-items-center justify-content-center p-5">
                <img 
                  width={450}
                  height={450}
                  className="p-5 mt-5 rounded-circle img-responsive"
                  src="law officer dfc4e55e-af44-472b-937f-afa9fe6ff0bb.png"
                  alt=""
                />
              </div>
              <h1 className="fw-bolder p-2 text-center">Hukuki Çözümler</h1>
              <p className="lead flex-sm-nowrap parag text-center p-5 mx-5">
                Edem Avukatlık Bürosu, hukuki çözümler sunan deneyimli ve uzman
                bir avukat ekibiyle hizmet vermektedir. Hukukun karmaşıklığı ve
                sürekli değişen yapısı karşısında müvekkillerimize etkin ve
                kaliteli hizmet sunma amacı güden bir kuruluş olarak, mücadeleci
                bir anlayışla hukuki çözümler üretiyoruz.
              </p>
            </div>
          </div>

          <div className="text-container col-md-6">
            <div className="d-flex flex-column align-items-center justify-content-center p-5">
              <div className="image-container d-flex align-items-center justify-content-center p-5">
                <img
                  width={450}
                  height={450}
                  className="p-5 mt-5 rounded-circle img-responsive"
                  src="mission in law 7718bbc9-f8e5-40d6-aa4c-66923e1da85a.png"
                  alt=""
                />
              </div>
              <h1 className="fw-bolder p-2 text-center">Misyonumuz</h1>
              <p className="lead flex-lg-nowrap parag text-center p-5 mx-5">
                Müvekkillerimizin hukuki ihtiyaçlarını anlamak ve en iyi
                çözümleri sunmak için buradayız. Hukukun karmaşıklıklarına karşı
                bilgi ve deneyimimizi kullanarak, müvekkillerimize adil ve etkin
                bir şekilde hizmet vermeyi hedefliyoruz.
              </p>
            </div>
          </div>

          <div className="text-container col-md-6">
            <div className="d-flex flex-column align-items-center justify-content-center p-5">
              <div className="image-container d-flex align-items-center justify-content-center p-5">
                <img
                  width={450}
                  height={450}
                  className="p-5 mt-5 rounded-circle img-responsive"
                  src="madern turkish  ee92b748-76ee-4b20-adcc-c57c545472c5.png"
                  alt=""
                />
              </div>
              <h1 className="fw-bolder p-2 text-center">Vizyonumuz</h1>
              <p className="lead flex-lg-nowrap parag text-center p-5 mx-5 ">
                Hukukun dinamik dünyasında müvekkillerimize rehberlik etmek ve
                onların haklarını korumak için çaba harcıyoruz. Adalet,
                dürüstlük ve profesyonellik ilkeleri doğrultusunda,
                müvekkillerimizin güvenini kazanmayı amaçlıyoruz.
              </p>
            </div>
          </div>

          <div className="text-container col-md-6">
            <div className="d-flex flex-column align-items-center justify-content-center p-5">
              <div className="image-container d-flex align-items-center justify-content-center p-5">
                <img
                  width={450}
                  height={450}
                  className="p-5 mt-5 rounded-circle img-responsive "
                  src="right law justi dcf8afe8-a2e2-4975-b93d-bd8721eb1997.png"
                  alt=""
                />
              </div>
              <h1 className="fw-bolder p-2 text-center">Ekibimiz</h1>
              <p className="lead flex-md-nowrap parag text-center p-5 mx-5">
                Erdem Hukuk Bürosu'nun başarısının temelinde uzman avukat
                kadromuz bulunmaktadır. Hukukun farklı alanlarında uzmanlıkla
                donanmış olan ekibimiz, müvekkillerimize geniş bir yelpazede
                hizmet sunabilmektedir.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Link
        to={"/about"}
        className="link-to-about"
        style={{ display: "none" }}
      />
      <FooterComp />
    </>
  );
};

export default AboutUsComp;
