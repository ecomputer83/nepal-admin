import React from 'react';
import { Link } from 'react-router-dom';

const LeftNav = () => {
  return (
    <aside className="left-sidebar" data-sidebarbg="skin6">
      <div className="scroll-sidebar" data-sidebarbg="skin6">
        <nav className="sidebar-nav">
          <ul id="sidebarnav">
            <li className="sidebar-item"> <Link to="/credit-approval" className="sidebar-link sidebar-link"
              aria-expanded="false"><i data-feather="home" className="feather-icon"></i><span
                className="hide-menu">Credit Approval</span></Link></li>
            <li className="sidebar-item"> <Link to="/user-management" className="sidebar-link sidebar-link"
              aria-expanded="false"><i data-feather="home" className="feather-icon"></i><span
                className="hide-menu">User Management</span></Link></li>
            <li className="sidebar-item"> <Link to="/order-management" className="sidebar-link sidebar-link"
              aria-expanded="false"><i data-feather="layers" className="feather-icon"></i><span
                className="hide-menu">Orders</span></Link></li>
            <li className="sidebar-item"> <Link to="/payment-management" className="sidebar-link sidebar-link"
              aria-expanded="false"><i data-feather="credit-card" className="feather-icon"></i><span
                className="hide-menu">Payments</span></Link></li>
            <li className="sidebar-item"> <Link to="/news-management" className="sidebar-link sidebar-link"
              aria-expanded="false"><i data-feather="info" className="feather-icon"></i><span
                className="hide-menu">News</span></Link></li>
            <li className="sidebar-item"> <Link to="/" className="sidebar-link sidebar-link"
              aria-expanded="false"><i data-feather="log-out" className="feather-icon"></i><span
                className="hide-menu">Logout</span></Link></li>
          </ul>
        </nav>
      </div>
    </aside>
  )
}

export default LeftNav;