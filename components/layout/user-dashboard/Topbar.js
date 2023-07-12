import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Navbar,
  Button,
  NavbarToggler,
  Form,
  ButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import styles from "./topbar.module.css";
import { FiSearch } from "react-icons/fi";

const Topbar = ({ toggleSidebar, logout }) => {
  const [dropdownOpen, setOpen] = React.useState(false);
  const toggle = () => setOpen(!dropdownOpen);
  return (
    // <Container fluid className="main-header shadow-sm bg-white rounded">
    <Container fluid className={styles.main_header}>
      <Row className="align-items-center">
        <Col lg="8" xs="8" className="d-inline-flex align-items-center">
          <Navbar light className="navbar toggler-admin" expand="md">
            <NavbarToggler
              className={styles.toggle_main}
              onClick={toggleSidebar}
            />
          </Navbar>
          {/* <div  className= {styles.top_form}>
            <Form className={`${styles.search_form} d-flex align-items-center`}>
              <div className="input-group">
                <span className="input-group-text" id="search_txt_topbar">
                  <FiSearch />
                </span>
                <input
                  type="text"
                  //className= {(styles.top_search, "form-control")}
                  className= {`${styles.top_search} form-control`}
                  placeholder="Search"
                  aria-label="Search"
                  aria-describedby="search-area-top"
                />
              </div>
            </Form>
          </div> */}
        </Col>
        <Col lg="4" xs="4" className={styles.right_top_button}>
          {/* <div className="d-flex align-items-center justify-content-end">
          <div className={styles.top_bar_user_image}>
            <img className="w-100" src="../../../images/review1.png" />
            <div className={styles.circle_status}></div>
            </div>
            <div className={styles.top_bar_user_name}>
               <h4><span>Hey,</span> Dustin !</h4>
            </div>
          </div> */}
        </Col>
      </Row>
    </Container>
  );
};

export default Topbar;
