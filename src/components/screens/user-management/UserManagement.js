import React from 'react';
import HeaderNav from '../../shared/header-nav/HeaderNav';
import LeftNav from '../../shared/left-nav/LeftNav';
import BreadCrumb from '../../shared/bread-crumb/BreadCrumb';
import { useSelector } from 'react-redux';


const UserManagement = () => {

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
  const userReducer = useSelector(state => state.userReducer);
  console.log(userReducer);


  return (
    <div>
      <div id="main-wrapper" data-theme="light" data-layout="vertical" data-navbarbg="skin6" data-sidebartype="full"
        data-sidebar-position="fixed" data-header-position="fixed" data-boxed-layout="full">
        <HeaderNav />
        <LeftNav />
        <div className="page-wrapper" style={{ display: 'block' }}>
          <div className="col-12">
            <div className="card">
              <BreadCrumb title="User Management" isAdmin="true" />
              <div className="table-responsive">
                <table className="table table-striped mb-0">
                  <thead className="bg-primary text-white">
                    <tr>
                      <th scope="col">IpMan Code</th>
                      <th scope="col">Business Name</th>
                      <th scope="col">Contact Name</th>
                      <th scope="col">Phone Number</th>
                      <th scope="col">Credit Limit</th>
                      <th scope="col"></th>
                    </tr>
                  </thead>
                  <tbody>
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
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}



export default UserManagement;