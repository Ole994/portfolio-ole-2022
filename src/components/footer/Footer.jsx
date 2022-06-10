const Footer = () => {
  return (
    <>
      <div className="footerDiv">
        <footer className="flex-rw">
          <ul className="footer-list-top">
            <li>
              <h4 className="footer-list-header">Hobbier</h4>
            </li>
            <li>
              <a
                href="/promos.html"
                className="generic-anchor footer-list-anchor"
                itemprop="significantLink"
              >
                Trening
              </a>
            </li>

            <li>
              <a
                href="/shop/about-show-schedule"
                className="generic-anchor footer-list-anchor"
                itemprop="significantLink"
              >
                Sosial
              </a>
            </li>
            <li>
              <a
                href="/shop/about-show-schedule"
                className="generic-anchor footer-list-anchor"
                itemprop="significantLink"
              >
                Musikk
              </a>
            </li>
          </ul>
          <ul className="footer-list-top">
            <li>
              <h4 className="footer-list-header">The Gift Selection</h4>
            </li>

            <li>
              <a
                href="/Angels/cat/id/70"
                className="generic-anchor footer-list-anchor"
              >
                ANGEL FIGURINES
              </a>
            </li>
            <li>
              <a
                href="/Home-Decor/cat/id/64"
                className="generic-anchor footer-list-anchor"
              >
                HOME DECOR
              </a>
            </li>
            <li>
              <a
                href="/Mugs/cat/id/32"
                className="generic-anchor footer-list-anchor"
              >
                MUGS
              </a>
            </li>
            <li>
              <a
                href="/Pet-Lover/cat/id/108"
                className="generic-anchor footer-list-anchor"
              >
                PET LOVER
              </a>
            </li>
          </ul>
          <ul className="footer-list-top">
            <li id="help">
              <h4 className="footer-list-header">Kontakt informasjon</h4>
            </li>
            <li>
              <a
                href="/shop/about-contact"
                className="generic-anchor footer-list-anchor"
                itemprop="significantLink"
              >
                ole@korvald.no
              </a>
            </li>
            <li>
              <a href="/faq.html" className="generic-anchor footer-list-anchor">
                +47 909 66 971
              </a>
            </li>
            <li id="find-a-store">
              <a
                href="/shop/store-locator"
                className="generic-anchor footer-list-anchor"
                itemprop="significantLink"
              >
                STORE LOCATOR
              </a>
            </li>
            <li id="user-registration">
              <a
                href="/shop/user-registration?URL="
                className="generic-anchor footer-list-anchor"
                itemprop="significantLink"
              >
                NEW USERS
              </a>
            </li>
            <li id="order-tracking">
              <a
                href="/shop/order-status"
                itemprop="significantLink"
                className="generic-anchor footer-list-anchor"
              >
                ORDER STATUS
              </a>
            </li>
          </ul>
          <section className="footer-social-section flex-rw">
            <span className="footer-social-overlap footer-social-connect">
              SOCIAL <span className="footer-social-small">media</span>
            </span>
            <span className="footer-social-overlap footer-social-icons-wrapper">
              <a
                href="https://www.pinterest.com/paviliongift/"
                className="generic-anchor"
                target="_blank"
                title="Pinterest"
                itemprop="significantLink"
              >
                <i className="fa fa-pinterest"></i>
              </a>
              <a
                href="https://www.facebook.com/paviliongift"
                className="generic-anchor"
                target="_blank"
                title="Facebook"
                itemprop="significantLink"
              >
                <i className="fa fa-facebook"></i>
              </a>
              <a
                href="https://twitter.com/PavilionGiftCo"
                className="generic-anchor"
                target="_blank"
                title="Twitter"
              >
                <i className="fa fa-twitter"></i>
              </a>
              <a
                href="http://instagram.com/paviliongiftcompany"
                className="generic-anchor"
                target="_blank"
                title="Instagram"
                itemprop="significantLink"
              >
                <i className="fa fa-instagram"></i>
              </a>
              <a
                href="https://www.youtube.com/channel/UCYgUODvd0qXbu_LkUWpTVEg"
                className="generic-anchor"
                target="_blank"
                title="Youtube"
                itemprop="significantLink"
              >
                <i className="fa fa-youtube"></i>
              </a>
              <a
                href="https://plus.google.com/+Paviliongift/posts"
                className="generic-anchor"
                target="_blank"
                title="Google Plus"
                itemprop="significantLink"
              >
                <i className="fa fa-google-plus"></i>
              </a>
            </span>
          </section>
          <section className="footer-bottom-section flex-rw">
            <div className="footer-bottom-wrapper">
              <i className="fa fa-copyright" role="copyright"></i> 2022{" "}
              <address className="footer-address" role="company address">
                Bergen,
              </address>
              <span className="footer-bottom-rights">
                {" "}
                - All Rights Reserved -{" "}
              </span>
            </div>
            <div className="footer-bottom-wrapper">
              <a
                href="/terms-of-use.html"
                className="generic-anchor"
                rel="nofollow"
              >
                Terms
              </a>{" "}
              |{" "}
              <a
                href="/privacy-policy.html"
                className="generic-anchor"
                rel="nofollow"
              >
                Privacy
              </a>
            </div>
          </section>
        </footer>
      </div>
    </>
  );
};

export default Footer;
