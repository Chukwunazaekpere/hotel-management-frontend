import React from "react";
import Button from "../Utilities/Button";
import axios from "axios";

import "../styles/roomListStyles.css";
import { Prompt, Redirect } from 'react-router-dom';
import 'animate.css';


class RoomList extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            listOfRooms: [],

            // This state-variable becomes true when the user clicks on the 
            // "Book room" button.
            permitRoomBooking: '',

            chosenRoomDetails: {},

            occupant_details: [],

        }
    }

    componentDidMount(){
        this.setState({ permitRoomBooking: false })

        axios.get(`http://127.0.0.1:8000/roomslist/`)
        .then( response => {
            console.log("\n\t Rooms: ", response.data )
            this.setState({ listOfRooms: response.data })

        }).catch( () => {
            this.setState({ listOfRooms: 'There are no available rooms yet'})
        })
    }

    bookingHandler = (detail) => {
        const room_details = detail;

        this.setState({ permitRoomBooking: true })
        this.setState({ chosenRoomDetails: room_details })
        
    }

    render(){
        const columnHeading = ['Room type', "Room price",
                                "Room number", "Status"]

        return(
            <div>
                {
                    this.state.listOfRooms ?
                    <React.Fragment>
                        <div className='row'>
                            <h2 className='col'>Available Rooms:</h2>
                        </div>

                        <table className='table table-striped table-hover table_style
                                          animate__animated animate__heartBeat'>
                            <thead>
                                <tr>
                                    {
                                        columnHeading.map( (heading, index) => 
                                        <th key={index}>{ heading }</th>
                                        )
                                    }
                                </tr>
                            </thead>

                            <tbody>
                                {
                                    this.state.listOfRooms.map( detail => 
                                        <tr key={ detail.id } >
                                            <td>{detail.room_type}</td> 
                                            <td>{detail.room_price}</td>
                                            <td>{detail.room_number}</td>
                                            <td>{detail.room_status}</td>

                                            <span>
                                                <Button action='Book room'
                                                directToBookRoomPage={() => this.bookingHandler(detail)}/>    
                                            </span>
                                        </tr>
                                    )   
                                }
                            </tbody>
                        </table>

                    </React.Fragment>
                        :
                    <React.Fragment>
                        <h3>There are no available rooms yet</h3>
                    </React.Fragment>  
                }                

                {
                    this.state.permitRoomBooking === true ?
                    <Redirect to={{
                        pathname: '/room-reservation',
                        state: {
                            room_details: this.state.chosenRoomDetails,
                            occupant_details: this.state.occupant_details
                        }
                    }} 
                    />
                    :
                    <Redirect to='/roomlist' />
                }

            </div>
        )
    }
}

export default RoomList;