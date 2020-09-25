import * as t from './actionTypes';

const baseUrl = 'https://localhost:44316/api';


//#regionAction Creators
// const addUser = (payload) => ({ type: t.ADD_USER, payload })
// const getUsers = () => ({ type: t.GET_USERS })
//#endregion


//#region
const addUser = (userInfo) => dispatch => {
  fetch(`${baseUrl}/account/allusers`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json",
      "Authorization": `Bearer ${localStorage.getItem("token")}`
    },
    body: JSON.stringify(userInfo)
  })
    .then(res => res.json())
    .then(data => {
      console.log(data)
    })

}



export const userActions = {
  addUser
};