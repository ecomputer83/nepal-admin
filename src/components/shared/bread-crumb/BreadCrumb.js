import React, { useState } from 'react';
import Modal from 'react-modal';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { userActions } from 'state/actions/userActions';






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

Modal.setAppElement('#root')
const BreadCrumb = ({ title, isAdmin }) => {

  var subtitle;
  const [modalIsOpen, setIsOpen] = useState(false);


  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = '#385A9E';
  }

  const dispatch = useDispatch();


  const { register, handleSubmit } = useForm();
  const addUser = data => {
    dispatch(userActions.addUser(data));
  }

  return (
    <div>
      <div className="card-body">
        <div className="row">
          <div className="col-7 align-self-center">
            <h4 className="card-title">{title}</h4>
          </div>
          {
            isAdmin ?
              <div className="col-5 align-self-center">
                <div className="customize-input float-right">
                  <button type="button" className="btn wasves-effect waves-light btn-info" onClick={openModal}>Add New User</button>
                  <Modal
                    isOpen={modalIsOpen}
                    onAfterOpen={afterOpenModal}
                    onRequestClose={closeModal}
                    style={customStyles}
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
                              required="" placeholder="IPMANCode" name="ipmancode" ref={register} />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <label htmlFor="businessname">Business Name </label>
                            <input className="form-control" type="text" id="businessname"
                              required="" placeholder="Business Name" name="businessname" ref={register} />
                          </div>
                        </div>

                      </div>

                      <div className="row">
                        <div className="col-md-6">
                          <div className="form-group">
                            <label htmlFor="rcnumber">RC Number</label>
                            <input className="form-control" type="text" id="rcnumber"
                              required="" placeholder="RC Number" name="rcnumber" ref={register} />
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
                            <label htmlFor="creditlimit">Credit Limit</label>
                            <input className="form-control" type="text" id="creditlimit"
                              required="" placeholder="Credit Limit" name="creditLimit" ref={register} />
                          </div>
                        </div>

                        {/* <div className="col-md-6">
                          <div className="form-group">
                            <label htmlFor="username">User Name</label>
                            <input className="form-control" type="text" id="username"
                              required="" placeholder="User Name" />
                          </div>
                        </div> */}
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
              :
              null
          }
        </div>
      </div>
    </div >
  )
}

export default BreadCrumb;