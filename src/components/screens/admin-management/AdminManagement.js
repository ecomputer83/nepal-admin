import React from 'react';

import LeftNav from '../../shared/left-nav/LeftNav';
import HeaderNav from '../../shared/header-nav/HeaderNav';
import BreadCrumb from '../../shared/bread-crumb/BreadCrumb';


const AdminManagement = () => {
  return (
    <div>
      <div id="main-wrapper" data-theme="light" data-layout="vertical" data-navbarbg="skin6" data-sidebartype="full"
        data-sidebar-position="fixed" data-header-position="fixed" data-boxed-layout="full">
        <HeaderNav />
        <LeftNav />
        <div className="page-wrapper" style={{ display: 'block' }}>
          <div className="col-12">
            <div className="card">
              <BreadCrumb title="Admin Management" />
              <div className="row">
                <div className="col-sm-12 col-md-6 col-lg-4">
                  <div className="card">
                    <div className="card-body">
                      <form className="mt-4">
                        <div className="form-group mb-4">
                          <label className="mr-sm-2" htmlFor="inlineFormCustomSelect">Username</label>
                          <input
                            className="form-control"
                            id="username"
                            type="text"
                            placeholder="enter username"
                          // value={email}
                          // onChange={(e) => setEmail(e.target.value)}
                          />
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-4">
                  <div className="card">
                    <div className="card-body">
                      <form className="mt-4">
                        <div className="form-group mb-4">
                          <label className="mr-sm-2" htmlFor="inlineFormCustomSelect">Select Role</label>
                          <select className="custom-select mr-sm-2" id="inlineFormCustomSelect">
                            <option selected>Choose...</option>
                            <option value="1">Administrator</option>
                            <option value="2">Nepal</option>
                          </select>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
                <div className="col-2 align-self-center">
                  <div className="customize-input">
                    <button type="button" className="btn waves-effect waves-light btn-primary">Add User</button>
                  </div>
                </div>
              </div>
            </ div>
          </div>
        </div>
      </div>
    </div>
  )
};

export default AdminManagement