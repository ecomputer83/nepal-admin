import axios from 'axios';
import { constants } from 'utils/constants';

const baseUrl = constants.baseUrl;
const axiosConfig = constants.axiosConfig;

const getAllOrders = () => {
  return axios.get(`${baseUrl}/Order`, axiosConfig)
    .then(response => {
      return response;
    }).catch(err => {
      return err
    })
}

const markAsComplete = (id) => {
  return axios.get(`${baseUrl}/Credit/approve/${id}`, axiosConfig)
    .then(response => {
      return response;
    }).catch(err => {
      return err
    })
}

const rejectOrder = (id) => {
  return axios.get(`${baseUrl}/Credit/reject/${id}`, axiosConfig)
    .then(response => {
      return response;
    }).catch(err => {
      return err
    })
}

export const orderService = {
  getAllOrders,
  markAsComplete,
  rejectOrder
};
