import React from 'react';
import HeaderNav from '../../shared/header-nav/HeaderNav';
import LeftNav from '../../shared/left-nav/LeftNav';
import BreadCrumb from '../../shared/bread-crumb/BreadCrumb';


const Articles = () => {
  return (
    <div>
      <div id="main-wrapper" data-theme="light" data-layout="vertical" data-navbarbg="skin6" data-sidebartype="full"
        data-sidebar-position="fixed" data-header-position="fixed" data-boxed-layout="full">
        <HeaderNav />
        <LeftNav />
        <div className="page-wrapper" style={{ display: 'block' }}>
          <div className="col-12">
            <div className="card">
              <BreadCrumb title="Articles" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Articles;