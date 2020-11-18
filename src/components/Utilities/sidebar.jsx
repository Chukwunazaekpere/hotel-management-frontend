import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/sidebar.css";
import "animate.css";


export const Sidebar = (props) => {
    const navLinkItems = [
        "Make reservation",
        "Complete your reservation",
        "Home",
        "Services",
        "About",
        "Contact-us",
    ];

    const activeItem = {
        fontStyle: "italic",
        fontWeight: "bold",
      };

    const { currentViewName, sidebarHandler } = props;

    // Wse can pass more than one function to a component.
    // We'll only need to write a unified function in the receiving component
    // which receives both functions and calls them as well.
    const toggleProperties = (linkItem) => {
        currentViewName(linkItem) 

        sidebarHandler()
    }

    return (
        <section>
        <div className="sidebar">
            {navLinkItems.map( ( linkItem ) => (
            <span key={linkItem} className="sidebar-menu">
                
                <NavLink to={ linkItem !== "Make reservation" ?
                            '#': '/celestial/occupant-details' } 
                        // The "toggleProperties"
                        // function is the unified - function that calls both
                        // functions being passed to the component.
                        onClick={ () => toggleProperties(linkItem) } 
                        activeStyle={activeItem}>
                    {linkItem}
                </NavLink>
            </span>
            ))}
        </div>
        </section>
    );
};
