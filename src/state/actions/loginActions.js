import * as t from './actionTypes';
import history from 'utils/history';
import { constants } from 'utils/constants';


const axios = require('axios');
const baseUrl = constants.baseUrl;
const axiosConfig = constants.axiosConfig;


//#regionAction Creators
const setUser = (payload) => ({ type: t.SET_USER, payload })
const logUserOut = () => ({ type: t.LOG_OUT })
//#endregion


//#region
const fetchUserToken = (userInfo) => dispatch => {
  axios.post(`${baseUrl}/Account/token`, JSON.stringify(userInfo), axiosConfig)
    .then(data => {
      if (data !== null) {
        localStorage.setItem("nepal-token", data.data.token)
        dispatch(getUser())
      } else {
        alert('Login Failed', 'Username or Password is incorrect');
      }
    })
    .catch((err) => {
      // alert('Login Failed', 'Some error occured, please retry');
      console.log(err);
    });
}


const getUser = () => dispatch => {
  axiosConfig['headers'].Authorization = `Bearer ${localStorage.getItem("nepal-token")}`;
  axios.get(`${baseUrl}/Account/user`, axiosConfig)
    .then(data => {
      if (data !== null) {
        localStorage.setItem("nepal-user", data.data.userName);
        localStorage.setItem("isIPMAN", data.data.isIPMAN);
        dispatch(setUser(data.data))
        if (data.data.isIPMAN) {
          history.push('/user-management')
        } else {
          history.push('/credit-approval')
        }
      } else {
        alert('Login Failed', 'Username or Password is incorrect');
      }
    })
    .catch((err) => {
      if (err.toString().includes("401")) {
        console.log("unAuthorized", err);
      }
      console.log("loginAction : getUser", err);
    });
}


const autoLogin = () => dispatch => {
  const authToken = localStorage.getItem("nepal-token");
  if (authToken) {
    dispatch(getUser());
  }
}

const logOut = () => dispatch => {
  localStorage.removeItem('nepal-user');
  localStorage.removeItem('nepal-token');
  localStorage.removeItem('isIPMAN');
  history.push('/');

}
//#endregion

export const loginActions = {
  logUserOut,
  fetchUserToken,
  getUser,
  autoLogin,
  logOut
};
