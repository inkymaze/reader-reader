import React from 'react';
import { Link } from 'react-router-dom';


const Header = (props) => (
  <div className="homepageHeader">
      <div className='logoWithTitle'>
        <div className="header-link">
          <Link to="/" >
            Home
          </Link>
        </div>
        <div className="header-title">
          <h2 className="header-title">Reader-Reader</h2>
          <h3 className="header-description">The best blog posts, every day</h3>
        </div>
      </div>
  </div>
);

export default Header;
