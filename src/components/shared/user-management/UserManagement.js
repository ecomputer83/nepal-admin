import React from 'react';
import HeaderNav from '../header-nav/HeaderNav';
import LeftNav from '../left-nav/LeftNav';

const UserManagement = () => {
  return (
    <div>
      <div id="main-wrapper" data-theme="light" data-layout="vertical" data-navbarbg="skin6" data-sidebartype="full"
        data-sidebar-position="fixed" data-header-position="fixed" data-boxed-layout="full">
        <HeaderNav />
        <LeftNav />
        <div className="page-wrapper"  style={{ display: 'block' }}>
          <div className="col-12">
            <p>User Management</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserManagement;