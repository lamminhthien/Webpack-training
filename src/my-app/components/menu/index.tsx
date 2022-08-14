import * as React from 'react';
import { Link } from 'react-router-dom';

import './style.scss';

const MainMenu = () => {
  return (
    <ul className='comp-main-menu'>
      <li>
        <Link to='/'>Home</Link>
      </li>
      <li>
        <Link to='/blog'>Blog</Link>
      </li>
      <li>
        <Link to='/about'>About</Link>
      </li>
    </ul>
  );
};

export default MainMenu;
