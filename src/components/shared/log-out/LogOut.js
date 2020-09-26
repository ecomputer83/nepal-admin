import React, { useEffect } from "react";
import { useDispatch } from 'react-redux';

import { loginActions } from 'state/actions/loginActions'

const LogOut = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loginActions.logOut());
  }, [dispatch])


  return (<></>)
}

export default LogOut;