import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { userActions } from 'state/actions/userActions';
import ReactTooltip from "react-tooltip";




const UserItem = ({ user }) => {


  const dispatch = useDispatch();

  const handleModalOpen = (id) => {
    localStorage.setItem('userId', id);
  };

  const { register, handleSubmit, errors, formState } = useForm({
    mode: "onChange"
  });
  const addLimit = (data) => {
    const userId = localStorage.getItem('userId');
    const payload = {
      id: userId,
      limit: data.creditLimit
    }
    dispatch(userActions.addCreditLimit(payload));

  }

  const deleteUser = () => {
    const userId = localStorage.getItem('userId');
    dispatch(userActions.deleteUser(userId));
  }








  return (
    <>
      <tr>

        <th scope="row" style={{ padding: '1rem 1rem 1rem 3rem' }}>{user.ipmanCode}</th>
        <td>{user.businessName}</td>
        <td>{user.contactName}</td>
        <td>{user.phoneNumber}</td>
        <td>{user.email}</td>
        <td>{user.creditLimit}</td>
        <td>
          <button type="button" className="btn btn-success btn-circle" data-tip="Add Credit Limit"
            data-for='toolTip1' data-place='top' style={{ marginRight: '10px' }} data-toggle="modal"
            data-target="#add-alert-modal" onClick={() => handleModalOpen(user.id)}>
            <i className="fa fa-plus">
            </i>
          </button>
          <button type="button" className="btn btn-danger btn-circle" data-tip="Remove User"
            data-for='toolTip2' data-place='top' style={{ marginRight: '10px' }} data-toggle="modal"
            data-target="#warning-alert-modal" onClick={() => handleModalOpen(user.id)}>
            <i className="fa fa-times">
            </i>
          </button>
          <ReactTooltip id="toolTip1" />
          <ReactTooltip id="toolTip2" />


        </td>
        <td style={{ padding: '1rem 1rem 1rem 0' }}>
          <div id="add-alert-modal" className="modal fade" tabIndex="-1" role="dialog"
            aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
              <div className="modal-content">
                <div className="modal-body">
                  <div className="">
                    <i className="dripicons-warning h1 text-warning"></i>
                    <form className="pl-3 pr-3" >
                      <div className="row">
                        <div className="col-md-12">
                          <div className="form-group">
                            <label htmlFor="creditLimit">Add Credit Limit</label>
                            <input className="form-control" type="number" name="creditLimit" id="creditLimit" ref={register({
                              required: "Credit limit is required",
                            })}
                              required="" placeholder="Enter Credit Limit" />
                            {errors.creditLimit && <p className="error">{errors.creditLimit.message}</p>}

                          </div>
                        </div>
                      </div>
                      <button type="button" className="btn btn-outline-info submit-btn"
                        data-dismiss="modal">Cancel</button>

                    </form>
                    <button type="submit" onClick={handleSubmit(addLimit)} style={{ margin: '0 1em' }} className="btn btn-outline-info submit-btn"
                      data-dismiss="modal" disabled={!formState.isValid} > Submit</button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div id="warning-alert-modal" className="modal fade" tabIndex="-1" role="dialog"
            aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
              <div className="modal-content">
                <div className="modal-body center-item">
                  <div className="">
                    <i className="dripicons-warning h1 text-warning"></i>
                    <p>Are you sure you want to remove this user?</p>
                    <button type="submit" onClick={deleteUser} style={{ margin: '0 1em' }} className="btn btn-outline-info submit-btn alert-btn"
                      data-dismiss="modal" > Yes</button>
                    <button type="button" className="btn btn-outline-info submit-btn alert-btn"
                      data-dismiss="modal">No</button>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </td>
      </tr>
    </>

  )
}

export default UserItem