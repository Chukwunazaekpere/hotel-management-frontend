import React from 'react';
import Button from "../Utilities/Button";
import authstate from "./AuthState";

import axios from "axios";


class UsernameLogin extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            loginForm: {
                Username: "",
                Password: "",
            },

            loginFormDetails: {},
            formErrors: {},

            allowLogin: false,
            loginFormErrors: {},
        }
        
    }

    handleChange = (event) => {
        let formChanges = this.state.loginForm;
        formChanges[event.target.name] = event.target.value;

        this.setState({ loginForm: formChanges })
        this.populateLoginFormDetails(event.target.name, event.target.value)
    }

    populateLoginFormDetails(fieldName, fieldValue){
        let populatedForm = this.state.loginFormDetails;
        populatedForm[fieldName] = fieldValue;

        this.setState({ loginFormDetails: populatedForm })
        // console.log("\n\t Form details: ", this.state.loginFormDetails)
    }

    handleLogin = () => {
        axios.post("http://127.0.0.1:8000/auth/login/",
                    this.state.loginFormDetails)
            .then( response => {
                this.setState({ allowLogin: true })
                authstate.changeAuthState(this.state.allowLogin)
            }).catch( error => 
                    this.setState({ loginFormErrors: error.response.data })
            )
    }

    render(){
        // Make an array whose elements are the keys of the login-form
        let formFieldNames = [];
        for(let field in this.state.loginForm){
            formFieldNames.push(field)
        }

        const formStyle = {
            backgroundColor: 'lightseagreen',
            border: '30px',
            borderColor: '#282c34',
            borderRadius: '10px',
            color: 'black',
            fontFamily: "Georgia, Verdana, Geneva, Tahoma, sans-serif",
            // borderImage: url(),
          }

        return(
            <React.Fragment>

                <div className='row'>
                    <div className='col-5 mt-5 mb-3'> </div>
                    <div className='mt-3 mb-2'><h2 >Log in:</h2></div>
                </div>

                <div className='row'>
                    <div className='col-4 mb-3'> </div>
                                    
                    {/* use field names in "formFieldNames" array */}
                    <div style={formStyle} className='col-3 ml-3' >
                        {
                            formFieldNames.map( (fieldName, index) => 
                            <div key={fieldName}>

                                    <h5 className='mt-3'>{ fieldName }:</h5>
                                    {/* if field propagates errors */}
                                    <h4>{this.state.formErrors[fieldName]}</h4> 

                                    <input className='mt-3 mb-2 form-control' 
                                        type={ fieldName === 'Email' ? 'email': "password"} 

                                        placeholder={ index > 2 ? "Ensure both password fields are the same": ""} 
                                        name={fieldName}
                                        value={this.state.loginForm[fieldName]}
                                        onChange={this.handleChange}
                                        /> 
                                        
                                </div>
                            )
                        }
                        <div className='row'>
                            <div className='col-4 mr-4 mb-3 mt-3'>
                                <Button action='Log in' submitLogin={this.handleLogin} path='dashboard'/>
                            </div>
                            <div className='col ml-3 mb-3 mt-3'>
                                <Button path='Forgot password ?'/>
                            </div>
                        </div>
                    </div>           
                </div>
            </React.Fragment>
        )
    }
}

export default UsernameLogin;