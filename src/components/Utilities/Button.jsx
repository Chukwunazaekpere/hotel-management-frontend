import React from "react";
import { Link } from "react-router-dom";


class Button extends React.Component{
    render(){
        const { action, path, submitRegistration,
                submitLogin, logoutHandler, resetPassword,
                showRoomList } = this.props;

        return(
            <div>
                {
                    // Navigate user to "Log -in" page
                    path === 'Complete your reservation' ?
                    <Link to={`${path}`} className='btn btn-secondary'>{path}</Link>
                    :
                    // Navigate user to "Sign -in" page
                    path === 'Make reservation' ?
                    <Link to='/occupant-details' className='btn btn-secondary'>{path}</Link>
                    :
                    path === 'Forgot password ?' ?
                    <Link to='/forgot-password' className='btn btn-secondary'>{path}</Link>
                    :
                    path === 'username-login' ?
                    <Link to={`${path}`} className='btn btn-info'>
                        {action}
                    </Link>
                    :
                    path === 'roomlist' ?
                    <Link to={`${path}`} onClick={ showRoomList } className='btn btn-info'>
                        {action}
                    </Link>
                    :
                    // Submit 'sign-in form' for validation
                    action === 'Sign up' ?
                    <button className='btn btn-success' onClick={submitRegistration}>{action}</button>
                    :
                    action === 'Complete your reservation' ?
                    <button className='btn btn-success' onClick={submitLogin}>{action}</button>
                    :
                    action === 'Log out' ?
                    <button className='btn btn-success' onClick={logoutHandler}>{action}</button>
                    :
                    action === 'Reset password' ?
                    <button className='btn btn-success' onClick={resetPassword}>{action}</button>
                    :
                    action === 'Book room' ?
                    <button className='btn btn-success' onClick={resetPassword}>{action}</button>
                    :
                    <Link to='/' className='btn btn-primary'>Go Back To Homepage</Link>

                }
                
            </div>
        );
    }
}

export default Button;