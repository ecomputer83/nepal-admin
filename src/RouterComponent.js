import React from 'react';
import { Route, Switch } from 'react-router-dom';
import CreditApproval from 'components/shared/credit-approval/CreditApproval';
import UserManagement from 'components/shared/user-management/UserManagement';
import NotFound from 'components/screens/not-found/NotFound';
import SignIn from 'components/screens/sign-in/SignIn';

const RouterComponent = () => (
  <Switch>
    <Route exact path="/" component={SignIn} />
    <Route path="/credit-approval" component={CreditApproval} />
    <Route path="/user-management" component={UserManagement} />
    <Route path="*" component={NotFound} />
  </Switch>
);

export default RouterComponent;