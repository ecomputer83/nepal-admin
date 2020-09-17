import React from 'react';
import LeftNav from 'components/shared/left-nav/LeftNav';
import HeaderNav from 'components/shared/header-nav/HeaderNav';
import CreditApproval from 'components/shared/credit-approval/CreditApproval';

const Dashboard = () => {
  return (
    <div id="main-wrapper" data-theme="light" data-layout="vertical" data-navbarbg="skin6" data-sidebartype="full"
      data-sidebar-position="fixed" data-header-position="fixed" data-boxed-layout="full">
      <HeaderNav />
      <LeftNav />
      <CreditApproval />
    </div>
  )
}

export default Dashboard;