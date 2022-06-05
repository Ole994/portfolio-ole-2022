import firstWork from "../../images/bergen.jpg";
import Button from "../button/Button";
import { AiFillGithub } from "react-icons/ai";

const Works = () => {
  return (
    <>
      <div className="works" id="worksId">
        <h1> Mine prosjekter</h1>

        <div className="work-wrap">
          <div className="workContainerOne">
            <h2>Hifi-Club</h2>
            <div className="cardOne">
              <div className="imageContainerOne">
                <img src={firstWork} alt="" className="workImages" />
              </div>{" "}
              <div className="WorkDescription">
                <p>
                  Hifi-Club er en tenkt nettside til en butikk som selger
                  høyttalere og tv-er. Kvalitetene er av høy standard og er ofte
                  tenkt til de som virkelig er interessert i lyd og bilde, samt
                  er villig til å betale litt ekstra for det.
                  <br /> <br /> Dette var en skoleoppgave vi fikk gjøre før jul
                  2021, og vi hadde 5 uker på oss til å levere.
                </p>
              </div>
              <div className="workButton">
                {" "}
                <Button className="buttonComponent" />
                <AiFillGithub />
              </div>
            </div>{" "}
          </div>
          <div className="workContainerOne">
            <h2>skoleoppgave</h2>
            <div className="cardOne">
              <div className="imageContainerOne">
                <img src={firstWork} alt="" className="workImages" />
              </div>
              <div className="WorkDescription">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Eligendi asperiores libero nam cumque rerum mollitia dolores
                  assumenda eveniet at odio. Obcaecati deserunt eaque quidem
                  omnis nobis harum quae quod eveniet!
                </p>
              </div>
              <div className="workButton">
                <Button />
              </div>
            </div>
          </div>
          <div className="workContainerOne">
            <h2>Hotell booking side</h2>
            <div className="cardOne">
              {""}
              <div className="imageContainerOne">
                <img src={firstWork} alt="" className="workImages" />
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

              <div className="workButton">
                <Button />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Works;
