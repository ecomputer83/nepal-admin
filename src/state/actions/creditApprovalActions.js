import * as t from './actionTypes';

import { creditApprovalService } from 'services/creditapproval.service';
import { toast } from 'react-toastify';



//#regionAction Creators
const getCreditApprovalSuccess = (data) => {
  return {
    type: t.GET_CREDITAPPROVALS_SUCCESS,
    payload: data
  }
}

const getCreditApprovalPending = (data) => {
  return {
    type: t.GET_CREDITAPPROVALS_PENDING
  }
}

const getCreditApprovalError = (error) => {
  return {
    type: t.GET_CREDITAPPROVALS_ERROR,
    error
  }
}
//#endregion


//#region 

const getCreditApprovals = () => dispatch => {
  // dispatch(getCreditApprovalPending());
  creditApprovalService.getAllCreditApprovals()
    .then(res => {
      dispatch(getCreditApprovalSuccess(res.data));
      return res.data;
    })
    .catch(error => {
      dispatch(getCreditApprovalError(error));
    })
}


const approveCreditOrder = ({ id }) => dispatch => {
  dispatch(getCreditApprovalPending());
  creditApprovalService.approveCreditOrder(id)
    .then(res => {
      dispatch(creditApprovalActions.getCreditApprovals())
      toast.success("Credit has been approved successfully!");

      // return res.data;
    })
    .catch(error => {
      dispatch(getCreditApprovalError(error));
      toast.error(error);

    })
}

const rejectCreditOrder = ({ id }) => dispatch => {
  dispatch(getCreditApprovalPending());
  creditApprovalService.rejectCreditOrder(id)
    .then(res => {
      dispatch(creditApprovalActions.getCreditApprovals())
      toast.success("Credit has been rejected successfully!");
      // return res.data;
    })
    .catch(error => {
      dispatch(getCreditApprovalError(error));
      toast.error(error);
    })
}

//#endregion


export const creditApprovalActions = {
  getCreditApprovals,
  approveCreditOrder,
  rejectCreditOrder
};