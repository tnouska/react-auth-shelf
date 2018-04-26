import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => (
  <div className="navbar">
    <div>
      <ul>
        <li>
          <Link to="/viewitem">
            View All Items
          </Link>
        </li>
        <li>
          <Link to="/additem">
            Add an Item
          </Link>
        </li>
        <li>
          <Link to="/groupitem">
            View Items by Owner
          </Link>
        </li>
      </ul>
    </div>
  </div>
);

export default Nav;
