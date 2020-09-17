import React from 'react';


const CreditApprovalItem = () => {
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
        <th scope="row">8/09/2020</th>
        <td>PO68878</td>
        <td>4678875</td>
        <td>Company One</td>
        <td>6,890,000</td>
        <td>1,240,000</td>
        <td>
          <button onClick={approve} type="button" className="btn btn-success btn-circle" style={{ marginRight: '10px' }}><i className="fa fa-check"></i></button>
          <button onClick={reject} type="button" className="btn btn-danger btn-circle"><i className="fa fa-times"></i></button>
        </td>
      </tr>
    </>
  )
}


export default CreditApprovalItem;