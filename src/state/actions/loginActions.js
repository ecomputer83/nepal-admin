import * as t from './actionTypes';
import history from 'utils/history';
import { constants } from 'utils/constants';
const axios = require('axios');

const baseUrl = constants.baseUrl;


//#regionAction Creators
const setUser = (payload) => ({ type: t.SET_USER, payload })
const logUserOut = () => ({ type: t.LOG_OUT })
//#endregion

let axiosConfig = {
  headers: {
    'Content-Type': 'application/json;',
    "Accept": "application/json"
  }
};

//#region
const fetchUser = (userInfo) => dispatch => {
  console.log('userInfo', userInfo);
  const { email } = userInfo;
  axios.post(`${baseUrl}/api/Account/token`, JSON.stringify(userInfo), axiosConfig)
    .then(data => {
      if (data !== null) {
        console.log('datadata', data.data.token);
        dispatch(setUser({ ...data, userId: email }))
        history.push('/credit-approval')
      } else {
        alert('Login Failed', 'Username or Password is incorrect');
      }
    })
    .catch((err) => {
      // alert('Login Failed', 'Some error occured, please retry');
      console.log(err);
    });
}

//#endregion


// export const signUserUp = (userInfo) => dispatch => {
//   fetch(`http://localhost:4000/users`, {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//       "Accept": "application/json"
//     },
//     body: JSON.stringify(userInfo)
//   })
//     .then(res => res.json())
//     .then(data => {
//       // data sent back will in the format of
//       // {
//       //     user: {},
//       //.    token: "aaaaa.bbbbb.bbbbb"
//       // }
//       localStorage.setItem("token", data.token)
//       dispatch(setUser(data.user))
//     })
// }

const autoLogin = () => dispatch => {
  fetch(`${baseUrl}/auto_login`, {
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json",
      "Authorization": `Bearer ${localStorage.getItem("token")}`
    }
  })
    .then(res => res.json())
    .then(data => {
      localStorage.setItem("token", data.token)
      dispatch(setUser(data.user))
    })
}

export const authActions = {
  logUserOut,
  fetchUser,
  autoLogin
};
