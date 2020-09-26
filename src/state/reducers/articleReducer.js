import * as t from '../actions/actionTypes';


const defaultState = {
  articles: [],
  error: null,
  pending: false
}

const articleReducer = (state = defaultState, action) => {
  switch (action.type) {
    case t.GET_ARTICLES_SUCCESS:
      return {
        ...state,
        pending: false,
        articles: action.payload
      }
    case t.GET_ARTICLES_PENDING:
      return {
        ...state,
        pending: true
      }
    case t.GET_ARTICLES_ERROR:
      return {
        ...state,
        pending: false,
        error: action.error
      }
    default:
      return state;
  }
}

export default articleReducer;
