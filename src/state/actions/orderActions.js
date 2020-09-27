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

const getOrderPendingSuccess = () => {
  return {
    type: t.GET_ORDERS_PENDING_SUCCESS
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
  // dispatch(getOrderPending());
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
      dispatch(orderActions.getAllOrders())
      // return res.data;
    })
    .catch(error => {
      dispatch(getOrderError(error));
    })
}

const getOrder = ({ id }) => async dispatch => {
  dispatch(getOrderPending());
  return await orderService.getOrder(id)
    .then(res => {
      dispatch(getOrderPendingSuccess());
      return res.data
    })
    .catch(error => {
      dispatch(getOrderPendingSuccess());
      console.log('getOrder', error);
    })
}

//#endregion


export const orderActions = {
  getAllOrders,
  markAsComplete,
  getOrder
};