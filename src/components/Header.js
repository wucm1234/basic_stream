import React from "react";
import { Link } from 'react-router-dom'
import GoogleAuto from './GoogleAuth'
const Header = () => {
  return (
      
    <div className="ui secondary pointing menu">
        <Link to='/' className='item'>
            Stream
        </Link>
        
      <div className="right menu">
          <Link to='/' className = 'item'>
              All stream
          </Link>
          <GoogleAuto></GoogleAuto>
      </div>
    </div>
  );
};

export default Header;
