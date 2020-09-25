import * as t from './actionTypes';


const baseUrl = 'https://nepalog.azurewebsites.net/';

//#regionAction Creators
function fetchcreditApprovalSuccess(payload) {
  return {
      type: t.GET_CREDITAPPROVALS,
      payload
  }
}
//#endregion

