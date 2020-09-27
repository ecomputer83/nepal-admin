import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { format } from "date-fns";
import ReactTooltip from "react-tooltip";
import Modal from 'react-modal';

import { orderActions } from "state/actions/orderActions";


const customStyles = {
  content: {
    top: '44%',
    left: '47%',
    right: '47%',
    bottom: 'auto',
    marginRight: '-53%',
    transform: 'translate(-33%, -99%)',
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

// const OrderItem = ({ order }) => {
const OrderItem = () => {

  const [modalIsOpen, setIsOpen] = useState(false);
  const [id, setId] = useState('');
  const [operation, setOperation] = useState('');

  // var date = new Date(order.order.orderDate);
  // var orderDate = format(date, 'dd-MM-yyyy');

  const dispatch = useDispatch();

  const handleClickOpen = (id, ops) => {
    setId(id);
    setOperation(ops);
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };


  const complete = () => {
    if (operation === 'approve') {
      dispatch(orderActions.markAsComplete({ id }))
    } else {
      dispatch(orderActions.rejectOrder({ id }))
    }
    setIsOpen(false);
  }

  const reject = () => {
    setIsOpen(false);
  }


  return (
    <>
      <tr>
        <td style={{ padding: '1rem 1rem 1rem 0' }}>
          {operation == 'details' ?
            <Modal
              isOpen={modalIsOpen}
              onRequestClose={handleClose}
              style={customStyles}
              contentLabel="Example Modal"
            // shouldCloseOnOverlayClick={false}
            >
              <br />
              <div style={{ float: 'right' }}>
                <button type="button" className="btn wasves-effect waves-light btn-light" onClick={reject} autoFocus>Back</button>
              </div>
            </Modal>
            :
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
          }
        </td>
        <td>orderDate</td>
        <td>order.order.orderNo</td>
        <td>order.credit.totalAmount</td>
        <td>order.credit.name</td>
        <td>order.credit.reference</td>
        {/* <td>{orderDate}</td>
        <td>{order.order.orderNo}</td>
        <td>{order.credit.totalAmount}</td>
        <td>{order.credit.name}</td>
        <td>{order.credit.reference}</td> */}
        <td>
          <button type="button" onClick={() => handleClickOpen(1, 'details')} data-tip="View Details" data-for='toolTip1' className="btn btn-info btn-circle" style={{ marginRight: '10px' }} ><i className="fas fa-list"></i></button>
          <button type="button" onClick={() => handleClickOpen(1, 'mark')} data-tip="Mark As Completed" data-for='toolTip2' className="btn btn-success btn-circle" style={{ marginRight: '10px' }} ><i className="fas fa-check"></i></button>
          <ReactTooltip id="toolTip1" />
          <ReactTooltip id="toolTip2" />
        </td>
      </tr >
    </>
  )
}


export default OrderItem;