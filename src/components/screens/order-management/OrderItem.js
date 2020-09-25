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
  // let mod = (
  //   // <div id="warning-alert-modal" className="modal fade" tabindex="-1" role="dialog"
  //   //   aria-hidden="true">
  //   //   <div className="modal-dialog modal-sm">
  //   //     <div className="modal-content">
  //   //       <div className="modal-body p-4">
  //   //         <div className="text-center">
  //   //           <i className="dripicons-warning h1 text-warning"></i>
  //   //           <h4 className="mt-2">Incorrect Information</h4>
  //   //           <p className="mt-3">Cras mattis consectetur purus sit amet fermentum.
  //   //                       Cras justo odio, dapibus ac facilisis in, egestas eget quam.</p>
  //   //           <button type="button" className="btn btn-warning my-2"
  //   //             data-dismiss="modal">Continue</button>
  //   //         </div>
  //   //       </div>
  //   //     </div>
  //   //   </div>
  //   // </div>
  // )


  return (
    <>
      <tr>
        <td style={{padding: '1rem 1rem 1rem 0'}}>
          <div id="warning-alert-modal" className="modal fade" tabIndex="-1" role="dialog"
            aria-hidden="true">
            <div className="modal-dialog modal-sm">
              <div className="modal-content">
                <div className="modal-body p-4">
                  <div className="text-center">
                    <i className="dripicons-warning h1 text-warning"></i>
                    <p className="mt-3">Are you sure you want to reject?</p>
                    <button onClick={reject} type="button" style={{ margin: '0 1em' }} className="btn btn-outline-info"
                      data-dismiss="modal">Yes</button>
                    <button type="button" className="btn btn-outline-info"
                      data-dismiss="modal">Cancel</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </td>
        <td>{orderDate}</td>
        <td>{order.order.orderNo}</td>
        <td>{order.credit.totalAmount}</td>
        <td>{order.credit.name}</td>
        <td>{order.credit.reference}</td>
        <td>
          <button type="button" className="btn btn-success btn-circle" style={{ marginRight: '10px' }} data-toggle="modal" data-target="#warning-alert-modal"><i className="fa fa-check"></i></button>
          <button type="button" className="btn btn-danger btn-circle" style={{ marginRight: '10px' }} data-toggle="modal" data-target="#warning-alert-modal"><i className="fa fa-times"></i></button>
        </td>
        {/* <td>
          
        </td> */}
      </tr>
    </>
  )
}


export default OrderItem;