import React from 'react';
import { Route, Switch } from 'react-router-dom';
import CreditApproval from 'components/screens/credit-approval/CreditApproval';
import UserManagement from 'components/screens/user-management/UserManagement';
import AdminManagement from 'components/screens/admin-management/AdminManagement';
import OrderManagement from 'components/screens/order-management/OrderManagement';
import Payment from 'components/screens/payment/Payment';
import Article from 'components/screens/article/Article';
import NotFound from 'components/screens/not-found/NotFound';
import SignIn from 'components/screens/sign-in/SignIn';

import LogOut from 'components/shared/log-out/LogOut';

const RouterComponent = () => (
  <Switch>
    <Route exact path="/" component={SignIn} />
    <Route path="/credit-approval" component={CreditApproval} />
    <Route path="/user-management" component={UserManagement} />
    <Route path="/admin-management" component={AdminManagement} />
    <Route path="/order-management" component={OrderManagement} />
    <Route path="/articles" component={Article} />
    <Route path="/payments" component={Payment} />
    <Route path="/log-out" component={LogOut} />
    <Route path="*" component={NotFound} />
  </Switch>
);

export default RouterComponent;