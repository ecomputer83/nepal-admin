import React from 'react';

const UserItem = ({ user }) => {

  // const approve = () => {
  //   var r = window.confirm("Are you sure you want to approve the credit request");
  //   if (r === true) {
  //     //
  //   } else {
  //     //
  //   }
  // }

  // const reject = () => {
  //   var r = window.confirm("Are you sure you want to reject the credit request",);
  //   if (r === true) {
  //     //
  //   } else {
  //     //
  //   }
  // }

  return (
    <>
      <tr>
        <th scope="row">{user.ipmanCode}</th>
        <td>{user.businessName}</td>
        <td>{user.contactName}</td>
        <td>{user.phoneNumber}</td>
        <td>{user.creditLimit}</td>
        <td>
          <button type="button" className="btn btn-success btn-circle" style={{ marginRight: '10px' }}><i className="fa fa-check"></i></button>
          <button type="button" className="btn btn-danger btn-circle"><i className="fa fa-times"></i></button>
        </td>
      </tr>
    </>

  )
}

export default UserItem