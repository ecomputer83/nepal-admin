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

const getArticleSuccess = (data) => {
  return {
    type: t.GET_ARTICLE_SUCCESS,
    payload: data
  }
}

const getArticlePending = () => {
  return {
    type: t.GET_ARTICLE_PENDING
  }
}

const getArticleError = (error) => {
  return {
    type: t.GET_ARTICLE_ERROR,
    error
  }
}

const addArticleSuccess = () => {
  return {
    type: t.ADD_ARTICLE_SUCCESS,
  }
}

const addArticlePending = () => {
  return {
    type: t.ADD_ARTICLE_PENDING
  }
}

const addArticleError = (error) => {
  return {
    type: t.ADD_ARTICLE_ERROR,
    error
  }
}

const putArticleSuccess = () => {
  return {
    type: t.PUT_ARTICLE_SUCCESS,
  }
}

const putArticlePending = () => {
  return {
    type: t.PUT_ARTICLE_PENDING
  }
}

const putArticleError = (error) => {
  return {
    type: t.PUT_ARTICLE_ERROR,
    error
  }
}

const deleteArticleSuccess = () => {
  return {
    type: t.DELETE_ARTICLE_SUCCESS
  }
}

const deleteArticlePending = () => {
  return {
    type: t.DELETE_ARTICLE_PENDING
  }
}

const deleteArticleError = (error) => {
  return {
    type: t.DELETE_ARTICLE_ERROR,
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

const getArticle = (id) => dispatch => {
  axios.get(`${baseUrl}/Article/${id}`, axiosConfig)
    .then(res => {
      dispatch(getArticleSuccess(res.data));
      return res.data
    }).catch(error => {
      dispatch(getArticleError(error));
    })
}

const addArticle = (payload) => dispatch => {
  dispatch(addArticlePending());
  const axiosCon = {
    headers: {
      "Content-type": "multipart/form-data",
      "Authorization": `Bearer ${localStorage.getItem("nepal-token")}`
    }
  };
  axios.post(`${baseUrl}/Article`, payload, axiosCon)
    .then(res => {
      dispatch(addArticleSuccess());
      dispatch(articleActions.getArticles());
      return res;
    }).catch(error => {
      dispatch(addArticleError(error));
    })

}

const updateArticle = (id, payload) => dispatch => {
  dispatch(putArticlePending());
  const axiosCon = {
    headers: {
      "Content-type": "multipart/form-data",
      "Authorization": `Bearer ${localStorage.getItem("nepal-token")}`
    }
  };
  axios.put(`${baseUrl}/Article/${id}`, payload, axiosCon)
    .then(res => {
      dispatch(putArticleSuccess());
      dispatch(articleActions.getArticles());

      return res
    }).catch(error => {
      dispatch(putArticleError(error));
    })
}

const deleteArticle = (id) => dispatch => {
  dispatch(deleteArticlePending());
  axios.delete(`${baseUrl}/Article/${id}`, axiosConfig)
    .then(res => {
      dispatch(deleteArticleSuccess());
      dispatch(articleActions.getArticles());
      return res
    }).catch(error => {
      dispatch(deleteArticleError(error));
    })
}

//#endregion


export const articleActions = {
  getArticles,
  getArticle,
  updateArticle,
  deleteArticle,
  addArticle
};