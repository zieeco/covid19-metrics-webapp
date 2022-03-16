import React from 'react';
import { FaAngleLeft, FaMicrophone, FaCog } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Header = () => (
  <header className="flex">
    <ul className="flex">
      <li className="angle-span flex align-center">
        <Link to="/" className="flex align-center">
          <FaAngleLeft className="angle-left fw-2" />
          <span>COUNTRIES LIST</span>
        </Link>
      </li>
      <li className="flex mic-cog align-center">
        <FaMicrophone />
        <FaCog />
      </li>
    </ul>
  </header>
);

export default Header;
