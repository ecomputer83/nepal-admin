import * as t from './actionTypes';
import { constants } from 'utils/constants';

const axios = require('axios');


const baseUrl = constants.baseUrl;
const axiosConfig = constants.axiosConfig;


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
  axios.get(`${baseUrl}/Credit/iPMANCredits`, axiosConfig)
    .then(res => {
      dispatch(getCreditApprovalSuccess(res.data));
      return res.data;
    })
    .catch(error => {
      dispatch(getCreditApprovalError(error));
    })
}

//#endregion


export const creditApprovalActions = {
  getCreditApprovals
};