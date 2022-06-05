import firstWork from "../../images/bergen.jpg";

const Works = () => {
  return (
    <>
      <div className="works" id="worksId">
        <h1> Mine prosjekter</h1>

        <div className="work-wrap">
          <div className="workContainerOne">
            <h2>Prosjekt for en hifi butikk</h2>
            <div className="cardOne">
              <div className="imageContainerOne">
                <img src={firstWork} alt="" className="workImages" />
              </div>
            </div>
          </div>
          <div className="workContainerOne">
            <h2>skoleoppgave</h2>
            <div className="cardOne">
              <div className="imageContainerOne">
                <img src={firstWork} alt="" className="workImages" />
              </div>
            </div>
          </div>
          <div className="workContainerOne">
            <h2>Hotell booking side</h2>
            <div className="cardOne">
              <div className="imageContainerOne">
                <img src={firstWork} alt="" className="workImages" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Works;
