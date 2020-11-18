import React, { useState } from "react";
import Button from "./Utilities/Button";
import Navbar from "./Utilities/Navbar";

import './styles/homepageStyles.css';
import { Sidebar } from './Utilities/Sidebar';

import { About } from './NavbarComponents/Aboutus';
import ContactUs from './NavbarComponents/Contactus';
import { Services } from './NavbarComponents/Services';
import CompleteReservations  from './UserComponents/CompleteReservations';


export const Homepage = (props) => {

    const [sidebar, setSidebar] = useState(false)
    const showSidebar = () => setSidebar(!sidebar)

    const [currentView, setCurrentView] = useState('')
    const changeView = (viewName) => setCurrentView(`${viewName}`)

    //=======================================================================
    if(props.match.path === '/' || props.match.path === '/celestial'){

        return (
            <div className='welcome-screen'>
                <section className='row navbar-section'>
                    <section className='col'>
                        {/* ****The currentViewName is passed as a prop to the Navbar
                        component so as to the switch views (about, services and contact-us)
                        without changing the url - path.
                        ***** The isToggled prop is as well passed to the Navbar cmponent
                        so as to aid in switching the sidebar component, when the horizontal -
                        bars on the Navbar component is toggled. The sidebarHandler
                        is the function that needs to be called in order to change the sidebar - 
                        state  */}
                        <Navbar sidebarHandler={showSidebar} isToggled={sidebar}
                                currentViewName={changeView} />
                    </section>
                </section>


                    <section className='row'>
                        <span className='sidebar col-md-3'>
                            {
                                sidebar ?
                                    <Sidebar sidebarHandler={showSidebar}
                                             currentViewName={changeView} />
                                    :
                                    null
                                }
                        </span>

                        <h1 className='col welcome-text animate__animated animate__flash animate__infinite mt-5'>
                            Hospitality, Kingly...
                        </h1>
                    </section>

                    {
                        currentView === 'About' ?
                         <About />
                        :
                        currentView === 'Contact-us' ?
                         <ContactUs />
                        :
                        currentView === 'Services' ?
                         <Services />
                        :
                        currentView === 'Services' ?
                         <CompleteReservations />
                        :
                        null
                    }
            </div>
        );
    }

};
