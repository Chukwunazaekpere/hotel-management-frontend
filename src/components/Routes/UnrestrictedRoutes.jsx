import React from 'react';

import { Homepage } from "../Homepage"
import Login from "../Authentication/Login";
import Signin from "../Authentication/Signin";
import { Undefined } from "../Utilities/Undefined";

import ForgotPassword from "../Authentication/ForgotPassword";
import UsernameLogin from "../Authentication/UsernameLogin";

import OccupantDetails from "../UserComponents/OccupantDetails";
import RoomList from "../UserComponents/RoomList";
import RoomReservation from '../UserComponents/RoomReservation';

import { Route, Switch } from "react-router-dom";


{/* Always keep these pages public */}
export const UnrestrictedRoutes = () => {
    return(
        <div>
            <Switch>
                <Route path={['/', '/celestial']} exact component={ Homepage } />
                <Route path='/celestial/login' component={ Login } />
                <Route path='/celestial/signin' component={ Signin } />
                <Route path='/celestial/forgot-password' component={ForgotPassword} />
                <Route path='/celestial/username-login' component={UsernameLogin} />

                <Route path='/celestial/occupant-details' component={OccupantDetails} />
                <Route path='/celestial/roomlist' component={RoomList} />
                <Route path='/celestial/room-reservation' component={ RoomReservation } />


                {/* For any other url which is undefined... */}
                <Route component={Undefined} />
            </Switch>
        </div>
    )
}