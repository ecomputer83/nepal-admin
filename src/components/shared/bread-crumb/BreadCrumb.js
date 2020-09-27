import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { userActions } from 'state/actions/userActions';
import { adminActions } from 'state/actions/adminActions';







const customStyles = {
  content: {
    top: '45%',
    left: '50%',
    right: '50%',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)'
  }
};


const userStyles = {
  content: {
    top: '52%',
    left: '54%',
    right: '50%',
    bottom: 'auto',
    marginRight: '-59%',
    transform: 'translate(-50%, -50%)',
  }
}

Modal.setAppElement('#root')
const BreadCrumb = ({ title, isAdmin }) => {
  const dispatch = useDispatch();
  const reducer = useSelector(state => state.adminReducer);
  const roles = reducer.role;

  useEffect(() => {
    dispatch(adminActions.getAdminRole())
  }, [dispatch])

  // const adminRoles = role.map((x) => <AdminItem key={x.id} admin={x} />);



  var subtitle;
  const [modalIsOpen, setIsOpen] = useState(false);
  const [roleModalIsOpen, setIsRoleOpen] = useState(false);


  function openModal() {
    setIsOpen(true);
  }

  function openAdminModal() {
    setIsOpen(true);
  }

  function openRoleModal() {
    setIsRoleOpen(true);
  }

  function closeRoleModal() {
    setIsRoleOpen(false);
  }

  function closeAdminModal() {
    setIsOpen(false);
  }

  function closeModal() {
    setIsOpen(false);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = '#385A9E';
  }



  const { register, handleSubmit } = useForm();
  const addUser = data => {
    data.isIPMAN = true;

    const payload = {
      ipmanCode: data.ipmanCode,
      businessName: data.businessName,
      rcNumber: data.rcNumber,
      address: data.address,
      email: data.email,
      contactName: data.contactName,
      phoneNumber: data.phoneNumber,
      isIPMAN: data.isIPMAN
    }
    dispatch(userActions.addUser(payload));
    closeModal();

  }

  const addAdmin = data => {
    const payload = {
      contactName: data.contactName,
      email: data.email,
      password: data.password,
      confirmPassword: data.confirmPassword,
      phoneNumber: data.phoneNumber,
      role: [data.role]
    }
    dispatch(adminActions.addAdmin(payload));
    closeModal();
  }

  const addRole = data => {
    const payload = {
      name: data.role
    }
    dispatch(adminActions.addAdminRole(payload));
    closeRoleModal();
  }

  return (
    <div>
      <div className="card-body">
        <div className="row">
          <div className="col-7 align-self-center">
            <h4 className="card-title">{title}</h4>
          </div>
          {
            isAdmin === "true" ?
              <div className="col-5 align-self-center">
                <div className="customize-input float-right">
                  <button type="button" className="btn wasves-effect waves-light btn-info" onClick={openAdminModal}>Add Admin</button>
                  <div className="divider" />
                  <button type="button" className="btn wasves-effect waves-light btn-info" onClick={openRoleModal}>Add Role</button>
                  <Modal
                    isOpen={modalIsOpen}
                    onAfterOpen={afterOpenModal}
                    onRequestClose={closeAdminModal}
                    style={customStyles}
                    contentLabel="Example Modal">

                    <h2 ref={_subtitle => (subtitle = _subtitle)}>Add Admin</h2>
                    <br />
                    {/* <button onClick={closeModal}>close</button> */}
                    <form className="pl-3 pr-3" action="#">
                      <div className="row">
                        <div className="col-md-6">
                          <div className="form-group">
                            <label htmlFor="ipmancode">Admin Name</label>
                            <input className="form-control" type="text" id="contactName"
                              required="" placeholder="Admin Name" name="contactName" ref={register} />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <label htmlFor="businessname">Phone Number</label>
                            <input className="form-control" type="text" id="phoneNumber"
                              required="" placeholder="Phone Number" name="phoneNumber" ref={register} />
                          </div>
                        </div>

                      </div>

                      <div className="row">
                        <div className="col-md-6">
                          <div className="form-group">
                            <label htmlFor="rcnumber">Email</label>
                            <input className="form-control" type="email" id="email"
                              required="" placeholder="email" name="email" ref={register} />
                          </div>
                        </div>

                        <div className="col-md-6">
                          <div className="form-group">
                            <label htmlFor="address">Password</label>
                            <input className="form-control" type="password" id="password"
                              required="" placeholder="Password" name="password" ref={register} />
                          </div>
                        </div>
                      </div>

                      <div className="row">
                        <div className="col-md-6">
                          <div className="form-group">
                            <label htmlFor="emailaddress">Confirm Password</label>
                            <input className="form-control" type="password" id="confirmPassword"
                              required="" placeholder="Confirm Password" name="confirmPassword" ref={register} />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <label htmlFor="role">Role</label>
                            <select className="form-control" name="role" ref={register}>
                              {roles.map(role => (

                                <option key={role}
                                  value={role}>{role}</option>
                              ))}
                            </select>
                          </div>
                        </div>
                      </div>


                      <div className="form-group text-center">
                        <div className="customize-input float-right">
                          <button className="btn btn-primary" onClick={handleSubmit(addAdmin)} style={{ marginRight: '20px' }} type="submit">Add Admin</button>
                          <button className="btn btn-danger" type="submit">Cancel</button>
                        </div>
                      </div>

                    </form>


                  </Modal>

                  <Modal
                    isOpen={roleModalIsOpen}
                    onAfterOpen={afterOpenModal}
                    onRequestClose={closeRoleModal}
                    style={customStyles}
                    contentLabel="Example Modal">

                    <h2 ref={_subtitle => (subtitle = _subtitle)}>Add Role</h2>
                    <br />
                    {/* <button onClick={closeModal}>close</button> */}
                    <form className="pl-3 pr-3" action="#">
                      <div className="row">
                        <div className="col-md-12">
                          <div className="form-group">
                            <label htmlFor="role">Role</label>
                            <input className="form-control" type="text" id="role"
                              required="" placeholder="Enter Role" name="role" ref={register} />
                          </div>
                        </div>


                      </div>





                      <div className="form-group text-center">
                        <div className="customize-input float-right">
                          <button className="btn btn-primary" onClick={handleSubmit(addRole)} style={{ marginRight: '20px' }} type="submit">Add Role</button>
                          <button className="btn btn-danger" type="submit">Cancel</button>
                        </div>
                      </div>

                    </form>


                  </Modal>
                </div>
              </div>
              :
              isAdmin == "neutral" ?
                <div className="col-5 align-self-center">
                  <div className="customize-input float-right">
                  </div>
                </div>
                :
                <div className="col-5 align-self-center">
                  <div className="customize-input float-right">
                    <button type="button" className="btn wasves-effect waves-light btn-info" onClick={openModal}>Add New User</button>
                    <Modal
                      isOpen={modalIsOpen}
                      onAfterOpen={afterOpenModal}
                      onRequestClose={closeModal}
                      style={userStyles}
                      contentLabel="Example Modal">

                      <h2 ref={_subtitle => (subtitle = _subtitle)}>Add User</h2>
                      <br />
                      {/* <button onClick={closeModal}>close</button> */}
                      <form className="pl-3 pr-3" action="#">
                        <div className="row">
                          <div className="col-md-6">
                            <div className="form-group">
                              <label htmlFor="ipmancode">IPMANCode</label>
                              <input className="form-control" type="text" id="ipmancode"
                                required="" placeholder="IPMANCode" name="ipmanCode" ref={register} />
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-group">
                              <label htmlFor="businessname">Business Name </label>
                              <input className="form-control" type="text" id="businessname"
                                required="" placeholder="Business Name" name="businessName" ref={register} />
                            </div>
                          </div>

                        </div>

                        <div className="row">
                          <div className="col-md-6">
                            <div className="form-group">
                              <label htmlFor="rcnumber">RC Number</label>
                              <input className="form-control" type="text" id="rcnumber"
                                required="" placeholder="RC Number" name="rcNumber" ref={register} />
                            </div>
                          </div>

                          <div className="col-md-6">
                            <div className="form-group">
                              <label htmlFor="address">Address</label>
                              <input className="form-control" type="address" id="address"
                                required="" placeholder="Address" name="address" ref={register} />
                            </div>
                          </div>
                        </div>

                        <div className="row">
                          <div className="col-md-6">
                            <div className="form-group">
                              <label htmlFor="emailaddress">Email</label>
                              <input className="form-control" type="email" id="emailaddress"
                                required="" placeholder="Email" name="email" ref={register} />
                            </div>
                          </div>

                          <div className="col-md-6">
                            <div className="form-group">
                              <label htmlFor="username">User Name</label>
                              <input className="form-control" type="text" id="username"
                                required="" placeholder="User Name" name="contactName" ref={register} />
                            </div>
                          </div>
                        </div>

                        <div className="row">
                          <div className="col-md-6">
                            <div className="form-group">
                              <label htmlFor="phoneNumber">Phone Number</label>
                              <input className="form-control" type="text" id="phoneNumber"
                                required="" placeholder="Phone Number" name="phoneNumber" ref={register} />
                            </div>
                          </div>


                        </div>




                        <div className="form-group text-center">
                          <div className="customize-input float-right">
                            <button className="btn btn-primary" onClick={handleSubmit(addUser)} style={{ marginRight: '20px' }} type="submit">Add User</button>
                            <button className="btn btn-danger" type="submit">Cancel</button>
                          </div>
                        </div>

                      </form>


                    </Modal>
                  </div>
                </div>
          }
        </div>
      </div>
    </div >
  )
}

export default BreadCrumb;