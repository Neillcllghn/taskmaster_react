import React from 'react'
import styles from '../styles/NavBar.module.css'
import { Navbar, Container, Nav } from 'react-bootstrap'
import { NavLink } from "react-router-dom";
import { useCurrentUser, useSetCurrentUser } from '../context/CurrentUserContext';
import Avatar from "./Avatar";
import axios from 'axios';
import useClickOutsideToggle from "../hooks/useClickOutsideToggle";

const NavBar = () => {
    const currentUser = useCurrentUser();
    const setCurrentUser = useSetCurrentUser();

    const {expanded, setExpanded, ref } = useClickOutsideToggle();
    
    const handleSignOut = async () => {
        try {
          await axios.post("dj-rest-auth/logout/");
          setCurrentUser(null);
        } catch (err) {
          console.log(err);
        }
      };

      const createTaskIcon = (
        <NavLink 
            className={styles.NavLink} 
            activeClassName={styles.Active} 
            to="/tasks/create">
                <i className="fas fa-plus-square"></i> New Task
        </NavLink>
    )
    const createCategoryIcon = (
        <NavLink 
            className={styles.NavLink} 
            activeClassName={styles.Active} 
            to="/category/create">
                <i className="fas fa-plus-square"></i> New Category
        </NavLink>
    )

    const loggedInIcons = 
            <> 
                <NavLink 
                    className={styles.NavLink} 
                    activeClassName={styles.Active} 
                    to="/tasklist">
                        <i className="fa-solid fa-list-check"></i> Task List
                </NavLink>
                <NavLink 
                    className={styles.NavLink} 
                    activeClassName={styles.Active} 
                    to="/categorieslist">
                        <i className="fa-solid fa-layer-group"></i> Categories
                </NavLink>
                <NavLink
                    className={styles.NavLink} 
                    to="/"
                    onClick = {handleSignOut}
                    >
                        <i className="fas fa-sign-out-alt"></i> Sign out    
                </NavLink>
                <NavLink 
                    className={styles.NavLink} 
                    to={`/profiles/${currentUser?.profile_id}`}>
                        <Avatar src={currentUser?.profile_image} text="Profile" height={40} />
                </NavLink>
                </>;

    const loggedOutIcons = 
            <>
            <NavLink 
                className={styles.NavLink} 
                activeClassName={styles.Active} 
                to="/login">
                    <i className="fas fa-sign-in-alt"></i> Login
            </NavLink>
            <NavLink
                className={styles.NavLink} 
                activeClassName={styles.Active} 
                to="/signup">
                    <i className="fas fa-user-plus"></i> Sign Up
            </NavLink>
            </>


  return (
    <Navbar expanded={expanded} className={styles.NavBar} expand="md" fixed="top">
        <Container>
            <NavLink to="/">
            <Navbar.Brand>TASKMASTER</Navbar.Brand>
            </NavLink>
            <Navbar.Toggle
            ref={ref}
            onClick={() => setExpanded(!expanded)}
            aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            {currentUser && createTaskIcon}
            {currentUser && createCategoryIcon}
                <Nav className="ml-auto text-left">
                <NavLink exact
                to="/"
                className={styles.NavLink} 
                activeClassName={styles.Active}
                > 
                <i className="fas fa-home"></i> Home
                </NavLink>

                {currentUser ? loggedInIcons : loggedOutIcons}
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
  )
}

export default NavBar