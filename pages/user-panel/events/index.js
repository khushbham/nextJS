import { useState, useEffect } from "react";
import TopBar from '../../../components/layout/user-dashboard/Topbar'
import Sidebar from '../../../components/layout/user-dashboard/Sidebar';
import { Container } from "reactstrap";
import classNames from "classnames";
import EventsContent from "../../../components/layout/user-dashboard/events/EventsContent";

const UserEvents = () => {
  
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
          <EventsContent toggleSidebar={toggleSidebar} sidebarIsOpen={sidebarIsOpen} />
        </Container>
      </div>
    )
};

export default UserEvents;