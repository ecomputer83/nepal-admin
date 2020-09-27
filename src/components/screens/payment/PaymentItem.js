import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { format } from "date-fns";
import ReactTooltip from "react-tooltip";

import { paymentActions } from "state/actions/paymentActions";
import Modal from 'react-modal';


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

const PaymentItem = ({ payment }) => {
  const [open, setOpen] = useState(false);
  const [id, setId] = useState('');
  const [operation, setOperation] = useState('');

  var date = new Date(payment.order.orderDate);
  var paymentDate = format(date, 'dd-MM-yyyy');

  const dispatch = useDispatch();

  const handleClickOpen = (id, ops) => {
    setId(id);
    setOperation(ops);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


  const approve = () => {
    if (operation === 'approve') {
      dispatch(paymentActions.approvePayment({ id }))
    } else {
      dispatch(paymentActions.rejectPayment({ id }))
    }
    setOpen(false);
  }

  const reject = () => {
    setOpen(false);
  }



  return (
    <>
      <tr>
        <td style={{ padding: '1rem 1rem 1rem 0' }}>
          <Modal
            isOpen={open}
            onRequestClose={handleClose}
            style={cStyle}
            contentLabel="Example Modal"
          >
            <br />
            <div><p>  Are you sure you want to {operation}?</p></div>
            <div style={{ float: 'right' }}>
              <button type="button" style={{ marginRight: '1em' }} className="btn wasves-effect waves-light btn-info" onClick={approve} autoFocus>Yes</button>
              <button type="button" className="btn wasves-effect waves-light btn-light" onClick={reject} >No</button>
            </div>
          </Modal>
        </td>
        <td>{paymentDate}</td>
        <td>{payment.order.orderNo}</td>
        <td>{payment.credit.totalAmount}</td>
        <td>{payment.credit.name}</td>
        <td>{payment.credit.reference}</td>
        <td>
          <button type="button" onClick={() => handleClickOpen(payment.id, 'approve')} data-tip="Approve Payment Order" data-for='toolTip1' className="btn btn-success btn-circle" style={{ marginRight: '10px' }} ><i className="fa fa-check"></i></button>
          <button type="button" onClick={() => handleClickOpen(payment.id, 'reject')} data-tip="Reject Payment Order" data-for='toolTip2' className="btn btn-danger btn-circle" style={{ marginRight: '10px' }} ><i className="fa fa-times"></i></button>
          <ReactTooltip id="toolTip1" />
          <ReactTooltip id="toolTip2" />
        </td>
      </tr >
    </>
  )
}


export default PaymentItem;