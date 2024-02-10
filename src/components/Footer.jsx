import React from "react";

const Footer = () => {
  return (
    <footer>
      <div class="container">
        <div class="row">
          <div class="col-md-4">
            <h4>Hakkımızda</h4>
            <p>
              Erdem Hukuk Bürosu, hukuki çözümler sunan deneyimli bir avukat
              ekibiyle hizmet vermektedir.
            </p>
          </div>
          <div class="col-md-4">
            <h4>İletişim Bilgileri</h4>
            <p>Adres: Örnek Mahalle, Örnek Sokak No: 123, İstanbul</p>
            <p>Telefon: 555-555-5555</p>
            <p>E-posta: info@erdemhukuk.com</p>
          </div>
          <div class="col-md-4">
            <h4>Sosyal Medya</h4>
            <ul>
              <li>
                <a href="#" target="_blank">
                  Facebook
                </a>
              </li>
              <li>
                <a href="#" target="_blank">
                  Twitter
                </a>
              </li>
              <li>
                <a href="#" target="_blank">
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="bottom-bar">
        <p>&copy; 2024 Erdem Hukuk Bürosu. Tüm hakları saklıdır.</p>
      </div>
    </footer>
  );
};

export default Footer;
