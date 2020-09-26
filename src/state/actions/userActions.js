import * as t from './actionTypes';
import { constants } from 'utils/constants';

const axios = require('axios');

const baseUrl = constants.baseUrl;
const axiosConfig = constants.axiosConfig;

function getAllUsersSuccess(data) {
  return {
    type: t.GET_ALL_USERS,
    payload: data
  }
}

function addCreditLimitSuccess() {
  alert('Credit limit was added successfully');
  return {
    type: t.ADD_CREDIT_LIMIT,
  }
}

const getAllUsers = () => dispatch => {
  axios.get(`${baseUrl}/account/allusers`, axiosConfig)
    .then(res => {
      dispatch(getAllUsersSuccess(res.data));
      return res.data;
    })
    .catch(error => {
      console.log(error)
    })
}

const addCreditLimit = (payload) => dispatch => {
  axios.get(`${constants.baseUrl}/Account/AddCreditLimit/${payload.id}/${payload.limit}`, axiosConfig)
    .then(res => {
      dispatch(addCreditLimitSuccess());
      dispatch(userActions.getAllUsers())
    })
    .catch(error => {
      console.log(error)
    })
}


export const userActions = {
  getAllUsers,
  addCreditLimit

};