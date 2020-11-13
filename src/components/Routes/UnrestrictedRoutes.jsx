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

import {ReactPaypal} from '../Utilities/ReactPaypal';


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

                <Route path='/occupant-details' component={OccupantDetails} />
                <Route path='/roomlist' component={RoomList} />
                <Route path='/room-reservation' component={ RoomReservation } />

                <Route path={`room-reservation/payment`} component={ ReactPaypal } />

                {/* For any other url which is undefined... */}
                <Route component={Undefined} />
            </Switch>
        </div>
    )
}