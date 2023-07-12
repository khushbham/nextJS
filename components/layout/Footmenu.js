import React from 'react'
import { Container } from 'reactstrap'
import styles from './footmenu.module.css'
import { AiFillHome } from 'react-icons/ai';
import { FaHeart } from 'react-icons/fa';
import { FaBars } from 'react-icons/fa';
import { IoIosSettings } from 'react-icons/io';
import { RiInformationFill } from 'react-icons/ri';
import { BiFootball } from 'react-icons/bi';
import{
   NavItem,
   Nav,
   NavLink,
   
} from 'reactstrap'
const Footmenu = () => {
    return (
       <Container fluid>
            <div className={styles.mobileMenu}>
            <Nav className={styles.IconsWrapp}>
               <NavItem>
                  <NavLink href="#" className={styles.iconList}>
                     <AiFillHome />
                  </NavLink>
               </NavItem>
               <NavItem>
                  <NavLink href="#"  className={styles.iconList}>
                     <img src="../images/Fire.svg" alt="fireIcon"  className={styles.fireImg}/>
                  </NavLink>
               </NavItem>
               <NavItem>
                  <NavLink href="#"  className={styles.iconList}>
                     <FaHeart/>
                  </NavLink>
               </NavItem>
               <NavItem>
                  <NavLink href="#"  className={styles.iconList}>
                     <FaBars/>
                  </NavLink>
               </NavItem>
               <NavItem>
                  <NavLink href="#"  className={styles.iconList}>
                     <IoIosSettings/>
                  </NavLink>
               </NavItem>
               <NavItem>
                  <NavLink href="#"  className={styles.iconList}>
                     <RiInformationFill/>
                  </NavLink>
               </NavItem>
               <NavItem>
                  <NavLink href="#"  className={styles.iconList}>
                     <BiFootball/>
                  </NavLink>
               </NavItem>
            </Nav>
         </div>
       </Container>
       
    )
}

export default Footmenu
