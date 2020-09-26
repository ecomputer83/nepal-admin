import HeaderNav from 'components/shared/header-nav/HeaderNav';
import LeftNav from 'components/shared/left-nav/LeftNav';
import BreadCrumb from 'components/shared/bread-crumb/BreadCrumb';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Spinner from 'components/shared/spinner/Spinner';
import { adminActions } from 'state/actions/adminActions';
import AdminItem from './AdminItem';




const AdminManagement = () => {
  const dispatch = useDispatch();
  const reducer = useSelector(state => state.adminReducer);
  const allAdmin = reducer.allAdmin;
  const pending = reducer.pending;


  useEffect(() => {
    dispatch(adminActions.getAllAdmin())
  }, [dispatch])

  const adminItems = allAdmin.map((x) => <AdminItem key={x.id} admin={x} />);
  return (

    <div>
      <div id="main-wrapper" data-theme="light" data-layout="vertical" data-navbarbg="skin6" data-sidebartype="full"
        data-sidebar-position="fixed" data-header-position="fixed" data-boxed-layout="full">
        {pending ? <Spinner /> : null}

        <HeaderNav />
        <LeftNav />
        <div className="page-wrapper" style={{ display: 'block' }}>
          <div className="col-12">
            <div className="card">
              <BreadCrumb title="Admin Management" isAdmin="true" />
              <div className="table-responsive">
                <table className="table table-striped mb-0">
                  <thead className="bg-primary text-white">
                    <tr>
                      <th style={{ padding: '1rem 1rem 1rem 0' }}></th>
                      <th scope="col">Admin Name</th>
                      <th scope="col">Phone Number</th>
                      <th scope="col">Email</th>
                      <th scope="col">Role</th>
                      {/* <th scope="col"></th> */}

                    </tr>
                  </thead>
                  <tbody>
                    {adminItems}
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


export default AdminManagement;