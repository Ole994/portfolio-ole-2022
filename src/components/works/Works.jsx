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
              <div className="WorkDescription">
                <p>
                  Hifi-Club er en tenkt nettside til en butikk som selger
                  høyttalere og tv-er. Kvalitetene er av høy standard og er
                  tenkt til de som virkelig er interessert i lyd og bilde, samt
                  er villig til å betale litt ekstra for det.
                </p>
              </div>
              <div className="workButtonOne">
                {" "}
                <a href="https://github.com/Noroff-FEU-Assignments/project-exam-2-Ole994">
                  <Button className="buttonComponent" />
                </a>
              </div>
            </div>{" "}
          </div>
          <div className="workContainerOne">
            <h2>Prosjekt Anatomi</h2>
            <div className="cardOne">
              <div className="imageContainerOne">
                <img src={secoundWork} alt="" className="workImages" />
              </div>
              <div className="WorkDescription">
                <p>
                  Her skulle vi lage et api for å hente ut data på nettsiden, og
                  vise at vi blant annet kunne lage en login side som skulle ta
                  brukeren videre til en admin side. Prosjektet er under
                  utvikling.
                  {/* og er ikke fullstendig designet eller på noe vis
                  komplett.  */}
                </p>
                <div className="workButtonTwo">
                  <a href="https://github.com/Noroff-FEU-Assignments/js-frameworks-course-assignment-Ole994">
                    <Button />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="workContainerOne">
            <h2> Prosjekt Hotell Bookings</h2>
            <div className="cardOne">
              {""}
              <div className="imageContainerOne">
                <a href="">
                  <img src={thirdWork} alt="" className="workImages" />
                </a>
              </div>
              {""}

              <div className="WorkDescription">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Eligendi asperiores libero nam cumque rerum mollitia dolores
                  assumenda eveniet at odio. Obcaecati deserunt eaque quidem
                  omnis nobis harum quae quod eveniet!
                </p>
              </div>
              <div className="workButtonThree">
                <a href="https://github.com/Ole994/semesterProjectWinter">
                  <Button />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Works;
