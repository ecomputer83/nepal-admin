import React from 'react';

const AdminItem = ({ admin }) => {
  return (
    <>
      <tr>
        <td></td>
        <td>{admin.contactName}</td>
        <td>{admin.phoneNumber}</td>
        <td>{admin.email}</td>
        <td>{admin.role}</td>
      </tr>
    </>

  )
}

export default AdminItem