import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import user from 'assets/icons/user.svg';
import settings from 'assets/icons/settings.svg';
import logout from 'assets/icons/logout.svg';
import chevronDown from 'assets/icons/chevron-down.svg';

let divider = <div className="dropdown-divider"></div>;

const UserDisplay = () => {
  return (
    <ul className="navbar-nav float-right">
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="!#" data-toggle="dropdown"
          aria-haspopup="true" aria-expanded="false">
          <img src="assets/images/users/profile-pic.jpg" alt="user" className="rounded-circle"
            width="40" />
          <span className="ml-2 d-none d-lg-inline-block"><span>Hello,</span> <span
            className="text-dark">IPMAN</span>
            <img src={chevronDown} className="svg-icon mr-2 ml-1" alt="chevronDown" />
          </span>
        </a>
        <div className="dropdown-menu dropdown-menu-right user-dd animated flipInY">
          <Link to="/" className="dropdown-item">
            <img src={user} className="svg-icon mr-2 ml-1" alt="user" />
          My Profile</Link>
          <Link to="/" className="dropdown-item">
            <img src={settings} className="svg-icon mr-2 ml-1" alt="settings" />
            Account Setting</Link>
          {divider}
          <Link to="/" className="dropdown-item">
            <img src={logout} className="svg-icon mr-2 ml-1" alt="logout" />
            Logout</Link>
        </div>
      </li>
    </ul>
  )
}

export default UserDisplay;