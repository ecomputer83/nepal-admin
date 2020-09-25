import React from 'react';
import { format } from "date-fns";

const OrderItem = ({ order }) => {

  var date = new Date(order.order.orderDate);
  var orderDate = format(date, 'dd-MM-yyyy');

  const approve = () => {
    var r = window.confirm("Are you sure you want to approve the credit request");
    if (r === true) {
      //
    } else {
      //
    }
  }

  const reject = () => {
    var r = window.confirm("Are you sure you want to reject the credit request",);
    if (r === true) {
      //
    } else {
      //
    }
  }

  return (
    <>
      <tr>
        <td>{orderDate}</td>
        <td>{order.order.orderNo}</td>
        <td>{order.credit.totalAmount}</td>
        <td>{order.credit.name}</td>
        <td>{order.credit.reference}</td>
        <td>
          <button onClick={approve} type="button" className="btn btn-success btn-circle" style={{ marginRight: '10px' }}><i className="fa fa-check"></i></button>
          <button onClick={reject} type="button" className="btn btn-danger btn-circle"><i className="fa fa-times"></i></button>
        </td>
      </tr>
    </>
  )
}


export default OrderItem;