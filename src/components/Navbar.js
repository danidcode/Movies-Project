import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AiOutlineHome } from "react-icons/ai";
import { FiLogIn } from "react-icons/fi";
import movieContext from "../context/Movies/MovieContext";
const Navbar = () => {
  const {setLoading} = useContext(movieContext);
  return (
    <div className="navbar">
      <div className="nav_links">
        <Link className="nav_links_home" to="/Movies-Project" onClick={()=>setLoading(true)}>
          {" "}
          <AiOutlineHome size={60} />{" "}
        </Link>
        <Link className="nav_links_login" to="/Movies-Project/login"  onClick={()=>setLoading(true)}>
          {" "}
          <FiLogIn size={30} />{" "}
        </Link>
      </div>
    </div>
  );
};
export default Navbar;
