import React, { useEffect, useState } from "react";
import styles from "./header.module.css";
import { BsSearch } from "react-icons/bs";
import {
  Nav,
  NavItem,
  NavLink,
  Container,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  InputGroup,
  InputGroupText,
  Input
} from "reactstrap";
import Cookies from "js-cookie";
import Link from "next/link";
import { logout, InspirationRecords, portalSettings } from "../../redux/action/frontend";
import { useDispatch } from "react-redux";
import Router, { useRouter } from "next/router";
import io from "socket.io-client";
import { API_URL, URL } from "../../redux/action/types";
//var data = require("./searchdata.json");

const ENDPOINT = API_URL;
let socket;

const Header = ({ direction, ...args }) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  const [searchvalue, setSearchValue] = useState("");
  const [data, setData] = useState([]);
  const [logo, setLogo] = useState("");

  const onSearchChange = (event) => {
    setSearchValue(event.target.value);
  };

  const onSearch = (searchTerm) => {
    setSearchValue(searchTerm);
    // our api to fetch the search result
    if (searchTerm.trim() != "") {
      Router.push(`/search?s=${encodeURI(searchTerm.trim())}`);
    }
    console.log("search ", searchTerm);
  };

  const logoutFunction = () => {
    dispatch(logout());
    location.reload();
  };
  useEffect(() => socketInitializer(), []);

  const socketInitializer = async () => {
    await fetch(ENDPOINT);
    socket = io(ENDPOINT);
    socket.on("connect", () => {
      console.log("connected");
    });
  };
  const searchResult = (e) => {
    e.preventDefault();
    if (searchvalue.trim() != "") {
      Router.push(`/search?s=${encodeURI(searchvalue).trim()}`);
    }
  };
  useEffect(() => {
    setSearchValue("");
    dispatch(InspirationRecords()).then(res => {
      if(res && res.success){
        setData(res.data)
      }
    });
    dispatch(portalSettings()).then(res => {
      if(res && res.success){
        setLogo(res?.data?.logo)
      }
    });
  }, []);
  useEffect(() => {
    setIsOpen(false);
  }, [router.pathname]);
  useEffect(() => {
    fetch("https://api.ipify.org?format=json")
      .then((response) => response.json())
      .then((dataa) => {
        console.log(dataa);
        if (dataa.ip) {
          console.log(socket);
          socket.emit("createRoom", dataa.ip);

          socket.emit("new_page_open", {
            user_ip: dataa.ip,
            msg: "new page history",
            //page_visited_url: URL + router.asPath,
            page_visited_url: URL + router.asPath,
          });
        }
      });
  }, [router.asPath]);


  return (
    <div className="header">
      <Container fluid>
        <Navbar expand="md" className={styles.desktopHeader}>
          <Link href="/">
            <NavbarBrand
              className={styles.deskHeaderlogo}
              style={{ cursor: "pointer" }}
            >
              <img
                src={logo}
                alt="logo"
                height={70}
                width={120}
              />
            </NavbarBrand>
          </Link>
          <Navbar />
          <Nav className="ms-auto" navbar>
            <NavItem className={styles.linklist + " " + styles.links}>
              <Link href="/discover">Discover</Link>
            </NavItem>
            <NavItem className={styles.linklist + " " + styles.links}>
              <Link href="/XYZ-warrior/sign-up">XYZ Warriors</Link>
            </NavItem>
            <NavItem className={styles.linklist + " " + styles.links}>
              <Link href="/about">About Us</Link>
            </NavItem>
            <NavItem className={styles.linklist + " " + styles.links}>
              <Link href="/XYZ-compass">Pro XYZ Report</Link>
            </NavItem>
            <NavItem className={styles.linklist + " " + styles.links}>
              <Link href="/our-services">Our Services</Link>
            </NavItem>
          </Nav>
          <div className={styles.searchForm}>
            <form onSubmit={(e) => searchResult(e)}>
              <InputGroup className={styles.formOuter}>
                <InputGroupText className={styles.searchIcon}>
                  <BsSearch />
                </InputGroupText>
                <Input
                  placeholder="Search the latest trends"
                  type="search"
                  className={styles.searchField}
                  value={searchvalue}
                  onChange={onSearchChange}
                  // onChange={(e) => {
                  //   onChange={onSearchChange}
                  //   //setSearchTrend(encodeURI(e.target.value.trim()));
                  // }}
                />
                {/* <input type="text" value={searchvalue}  placeholder="Search the latest trends" onChange={onSearchChange} className={styles.search_input_box}/> */}
              </InputGroup>
            </form>
            <div className="searchdropdown">
          {data
            .filter((item) => {
              const searchTerm = searchvalue.toLowerCase();
              const fullName = item.title.toLowerCase();

              return (
                searchTerm &&
                fullName.startsWith(searchTerm) &&
                fullName !== searchTerm
              );
            })
            .slice(0, 10)
            .map((item) => (
              <div
                onClick={() => onSearch(item.title)}
                className="searchdropdown-row"
                key={item.title}
              >
                {item.title}
              </div>
            ))}
        </div>
          </div>
         
          {/* <Dropdown
            isOpen={userdropdownOpen}
            toggle={toggle}
            direction={direction}
            className={styles.top_user_avatar_img}
          >
            <DropdownToggle className={styles.top_user_avatar_toggle} caret>
              <div className={styles.user_avatar_dropdown}>
                <Image src={keywordimage} />
              </div>
            </DropdownToggle>
            <DropdownMenu {...args}>
              <DropdownItem header>Visit</DropdownItem>
              <DropdownItem>Dashboard</DropdownItem>
            </DropdownMenu>
          </Dropdown> */}
          {Cookies.get("loggedIn") ? (
            <Nav navbar className="btn-wrap">
              <NavItem className={styles.btns}>
                <Link href="/user-panel" className={styles.btn}>
                  <div className={styles.btns_my_account}>My Account</div> 
                </Link>
              </NavItem>
              <NavItem className={styles.btns}>
                <p
                  style={{ cursor: "pointer" }}
                  onClick={() => logoutFunction()}
                  className={styles.btn}
                >
                  Logout
                </p>
              </NavItem>
            </Nav>
            
          ) : (
            <Nav navbar className="btn-wrap">
              <NavItem className={styles.btns}>
                <Link href="/signin">
                  <NavLink className={styles.btn}>Sign In</NavLink>
                </Link>
              </NavItem>
              <NavItem className={styles.btns}>
                <Link href="/signup">
                  <NavLink className={styles.btn}>Sign Up</NavLink>
                </Link>
              </NavItem>
            </Nav>
          )}
        </Navbar>

        <Navbar expand="xl" className={styles.mobileHeader}>
          <Link href="/">
            <NavbarBrand className="headerLogo" style={{ cursor: "pointer" }}>
              <img src="/images/logo.png" alt="logo" />
            </NavbarBrand>
          </Link>
          <NavbarToggler
            onClick={() => {
              setIsOpen(!isOpen);
            }}
            className={styles.togglerIcon}
          />
          <Collapse isOpen={isOpen} navbar className={styles.showMenu}>
            <Nav className="ms-auto" navbar>
              <NavItem className={styles.linklist + " " + styles.links}>
                <Link href="/discover">Discover</Link>
              </NavItem>
              <NavItem className={styles.linklist + " " + styles.links}>
                <Link href="/XYZ-warrior/sign-up">XYZ Warriors</Link>
              </NavItem>
              <NavItem className={styles.linklist + " " + styles.links}>
                <Link href="/XYZ-compass">Pro XYZ Report</Link>
              </NavItem>
              <NavItem className={styles.linklist + " " + styles.links}>
                <Link href="/about">About Us</Link>
              </NavItem>
              <NavItem className={styles.linklist + " " + styles.links}>
                <Link href="/">Events</Link>
              </NavItem>
            </Nav>
            {Cookies.get("loggedIn") ? (
              <Nav navbar className="btn-wrap">
                <NavItem className={styles.btns}>
                <Link href="/user-panel" className={styles.btn}>
                  <div className={styles.btns_my_account}>My Account</div> 
                </Link>
              </NavItem>
                <NavItem className={styles.btns}>
                  <p
                    style={{ cursor: "pointer" }}
                    onClick={() => logoutFunction()}
                    className={styles.btn}
                  >
                    Logout
                  </p>
                </NavItem>
              </Nav>
            ) : (
              <Nav navbar className="btn-wrap">
                <NavItem className={styles.btns}>
                  <Link href="/signin">
                    <NavLink className={styles.btn}>Sign In</NavLink>
                  </Link>
                </NavItem>
                <NavItem className={styles.btns}>
                  <Link href="/signup">
                    <NavLink className={styles.btn}>Sign Up</NavLink>
                  </Link>
                </NavItem>
              </Nav>
            )}
          </Collapse>
          <div className={styles.searchForm}>
            <form onSubmit={(e) => searchResult(e)}>
              <InputGroup className={styles.formOuter}>
                <InputGroupText className={styles.searchIcon}>
                  <BsSearch />
                </InputGroupText>
                <Input
                  placeholder="Search the latest trends"
                  type="search"
                  className={styles.searchField}
                  value={searchvalue}
                  onChange={onSearchChange}
                  // onChange={(e) => {
                  //   setSearchTrend(encodeURI(e.target.value.trim()));
                  // }}
                />
                 {/* <input type="text" value={searchvalue} onChange={onSearchChange} className={styles.mobilesearch_input_box} /> */}
              </InputGroup>
            </form>
            <div className="searchdropdown">
          {data
            .filter((item) => {
              const searchTerm = searchvalue.toLowerCase();
              const fullName = item.title.toLowerCase();

              return (
                searchTerm &&
                fullName.startsWith(searchTerm) &&
                fullName !== searchTerm
              );
            })
            .slice(0, 10)
            .map((item) => (
              <div
                onClick={() => onSearch(item.title)}
                className="searchdropdown-row"
                key={item.title}
              >
                {item.title}
              </div>
            ))}
        </div>
          </div>
          
        </Navbar>
      </Container>
    </div>
  );
};

export default Header;
