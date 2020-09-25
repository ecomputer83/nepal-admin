import React from 'react';
import HeaderNav from '../../shared/header-nav/HeaderNav';
import LeftNav from '../../shared/left-nav/LeftNav';
import BreadCrumb from '../../shared/bread-crumb/BreadCrumb';


const UserManagement = () => {
  return (
    <div>
      <div id="main-wrapper" data-theme="light" data-layout="vertical" data-navbarbg="skin6" data-sidebartype="full"
        data-sidebar-position="fixed" data-header-position="fixed" data-boxed-layout="full">
        <HeaderNav />
        <LeftNav />
        <div className="page-wrapper" style={{ display: 'block' }}>
          <div className="col-12">
            <div className="card">
              <BreadCrumb title="User Management" isAdmin="true" />
              <div className="table-responsive">
                <table className="table table-striped mb-0">
                  <thead className="bg-primary text-white">
                    <tr>
                      <th scope="col">IpMan Code</th>
                      <th scope="col">Business Name</th>
                      <th scope="col">Contact Name</th>
                      <th scope="col">Phone Number</th>
                      <th scope="col">Credit Limit</th>
                      <th scope="col"></th>
                    </tr>
                  </thead>
                  <tbody>

                    {/* <CreditApprovalItem /> */}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserManagement;