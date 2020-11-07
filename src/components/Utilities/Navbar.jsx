import React from 'react';
import { NavLink } from "react-router-dom";
import Button from './Button';

// import { Prompt } from "react-router-dom";
import authstate from "../Authentication/AuthState";

class  Navbar extends React.Component{
    
    handleLogout = () => {
        console.log("log out")
    }

    render(){
        const navLinkItems = ["Home", "Services", "About", "Contact-us"] 
        console.log(this.props.children)
        const activeItem = {
            // backgroundColor: 'teal',
            fontStyle: "italic",
            fontWeight: 'bold'
        }

        const navbarStyle = {
            backgroundColor: 'teal',
            minHeight: '15vh',
            alignItems: 'center',
        }
        
        return(
            <div style={navbarStyle} className='row'>

                <div className='col-4 mr-2 ml-2 mt-3'>
                    <h3>Hotel Celestial</h3>
                </div>

                {
                    navLinkItems.map( linkItem => 
                        <div key={linkItem}>
                            <NavLink to={ linkItem !== "Home"? linkItem : "/"} className='text-center mr-2 mb-2 mt-3 btn btn-info' activeStyle={activeItem}>
                                {linkItem}
                            </NavLink>
                        </div>
                    )
                }
                        
                <div className='col-4 text-right mt-3 ml-5'>
                    {
                        // the logout button can only be rendered when the user is
                        // authenticated
                        authstate.isAuthenticated() ?
                        <Button action='Log out' logoutHandler={this.handleLogout} />
                        :
                        <div></div>
                    }
                </div>
            </div>
        );
    }
            
}

export default Navbar;