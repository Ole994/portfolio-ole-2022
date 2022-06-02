import React from "react";
import { Link } from "react-router-dom";
import {
  AiFillHome,
  AiOutlineMail,
  AiFillGithub,
  AiFillLinkedin,
} from "react-icons/ai";
import { BsFillPersonFill, BsInstagram } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";

const Nav = () => {
  return (
    <>
      <div className="navigation">
        <ul>
          <li>
            <Link to="/">
              <span className="icon">
                <AiFillHome></AiFillHome>
              </span>
              <span className="title">Home</span>
            </Link>
          </li>
          <li>
            <Link to="/">
              <span className="icon">
                <BsFillPersonFill></BsFillPersonFill>
              </span>
              <span className="title">About</span>
            </Link>
          </li>
          <li>
            <Link to="/">
              <span className="icon">
                <AiOutlineMail />
              </span>
              <span className="title">contact</span>
            </Link>
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
