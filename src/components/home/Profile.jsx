import prof from "../../images/pixlr-bg-result.png";

const Profile = () => {
  return (
    <>
      <div className="profileContainer" id="homeId">
        <div className="firstHeader">
          <h1>Velkommen til min portfolio nettside</h1>
        </div>
        <div className="profileWrapper">
          <div className="alignHeaderText">
            <div className="headerProfile">
              <h1 className="">FRONT-END </h1>
              <span className="utvikler">UTVIKLER</span>
            </div>
            <div className="profileText">
              <p>
                Hei! Mitt navn er Ole. Jeg bor i Bergen og har akkurat fullført
                min utdanning for å bli front-end utvikler. Dette er noe jeg
                liker godt å holde på med og ønsker å arbeide med fremover.
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
