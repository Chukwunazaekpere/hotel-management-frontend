import React from 'react';
import Button from "../Utilities/Button";
import axios from "axios";

import authstate from "./AuthState";

import { RestrictedRoutes } from "../Routes/RestrictedRoutes";
import { UnrestrictedRoutes } from "../Routes/UnrestrictedRoutes";

import {Dashboard} from "../Utilities/Dashboard";

import { Redirect } from 'react-router-dom';


class Signin extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            signupForm: {
                'Firstname'       : "",
                'Lastname'        : "",
                'Email'           : "",
                'Password'        : "",
                'Confirm password': ""
            },

            signupFormDetails: {}, // This object holds acceptable form details for submission

            signupFormErrors: {},

            allowSignin: false
        }
    };

    handleChange = (event) => {
        let formChanges = this.state.signupForm;
        formChanges[event.target.name] = event.target.value;

        this.setState({ signupForm: formChanges })
        this.populateSignupFormDetails(event.target.name, event.target.value)
    }

    populateSignupFormDetails(fieldName, fieldValue){
        let populatedForm = this.state.signupFormDetails;
        populatedForm[fieldName] = fieldValue;

        this.setState({ signupFormDetails: populatedForm })
        // console.log("\n\t Form details: ", this.state.signupFormDetails)
    }

    handleSignup = (event) =>{
        console.log("\n\t Props: signing in...")
        

        axios.post("http://localhost:8000/auth/registration/",
                    this.state.signupFormDetails)
             .then( response => {
                //  if promise was fulfilled, push user to "verificationEmailSent page"
                this.setState({ allowSignin: true })
                authstate.changeAuthState( this.state.allowSignin )
                console.log(response.data)

             }).catch( error => {
                //  If there are errors in the form, display errors, but user remains on
                // the sign-up page
                this.setState({ signupFormErrors: error.response.data })

                console.log(error.response.data)
            })
    }


    render(){
        // Make an array whose elements are the keys of the signup-form
        let formFieldNames = [];
        for(let field in this.state.signupForm){
            formFieldNames.push(field)
        }

        const formStyle = {
            backgroundColor: 'lightseagreen',
            border: '30px',
            borderColor: '#282c34',
            borderRadius: '10px',
            color: 'black',
            fontFamily: "Georgia, Verdana, Geneva, Tahoma, sans-serif",
          }

        return(
            <React.Fragment>

                <div className='row'>
                    <div className='col-5 mt-5 mb-3'> </div>
                    <div className='mt-3 mb-2'><h2 >Sign up:</h2></div>
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
                                    <h4>{this.state.signupFormErrors[fieldName]}</h4> 

                                    <input className='mt-3 mb-2 form-control' 
                                        type={ fieldName === 'Email' ? 'email': index <= 1 ? "text": "password"} 
                                        placeholder={ index > 2 ? "Ensure both password fields are the same.": ""} 
                                        name={fieldName}
                                        value={this.state.signupForm[fieldName]}
                                        onChange={this.handleChange}
                                        /> 
                                        
                                </div>
                            )
                        }
                        <div className='mb-3 mt-3'>
                            <Button action='Sign up' submitRegistration={this.handleSignup} path='dashboard'/>
                        </div>
                    </div>           
                </div>

                <div>
                    {
                        this.state.allowSignin === true ?
                        <RestrictedRoutes path='/dashboard' component={Dashboard} />
                        :
                        <Redirect to='/signin' />
                    }
                </div>
                
            </React.Fragment>
        )
    }
}

export default Signin;