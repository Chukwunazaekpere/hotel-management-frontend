import React from "react";
import Button from "../Utilities/Button";
import axios from "axios";


class RoomList extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            listOfRooms: []

        }
    }

    componentDidMount(){
        axios.get(`http://127.0.0.1:8000/hotels/roomslist/`)
        .then( response => {
            this.setState({ listOfRooms: response.data })
            console.log("\n\t Rooms: ", response.data )

        }).catch( error => {
            this.setState({ listOfRooms: 'There are no available rooms yet'})
        })
    }

    render(){
        const columnHeading = ['Room type', "Room price",
                                "Room number", "Status"]

        return(
            <div>
                {
                    this.state.listOfRooms ?
                    <React.Fragment>
                        <h2>Available Rooms:</h2>

                        <table className='table table-striped table-hover'>
                            <thead>
                                <tr>
                                    {
                                        columnHeading.map( (heading, index) => 
                                        <th key={index}>{ heading }</th>
                                        )
                                    }
                                </tr>
                            </thead>

                            <tbody >
                                {
                                    this.state.listOfRooms.map( detail => 
                                        <tr key={ detail.id } className='mt-2'>
                                            <td>{detail.room_type}</td> 
                                            <td>{detail.room_price}</td>
                                            <td>{detail.room_number}</td>
                                            <td>{detail.room_status}</td>

                                            <Button action='Book room'/>    
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
            </div>
        )
    }
}

export default RoomList;