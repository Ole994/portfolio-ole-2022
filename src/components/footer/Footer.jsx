import {
  AiFillHome,
  AiOutlineMail,
  AiFillGithub,
  AiFillLinkedin,
  AiFillPhone,
  GiWeightLiftingUp,
} from "react-icons/ai";

const Footer = () => {
  return (
    <>
      <div className="footerDiv">
        <footer>
          <div className="footer">
            <section className="footerSection">
              <h3>Svar og spørsmål</h3>
              <p>
                Jeg er som oftest aktiv på sosiale medier, telefon og email, og
                svarer som regel i løpet av kort tid dersom du vil kontakte meg.
              </p>
            </section>
            <section className="footerSection">
              <h3>Språk</h3>
              <span>
                {" "}
                <p>
                  <AiFillGithub />
                  Norsk
                </p>
              </span>
              <span>
                {" "}
                <p>
                  <AiFillGithub /> Engelsk
                </p>
              </span>
              <span>
                {" "}
                <p>
                  {" "}
                  <AiFillGithub />
                  Spansk
                </p>
              </span>
            </section>
            <section>
              <h3>Hobbier</h3>
              <span>
                {" "}
                <p>
                  <AiFillGithub />
                  Trening
                </p>
              </span>
              <span>
                {" "}
                <p>
                  <AiFillGithub />
                  Musikk/ djing
                </p>
              </span>
              <span>
                {" "}
                <p>
                  <AiFillGithub />
                  Sosialisering
                </p>
              </span>
              <span>
                {" "}
                <p>
                  <AiFillGithub />
                  Gaming
                </p>
              </span>
            </section>
            <section>
              <h3>Kontaktinformasjon</h3>
              <span href="ole@korvald.no">
                <p>
                  <AiOutlineMail />
                </p>

                <span>
                  <p>ole@korvald.no</p>{" "}
                </span>
              </span>
              <span href="+ 47 909 66 971">
                <span>
                  <p>
                    <AiFillPhone />+ 47 909 66 971
                  </p>{" "}
                </span>
              </span>
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
