import * as t from './actionTypes';
import { constants } from 'utils/constants';

const axios = require('axios');


const baseUrl = constants.baseUrl;
const axiosConfig = constants.axiosConfig;


//#regionAction Creators
function fetchcreditApprovalSuccess(data) {
  return {
    type: t.GET_CREDITAPPROVALS,
    payload: data
  }
}
//#endregion


//#region 

const getCreditApprovals = () => dispatch => {
  // TODO: update spinner
  // dispatch(fetchProductsPending());

  axios.get(`${baseUrl}/Credit/BankDeposits`, axiosConfig)
    .then(res => {
      // dispatch(setUser({ ...data, userId: email }))
      dispatch(fetchcreditApprovalSuccess(res.data));
      return res.data;
    })
    .catch(error => {
      // dispatch(fetchProductsError(error));
    })
}

//#endregion


export const creditApprovalActions = {
  getCreditApprovals
};