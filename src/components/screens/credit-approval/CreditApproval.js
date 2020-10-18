import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import LeftNav from 'components/shared/left-nav/LeftNav';
import HeaderNav from 'components/shared/header-nav/HeaderNav';
import CreditApprovalItem from './CreditApprovalItem';
import BreadCrumb from 'components/shared/bread-crumb/BreadCrumb';

import { creditApprovalActions } from 'state/actions/creditApprovalActions';
import Spinner from 'components/shared/spinner/Spinner';
import { useSortableData } from 'utils/sorter';


const CreditApproval = () => {
  const dispatch = useDispatch();
  const cdReducer = useSelector(state => state.creditApprovalReducer);
  const creditApprovals = cdReducer.creditApprovals;
  const { items, requestSort, sortConfig } = useSortableData(creditApprovals);
  const getClassNamesFor = (name) => {
    if (!sortConfig) {
      return;
    }
    return sortConfig.key === name ? sortConfig.direction : undefined;
  };
  const pending = cdReducer.pending;

  useEffect(() => {
    dispatch(creditApprovalActions.getCreditApprovals())
  }, [dispatch])


  const eventPage = 'creditApproval';
  const creditApprovalItems = items.map((ca) => <CreditApprovalItem key={ca.id} creditApproval={ca} />);

  return (
    <div>
      <div id="main-wrapper" data-theme="light" data-layout="vertical" data-navbarbg="skin6" data-sidebartype="full"
        data-sidebar-position="fixed" data-header-position="fixed" data-boxed-layout="full">
        {pending ? <Spinner /> : null}
        <HeaderNav />
        <LeftNav />
        <div className="page-wrapper" style={{ display: 'block' }}>
          <div className="col-12">
            <div className="card">
              <BreadCrumb title="Orders awaiting Credit Approval" isAdmin="neutral"/>
              <div className="table-responsive">
                <table className="table table-striped mb-0" id="myTable">
                  <thead className="bg-primary text-white">
                    <tr>
                      <th style={{ padding: '1rem 1rem 1rem 0rem' }} scope="col"></th>
                      <th scope="col" onClick={() => requestSort('ipmanCode', eventPage)} className={getClassNamesFor('ipmanCode')}>IPMAN</th>
                      <th scope="col" onClick={() => requestSort('businessName', eventPage)} className={getClassNamesFor('businessName')}>Business Name</th>
                      <th scope="col" onClick={() => requestSort('orderDate', eventPage)} className={getClassNamesFor('orderDate')}>Order Date</th>
                      <th scope="col" onClick={() => requestSort('orderNo', eventPage)} className={getClassNamesFor('orderNo')}>Order No</th>
                      <th scope="col" onClick={() => requestSort('totalAmount', eventPage)} className={getClassNamesFor('totalAmount')}>Total Amount (₦)</th>
                      <th scope="col" onClick={() => requestSort('creditBalance', eventPage)} className={getClassNamesFor('creditBalance')}>Credit Balance (₦)</th>
                      <th scope="col"></th>
                    </tr>
                  </thead>
                  <tbody>
                    {items.length > 0 ? creditApprovalItems : <tr><td>No record available</td></tr>}
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