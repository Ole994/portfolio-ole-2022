import { AiFillHome, AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { BsFillPersonFill, BsInstagram } from "react-icons/bs";
import { MdWorkspaces } from "react-icons/md";
import { FaFacebook } from "react-icons/fa";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

//Mobile

const Nav = () => {
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  return (
    <>
      {" "}
      <GiHamburgerMenu
        className="hamburger-icon"
        onClick={() => {
          setIsNavExpanded(!isNavExpanded);
        }}
      />{" "}
      {isNavExpanded && (
        <div className="navigation-mobile">
          <ul>
            <li>
              <a
                href="#homeId"
                onClick={() => {
                  setIsNavExpanded(false);
                }}
              >
                <span className="icon">
                  <AiFillHome></AiFillHome>
                </span>
                <span className="title">Hjem</span>
              </a>
            </li>

            <li>
              <a
                href="#worksId"
                onClick={() => {
                  setIsNavExpanded(false);
                }}
              >
                <span className="icon">
                  <MdWorkspaces />
                </span>
                <span className="title">Mitt arbeid</span>
              </a>
            </li>
            <li>
              <a
                href="#aboutMeId"
                onClick={() => {
                  setIsNavExpanded(false);
                }}
              >
                <span className="icon">
                  <BsFillPersonFill />
                </span>
                <span className="title">Om meg</span>
              </a>
            </li>

            <li>
              <a
                href="https://www.facebook.com/ole994/"
                onClick={() => {
                  setIsNavExpanded(false);
                }}
              >
                <span
                  className="icon"
                  onClick={() => {
                    setIsNavExpanded(false);
                  }}
                >
                  <FaFacebook />
                </span>
                <span className="title">Facebook</span>
              </a>
            </li>
            <li>
              <a
                href="https://github.com/Ole994"
                onClick={() => {
                  setIsNavExpanded(false);
                }}
              >
                <span className="icon">
                  <AiFillGithub></AiFillGithub>
                </span>
                <span className="title">Github</span>
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/ole-korvald/"
                onClick={() => {
                  setIsNavExpanded(false);
                }}
              >
                <span className="icon">
                  <AiFillLinkedin></AiFillLinkedin>
                </span>
                <span className="title">LinkedIn</span>
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/ole994/"
                onClick={() => {
                  setIsNavExpanded(false);
                }}
              >
                <span className="icon">
                  <BsInstagram></BsInstagram>
                </span>
                <span className="title">Instagram</span>
              </a>
            </li>
          </ul>
        </div>
      )}{" "}
      {/* desktop */}{" "}
      <div className="navigation">
        <ul>
          <li>
            <a
              href="#homeId"
              onClick={() => {
                setIsNavExpanded(false);
              }}
            >
              <span className="icon">
                <AiFillHome></AiFillHome>
              </span>
              <span className="title">Hjem</span>
            </a>
          </li>

          <li>
            <a
              href="#worksId"
              onClick={() => {
                setIsNavExpanded(false);
              }}
            >
              <span className="icon">
                <MdWorkspaces />
              </span>
              <span className="title">Mitt arbeid</span>
            </a>
          </li>
          <li>
            <a
              href="#aboutMeId"
              onClick={() => {
                setIsNavExpanded(false);
              }}
            >
              <span className="icon">
                <BsFillPersonFill />
              </span>
              <span className="title">Om meg</span>
            </a>
          </li>

          <li>
            <a
              href="https://www.facebook.com/ole994/"
              onClick={() => {
                setIsNavExpanded(false);
              }}
            >
              <span
                className="icon"
                onClick={() => {
                  setIsNavExpanded(false);
                }}
              >
                <FaFacebook />
              </span>
              <span className="title">Facebook</span>
            </a>
          </li>
          <li>
            <a
              href="https://github.com/Ole994"
              onClick={() => {
                setIsNavExpanded(false);
              }}
            >
              <span className="icon">
                <AiFillGithub></AiFillGithub>
              </span>
              <span className="title">Github</span>
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/ole-korvald/"
              onClick={() => {
                setIsNavExpanded(false);
              }}
            >
              <span className="icon">
                <AiFillLinkedin></AiFillLinkedin>
              </span>
              <span className="title">LinkedIn</span>
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/ole994/"
              onClick={() => {
                setIsNavExpanded(false);
              }}
            >
              <span className="icon">
                <BsInstagram></BsInstagram>
              </span>
              <span className="title">Instagram</span>
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Nav;
