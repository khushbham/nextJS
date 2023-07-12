import React, { useState, useEffect } from 'react';
import TopBar from '../../components/layout/user-dashboard/Topbar'
import Sidebar from '../../components/layout/user-dashboard/Sidebar';
import { Container } from "reactstrap";
import UserTrendsContent from '../../components/layout/user-dashboard/user-trends/UserTrendsContent';
import classNames from "classnames";


function Trends () {
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
          <UserTrendsContent toggleSidebar={toggleSidebar} sidebarIsOpen={sidebarIsOpen} />
        </Container>
      </div>
    )

}


export default Trends;