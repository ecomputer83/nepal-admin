import * as t from './actionTypes';
import { constants } from 'utils/constants';

const axios = require('axios');


const baseUrl = constants.baseUrl;
const axiosConfig = constants.axiosConfig;


//#regionAction Creators
const getArticlesSuccess = (data) => {
  return {
    type: t.GET_ARTICLES_SUCCESS,
    payload: data
  }
}

const getArticlesPending = () => {
  return {
    type: t.GET_ARTICLES_PENDING
  }
}

const getArticlesError = (error) => {
  return {
    type: t.GET_ARTICLES_ERROR,
    error
  }
}
//#endregion


//#region 
const getArticles = () => dispatch => {
  // dispatch(getArticlesPending());
  axios.get(`${baseUrl}/Article`, axiosConfig)
    .then(res => {
      dispatch(getArticlesSuccess(res.data));
      return res.data;
    })
    .catch(error => {
      dispatch(getArticlesError(error));
    })
}

//#endregion


export const articleActions = {
  getArticles
};