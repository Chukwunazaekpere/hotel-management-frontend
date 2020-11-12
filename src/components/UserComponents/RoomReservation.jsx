import React, { useState } from 'react';
import 'animate.css';
import Button from "../Utilities/Button";

import '../styles/roomReservationStyles.css';
import 'animate.css';


class RoomReservation extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            room_details: {},

            occupants_phone: ''
        }
    }

    componentDidMount (){
        if ( this.props.location.state ) {
            const { room_details } = this.props.location.state;
            console.log("Room Details", room_details)
            
            this.setState({ room_details })

        }
    }

    handleChangePhone = (event) => {
        event.preventDefault();
        this.setState({ occupants_phone: event.target.value })

    }

    render () {
        let room_fields = [
            'Room-type', 'Room-price', 'Room-number' 
        ]

        let field_values = [
            'room_type', 'room_price', 'room_number' 
        ]

        return (
            <div className='row reservation_style animate__animated animate__pulse'>

                <section className='form-style form-group col-4'>
                    <h3 className='mt-3'> Room Details:</h3>
                    {
                        room_fields.map( (field, index) => (
                            <span key={index} >
                                <h5 className='col-4'> {field} </h5> <br/>
                                
                                <input className='col form-control'
                                    disabled={true}
                                    name={field}
                                    defaultValue={this.state.room_details[field_values[0]]}
                                    value={this.state.room_details[field_values[0]]}

                                    />
                            </span>
                        ))
                    }

                    <span className='mb-3'>
                        <Button path='roomlist' 
                                text='Change room' />
                    </span>
                </section>

                <section className='form-style form-group col-4 ml-2'>

                    <h4> Please enter your phone number to proceed: </h4> 
                    <span>
                        <input className='form-control'
                                type="tel"
                                required='true'
                                name='phone'
                                value={ this.state.occupants_phone }
                                onChange={this.handleChangePhone}
                                placeholder='Please enter your phone number'
                        /> <br/>
                    </span>
                    <strong>Please ensure the provided data is valid.</strong>     

                    <span className='mt-4'>
                        <Button path='payment'
                                text='Proceed to payment'
                                />
                    </span>
                </section>

            </div>
        )
    }

}

export default RoomReservation;