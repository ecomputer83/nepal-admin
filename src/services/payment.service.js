import axios from 'axios';
import { constants } from 'utils/constants';

const baseUrl = constants.baseUrl;
const axiosConfig = constants.axiosConfig;

const getAllPaymentOrders = () => {
  return axios.get(`${baseUrl}/Credit/BankDeposits`, axiosConfig)
    .then(response => {
      return response;
    }).catch(err => {
      return err
    })
}

const approvePaymentOrder = (id) => {
  debugger
  return axios.get(`${baseUrl}/Credit/approve/${id}`, axiosConfig)
    .then(response => {
      return response;
    }).catch(err => {
      return err
    })
}

const rejectPaymentOrder = (id) => {
  debugger
  return axios.get(`${baseUrl}/Credit/reject/${id}`, axiosConfig)
    .then(response => {
      return response;
    }).catch(err => {
      return err
    })
}

export const paymentService = {
  getAllPaymentOrders,
  approvePaymentOrder,
  rejectPaymentOrder
};
