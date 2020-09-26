import HeaderNav from 'components/shared/header-nav/HeaderNav';
import LeftNav from 'components/shared/left-nav/LeftNav';
import BreadCrumb from 'components/shared/bread-crumb/BreadCrumb';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { userActions } from 'state/actions/userActions';
import UserItem from './UserItem';


const UserManagement = () => {
  const dispatch = useDispatch();
  const reducer = useSelector(state => state.userReducer);
  const users = reducer.users;

  useEffect(() => {
    dispatch(userActions.getAllUsers())
  }, [dispatch])

  const userItems = users.map((x) => <UserItem key={x.id} user={x} />);
  console.log(users);

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
                      <th style={{ padding: '1rem 1rem 1rem 0' }}></th>
                      <th scope="col">IpMan Code</th>
                      <th scope="col">Business Name</th>
                      <th scope="col">Contact Name</th>
                      <th scope="col">Phone Number</th>
                      <th scope="col">Credit Limit</th>
                      <th scope="col"></th>

                    </tr>
                  </thead>
                  <tbody>
                    {userItems}
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