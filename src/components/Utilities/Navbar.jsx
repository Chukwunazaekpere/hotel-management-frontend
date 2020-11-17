import React from "react";
import { NavLink, Link } from "react-router-dom";

import "../styles/navbarStyles.css";
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai';

import {Sidebar} from './sidebar'
import 'animate.css';


class Navbar extends React.Component {

  render() {
    const navLinkItems = ["Home", "Services", "About", "Contact-us"];

    const activeItem = {
      fontStyle: "italic",
      fontWeight: "bold",
    };


    const navRoutes = ['/', 'services', 'about', 'contact-us']
    // toggles the sidebar
    const { sidebarHandler, isToggled } = this.props;
    console.log("\n\t value: ", sidebarHandler)
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
                                {navLinkItems.map( (linkItem, index) => (
                                    <span key={linkItem}>
                                        <NavLink to={ navRoutes[index] }
                                            className="btn text-white" activeStyle={activeItem}>
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
}

export default Navbar;
