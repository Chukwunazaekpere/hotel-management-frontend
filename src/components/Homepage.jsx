import React, { useState } from "react";
import Button from "./Utilities/Button";
import Navbar from "./Utilities/Navbar";

import './styles/homepageStyles.css';
import { Sidebar } from './Utilities/sidebar';


export const Homepage = (props) => {

    const [sidebar, setSidebar] = useState(false)
    const showSidebar = () => setSidebar(!sidebar)

    //=======================================================================
    if(props.match.path === '/' || props.match.path === '/celestial'){

        return (
            <div className='welcome-screen'>
                <section className='row navbar-section'>
                    <section className='col'>
                        <Navbar sidebarHandler={showSidebar} isToggled={sidebar}/>
                    </section>
                </section>


                    <section className='row'>
                        <span className='sidebar col-md-3'>
                            {
                                sidebar ?
                                    <li><Sidebar /></li>
                                    :
                                    null
                                }
                        </span>

                        <h1 className='col welcome-text animate__animated animate__flash animate__infinite mt-5'>
                            Hospitality, Kingly...
                        </h1>
                    </section>
            </div>
        );
    }

};
