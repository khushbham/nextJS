import React, { useState, useEffect } from 'react';
import TopBar from '../../components/layout/user-dashboard/Topbar'
import Sidebar from '../../components/layout/user-dashboard/Sidebar';
import { Container } from "reactstrap";
import PageContent from '../../components/layout/user-dashboard/dashboard/PageContent';
import classNames from "classnames";


function UserDashboard () {
  const [sidebarIsOpen, setSidebarOpen] = useState(true);
  const toggleSidebar = () => setSidebarOpen(!sidebarIsOpen);
  return (
    <div className="App wrapper">
      <Sidebar toggle={toggleSidebar} isOpen={sidebarIsOpen} />
      <Container
        fluid
        className={classNames("content", { "is-open": sidebarIsOpen })}
      >
        <TopBar toggleSidebar={toggleSidebar} />
        <PageContent toggleSidebar={toggleSidebar} sidebarIsOpen={sidebarIsOpen} />
      </Container>
    </div>
  )
}

export default UserDashboard;
