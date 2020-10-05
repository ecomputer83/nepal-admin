import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import HeaderNav from 'components/shared/header-nav/HeaderNav';
import LeftNav from 'components/shared/left-nav/LeftNav';
import BreadCrumb from 'components/shared/bread-crumb/BreadCrumb';
import PaymentItem from './PaymentItem';

import { paymentActions } from 'state/actions/paymentActions';
import Spinner from 'components/shared/spinner/Spinner';


const PaymentManagement = () => {

  const dispatch = useDispatch();
  const pReducer = useSelector(state => state.paymentReducer);
  const payments = pReducer.paymentOrders;
  const pending = pReducer.pending;

  useEffect(() => {
    dispatch(paymentActions.getPayments())
  }, [dispatch])


  const paymentItems = payments.map((p) => <PaymentItem key={p.id} payment={p} />);

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
              <BreadCrumb title="Payment Management" isAdmin="neutral"/>
              <div className="table-responsive">
                <table className="table table-striped mb-0" id="myTable">
                  <thead className="bg-primary text-white">
                    <tr>
                      <th style={{ padding: '1rem 1rem 1rem 0' }}></th>
                      <th scope="col">Payment Date</th>
                      <th scope="col">Payment No</th>
                      <th scope="col">Total Amount (#)</th>
                      <th scope="col">Bank Name</th>
                      <th scope="col">Teller No</th>
                      <th scope="col"></th>
                    </tr>
                  </thead>
                  <tbody>
                    {payments.length > 0 ? paymentItems : <tr><td></td><td>No record available</td></tr>}
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

export default PaymentManagement;