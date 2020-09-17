import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import SignIn from 'components/screens/sign-in/SignIn';
import NotFound from 'components/screens/not-found/NotFound';
import CreditApproval from 'components/shared/credit-approval/CreditApproval';


function App() {

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <SignIn />
        </Route>
        <Route path="/credit-approval">
          <CreditApproval />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
