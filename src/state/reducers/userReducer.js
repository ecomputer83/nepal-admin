import * as t from '../actions/actionTypes';

const defaultState = {
  ipManCode: '',
  bussinessName: '',
  contactName: '',
  phoneNumber: '',
  creditLimit: ''
}

const userRducer = (state = defaultState, action) => {
  switch (action.type) {
    case t.ADD_USER:
      return {
        user: {}
      }
    case t.GET_USERS:
      return {
        user: {}
      }
    default: return state
  }
}

export default userRducer;