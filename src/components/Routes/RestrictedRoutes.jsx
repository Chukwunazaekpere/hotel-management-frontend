import React from "react";
import { Route, Link, Redirect } from "react-router-dom";
import Navbar from "../Utilities/Navbar";


export const RestrictedRoutes = ({component: Component, path, ...props}) => {
    // console.log(path, Component)
    return (
        <div>
            <div className='row'>
                <div className='col'>
                    <Navbar />
                    <Route {...props} render={ props => {
                        return <Route path={`/${path}`} component={Component} />
                        }}
                    />
                    
                </div>
            </div>
        </div>
    );
    
}