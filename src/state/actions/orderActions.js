import * as t from './actionTypes';
import { constants } from 'utils/constants';

const axios = require('axios');

const baseUrl = constants.baseUrl;
const axiosConfig = constants.axiosConfig;


//#regionAction Creators
const getOrderSuccess = (payload) => {
  return {
    type: t.GET_ORDERS,
    payload
  }
}
//#endregion


//#region 

const getOrders = () => dispatch => {
  // TODO: update spinner
  axios.get(`${baseUrl}/Credit/BankDeposits`, axiosConfig)
    .then(res => {
      dispatch(getOrderSuccess(res.data));
      return res.data;
    })
    .catch(error => {
      // dispatch(fetchProductsError(error));
    })
}

const approveOrder = ({ id }) => dispatch => {
  // TODO: update spinner
  axios.get(`${baseUrl}/Credit/approve/${id}`, axiosConfig)
    .then(res => {
      dispatch(orderActions.getOrders())
      // return res.data;
    })
    .catch(error => {
      // dispatch(fetchProductsError(error));
    })
}

const rejectOrder = ({ id }) => dispatch => {
  // TODO: update spinner
  axios.get(`${baseUrl}/Credit/reject/${id}`, axiosConfig)
    .then(res => {
      dispatch(orderActions.getOrders())
      // return res.data;
    })
    .catch(error => {
      // dispatch(fetchProductsError(error));
    })
}

//#endregion


export const orderActions = {
  getOrders,
  approveOrder,
  rejectOrder
};