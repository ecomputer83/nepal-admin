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


export const userActions = {
  getAllUsers
};