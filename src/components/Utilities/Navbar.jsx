import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";

import "../styles/navbarStyles.css";
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai';

import 'animate.css';


export const Navbar = (props) => {
   
    const navLinkItems = ["Home", "Services", "About", "Contact-us"];

    const activeItem = {
      fontStyle: "italic",
      fontWeight: "bold",
    };

    // toggles the sidebar
    const { sidebarHandler, isToggled, currentViewName} = props;

    return (
        <React.Fragment>
            <div className="row">
                <section className="site-name col-md-4">
                    <h3 className='animate__animated animate__heartBeat animate__infinite'>
                        Hotel Celestial
                    </h3>
                </section>

                <section className='navbar-buttons col-md-5'>
                    {
                        !isToggled ?
                            <section className='button-styles'>
                                {navLinkItems.map( linkItem => (
                                    <span key={linkItem}>
                                        <NavLink to='#'
                                            onClick={ () => currentViewName(linkItem) } 
                                            className="btn text-white" 
                                            activeStyle={activeItem}>
                                            {linkItem}
                                        </NavLink>
                                    </span>
                                ))}
                            </section>
                            :
                            null
                    }
                </section>
                
                <section className='animate__animated animate__heartBeat animate__infinite nav-menu-bar'>
                    {
                        !isToggled ?
                            <React.Fragment>
                                <Link to='#'>
                                    <FaIcons.FaBars onClick={ sidebarHandler }/>
                                </Link>
                                <h6 className='text-white'>More details here...</h6>
                            </React.Fragment>
                            :
                            <React.Fragment>
                                <Link to='#'>
                                    <AiIcons.AiOutlineClose onClick={ sidebarHandler } />
                                    <h6 className='text-white'>Collapse details</h6>
                                </Link>
                            </React.Fragment>
                    }
                </section>

            </div>
        </React.Fragment>

    );
}

export default Navbar;
