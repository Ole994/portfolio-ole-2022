import React from "react";
import { Link } from "react-router-dom";
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

//Mobile

const Nav = () => {
  const [isNavExpanded, setIsNavExpanded] = useState(true);

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
              <a href="#homeId">
                <span className="icon">
                  <AiFillHome></AiFillHome>
                </span>
                <span className="title">Fremside</span>
              </a>
            </li>

            <li>
              <a href="#worksId">
                <span className="icon">
                  <MdWorkspaces />
                </span>
                <span className="title">Mitt arbeid</span>
              </a>
            </li>
            <li>
              <a href="#aboutMeId">
                <span className="icon">
                  <BsFillPersonFill />
                </span>
                <span className="title">Om meg</span>
              </a>
            </li>
            <li>
              <a href="#contactId">
                <span className="icon">
                  <AiOutlineMail />
                </span>
                <span className="title">Contact</span>
              </a>
            </li>
            <li>
              <a href="https://www.facebook.com/ole994/">
                <span className="icon">
                  <FaFacebook />
                </span>
                <span className="title">Facebook</span>
              </a>
            </li>
            <li>
              <a href="https://github.com/Ole994">
                <span className="icon">
                  <AiFillGithub></AiFillGithub>
                </span>
                <span className="title">Github</span>
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/ole-korvald/">
                <span className="icon">
                  <AiFillLinkedin></AiFillLinkedin>
                </span>
                <span className="title">LinkedIn</span>
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/ole994/">
                <span className="icon">
                  <BsInstagram></BsInstagram>
                </span>
                <span className="title">Instagram</span>
              </a>
            </li>
          </ul>
        </div>
      )}{" "}
    </>
  );
};

export default Nav;
