import React from "react";
import { Link } from "react-router-dom";


class Button extends React.Component{
    render(){
        const { action, path, submitRegistration,
                submitLogin, logoutHandler, resetPassword } = this.props;

        return(
            <div>
                {
                    // Navigate user to "Log -in" page
                    path === 'Login' ?
                    <Link to={`${path}`} className='btn btn-secondary'>{path}</Link>
                    :
                    // Navigate user to "Sign -in" page
                    path === 'Sign-in' ?
                    <Link to='/signin' className='btn btn-secondary'>{path}</Link>
                    :
                    path === 'Forgot password ?' ?
                    <Link to='/forgot-password' className='btn btn-secondary'>{path}</Link>
                    :
                    path === 'username-login' ?
                    <Link to={`${path}`} className='btn btn-info'>{action}</Link>
                    :
                    path === 'room-details' ?
                    <Link to={`${path}`} className='btn btn-info'>{action}</Link>
                    :
                    // Submit 'sign-in form' for validation
                    action === 'Sign up' ?
                    <button className='btn btn-success' onClick={submitRegistration}>{action}</button>
                    :
                    action === 'Log in' ?
                    <button className='btn btn-success' onClick={submitLogin}>{action}</button>
                    :
                    action === 'Log out' ?
                    <button className='btn btn-success' onClick={logoutHandler}>{action}</button>
                    :
                    action === 'Reset password' ?
                    <button className='btn btn-success' onClick={resetPassword}>{action}</button>
                    :
                    <Link to='/' className='btn btn-primary'>Go Back To Homepage</Link>

                }
                
            </div>
        );
    }
}

export default Button;