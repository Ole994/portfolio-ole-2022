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
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae
            quae, dolore harum repudiandae cumque est earum? Cum dolorem magni
            aspernatur cupiditate atque quas voluptates delectus ullam
            perferendis nesciunt. Aspernatur, facere!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Intro;
