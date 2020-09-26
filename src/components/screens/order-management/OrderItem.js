import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { format } from "date-fns";

import ModalComponent from 'components/shared/modal/ModalComponent';

import { orderActions } from "state/actions/orderActions";

const OrderItem = ({ order }) => {
  const [open, setOpen] = useState(false);
  const [id, setId] = useState('');
  const [operation, setOperation] = useState('');

  var date = new Date(order.order.orderDate);
  var orderDate = format(date, 'dd-MM-yyyy');

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
    if ({ operation } === 'approve') {
      dispatch(orderActions.approveOrder({ id }))
    } else {
      dispatch(orderActions.rejectOrder({ id }))
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
          <ModalComponent id={id} operation={operation} stat={open} />
        </td>
        <td>{orderDate}</td>
        <td>{order.order.orderNo}</td>
        <td>{order.credit.totalAmount}</td>
        <td>{order.credit.name}</td>
        <td>{order.credit.reference}</td>
        <td>
          <button type="button" onClick={() => handleClickOpen(order.id, 'approve')} className="btn btn-success btn-circle" style={{ marginRight: '10px' }} ><i className="fa fa-check"></i></button>
          <button type="button" onClick={() => handleClickOpen(order.id, 'reject')} className="btn btn-danger btn-circle" style={{ marginRight: '10px' }} ><i className="fa fa-times"></i></button>
        </td>
      </tr >
    </>
  )
}


export default OrderItem;