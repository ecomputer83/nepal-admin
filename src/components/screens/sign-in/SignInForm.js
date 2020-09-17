import React, { useState } from 'react';

import { useDispatch } from 'react-redux';
import { authActions } from 'state/actions/loginActions';


const SignInForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  // const [isAuthenticated, setIsAuthenticated] = useState(false);

  const dispatch = useDispatch();


  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === "" || password === "") {
      setError("Email and Password fields are required!");
      return;
    }

    if (email && password) {
      dispatch(authActions.fetchUser({ 'email': email, 'password': password }));
    }
  }

  return (
    <form className="mt-4" onSubmit={handleSubmit}>
      <div className="row">
        <div className="col-lg-12">
          <div className="form-group">
            <label className="text-dark" htmlFor="email">Email</label>
            <input
              className="form-control"
              id="email"
              type="text"
              placeholder="enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </div>
        <div className="col-lg-12">
          <div className="form-group">
            <label className="text-dark" htmlFor="password">Password</label>
            <input
              className="form-control"
              id="password"
              type="password"
              placeholder="enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </div>
        <div className="col-lg-12 text-center">
          <button type="submit" className="btn btn-block btn-dark">Sign In</button>
        </div>
      </div>

      {/* Alert Toast */}
      {error && (
        <div>
          <button type="button" className="ml-2 mb-1 close" data-dismiss="toast"
            aria-label="Close">
            <span aria-hidden="true" onClick={() => setError(null)}>×</span>
          </button>
          <div className="toast-body" style={{ color: 'red' }}>{error}</div>
        </div>
      )
      }
    </form >
  )
}

export default SignInForm;