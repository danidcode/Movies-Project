import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import {AiOutlineHome} from 'react-icons/ai'

const Navbar = () => {
    const [isHome, setIcon] = useState(null);

  return (
      <div className='navbar'>
          <div className='nav_links'>
               <Link className='nav_links_home' to="/"> <AiOutlineHome size={60}/> </Link>
              
               
          </div>
      </div>
  );
}
export default Navbar;