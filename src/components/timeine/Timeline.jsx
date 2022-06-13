import React from "react";

const Timeline = () => {
  return (
    <div className="timelineWrap" id="timeline">
      <div className="timeline">
        <h2 className="timeline-header">Utdanning</h2>
        {/* left box */}
        <div className="container left">
          <div className="txt-bubble">
            <h2>Front-end</h2>
            <h3>08.2020-06.22</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Aspernatur magnam, nemo odio cupiditate quod obcaecati pariatur
              dolorum voluptate, deserunt laudantium nam inventore doloremque
              dicta alias perspiciatis atque corporis libero dolorem!
            </p>
          </div>
        </div>
        {/* leftBox finish */}
        <div className="container right">
          <div className="txt-bubble">
            <h2>jobbår</h2>
            <h3>2019-2020</h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt
              corporis aut sequi! Vel eaque libero dolorum, omnis quasi
              distinctio accusamus expedita vero necessitatibus sapiente, dicta
              tempora cupiditate quae, velit culpa?
            </p>
          </div>
        </div>
        {/* Rightbox done */}
      </div>
    </div>
  );
};

export default Timeline;
