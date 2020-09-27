import * as t from '../actions/actionTypes';


const defaultState = {
  articles: [],
  error: null,
  pending: false,
  article: {}
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
    case t.PUT_ARTICLE_SUCCESS:
      return {
        ...state,
        pending: false,
      }
    case t.PUT_ARTICLE_PENDING:
      return {
        ...state,
        pending: true
      }
    case t.PUT_ARTICLE_ERROR:
      return {
        ...state,
        pending: false,
        error: action.error
      }
    case t.ADD_ARTICLE_SUCCESS:
      return {
        ...state,
        pending: false
      }
    case t.ADD_ARTICLE_PENDING:
      return {
        ...state,
        pending: true
      }
    case t.ADD_ARTICLE_ERROR:
      return {
        ...state,
        pending: false,
        error: action.error
      }
    case t.DELETE_ARTICLE_SUCCESS:
      return {
        ...state,
        pending: false
      }
    case t.DELETE_ARTICLE_PENDING:
      return {
        ...state,
        pending: true
      }
    case t.DELETE_USER_ERROR:
      return {
        ...state,
        pending: false,
        error: action.error
      }
    case t.GET_ARTICLE_SUCCESS:
      return {
        ...state,
        pending: false,
        article: action.payload
      }
    case t.GET_ARTICLE_PENDING:
      return {
        ...state,
        pending: true,
      }
    case t.GET_ARTICLE_ERROR:
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
