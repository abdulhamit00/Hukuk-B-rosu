import React from "react";
import HeaderComp from "../components/HeaderComp";
import FooterComp from "../components/FooterComp";

// Resimlerin yollarını güncelleyin, gerekirse dosya adlarını kontrol edin.
import slide_image_1 from "/right law justi dcf8afe8-a2e2-4975-b93d-bd8721eb1997.png";
import slide_image_2 from "/madern turkish  ee92b748-76ee-4b20-adcc-c57c545472c5.png";
import slide_image_3 from "/inheritance law ad9fb4e3-fb16-4ec4-a144-b6539cbcf0ec.png";
import slide_image_4 from "/labor and socia dac49a85-cb04-4d92-9e51-e80066dababf.png";
import slide_image_5 from "/bolek-hukuk-ticaret-hukuku.jpg";
import slide_image_6 from "/icra-ve-iflas-hukuku.jpg";
import slide_image_7 from "/gayrimenkul-tasinmaz-insaat-hukuku.jpg";
import slide_image_8 from "/tuketici-hukuku-001-b.jpg";
import slide_image_9 from "/kisisel-verilerin-korunmasi-001-b.jpg";
import { Link } from "react-router-dom";

const Articles = () => {
  return (
    <>
      <HeaderComp />

      <div className="d-flex flex-wrap gap-5 align-items-stretch justify-content-center shad mt-5  ">
        {Array.from({ length: 9 }, (_, index) => (
          <div
            className="card img-shadow"
            style={{ width: "18rem" }}
            key={index}
          >
            <img
              className="card-img-top  "
              src={getSlideImage(index + 1)}
              alt={`Kart resmi ${index + 1}`}
              style={{ height: "250px", objectFit: "cover" }}
            />
            <div className="card-body d-flex flex-column">
              <h5 className="card-title">{getCardTitle(index + 1)}</h5>
              <p className="card-text">{getCardText(index + 1)}</p>
              <div className="mt-auto">
                <button
                  className="btn btn-primary"
                  onClick={() =>
                    handleMoreButtonClick(
                      getSlugFromTitle(getCardTitle(index + 1))
                    )
                  }
                >
                  Daha Fazla Oku
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Link
        to={"/article"}
        className="link-to-about"
        style={{ display: "none" }}
      />

      <FooterComp />
    </>
  );
};

// Yardımcı fonksiyonlar
const getSlideImage = (index) => {
  return slideImages[index - 1];
};

const getCardTitle = (index) => {
  return cardTitles[index - 1];
};

const getCardText = (index) => {
  return cardTexts[index - 1];
};

const getSlugFromTitle = (title) => {
  return title.toLowerCase().replace(/\s+/g, "-");
};

const handleMoreButtonClick = (slug) => {
  // Burada "Daha Fazla Oku" butonuna tıklandığında yapılacak işlemleri tanımlayabilirsiniz.
  console.log(`Daha Fazla Oku butonuna tıklandı. Slug: ${slug}`);
  // Yönlendirme ya da başka işlemler ekleyebilirsiniz.
};

// Resimlerin ve kart içeriklerinin listesi
const slideImages = [
  slide_image_1,
  slide_image_2,
  slide_image_3,
  slide_image_4,
  slide_image_5,
  slide_image_6,
  slide_image_7,
  slide_image_8,
  slide_image_9,
];

const cardTitles = [
  "Ceza Hukuku: Suç ve Cezanın Adalet Sistemi Üzerindeki Rolü",
  "Ticaret Hukuku Kapsamında İşletmelerin Sorumlulukları",
  "Toplumsal Cinsiyet ve Hukuk",
  "Aile Hukuku Perspektifinden Boşanma Süreçleri",
  "Miras Hukuku",
  "İcra ve İflas Hukuku: Borçlar ve Alacaklar Yönetimi",
  "Tüketici Hakları: Alıcı ve Satıcı Haklarındaki Güncel Değişiklikler",
  "Kurumsal Hukuk: Şirketlerin Yasal Yükümlülükleri ve İşleyişi",
  "Kişisel Verilerin Korunması: Veri Güvenliği ve Mahremiyet İlkeleri",
];

const cardTexts = [
  "Ceza hukuku, toplumda adaletin sağlanmasında kilit bir rol oynar. Suç ve ceza ilişkisi üzerine derinlemesine bir bakış.",
  "Ticaret hukuku altında işletmelerin taşıdığı sorumluluklar ve bu sorumlulukların işletme yönetimine etkisi.",
  "Cinsiyet eşitliği ve hukuki perspektif içinde toplumsal cinsiyet konularına dair güncel bilgiler.",
  "Boşanma süreçlerine aile hukuku bakış açısıyla yaklaşım ve önemli hukuki konular.",
  "Mirasın hukuki boyutları ve miras konularında karşılaşılan yaygın sorunlar.",
  "İcra ve iflas süreçlerindeki hukuki düzenlemeler, borçlar ve alacaklar yönetimi.",
  "Tüketici haklarına dair güncel yasal düzenlemeler ve alıcı-satıcı ilişkilerindeki değişiklikler.",
  "Şirketlerin hukuki yükümlülükleri, kurumsal hukuk perspektifinden işleyiş ve yönetim.",
  "Kişisel verilerin hukuki korunması, veri güvenliği ve mahremiyet ilkelerine dair bilgiler.",
];

export default Articles;
