import * as t from './actionTypes';

import { paymentService } from 'services/payment.service';



//#regionAction Creators
const getPaymentSuccess = (payload) => {
  return {
    type: t.GET_PAYMENTS_SUCCESS,
    payload
  }
}

const getPaymentPending = () => {
  return {
    type: t.GET_PAYMENTS_PENDING
  }
}

const getPaymentError = (error) => {
  return {
    type: t.GET_PAYMENTS_ERROR,
    error
  }
}
//#endregion


//#region 

const getPayments = () => dispatch => {
  dispatch(getPaymentPending());
  paymentService.getAllPaymentOrders()
    .then(res => {
      dispatch(getPaymentSuccess(res.data));
      return res.data;
    })
    .catch(error => {
      dispatch(getPaymentError(error));
    })
}

const approvePayment = ({ id }) => dispatch => {
  dispatch(getPaymentPending());
  paymentService.approvePaymentOrder(id)
    .then(res => {
      dispatch(paymentActions.getPayments())
      // return res.data;
    })
    .catch(error => {
      dispatch(getPaymentError(error));
    })
}

const rejectPayment = ({ id }) => dispatch => {
  dispatch(getPaymentPending());
  paymentService.rejectPaymentOrder(id)
    .then(res => {
      dispatch(paymentActions.getPayments())
      // return res.data;
    })
    .catch(error => {
      dispatch(getPaymentError(error));
    })
}

//#endregion


export const paymentActions = {
  getPayments,
  approvePayment,
  rejectPayment
};