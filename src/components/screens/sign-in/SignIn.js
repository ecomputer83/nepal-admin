import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import './SignIn.scss';
import SignInForm from './SignInForm';
import Spinner from 'components/shared/spinner/Spinner';

import { loginActions } from 'state/actions/loginActions'

const SignIn = () => {

  const loginReducer = useSelector(state => state.loginReducer);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loginActions.autoLogin())
  }, [dispatch])


  return (
    <div className="main-wrapper">
      <Spinner />
      {
        !loginReducer.isLoggedIn ?
          <div className="auth-wrapper d-flex no-block justify-content-center align-items-center position-relative"
            style={{ background: '#f1f1f1' }}>
            <div className="auth-box row">
              <div className="col-sm"></div>
              <div className="col-sm bg-white">
                <div className="p-3">
                  <div className="text-center">
                    <img src="assets/images/icon.png" width="350" alt="wrapkit" />
                  </div>
                  <h2 className="mt-3 text-center">Sign In</h2>
                  <p className="text-center">Enter your email address and password to access admin panel.</p>
                  <SignInForm />
                </div>
              </div>
              <div className="col-sm"></div>
            </div>
          </div>
          :
          <div className="auth-wrapper d-flex no-block justify-content-center align-items-center position-relative"
            style={{ background: '#f1f1f1' }}>
            <h1>Welcome, {loginReducer.user.contactName}</h1>
          </div>
      }
    </div>
  )
}

export default SignIn