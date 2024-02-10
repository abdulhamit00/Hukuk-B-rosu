import React from "react";

const InfoComponent = () => {
  return (
    <div className=" ">
      <div className="d-flex flex-column  bg-body-tertiary mt-5 info  flex-md-row align-items-center justify-content-center ">
        <img
          className="p-5 image  "
          width={450}
          height={450}
          src="erdem man lawye 3c3320d4-b78e-422d-b9f3-2446c4787030.png"
          alt=""
        />

        <p className="lead p-5">
          Merhaba, Ben Erdem Sever! Erdem Hukuk Bürosu'na hoş geldiniz. Hukuki
          sorunlarınızla ilgili çözümler üretmek ve sizlere en iyi hizmeti
          sunmak için buradayım. Deneyimli ve uzman bir avukat ekibiyle
          birlikte, hukuki konularda size destek olmak amacıyla çalışıyoruz.
          Hukukun karmaşıklığına karşı mücadeleci bir anlayışla,
          müvekkillerimize etkin ve kaliteli hizmet sunma misyonu güdüyoruz.
          Sizin için adaleti sağlamak, haklarınızı korumak ve hukuki süreçlerde
          rehberlik etmek için buradayız. Erdem Hukuk Bürosu olarak, çeşitli
          hukuki alanlarda uzmanlık sunuyoruz. Ceza Hukuku, Aile Hukuku, Miras
          Hukuku, İş ve Sosyal Güvenlik Hukuku, Ticaret ve Şirketler Hukuku,
          İcra ve İflas Hukuku, Gayrimenkul ve İnşaat Hukuku, Tüketici Hukuku,
          Kişisel Verilerin Korunması Hukuku gibi konularda size yardımcı
          olmaktan memnuniyet duyarız. Erdem Sever olarak, sizlere hukuki
          çözümler sunmaktan gurur duyuyorum. İhtiyaçlarınız için bize ulaşın,
          size yardımcı olmaktan ve sorunlarınıza çözüm bulmaktan mutluluk
          duyacağız.
          <br />
          Saygılarımla,
          <span className="fw-bolder  mt-2 d-block name ">
            {" "}
            Av. Erdem Sever
          </span>
          <span className="fw-bolder fs-1 d-flex align-items-center justify-content-center">
            Erdem Hukuk Bürosu
          </span>
        </p>
      </div>
    </div>
  );
};

export default InfoComponent;
