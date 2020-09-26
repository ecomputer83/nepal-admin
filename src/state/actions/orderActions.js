import * as t from './actionTypes';
import { constants } from 'utils/constants';

import { orderService } from 'services/order.service';

const axios = require('axios');

const baseUrl = constants.baseUrl;
const axiosConfig = constants.axiosConfig;


//#regionAction Creators
const getOrderSuccess = (payload) => {
  return {
    type: t.GET_ORDERS_SUCCESS,
    payload
  }
}

const getOrderPending = () => {
  return {
    type: t.GET_ORDERS_PENDING
  }
}

const getOrderError = (error) => {
  return {
    type: t.GET_ORDERS_ERROR,
    error
  }
}
//#endregion


//#region 

const getOrders = () => dispatch => {
  dispatch(getOrderPending());
  orderService.getAllOrders()
    .then(res => {
      dispatch(getOrderSuccess(res.data));
      return res.data;
    })
    .catch(error => {
      dispatch(getOrderError(error));
    })
}

const approveOrder = ({ id }) => dispatch => {
  dispatch(getOrderPending());
  orderService.approveOrder(id)
    .then(res => {
      dispatch(orderActions.getOrders())
      // return res.data;
    })
    .catch(error => {
      dispatch(getOrderError(error));
    })
}

const rejectOrder = ({ id }) => dispatch => {
  dispatch(getOrderPending());
  orderService.rejectOrder(id)
    .then(res => {
      dispatch(orderActions.getOrders())
      // return res.data;
    })
    .catch(error => {
      dispatch(getOrderError(error));
    })
}

//#endregion


export const orderActions = {
  getOrders,
  approveOrder,
  rejectOrder
};