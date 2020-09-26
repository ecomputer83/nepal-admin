import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { userActions } from 'state/actions/userActions';
import ReactTooltip from "react-tooltip";




const UserItem = ({ user }) => {
  const dispatch = useDispatch();

  const { register, handleSubmit } = useForm();
  const addLimit = data => {

    const payload = {
      id: user.id,
      limit: data.creditLimit
    }

    dispatch(userActions.addCreditLimit(payload));

  }






  return (
    <>
      <tr>
        <td style={{ padding: '1rem 1rem 1rem 0' }}>
          <div id="warning-alert-modal" className="modal fade" tabIndex="-1" role="dialog"
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
                            <input className="form-control" type="text" name="creditLimit" id="creditLimit" ref={register}
                              required="" placeholder="Enter Credit Limit" />
                          </div>
                        </div>
                      </div>
                      <button type="button" className="btn btn-outline-info submit-btn"
                        data-dismiss="modal">Cancel</button>

                    </form>
                    <button type="submit" onClick={handleSubmit(addLimit)} style={{ margin: '0 1em' }} className="btn btn-outline-info submit-btn"
                      data-dismiss="modal" > Submit</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </td>
        <th scope="row">{user.ipmanCode}</th>
        <td>{user.businessName}</td>
        <td>{user.contactName}</td>
        <td>{user.phoneNumber}</td>
        <td>{user.creditLimit}</td>
        <td>
          <button type="button" className="btn btn-success btn-circle" data-tip="Add Credit Limit"
            data-for='toolTip1' data-place='top' style={{ marginRight: '10px' }} data-toggle="modal"
            data-target="#warning-alert-modal">
            <i className="fa fa-plus">
            </i>
          </button>
          <ReactTooltip id="toolTip1" />

        </td>
      </tr>
    </>

  )
}

export default UserItem