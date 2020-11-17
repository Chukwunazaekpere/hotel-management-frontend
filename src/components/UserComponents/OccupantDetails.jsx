import React from "react";
import Button from "../Utilities/Button";
import axios from "axios";
import { Redirect } from "react-router-dom";

import "animate.css";
import "../styles/occupantDetails.css";


class RoomReservation extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      roomReservationForm: {
        Firstname: "",
        Lastname: "",
        Email: "",
        Phone: "",
        Duration: "",
      },

      roomReservationDetails: {},

      formErrorDetails: {},

      // This variable helps in toggling the display of room list when a
      // user fills in the room-reservation form
      toggleRoomListDisplay: false,
    };
  }

  handleChange = (event) => {
    let formFieldChanges = this.state.roomReservationForm;
    formFieldChanges[event.target.name] = event.target.value;

    this.setState({ roomReservationForm: formFieldChanges });
    // pass values
    this.updateReservationDetails(event.target.name, event.target.value);
  };

  updateReservationDetails(fieldName, fieldValue) {
    let updatedformFields = this.state.roomReservationDetails;
    updatedformFields[fieldName] = fieldValue;

    this.setState({ roomReservationDetails: updatedformFields });

    console.log("\n\t Details: ", this.state.roomReservationDetails);
  }

  handleShowRoomList = (event) => {
    event.preventDefault();
    // Submit users data in order to reserve room(s)
    axios
      .post("http://localhost:8000/create-occupant/", {
        firstname: this.state.roomReservationDetails.Firstname,
        lastname: this.state.roomReservationDetails.Lastname,
        email: this.state.roomReservationDetails.Email,
        phone: this.state.roomReservationDetails.Phone,
        duration: this.state.roomReservationDetails.Duration,
      })
      .then((response) => {
        console.log("\n\t Status: ", response.status);
        this.setState({ toggleRoomListDisplay: true });
      })
      .catch((error) => {
        console.log("\n\t There were errors...");
        this.setState({ formErrorDetails: error.response.data });
        console.log("\n\t Errors: ", error.response.data);
        console.log("\n\t State Errors: ", this.state.formErrorDetails);
      });
  };

  render() {
    let formFields = [];
    for (let key in this.state.roomReservationForm) {
      formFields.push(key);
    }

    return (
        <div className='background-style'>
            <section className="bg bg-textheading col-md-5">
                <h3 className="animate__animated animate__pulse animate__repeat-3  3 col- mt-5 ml-5">
                    Please fill in the required details to see the available rooms.
                </h3>
            </section>

            <section className="form-style">
                <div className="input-fields col-md-6 animate__animated animate__swing" >
                    {
                        formFields.map( field => (
                            <div key={field} className='form-group'>
                                {/* place fields */}
                                <h5 className="mt-3 text-white">{field}:</h5>
                                {/* place any field error */}
                                <h4>{this.state.formErrorDetails[`${field.toLowerCase()}`]}</h4>
                                <input className="form-control "
                                        type={ field === "Email" ? "email" : 
                                            field === "Phone" ? "tel" : 
                                            field === "Duration" ? "number" : "text" }
                                    min={field === "Duration" ? 1 : ""}
                                    onChange={this.handleChange}
                                    value={this.state.roomReservationForm[field]}
                                    name={field}
                                    placeholder={
                                        field === "Duration"
                                        ? "Please, how long are you staying?"
                                        : field === "Email"
                                        ? "Please enter an active email address"
                                        : field === "Lastname"
                                        ? "Your surname, please."
                                        : ""
                                    }
                                />
                            </div>
                        ))
                    }
                    <div className="submit-button">
                        <Button action="Available Rooms" path="roomlist"
                            showRoomList={this.handleShowRoomList} />
                    </div>
                </div>
            </section>

            {this.state.toggleRoomListDisplay === true ? (
            // We're passing 'room_type' to the state props, 'cos we'll need
            // to call the roomlist, which will then querry the backend
            // for a request with the 'room_type'.
            <Redirect
                to={{
                pathname: "/roomlist",
                state: { occupant_details: this.state.roomReservationDetails },
                }}
            />
            ) : (
            <Redirect to="/occupant-details" />
            )}
        </div>
    );
  }
}

export default RoomReservation;
