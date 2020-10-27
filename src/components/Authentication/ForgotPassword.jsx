import React from "react";
import Button from "../Utilities/Button";
import authstate from "./AuthState";

import axios from "axios";


class ForgotPassword extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            Email: "",

            allowReset: false,
            formErrors: {}

        }
    }

    handleChange = () =>{

    }

    handleResetPassword = () => {
        axios.post("http<//127.0.0.1:8000/auth/reset-password",
                    this.state.Email)
             .then( response => {
                this.setState({ allowReset: true })
                authstate.changeAuthState(this.state.allowReset)
                })
            .catch( error => {
                this.setState({ formErrors: error.response.data })
            })
    }

    render(){
        const signupStyle = {
            backgroundColor: 'lightseagreen',
            border: '30px',
            borderColor: '#282c34',
            borderRadius: '10px',
            color: 'black',
            fontFamily: "Georgia, Verdana, Geneva, Tahoma, sans-serif",
          }

        return(
            <div>
                <div className='row mt-5'>
                    <div className='col-5 mt-5'></div>

                </div>
                <div className='row mt-5'>
                    <div className='col-4 ml-5'></div>

                    <div className='col-3 ml-4'><h2>Password Reset:</h2></div>
                </div>

                <div className='row'>
                    <div className='col-3 mr-5'></div>

                    <div style={signupStyle} className='col-5 form-group'>
                        <h5 className='mt-2'>Email:</h5>
                        {this.state.formErrors['Email']}
                        <input className='form-control mb-3'
                            type="email" 
                            name="Email" 
                            onChange={this.handleChange}
                            placeholder= "Please enter the email-address you provided upon registration."
                            value={this.state.Email}/>

                        <div className='row mb-2 mt-2'>
                            <div className='col-6'>
                                <Button action='Reset password' />
                            </div>
                            <div className='col ml-4'>
                                <Button action='Log in with username instead' 
                                        path='username-login' 
                                        resetPassword={this.handleResetPassword}/>
                            </div>
                        </div>

                    </div>
                    

                </div>
        </div>
        )
    }
}

export default ForgotPassword;