import React from "react";
import { NavLink, Link } from "react-router-dom";
import Button from "./Button";

import "../styles/navbarStyles.css";
import * as FaIcons from 'react-icons/fa'
import {Sidebar} from './sidebar'


class Navbar extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            sidebar: false
        }
    };

    showSidebar = () => {
        this.setState({ sidebar: !this.state.sidebar })
    }

  render() {
    const navLinkItems = ["Home", "Services", "About", "Contact-us"];

    const activeItem = {
      fontStyle: "italic",
      fontWeight: "bold",
    };

    const navbarStyle = {
      backgroundColor: "teal",
      minHeight: "15vh",
    };

    const navRoutes = ['/', 'services', 'about', 'contact-us']

    return (
        <React.Fragment>
            <div style={navbarStyle} className="row">
                <section className="site-name col-md-4">
                    <h3>Hotel Celestial</h3>
                </section>

                <section className='navbar-buttons col-md-6'>
                    {
                        !this.state.sidebar ?
                            <section className='button-styles'>
                                {navLinkItems.map( (linkItem, index) => (
                                    <span key={linkItem}>
                                        <NavLink to={ navRoutes[index] }
                                            className="text-center btn btn-info" activeStyle={activeItem}>
                                            {linkItem}
                                        </NavLink>
                                    </span>
                                ))}
                            </section>
                            :
                            null
                    }
                </section>
                
                <section className='nav-menu-bar'>
                    <Link to='#'>
                        <FaIcons.FaBars onClick={ this.showSidebar }/>
                    </Link>
                </section>

            </div>

            <div className='row sidebar'>
                {
                    this.state.sidebar ?
                    <Sidebar />
                    :
                    null
                }
            </div>
        </React.Fragment>

    );
  }
}

export default Navbar;
