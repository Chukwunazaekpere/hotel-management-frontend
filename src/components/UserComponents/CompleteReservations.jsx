import React, { useState } from 'react';
import Button from '../Utilities/Button';


class CompleteReservations extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            occupants_phone: ''
        }
    }

    occupants_phoneHandler = (event) => {
        event.preventDefault();
        this.setState({ occupants_phone: event.target.value })
    }

    render(){

        return (
            <div>
                <h4> Please enter your phone number to proceed: </h4> 
                        <span>
                            <input className='form-control'
                                    type="tel"
                                    required='true'
                                    name='phone'
                                    value={ this.state.occupants_phone }
                                    onChange={ this.occupants_phoneHandler }
                                    placeholder='Please enter your phone number'
                            /> <br/>
                        </span>
                        <strong>Please ensure the provided data is valid.</strong>     

                        <span className='mt-4'>
                            <Button path='payment'
                                    text='Proceed to payment'
                                    />
                        </span>
            </div>
        )
    }

}
export default CompleteReservations;