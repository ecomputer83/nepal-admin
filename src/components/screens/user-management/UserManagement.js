import HeaderNav from 'components/shared/header-nav/HeaderNav';
import LeftNav from 'components/shared/left-nav/LeftNav';
import BreadCrumb from 'components/shared/bread-crumb/BreadCrumb';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { userActions } from 'state/actions/userActions';
import UserItem from './UserItem';
import Spinner from 'components/shared/spinner/Spinner';



const UserManagement = () => {
  const dispatch = useDispatch();
  const reducer = useSelector(state => state.userReducer);
  const users = reducer.users;
  const pending = reducer.pending;


  useEffect(() => {
    dispatch(userActions.getAllUsers())
  }, [dispatch])

  const userItems = users.map((x) => <UserItem key={x.id} user={x} />);
  return (

    <div>
      <div id="main-wrapper" data-theme="light" data-layout="vertical" data-navbarbg="skin6" data-sidebartype="full"
        data-sidebar-position="fixed" data-header-position="fixed" data-boxed-layout="full">
        <HeaderNav />
        <LeftNav />
        <div className="page-wrapper" style={{ display: 'block' }}>
          <div className="col-12">
            <div className="card">
              <BreadCrumb title="User Management" isAdmin="false" showBtn="true" />
              <div id="zero_config_wrapper" className="dataTables_wrapper container-fluid dt-bootstrap4">
                {pending ? <Spinner /> : null}
                <table id="zero_config" className="table table-striped no-wrap dataTable">
                  <thead className="bg-primary text-white">
                    <tr>
                      <th style={{ padding: '1rem 1rem 1rem 3rem' }}>IpMAN Code</th>
                      <th scope="col">Business Name</th>
                      <th scope="col">Contact Name</th>
                      <th scope="col">Phone Number</th>
                      <th scope="col">Email</th>
                      <th scope="col">Credit Limit</th>
                      <th scope="col"></th>
                      <th scope="col"></th>

                    </tr>
                  </thead>
                  <tbody>
                    {users.length > 0 ? userItems : <tr><td>No user record available</td></tr>}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
      <script>
      $('#zero_config').DataTable();
      </script>
    </div>
  )

}


export default UserManagement;