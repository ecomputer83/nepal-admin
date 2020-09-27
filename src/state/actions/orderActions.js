import * as t from './actionTypes';

import { orderService } from 'services/order.service';



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

const getAllOrders = () => async dispatch => {
  dispatch(getOrderPending());
  await orderService.getAllOrders()
    .then(res => {
      dispatch(getOrderSuccess(res.data));
      return res.data;
    })
    .catch(error => {
      dispatch(getOrderError(error));
    })
}

const markAsComplete = ({ id }) => async dispatch => {
  dispatch(getOrderPending());
  await orderService.markAsComplete(id)
    .then(res => {
      dispatch(orderActions.getOrders())
      // return res.data;
    })
    .catch(error => {
      dispatch(getOrderError(error));
    })
}

const getOrder = ({ id }) => async dispatch => {
  // dispatch(getOrderPending());
  await orderService.getOrder(id)
    .then(res => {
      console.log('getOrder', res);
      // dispatch(getOrderPending());
      return res
      // return res.data;
    })
    .catch(error => {
      console.log('getOrder', error);
      // dispatch(getOrderPending());
    })
}

//#endregion


export const orderActions = {
  getAllOrders,
  markAsComplete,
  getOrder
};