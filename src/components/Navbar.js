import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineHome } from "react-icons/ai";
import { FiLogIn } from "react-icons/fi";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="nav_links">
        <Link className="nav_links_home" to="/Movies-Project">
          {" "}
          <AiOutlineHome size={60} />{" "}
        </Link>
        <Link className="nav_links_login" to="/Movies-Project/login">
          {" "}
          <FiLogIn size={30} />{" "}
        </Link>
      </div>
    </div>
  );
};
export default Navbar;
