import React from 'react';
import { NavLink } from 'react-router-dom';

import home from 'assets/icons/home.svg';
import layers from 'assets/icons/layers.svg';
import logout from 'assets/icons/logout.svg';
import creditCard from 'assets/icons/credit-card.svg';
import info from 'assets/icons/info.svg';

const LeftNav = () => {

  return (
    <nav className="left-sidebar" data-sidebarbg="skin6">
      <div className="scroll-sidebar" data-sidebarbg="skin6">
        <nav className="sidebar-nav">
          <ul id="sidebarnav">
            <li className="sidebar-item">
              <NavLink to="/credit-approval" activeClassName="navbar__link--active" className="sidebar-link sidebar-link"
                aria-expanded="false">
                <img src={home} className="feather-icon" alt="home" />
                <span
                  className="hide-menu">Approve Credit</span></NavLink>
            </li>
           
            <li className="sidebar-item"> <NavLink to="/order-management" activeClassName="navbar__link--active" className="sidebar-link sidebar-link"
              aria-expanded="false">
              <img src={layers} className="feather-icon" alt="layers" />
              <span
                className="hide-menu">Confirmed Order</span></NavLink></li>
            <li className="sidebar-item"> <NavLink to="/payments" activeClassName="navbar__link--active" className="sidebar-link sidebar-link"
              aria-expanded="false">
              <img src={creditCard} className="feather-icon" alt="creditCard" />
              <span
                className="hide-menu">Confirm Order Payment</span></NavLink></li>
            <li className="sidebar-item"> <NavLink to="/articles" activeClassName="navbar__link--active" className="sidebar-link sidebar-link"
              aria-expanded="false">
              <img src={info} className="feather-icon" alt="info" />
              <span
                className="hide-menu">Articles</span></NavLink></li>
             <li className="sidebar-item"> <NavLink to="/user-management" activeClassName="navbar__link--active" className="sidebar-link sidebar-link"
              aria-expanded="false">
              <img src={home} className="feather-icon" alt="home" />
              <span
                className="hide-menu">Manage User</span></NavLink></li>
            <li className="sidebar-item"> <NavLink to="/admin-management" activeClassName="navbar__link--active" className="sidebar-link sidebar-link"
              aria-expanded="false">
              <img src={home} className="feather-icon" alt="home" />
              <span
                className="hide-menu">Manage Admin</span></NavLink></li>
            <li className="sidebar-item"> <NavLink exact to="/log-out" activeClassName="navbar__link--active" className="sidebar-link sidebar-link"
              aria-expanded="false">
              <img src={logout} className="feather-icon" alt="logout" />
              <span className="hide-menu">Logout</span></NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </nav>
  )
}

export default LeftNav;