import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import HeaderNav from 'components/shared/header-nav/HeaderNav';
import LeftNav from 'components/shared/left-nav/LeftNav';
import BreadCrumb from 'components/shared/bread-crumb/BreadCrumb';
import OrderItem from './OrderItem';

import { orderActions } from 'state/actions/orderActions';
import Spinner from 'components/shared/spinner/Spinner';


const OrderManagement = () => {

  const dispatch = useDispatch();
  const oReducer = useSelector(state => state.orderReducer);
  const orders = oReducer.orders;
  const pending = oReducer.pending;

  useEffect(() => {
    dispatch(orderActions.getAllOrders())
  }, [dispatch])


  const orderItems = orders.map((o) => <OrderItem key={o.orderId} order={o} />);

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
              <BreadCrumb title="Order Management" isAdmin="neutral"/>
              <div className="table-responsive">
                <table className="table table-striped mb-0">
                  <thead className="bg-primary text-white">
                    <tr>
                      <th style={{ padding: '1rem 1rem 1rem 0' }}></th>
                      <th scope="col">Order Date</th>
                      <th scope="col">Order Id</th>
                      <th scope="col">Quantity</th>
                      <th scope="col">Total Amount (#)</th>
                      <th scope="col">Order No</th>
                      <th scope="col"></th>
                    </tr>
                  </thead>
                  <tbody>
                    {orders.length > 0 ? orderItems : <tr><td></td><td>No record available</td></tr>}
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

export default OrderManagement;