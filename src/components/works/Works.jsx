import firstWork from "../../images/high-end.jpg";
import secoundWork from "../../images/Skjermbilde-ca-framework.jpg";
import thirdWork from "../../images/bergen.jpg";

import Button from "../button/Button";
import { AiFillGithub } from "react-icons/ai";

const Works = () => {
  return (
    <>
      {" "}
      <div className="headerWork">
        <h1> Mine prosjekter</h1>
      </div>
      <div className="works" id="worksId">
        <div className="work-wrap">
          {" "}
          <div className="workContainerOne">
            <h2>Prosjekt High-end Club</h2>
            <div className="cardOne">
              <div className="imageContainerOne">
                <img src={firstWork} alt="" className="workImages" />
              </div>{" "}
              <div className="flexButtonText">
                <div className="WorkDescription">
                  <p>
                    Hifi-Club er en tenkt nettside til en butikk som selger
                    høyttalere og tv-er. Kvalitetene er av høy standard og er
                    tenkt til de som virkelig er interessert i lyd og bilde,
                    samt er villig til å betale litt ekstra for det.
                    <br /> <br /> Dette var en skoleoppgave vi fikk gjøre før
                    jul 2021, og vi hadde 5 uker på oss til å levere.
                  </p>
                </div>
                <div className="workButton">
                  {" "}
                  <a href="https://github.com/Noroff-FEU-Assignments/project-exam-2-Ole994">
                    <Button className="buttonComponent" />
                  </a>
                </div>
              </div>
            </div>{" "}
          </div>
          <div className="workContainerOne">
            <h2>Prosjekt Anatomi</h2>
            <div className="cardOne">
              <div className="imageContainerOne">
                <img src={secoundWork} alt="" className="workImages" />
              </div>

              <div className="flexButtonText">
                <div className="WorkDescription">
                  <p>
                    Her skulle vi lage et api for å hente ut data på nettsiden,
                    og vise at vi blant annet kunne lage en login side som
                    skulle ta brukeren videre til en admin side. Prosjektet er
                    under utvikling, og er ikke fullstendig designet eller på
                    noe vis komplett.
                  </p>
                  <a href="">
                    <p>Her kan du se live versjon av oppgaven</p>
                  </a>
                </div>
                <div className="workButton">
                  <a href="https://github.com/Noroff-FEU-Assignments/js-frameworks-course-assignment-Ole994">
                    <Button />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="workContainerOne">
            <h2>Prosjekt hotellbooking</h2>
            <div className="cardOne">
              <div className="imageContainerOne">
                <img src={thirdWork} alt="" className="workImages" />
              </div>

              <div className="flexButtonText">
                <div className="WorkDescription">
                  <p>
                    Holidaze er en hotellbookingside hvor man kan booke
                    hotellrom på mange hoteller i Bergen. Det er mulig på siden
                    å sende inn meldinger som man i tillegg til hotellbookingene
                    kan se og slette hvis ønskelig. For å gjøre dette må man
                    være logget inn med brukernavn og passord.{" "}
                  </p>
                  <a href="https://idyllic-florentine-63f2fd.netlify.app/?fbclid=IwAR3tS_kABVJjvXs7D4T0E5D9VSIybSf40WD34elyMgvYOhOkQcaWM3lqPUc">
                    <p>Her kan du se live versjon av oppgaven</p>
                  </a>
                </div>
                <div className="workButton">
                  <a href="https://github.com/Noroff-FEU-Assignments/js-frameworks-course-assignment-Ole994">
                    <Button />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Works;
