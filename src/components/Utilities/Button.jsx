import React from "react";
import { Link } from "react-router-dom";

import '../styles/buttonStyles.css';
import 'animate.css';


class Button extends React.Component{
    render(){
        const { action, text, path, submitRegistration,
                 logoutHandler, resetPassword,
                showRoomList, directToBookRoomPage } = this.props;

        return(
            <div className='btn-styles'>
                {
                    // Navigate user to "Log -in" page
                    path === 'Forgot password ?' ?
                        <Link to='/celestial/forgot-password' className='btn btn-secondary'>{path}</Link>
                    :
                    path === 'username-login' ?
                        <Link to={`/celestial/${path}`} className='btn btn-info'>
                            {action}
                        </Link>
                    :
                    path === 'roomlist' ?
                        <Link to={`/celestial/${path}`} onClick={ showRoomList } className='btn btn-info'>
                            {action || text}
                        </Link>
                    :
                    path === 'payment' ?
                        <Link to={`/celestial/${path}`} onClick={ showRoomList } className='btn btn-payment'>
                            {text}
                        </Link>
                    :
                    // Submit 'sign-in form' for validation
                    action === 'Sign up' ?
                        <button className='btn btn-success' onClick={submitRegistration}>{action}</button>
                    :
                    action === 'Log out' ?
                        <button className='btn btn-success' onClick={logoutHandler}>{action}</button>
                    :
                    action === 'Reset password' ?
                        <button className='btn btn-success' onClick={resetPassword}>{action}</button>
                    :
                    action === 'Book room' ?
                    <button className='btn btn-info' onClick={ directToBookRoomPage }>{action}</button>
                    :
                    <Link to='/celestial' className='btn btn-primary'>Go Back To Homepage</Link>

                }
                
            </div>
        );
    }
}

export default Button;