import {
  AiFillHome,
  AiOutlineMail,
  AiFillGithub,
  AiFillLinkedin,
} from "react-icons/ai";
import { BsFillPersonFill, BsInstagram } from "react-icons/bs";
import { MdWorkspaces } from "react-icons/md";
import { FaFacebook } from "react-icons/fa";
import { useState } from "react";

import { GiHamburgerMenu } from "react-icons/gi";
import { useEffect } from "react";

//Mobile

const Nav = () => {
  const [isNavExpanded, setIsNavExpanded] = useState(true);
  function ScreenSize() {
    const [windowDimension, detectHW] = useState({
      minWidth: window.innerWidth,
    });
    const detectSize = () => {
      detectHW({
        minWidth: window.innerWidth,
      });
    };
    useEffect(() => {
      window.addEventListener("resize", detectSize);
      return () => {
        window.removeEventListener("resize", detectSize);
      };
    }, [windowDimension]);
    if (windowDimension.minWidth <= 900) return setIsNavExpanded(false);
    if (windowDimension.minWidth >= 900) return setIsNavExpanded(true);
  }
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
                href="#timeline"
                onClick={() => {
                  setIsNavExpanded(false);
                }}
              >
                <span className="icon">
                  <AiOutlineMail />
                </span>
                <span className="title">Timeline</span>
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
      {/* {isDesktopExpanded && (
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
                href="#timeline"
                onClick={() => {
                  setIsNavExpanded(false);
                }}
              >
                <span className="icon">
                  <AiOutlineMail />
                </span>
                <span className="title">Timeline</span>
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
        </div> */}
    </>
  );
};

export default Nav;
