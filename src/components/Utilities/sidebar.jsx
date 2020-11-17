import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/sidebar.css";
import "animate.css";


export const Sidebar = () => {
  const navLinkItems = [
    "Make reservation",
    "Complete your reservation",
    "Home",
    "Services",
    "About",
    "Contact-us",
  ];

  const navRoutes = [
    "occupant-details",
    "complete-booking-reservation",
    "/",
    "services",
    "about",
    "contact-us",
  ];

  return (
    <section>
      <div className="sidebar">
        {navLinkItems.map( (linkItem, index) => (
          <span key={linkItem} className="sidebar-menu">
            <NavLink to={navRoutes[index]}>{linkItem}</NavLink>
          </span>
        ))}
      </div>
    </section>
  );
};
