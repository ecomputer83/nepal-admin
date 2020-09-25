import * as t from './actionTypes';
import history from 'utils/history';

// const baseUrl = 'http://localhost:55341';
const baseUrl = 'https://nepalog.azurewebsites.net/';

//#regionAction Creators
const setUser = (payload) => ({ type: t.SET_USER, payload })
const logUserOut = () => ({ type: t.LOG_OUT })
//#endregion


//#region
const fetchUser = (userInfo) => dispatch => {
  console.log('userInfo', userInfo);
  const { email } = userInfo;

  fetch(`${baseUrl}/api/Account/token`, {
    method: "POST",
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(userInfo)
  })
    .then(res => res.json())
    .then(data => {
      if (data !== null) {
        localStorage.setItem("token", data.token)
        history.push('/credit-approval')
        dispatch(setUser({ ...data, userId: email }))
      } else {
        // alert('Login Failed', 'Username or Password is incorrect');
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
