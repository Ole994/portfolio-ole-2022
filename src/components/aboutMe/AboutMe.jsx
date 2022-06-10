import React from "react";
import aboutMeImg from "../../images/wood-picture.jpg";

const Intro = () => {
  return (
    <div className="aboutMe" id="aboutMeId">
      <div className="aboutMeWrapper">
        <div className="aboutMeImgBox">
          <img src={aboutMeImg} alt="" className="aboutMeImg" />
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
              eg er nyutdannet Frontend-utvikler og har tatt utdanning ved
              Noroff Fagskole i Bergen. Her har jeg blant annet hatt Javascript,
              HTML, CSS/SCSS og React som pensum. Dette studie har vært
              interessant og lærerikt, og har gitt meg innsikt i et spennende
              område som jeg ønsker å videreutvikle meg innen.
              <br />
              <br />
              Jeg gleder meg til å praktisere dette og til å utvikle meg videre.
              Jeg har tidligere tatt PT utdanning og årsstudie innen idrett, og
              jeg har jobbet med salg og kundebehandling. Dette har jeg trivdes
              veldig godt med, men er etter hvert blitt mer og mer interessert i
              teknologi. Jeg har derfor valgt å satse på dette. <br />
              <br /> Jeg ønsker gjennom denne portfolien å vise noe av det jeg
              har lært innen koding og programmering, og forhåpentligvis nå ut
              til potensielle arbeidsgivere som finner denne nettsiden
              attraktiv.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
