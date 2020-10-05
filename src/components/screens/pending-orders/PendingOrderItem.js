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

let vv;
let programItem;
const PendingOrderItem = ({ order }) => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [id, setId] = useState('');
  const [singleOrder, setIsSingleOrder] = useState({});
  const [operation, setOperation] = useState('');

  const formatDate = (orderDate) => {
    var date = new Date(orderDate);
    return orderDate = format(new Date(orderDate), 'dd-MM-yyyy');
  }

  const dispatch = useDispatch();

  const handleClickOpen = (id, ops) => {
    setId(id);
    setOperation(ops);
    setIsOpen(true);
  };

  const getOrder = (id, ops) => {
    setOperation(ops)
    dispatch(orderActions.getOrder({ id }))
      .then(response => {
        // console.log('orderitem', response)
        response.orderDate = formatDate(response.orderDate);
        setIsSingleOrder(response)
        if (response.programs) {
          programItem = response.programs.map((p) =>
            <tr key={p.id}>
              <td>{p.truckNo}</td>
              <td>{p.destination}</td>
              <td>{p.quantity}</td>
            </tr >
          )
        } else {
          programItem = <tr><td>No record available</td></tr>
        }
        setIsOpen(true)
      })
      .catch(err => console.log(err));
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
                      <input className="form-control" type="text" id="orderdate" value={singleOrder.orderDate} disabled />
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="form-group">
                      <label htmlFor="orderid">Order Id </label>
                      <input className="form-control" type="text" id="orderid" value={singleOrder.orderId} disabled />
                    </div>
                  </div>

                  <div className="col-md-4">
                    <div className="form-group">
                      <label htmlFor="quantity">Quantity</label>
                      <input className="form-control" type="text" id="quantity" value={singleOrder.quantity} disabled />
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-4">
                    <div className="form-group">
                      <label htmlFor="totalamount">Total Amount</label>
                      <input className="form-control" type="text" id="totalamount" value={singleOrder.totalAmount} disabled />
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="form-group">
                      <label htmlFor="orderno">Order No</label>
                      <input className="form-control" type="text" id="orderno" value={singleOrder.orderNo} disabled />
                    </div>
                  </div>
                </div>
              </div>
              <div className="table-responsive" style={{height: '13em'}}>
                <table className="table table-striped mb-0">
                  <thead className="bg-primary text-white">
                    <tr>
                      <th scope="col">Truck No</th>
                      <th scope="col">Destination</th>
                      <th scope="col">Quantity</th>
                    </tr>
                  </thead>
                  <tbody>
                    {programItem}
                  </tbody>
                </table>
              </div>
              <br />
              <div style={{ float: 'right' }}>
                <button type="button" className="btn wasves-effect waves-light btn-light" onClick={reject} autoFocus>Back</button>
              </div>
            </Modal>
          }
        </td>
        <td>{formatDate(order.orderDate)}</td>
        <td>{order.orderId}</td>
        <td>{order.quantity}</td>
        <td>{order.totalAmount}</td>
        <td>{order.orderNo}</td>
        <td>
          <button type="button" onClick={() => getOrder(order.orderId, 'details')} data-tip="View Details" data-for='toolTip1' className="btn btn-info btn-circle" style={{ marginRight: '10px' }} ><i className="fas fa-list"></i></button>
          {/* <button type="button" onClick={() => handleClickOpen(order.orderId, 'markComplete')} data-tip="Mark As Completed" data-for='toolTip2' className="btn btn-success btn-circle" style={{ marginRight: '10px' }} ><i className="fas fa-check"></i></button> */}
          <ReactTooltip id="toolTip1" />
          <ReactTooltip id="toolTip2" />
        </td>
      </tr >
    </>
  )
}


export default PendingOrderItem;