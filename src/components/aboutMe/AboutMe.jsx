import React from "react";
import aboutMeImg from "../../images/wood-picture.jpg";

const Intro = () => {
  return (
    <div className="aboutMe">
      <div className="aboutMeWrapper">
        <div className="aboutMeImgBox">
          <img src={aboutMeImg} alt="" id="aboutMeId" className="aboutMeImg" />
        </div>

        <div className="aboutMeImgText">
          {" "}
          {/* <div className="about-header">
            <h1>About me</h1>
          </div> */}
          <div className="aboutName">
            <div className="myName">
              <p className="ojk">
                Ole <span>Jørgen </span>Korvald{" "}
              </p>
            </div>
            <p className="description">
              I dag studerer jeg Frontend utvikling på Noroff Fagskole i Bergen,
              og har blant hatt Javascript, HTML, CSS/SCSS og React som en del
              av pensum. Dette studie har vært gøy, spennende og lærerikt, og
              har gitt meg innsikt i hvordan jeg kan være med å bidra i den
              teknologiske utviklingen. <br /> <br /> Jeg gleder meg til å få
              praktisere dette og til å utvikle meg videre innen dette området.
              Før jeg startet på Noroff, har jeg tatt PT utdanning og årsstudie
              innen idrett, og jeg har jobbet med salg og kundebehandling. Dette
              har jeg trivdes veldig godt med, men har etter hvert blitt mer og
              mer interessert i teknologi og utvikling, og har derfor valgt å
              satse på dette. <br /> <br /> Jeg ønsker gjennom denne portfolioen
              å vise noe av det jeg kan innen koding og programmering, og
              forhåpentligvis nå ut til potensielle arbeidsgivere som finner
              denne nettsiden attraktiv.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
