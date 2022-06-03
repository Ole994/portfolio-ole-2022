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

const Nav = () => {
  return (
    <>
      <div className="navigation">
        <ul>
          <li>
            <a href="#homeId">
              <span className="icon">
                <AiFillHome></AiFillHome>
              </span>
              <span className="title">Home</span>
            </a>
          </li>

          <li>
            <a href="#worksId">
              <span className="icon">
                <MdWorkspaces />
              </span>
              <span className="title">Works</span>
            </a>
          </li>
          <li>
            <a href="#aboutMeId">
              <span className="icon">
                <BsFillPersonFill />
              </span>
              <span className="title">About</span>
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
            <Link to="/">
              <span className="icon">
                <FaFacebook />
              </span>
              <span className="title">Facebook</span>
            </Link>
          </li>
          <li>
            <Link to="/">
              <span className="icon">
                <AiFillGithub></AiFillGithub>
              </span>
              <span className="title">Github</span>
            </Link>
          </li>
          <li>
            <Link to="/">
              <span className="icon">
                <AiFillLinkedin></AiFillLinkedin>
              </span>
              <span className="title">LinkedIn</span>
            </Link>
          </li>
          <li>
            <Link to="/">
              <span className="icon">
                <BsInstagram></BsInstagram>
              </span>
              <span className="title">Instagram</span>
            </Link>
          </li>
        </ul>
      </div>{" "}
    </>
  );
};

export default Nav;
