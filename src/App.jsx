import {
  //routes
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
//pages
import TopBar from "./components/navigation/TopBar";
import Home from "./pages/Home";
import Portfolio from "./components/portfolio/Portfolio";
import Testimonials from "./components/testimonials/Testimonials";
import Works from "./components/works/Works";
import "./sass/main.scss";
import Intro from "./components/intro/Intro";
import Contact from "./components/contact/Contact";

const App = () => {
  return (
    <>
      <div className="app">
        <TopBar />
        <div className="sections">
          <Intro />
          <Portfolio />
          <Works />
          <Testimonials />
          <Contact />
        </div>
      </div>
    </>
  );
};

export default App;
