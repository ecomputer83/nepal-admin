import { userService } from 'services/user.service';
import * as t from './actionTypes';




export const userActions = {
  getAllUsers,
  addUser
};

function getAllUsers() {
  return dispatch => {
    userService.getAllUsers()
      .then((res) => {
        dispatch(getUserList(res));
      }).catch((err) => {
        console.log(err);
      })
  }
}

function addUser(payload) {
  return dispatch => {
    userService.addUser(payload)
      .then((res) => {
        dispatch(createUserInfo());
      })
  }
}

export function getUserList(users) {
  return {
    type: "GET_ALL_USERS",
    allUsers: users
  }
}


export function createUserInfo() {
  return {
    type: "USER_CREATED"
  }
}

