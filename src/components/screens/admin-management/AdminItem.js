import React from 'react';

const AdminItem = ({ admin }) => {
  return (
    <>
      <tr>

        <th scope="row">{admin.contactName}</th>
        <td>{admin.phoneNumber}</td>
        <td>{admin.email}</td>
        <td>{admin.role}</td>
      </tr>
    </>

  )
}

export default AdminItem