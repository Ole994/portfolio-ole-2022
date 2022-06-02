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

//pages

const App = () => {
  return (
    <>
      <div>
        {" "}
        <Nav />
        <Profile />
        <Works />
        <Footer />
      </div>
    </>
  );
};

export default App;
