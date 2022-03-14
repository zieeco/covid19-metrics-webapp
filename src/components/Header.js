import React from 'react';
import { FaAngleLeft, FaMicrophone, FaCog } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Header = () => (
  <header>
    <ul>
      <li>
        <Link to="/">
          <FaAngleLeft />
          <span>COUNTRIES LIST</span>
        </Link>
      </li>
      <li>
        <FaMicrophone />
        <FaCog />
      </li>
    </ul>
  </header>
);

export default Header;
