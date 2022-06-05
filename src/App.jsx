import {
  //routes
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import "./sass/main.scss";
import Profile from "./components/home/Profile";
import Nav from "./components/nav/Nav";
import Footer from "./components/footer/Footer";
import Works from "./components/works/Works";
import AboutMe from "./components/aboutMe/AboutMe";

//pages

const App = () => {
  return (
    <>
      <div>
        {" "}
        <Nav />
        <div className="gridMain">
          <Profile />
          <Works />
          <AboutMe />
          <Footer />
        </div>
      </div>
    </>
  );
};

export default App;
