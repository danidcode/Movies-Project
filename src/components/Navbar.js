import React from 'react';
import { Link } from 'react-router-dom';
import {AiOutlineHome} from 'react-icons/ai'

const Navbar = () => {
  return (
      <div className='navbar'>
          <div className='nav_links'>
               <Link className='nav_links_home' to="/"> <AiOutlineHome size={60}/> </Link>          
               
          </div>
      </div>
  );
}
export default Navbar;