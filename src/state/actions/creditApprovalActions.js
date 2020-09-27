import * as t from './actionTypes';

import { creditApprovalService } from 'services/creditapproval.service';


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
  dispatch(getCreditApprovalPending());
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
      // return res.data;
    })
    .catch(error => {
      dispatch(getCreditApprovalError(error));
    })
}

const rejectCreditOrder = ({ id }) => dispatch => {
  dispatch(getCreditApprovalPending());
  creditApprovalService.rejectCreditOrder(id)
    .then(res => {
      dispatch(creditApprovalActions.getCreditApprovals())
      // return res.data;
    })
    .catch(error => {
      dispatch(getCreditApprovalError(error));
    })
}

//#endregion


export const creditApprovalActions = {
  getCreditApprovals,
  approveCreditOrder,
  rejectCreditOrder
};