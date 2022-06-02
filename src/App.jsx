import {
  //routes
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import "./sass/main.scss";
import Profile from "./components/home/Profile";
import Nav from "./components/nav/Nav";
//pages

const App = () => {
  return (
    <>
      <div>
        <Nav />
        <Profile />
      </div>
    </>
  );
};

export default App;
