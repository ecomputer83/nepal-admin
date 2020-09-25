import React from 'react';

import LeftNav from '../../shared/left-nav/LeftNav';
import HeaderNav from '../../shared/header-nav/HeaderNav';
import CreditApprovalItem from './CreditApprovalItem';
import BreadCrumb from '../../shared/bread-crumb/BreadCrumb';



const CreditApproval = () => {
  return (
    <div>
      <div id="main-wrapper" data-theme="light" data-layout="vertical" data-navbarbg="skin6" data-sidebartype="full"
        data-sidebar-position="fixed" data-header-position="fixed" data-boxed-layout="full">
        <HeaderNav />
        <LeftNav />
        <div className="page-wrapper" style={{ display: 'block' }}>
          <div className="col-12">
            <div className="card">
              <BreadCrumb title="Credit Approval" />
              <div className="table-responsive">
                <table className="table table-striped mb-0">
                  <thead className="bg-primary text-white">
                    <tr>
                      <th scope="col">Date</th>
                      <th scope="col">Order No</th>
                      <th scope="col">IP No</th>
                      <th scope="col">Customer</th>
                      <th scope="col">Credit Bal</th>
                      <th scope="col">Order Amount</th>
                      <th scope="col"></th>
                    </tr>
                  </thead>
                  <tbody>
                    <CreditApprovalItem />
                    <CreditApprovalItem />
                    <CreditApprovalItem />
                    <CreditApprovalItem />
                    <CreditApprovalItem />
                    <CreditApprovalItem />
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

export default CreditApproval;