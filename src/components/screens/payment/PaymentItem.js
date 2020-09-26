import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { format } from "date-fns";

import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';

import { paymentActions } from "state/actions/paymentActions";

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
          <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogContent>
              <DialogContentText id="alert-dialog-description">
                Are you sure you want to {operation}?
          </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={approve} color="primary" autoFocus>
                Yes
          </Button>
              <Button onClick={reject} color="primary">
                No
          </Button>
            </DialogActions>
          </Dialog>
        </td>
        <td>{paymentDate}</td>
        <td>{payment.order.orderNo}</td>
        <td>{payment.credit.totalAmount}</td>
        <td>{payment.credit.name}</td>
        <td>{payment.credit.reference}</td>
        <td>
          <button type="button" onClick={() => handleClickOpen(payment.id, 'approve')} className="btn btn-success btn-circle" style={{ marginRight: '10px' }} ><i className="fa fa-check"></i></button>
          <button type="button" onClick={() => handleClickOpen(payment.id, 'reject')} className="btn btn-danger btn-circle" style={{ marginRight: '10px' }} ><i className="fa fa-times"></i></button>
        </td>
      </tr >
    </>
  )
}


export default PaymentItem;