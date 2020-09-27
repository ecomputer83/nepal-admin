import React from 'react';

const AdminItem = ({ admin }) => {
  return (
    <>
      <tr>

        <th scope="row" style={{ padding: '1rem 1rem 1rem 3rem' }}>{admin.contactName}</th>
        <td>{admin.phoneNumber}</td>
        <td>{admin.email}</td>
        <td>{admin.role}</td>
        <td></td>
      </tr>
    </>

  )
}

export default AdminItem