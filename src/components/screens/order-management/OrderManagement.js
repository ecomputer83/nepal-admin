import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import HeaderNav from 'components/shared/header-nav/HeaderNav';
import LeftNav from 'components/shared/left-nav/LeftNav';
import BreadCrumb from 'components/shared/bread-crumb/BreadCrumb';
import OrderItem from './OrderItem';

import { orderActions } from 'state/actions/orderActions';
import Spinner from 'components/shared/spinner/Spinner';
import { useSortableData } from 'utils/sorter';


const OrderManagement = () => {

  const dispatch = useDispatch();
  const oReducer = useSelector(state => state.orderReducer);
  const orders = oReducer.orders;
  const { items, requestSort, sortConfig } = useSortableData(orders);
  const getClassNamesFor = (name) => {
    if (!sortConfig) {
      return;
    }
    return sortConfig.key === name ? sortConfig.direction : undefined;
  };
  const pending = oReducer.pending;

  useEffect(() => {
    dispatch(orderActions.getAllOrders())
  }, [dispatch])


  const orderItems = items.map((o) => <OrderItem key={o.orderId} order={o} />);

  return (
    <div>
      <div id="main-wrapper" data-theme="light" data-layout="vertical" data-navbarbg="skin6" data-sidebartype="full"
        data-sidebar-position="fixed" data-header-position="fixed" data-boxed-layout="full">
        <HeaderNav />
        <LeftNav />
        <div className="page-wrapper" style={{ display: 'block' }}>
          <div className="col-12">
            <div className="card">
              <BreadCrumb title="Confirm Orders" isAdmin="neutral" />
              {pending ? <Spinner /> : null}
              <div className="table-responsive">
                <table className="table table-striped mb-0" id="myTable">
                  <thead className="bg-primary text-white">
                    <tr>
                      <th style={{ padding: '1rem 1rem 1rem 0' }}></th>
                      <th scope="col" onClick={() => requestSort('orderDate')} className={getClassNamesFor('orderDate')}>Order Date</th>
                      <th scope="col" onClick={() => requestSort('productName')} className={getClassNamesFor('productName')}>Product</th>
                      <th scope="col" onClick={() => requestSort('depotName')} className={getClassNamesFor('depotName')}>Depot</th>
                      <th scope="col" onClick={() => requestSort('quantity')} className={getClassNamesFor('quantity')}>Quantity</th>
                      <th scope="col" onClick={() => requestSort('totalAmount')} className={getClassNamesFor('totalAmount')}>Total Amount (₦)</th>
                      <th scope="col" onClick={() => requestSort('orderNo')} className={getClassNamesFor('orderNo')}>Order No</th>
                      <th scope="col"></th>
                    </tr>
                  </thead>
                  <tbody>
                    {items.length > 0 ? orderItems : <tr><td></td><td>No record available</td></tr>}
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