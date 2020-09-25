import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import LeftNav from 'components/shared/left-nav/LeftNav';
import HeaderNav from 'components/shared/header-nav/HeaderNav';
import CreditApprovalItem from './CreditApprovalItem';
import BreadCrumb from 'components/shared/bread-crumb/BreadCrumb';

import { creditApprovalActions } from 'state/actions/creditApprovalActions';



const CreditApproval = () => {
  const dispatch = useDispatch();
  const cdReducer = useSelector(state => state.creditApprovalReducer);
  const creditApprovals = cdReducer.creditApprovals;

  useEffect(() => {
    dispatch(creditApprovalActions.getCreditApprovals())
  }, [dispatch])


  const creditApprovalsItems = creditApprovals.map((ca) => <CreditApprovalItem key={ca.id} creditApproval={ca} />);

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
                      <th scope="col">Business Name</th>
                      <th scope="col">Order Date</th>
                      <th scope="col">Order No</th>
                      <th scope="col">Total Amount (#)</th>
                      <th scope="col">Bank Name</th>
                      <th scope="col">Teller No</th>
                      <th scope="col"></th>
                    </tr>
                  </thead>
                  <tbody>
                    {creditApprovalsItems}
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