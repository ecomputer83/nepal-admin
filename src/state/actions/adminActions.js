import * as t from './actionTypes';
import { constants } from 'utils/constants';
import { toast } from 'react-toastify';


const axios = require('axios');
const baseUrl = constants.baseUrl;
const axiosConfig = constants.axiosConfig;

function getAllAdminSuccess(data) {
  return {
    type: t.GET_ALLADMIN_SUCCESS,
    payload: data
  }
}
function getAdminRoleSuccess(data) {
  return {
    type: t.GET_ADMIN_ROLE,
    payload: data
  }
}
function getAllAdminPending() {
  return {
    type: t.GET_ALLADMIN_PENDING
  }
}
function getAllAdminError(error) {
  return {
    type: t.GET_ALLADMIN_ERROR,
    error
  }
}
function addAdminSuccess() {
  return {
    type: t.ADD_ADMIN_SUCCESS
  }
}
function addAdminRoleSucess() {
  return {
    type: t.ADD_ADMIN_ROLE
  }
}
function addAdminPending() {
  return {
    type: t.ADD_ADMIN_PENDING
  }
}
function addAdminError(error) {
  return {
    type: t.ADD_ADMIN_ERROR,
    error
  }
}

const getAllAdmin = () => dispatch => {
  dispatch(getAllAdminPending());
  axios.get(`${baseUrl}/Account/AllAdminUsers`, axiosConfig)
    .then(res => {
      dispatch(getAllAdminSuccess(res.data));
      return res.data;
    })
    .catch(error => {
      dispatch(getAllAdminError(error))
    });
}

const addAdmin = (payload) => dispatch => {
  dispatch(addAdminPending());
  axios.post(`${baseUrl}/Account/addAdmn`, payload, axiosConfig)
    .then(res => {
      dispatch(addAdminSuccess(res.data));
      dispatch(adminActions.getAllAdmin());
      toast.success("Admin has been added!");

      return res.data;
    })
    .catch(error => {
      dispatch(addAdminError(error));
      toast.error(error);
    });
}

const getAdminRole = () => dispatch => {
  axios.get(`${baseUrl}/Account/roles`, axiosConfig)
    .then(res => {
      dispatch(getAdminRoleSuccess(res.data));
      return res.data;
    })
    .catch(error => {
      dispatch(getAllAdminError(error));
    });
}

const addAdminRole = (payload) => dispatch => {
  dispatch(addAdminPending());
  axios.post(`${baseUrl}/Account/addrole`, payload, axiosConfig)
    .then(res => {
      dispatch(addAdminRoleSucess(res.data));
      dispatch(adminActions.getAdminRole());
      toast.success("Role has been added!");
      return res.data;
    })
    .catch(error => {
      dispatch(getAllAdminError(error));
      toast.error(error);
    });
}

export const adminActions = {
  getAllAdmin,
  addAdmin,
  getAdminRole,
  addAdminRole
}
