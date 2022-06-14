import firstWork from "../../images/high-end.jpg";
import secoundWork from "../../images/Skjermbilde-ca-framework.jpg";
import thirdWork from "../../images/bergen.jpg";

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
          <div className="workContainer">
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
                  </p>
                </div>
                <div className="workButton">
                  {" "}
                  <a
                    href="https://github.com/Ole994/semesterProjectWinter"
                    className="cross-fade"
                  >
                    Github
                  </a>
                  <a
                    href="https://tranquil-stroopwafel-744af4.netlify.app/"
                    className="cross-fade"
                  >
                    Live
                  </a>
                </div>
              </div>
            </div>
          </div>{" "}
          <div className="workContainer">
            <h2>Prosjekt Anatomi</h2>
            <div className="cardOne">
              <div className="imageContainerOne">
                <img src={secoundWork} alt="" className="workImages" />
              </div>{" "}
              <div className="flexButtonText">
                <div className="WorkDescription">
                  <p>
                    Her skulle vi lage et api for å hente ut data på nettsiden,
                    og vise at vi blant annet kunne lage en login side som
                    skulle ta brukeren videre til en admin side. Prosjektet er
                    under utvikling, og er ikke fullstendig designet eller på
                    noe vis komplett.
                  </p>
                </div>
                <div className="workButton">
                  {" "}
                  <a
                    href="https://github.com/Noroff-FEU-Assignments/js-frameworks-course-assignment-Ole994"
                    className="cross-fade"
                  >
                    Github
                  </a>
                  <a
                    href="https://stellular-scone-57fcd3.netlify.app/"
                    className="cross-fade"
                  >
                    Live
                  </a>
                </div>
              </div>
            </div>
          </div>
          {""}
          <div className="workContainer">
            <h2>Prosjekt Holidaze</h2>
            <div className="cardOne">
              <div className="imageContainerOne">
                <img src={thirdWork} alt="" className="workImages" />
              </div>{" "}
              <div className="flexButtonText">
                <div className="WorkDescription">
                  <p>
                    Holidaze er en hotellbookingside hvor man kan booke
                    hotellrom på mange hoteller i Bergen. Det er mulig på siden
                    å sende inn meldinger som man i tillegg til hotellbookingene
                    kan se og slette hvis ønskelig. For å gjøre dette må man
                    være logget inn med brukernavn og passord.
                  </p>
                </div>
                <div className="workButton">
                  {" "}
                  <a
                    href="https://github.com/Noroff-FEU-Assignments/project-exam-2-Ole994"
                    className="cross-fade"
                  >
                    Github
                  </a>
                  <a
                    href="https://idyllic-florentine-63f2fd.netlify.app/?fbclid=IwAR0TmuVyKHMlVR_nzdPKXpc4GMSrrj9HMkj0452uFYu94BtrQkHlj9IQwq8"
                    className="cross-fade"
                  >
                    Live
                  </a>
                </div>
              </div>
            </div>
          </div>
          {""}
        </div>
      </div>
    </>
  );
};

export default Works;
