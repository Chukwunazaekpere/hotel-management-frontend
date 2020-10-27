import React from 'react';

import { Homepage } from "../Homepage"
import Login from "../Authentication/Login";
import Signin from "../Authentication/Signin";
import { Undefined } from "../Utilities/Undefined";
import ForgotPassword from "../Authentication/ForgotPassword";
import UsernameLogin from "../Authentication/UsernameLogin";

import RoomReservation from "../UserComponents/RoomReservation";

import { Route, Switch } from "react-router-dom";


{/* Always keep these pages public */}
export const UnrestrictedRoutes = () => {
    return(
        <div>
            <Switch>
                <Route path='/' exact component={ Homepage } />
                <Route path='/login' component={ Login } />
                <Route path='/signin' component={ Signin } />
                <Route path='/forgot-password' component={ForgotPassword} />
                <Route path='/username-login' component={UsernameLogin} />

                <Route path='/reservation' component={RoomReservation} />

                {/* For any other url which is undefined... */}
                <Route component={Undefined} />
            </Switch>
        </div>
    )
}