import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { format } from "date-fns";
import ReactTooltip from "react-tooltip";
import Modal from 'react-modal';

import { orderActions } from "state/actions/orderActions";


const detailsStyles = {
  content: {
    top: '44%',
    left: '47%',
    right: '47%',
    bottom: 'auto',
    marginRight: '-53%',
    transform: 'translate(-33%, -50%)',
  },
  overlay: { backgroundColor: 'rgba(127, 122, 122, 0.62)' },
};

const cStyle = {
  content: {
    top: '50%',
    left: '66%',
    right: '66%',
    bottom: 'auto',
    marginRight: '-53%',
    transform: 'translate(-107%, -99%)',
  },
  overlay: { backgroundColor: 'rgba(127, 122, 122, 0.62)' },
};

// const OrderItem = () => {

const OrderItem = ({ order }) => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [id, setId] = useState('');
  const [singleOrder, setIsSingleOrder] = useState({});
  const [operation, setOperation] = useState('');

  // var date = new Date(order.orderDate);
  // var orderDate = format(date, 'dd-MM-yyyy');

  const dispatch = useDispatch();

  const handleClickOpen = (id, ops) => {
    setId(id);
    setOperation(ops);
    setIsOpen(true);
  };

  const getOrder = async (id, ops) => {
    setOperation(ops)
    let sOrder = await dispatch(orderActions.getOrder({ id }));
    // if (sOrder) {
    console.log('orderitem', sOrder);
    setIsSingleOrder(sOrder)
    setIsOpen(true)
    // }
  }

  const handleClose = () => {
    setIsOpen(false);
  };


  const complete = () => {
    dispatch(orderActions.markAsComplete({ id }))
    setIsOpen(false);
  }

  const reject = () => {
    setIsOpen(false);
  }


  return (
    <>
      <tr>
        <td style={{ padding: '1rem 1rem 1rem 0' }}>
          {operation === 'markComplete' ?
            <Modal
              isOpen={modalIsOpen}
              onRequestClose={handleClose}
              style={cStyle}
              contentLabel="Example Modal"
            >
              <br />
              <div><p>  Are you sure you want to mark as complete?</p></div>
              <div style={{ float: 'right' }}>
                <button type="button" style={{ marginRight: '1em' }} className="btn wasves-effect waves-light btn-info" onClick={complete} autoFocus>Yes</button>
                <button type="button" className="btn wasves-effect waves-light btn-light" onClick={reject}  >No</button>
              </div>
            </Modal>
            :
            <Modal
              isOpen={modalIsOpen}
              onRequestClose={handleClose}
              style={detailsStyles}
              contentLabel="Example Modal"
            // shouldCloseOnOverlayClick={false}
            >
              <br />
              <div className="pl-3 pr-3" action="#">
                <div className="row">
                  <div className="col-md-4">
                    <div className="form-group">
                      <label htmlFor="orderdate">Order Date</label>
                      <input className="form-control" type="text" id="orderdate" value="Order Date" disabled />
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="form-group">
                      <label htmlFor="orderid">Order Id </label>
                      <input className="form-control" type="text" id="orderid" value="Order Id" disabled />
                    </div>
                  </div>

                  <div className="col-md-4">
                    <div className="form-group">
                      <label htmlFor="quantity">Quantity</label>
                      <input className="form-control" type="text" id="quantity" value="Quantity" disabled />
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-4">
                    <div className="form-group">
                      <label htmlFor="totalamount">Total Amount</label>
                      <input className="form-control" type="text" id="totalamount" value="Total Amount" disabled />
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="form-group">
                      <label htmlFor="orderno">Order No</label>
                      <input className="form-control" type="text" id="orderno" value="Order No" disabled />
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="form-group">
                      <label htmlFor="address">Programs (OrderId)</label>
                      <input className="form-control" type="text" id="orderno" value="Programs" disabled />
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-4">
                    <div className="form-group">
                      <label htmlFor="emailaddress">Programs (OrderNumber)</label>
                      <input className="form-control" type="text" id="orderno" value="Programs" disabled />
                    </div>
                  </div>

                  <div className="col-md-4">
                    <div className="form-group">
                      <label htmlFor="username">Programs (TruckNo)</label>
                      <input className="form-control" type="text" id="orderno" value="Programs" disabled />
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="form-group">
                      <label htmlFor="username">Programs (Destination)</label>
                      <input className="form-control" type="text" id="orderno" value="Programs" disabled />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-4">
                    <div className="form-group">
                      <label htmlFor="emailaddress">Programs (Quantity)</label>
                      <input className="form-control" type="text" id="orderno" value="Programs" disabled />
                    </div>
                  </div>

                </div>
              </div>

              <br />
              <div style={{ float: 'right' }}>
                <button type="button" className="btn wasves-effect waves-light btn-light" onClick={reject} autoFocus>Back</button>
              </div>
            </Modal>
          }
        </td>
        <td>orderDate</td>
        <td>order.orderId</td>
        <td>order.quantity</td>
        <td>order.totalAmount</td>
        <td>order.orderNo</td>
        {/* <td>{orderDate}</td>
        <td>{order.orderId}</td>
        <td>{order.quantity }</td>
        <td>{order.totalAmount}</td>
        <td>{order.orderNo}</td> */}
        <td>
          {/* <button type="button" onClick={() => getOrder(order.orderId)} data-tip="View Details" data-for='toolTip1' className="btn btn-info btn-circle" style={{ marginRight: '10px' }} ><i className="fas fa-list"></i></button> */}
          <button type="button" onClick={() => getOrder(2, 'details')} data-tip="View Details" data-for='toolTip1' className="btn btn-info btn-circle" style={{ marginRight: '10px' }} ><i className="fas fa-list"></i></button>
          <button type="button" onClick={() => handleClickOpen('order.orderId', 'markComplete')} data-tip="Mark As Completed" data-for='toolTip2' className="btn btn-success btn-circle" style={{ marginRight: '10px' }} ><i className="fas fa-check"></i></button>
          <ReactTooltip id="toolTip1" />
          <ReactTooltip id="toolTip2" />
        </td>
      </tr >
    </>
  )
}


export default OrderItem;