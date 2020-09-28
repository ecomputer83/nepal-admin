import * as t from './actionTypes';
import { constants } from 'utils/constants';
import { toast } from 'react-toastify';


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
  return {
    type: t.ADD_CREDIT_LIMIT,
  }
}

function addUserSuccess() {
  return {
    type: t.ADD_USER,
  }
}

const getUsersPending = () => {
  return {
    type: t.GET_USERS_PENDING
  }
}

const getUsersError = (error) => {
  return {
    type: t.GET_USERS_ERROR,
    error
  }
}

const addCreditError = (error) => {
  return {
    type: t.ADD_CREDIT_ERROR,
    error
  }
}

const deleteUserSuccess = () => {
  return {
    type: t.DELETE_USER_SUCCESS,
  }
}

const deleteUserError = (error) => {
  return {
    type: t.DELETE_USER_ERROR,
    error
  }
}

const getAllUsers = () => dispatch => {
  // dispatch(getUsersPending());
  axios.get(`${baseUrl}/account/allusers`, axiosConfig)
    .then(res => {
      dispatch(getAllUsersSuccess(res.data));
      return res.data;
    })
    .catch(error => {
      dispatch(getUsersError(error));
    })
}


const addCreditLimit = (payload) => dispatch => {
  dispatch(getUsersPending());

  axios.get(`${constants.baseUrl}/Account/AddCreditLimit/${payload.id}/${payload.limit}`, axiosConfig)
    .then(res => {
      dispatch(addCreditLimitSuccess());
      dispatch(userActions.getAllUsers());
      toast.success("Credit limit has been added!");

    })
    .catch(error => {
      dispatch(addCreditError(error));
      toast.error(error);

    })
}

const addUser = (payload) => dispatch => {
  dispatch(getUsersPending());
  axios.post(`${constants.baseUrl}/Account/addUser`, payload, axiosConfig)
    .then(res => {
      dispatch(addUserSuccess());
      dispatch(userActions.getAllUsers());
      toast.success("User has been added!");

    })
    .catch(error => {
      dispatch(getUsersError(error));
      toast.error(error);

    })
}

const deleteUser = (id) => dispatch => {
  dispatch(getUsersPending());
  axios.delete(`${constants.baseUrl}/account/removeuser/${id}`, axiosConfig)
    .then(res => {
      dispatch(deleteUserSuccess());
      dispatch(userActions.getAllUsers());
      toast.success("User has been deleted!");

    })
    .catch(error => {
      dispatch(deleteUserError(error));
      toast.error(error);

    })
}


export const userActions = {
  getAllUsers,
  addCreditLimit,
  addUser,
  deleteUser
};