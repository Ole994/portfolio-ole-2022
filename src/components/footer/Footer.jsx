import { AiOutlineMail } from "react-icons/ai";
import { BsFillTelephoneFill } from "react-icons/bs";

const Footer = () => {
  return (
    <>
      <div className="footerDiv">
        <footer>
          <div className="footer">
            <section>
              <h3>Svar og spørsmål</h3>
              <p>
                Jeg er som oftest aktiv på sosiale medier, telefon og email, og
                svarer som regel i løpet av kort tid dersom du vil kontakte meg.
              </p>
            </section>
            <section>
              <h3>Språk</h3>
              <a href="#">Norsk</a>
              <a href="#">Engelsk</a>
              <a href="#">Spansk</a>
            </section>
            <section>
              <h3>Hobbier</h3>
              <a href="#">Trening</a>
              <a href="#">Musikk/ djing</a>
              <a href="#">Sosialisering</a>
              <a href="#">Gaming</a>
            </section>
            <section>
              <h3>Du kan kontakte meg på</h3>
              <a href="#">
                <span>
                  <i>
                    <AiOutlineMail />
                  </i>
                </span>
                <span className="spanHover">ole@korvald.no</span>
              </a>
              <a href="#">
                <span>
                  <i>
                    {" "}
                    <BsFillTelephoneFill />{" "}
                  </i>
                </span>
                <span className="spanHover">+ 47 909 66 971</span>
              </a>
            </section>
          </div>
        </footer>
        <div className="sub-footer">
          Copyright ©2022 Alle rettigheter reservert | Ole Jørgen Korvald
        </div>
      </div>
    </>
  );
};
export default Footer;
