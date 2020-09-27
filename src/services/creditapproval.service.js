import axios from 'axios';
import { constants } from 'utils/constants';

const baseUrl = constants.baseUrl;
const axiosConfig = constants.axiosConfig;

const getAllCreditApprovals = () => {
  return axios.get(`${baseUrl}/Credit/iPMANCredits`, axiosConfig)
    .then(response => {
      return response;
    }).catch(err => {
      return err
    })
}

const approveCreditOrder = (id) => {
  return axios.get(`${baseUrl}/Credit/approve/${id}`, axiosConfig)
    .then(response => {
      return response;
    }).catch(err => {
      return err
    })
}

const rejectCreditOrder = (id) => {
  return axios.get(`${baseUrl}/Credit/reject/${id}`, axiosConfig)
    .then(response => {
      return response;
    }).catch(err => {
      return err
    })
}

export const creditApprovalService = {
  getAllCreditApprovals,
  approveCreditOrder,
  rejectCreditOrder
};
