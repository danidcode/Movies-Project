import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { IconContext } from "react-icons";
import movieContext from "../context/Movies/MovieContext";

const Footer = () => {
  const { isLoading } = useContext(movieContext);
  return (
    <>
    {isLoading ? null :<div className="footer" data-aos="fade-up"
    data-aos-duration="500"
     data-aos-offset="0"
     >
      <div className="footer-icons" >
        <div className="footer-icons-linkedin">
          <a href="https://www.linkedin.com/in/daniel-d%C3%A9niz-vega-0276321a9/" target="_blank" >
            <IconContext.Provider
              value={{ color: "0A66C2", className: "global-class-name" }}
            >
              <BsLinkedin size={35}></BsLinkedin>
            </IconContext.Provider>
            </a>
        </div>
        <div className="footer-icons-github">
        <a href="https://github.com/danidcode" target="_blank" >
          <IconContext.Provider
            value={{ color: "white", className: "global-class-name" }}
          >
            
            <BsGithub size={35}></BsGithub>
          </IconContext.Provider>
          </a>
        </div>
      </div>
      <div className="footer-powered">
        <span>Powered by danidcode ©2022</span>
      </div>
    </div> }
    
    </>);
};
export default Footer;
