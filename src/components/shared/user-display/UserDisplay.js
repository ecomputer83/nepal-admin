import React from 'react';
import { Link } from 'react-router-dom';

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
            className="text-dark">IPMAN</span> <i data-feather="chevron-down"
              className="svg-icon"></i></span>
        </a>
        <div className="dropdown-menu dropdown-menu-right user-dd animated flipInY">
          <Link to="/" className="dropdown-item"> <i data-feather="user" className="svg-icon mr-2 ml-1"></i>My Profile</Link>
          <Link to="/" className="dropdown-item"><i data-feather="settings" className="svg-icon mr-2 ml-1"></i>Account Setting</Link>
          {divider}
          <Link to="/" className="dropdown-item"><i data-feather="log-out" className="svg-icon mr-2 ml-1"></i>Logout</Link>
        </div>
      </li>
    </ul>
  )
}

export default UserDisplay;