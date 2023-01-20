import React from 'react'
import { NavLink } from 'react-router-dom';
import styles from "./Navbar.module.css";
import { FaSistrix } from "react-icons/fa";
import { HiOutlineShoppingBag } from "react-icons/hi";


function Navbar() {
  return (
    <div className={styles.navbar}>
       
        <NavLink to="/" >
           <img src={require("../images/apple color.png")} 
            style={{width:"17px"}}
           alt="logo" />
        </NavLink >
       
        <NavLink to="/store" className={styles.navbarlink}>
           Store
        </NavLink>
        <NavLink to="/mac" className={styles.navbarlink}>
          Mac
        </NavLink>
        <NavLink to="/ipad" className={styles.navbarlink}>
          iPad
        </NavLink>
        <NavLink to="/iphone" className={styles.navbarlink}>
           iPhone
        </NavLink>
        <NavLink to="/watch" className={styles.navbarlink}>
           Watch
        </NavLink>
        <NavLink to="/airpods" className={styles.navbarlink}>
           AirPods
        </NavLink>
        <NavLink to="/tv-home" className={styles.navbarlink}>
           TV & Home
        </NavLink>
        <NavLink to="/services" className={styles.navbarlink}>
          Only on Apple
        </NavLink>
        <NavLink to="/accessories" className={styles.navbarlink}>
           Accessories
        </NavLink>
        <NavLink to="/support" className={styles.navbarlink}>
          Support
        </NavLink>
        <NavLink to="/element" className={styles.navbarlink} style={{height:"12px",}}>
         <FaSistrix/>
        </NavLink>
        <NavLink to="/cart" className={styles.navbarlink} style={{height:"12px"}}>
           <HiOutlineShoppingBag/>
        </NavLink>
      </div>

  )
}

export default Navbar