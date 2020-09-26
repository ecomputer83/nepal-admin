import axios from 'axios';
import { constants } from 'utils/constants';

export const userService = {
  getAllUsers,
  addUser
};

function getAllUsers() {
  return axios.get(`${constants.baseUrl}/account/allusers`, `${constants.axiosConfig}`)
    .then((response) => {
      return response;
    }).catch((err) => {
      console.log(err);
    })
}

function addUser(payload) {
  return axios.post(`${constants.baseUrl}/`, payload, `${constants.axiosConfig}`)
    .then((res) => {
      return res;
    }).catch((err) => {
      console.log(err);
    })
}

function addCreditLimit(id, limit) {
  return axios.get(`${constants.baseUrl}/Account/AddCreditLimit/${id}/${limit}`)
    .then((res) => {
      console.log(res);
      return res;
    }).catch((err) => {
      console.log(err);
    })
}
