import React from 'react';

import UserDisplay from '../user-display/UserDisplay';


const HeaderNav = () => {
  return (
    <header className="topbar" data-navbarbg="skin6">
      <nav className="navbar top-navbar navbar-expand-md">
        <div className="navbar-header" data-logobg="skin6">
          <a className="nav-toggler waves-effect waves-light d-block d-md-none" href="!#"><i
            className="ti-menu ti-close"></i></a>
          <div className="navbar-brand">
            <a href="!#">
              <b className="logo-icon">
                <img src="assets/images/icon.png" width="200" alt="homepage" className="dark-logo" />
                <img src="assets/images/icon.png" width="200" alt="homepage" className="light-logo" />
              </b>
            </a>
          </div>
          <a className="topbartoggler d-block d-md-none waves-effect waves-light" href="!#"
            data-toggle="collapse" data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><i
              className="ti-more"></i></a>
        </div>
        <div className="navbar-collapse collapse" id="navbarSupportedContent">
          <ul className="navbar-nav float-left mr-auto ml-3 pl-1">
          </ul>
          <UserDisplay />
        </div>
      </nav>
    </header>
  )
}

export default HeaderNav;