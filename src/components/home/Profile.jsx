import prof from "../../images/pixlr-bg-result.png";

const Profile = () => {
  return (
    <>
      <div className="profileContainer" id="homeId">
        <div className="firstHeader">
          <h1>Welcome to my portfolio</h1>
        </div>
        <div className="profileWrapper">
          <div className="alignHeaderText">
            <div className="headerProfile">
              <h1 className="">FRONT-END </h1>
              <span className="">DEVELOPER</span>
            </div>

            <div className="profileText">
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem,
                dicta quas incidunt dignissimos atque reiciendis blanditiis
                minima ea, accusamus exercitationem corporis assumenda nostrum
                consectetur quaerat quae nobis adipisci minus ex.
              </p>
            </div>
          </div>{" "}
          <div className="imgProfileBox">
            <img src={prof} alt="profileImage" className="profileImg" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
