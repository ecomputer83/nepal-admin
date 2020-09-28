import * as t from './actionTypes';

import { orderService } from 'services/order.service';
import { toast } from 'react-toastify';




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
      toast.error(error.toString());
      dispatch(getOrderError(error));
    })
}

const markAsComplete = ({ id }) => async dispatch => {
  dispatch(getOrderPending());
  await orderService.markAsComplete(id)
    .then(res => {
      dispatch(orderActions.getAllOrders())
      toast.success("Order has been marked as complete!");

      // return res.data;
    })
    .catch(error => {
      toast.error(error.toString());
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
      toast.error(error.toString());
      dispatch(getOrderPendingSuccess());
    })
}

//#endregion


export const orderActions = {
  getAllOrders,
  markAsComplete,
  getOrder
};