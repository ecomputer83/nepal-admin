import * as t from './actionTypes';

const baseUrl = 'https://localhost:44316/api';


//#regionAction Creators
const setAllUsers = (payload) => ({ type: t.SET_ALL_USERS, payload })
const getUsers = () => ({ type: t.GET_ALL_USERS })

//#endregion


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
      dispatch(getUsers())
    })

}

const getAllUsers = () => dispatch => {
  fetch(`${baseUrl}/account/allusers`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json",
      "Authorization": `Bearer ${localStorage.getItem("token")}`
    },
  })
    .then(res => res.json())
    .then(data => {
      dispatch(setAllUsers({ data }))
    })
}



export const userActions = {
  getAllUsers,
  addUser
};

