import React from "react";
import Button from "../Utilities/Button";
import axios from "axios";
import { Redirect } from "react-router-dom";

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
      .post("http://localhost:8000/hotels/create-occupant/", {
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

    const formStyle = {
      backgroundColor: "peru",
      border: "30px",
      borderColor: "#282c34",
      borderRadius: "10px",
      color: "black",
      fontFamily: "Georgia, Verdana, Geneva, Tahoma, sans-serif",
      // borderImage: url(),
    };

    return (
      <div>
        <div className="row mt-3">
          <div className="col-2 ml-3 mr-5 mt-5"></div>
          <div className="col-5 ml-5">
            <h3 className="col- mt-5 ml-5">Please fill in the required details to see the available rooms.</h3>
          </div>
        </div>

        <div className="row">
          <div className="col-3 ml-5 mr-3"></div>
          <div style={formStyle} className="col-4 m-3 form-group">
            {formFields.map((field) => (
              <div key={field}>
                {/* place fields */}
                <h5 className="mt-3">{field}:</h5>
                {/* place any field error */}
                <h4>{this.state.formErrorDetails[`${field.toLowerCase()}`]}</h4>
                {field !== "Room-type" ? (
                  <input
                    className="pl-2 mb-3 form-control"
                    type={
                      field === "Email"
                        ? "email"
                        : field === "Phone"
                        ? "tel"
                        : field === "Check-in-date"
                        ? "datetime-local"
                        : field === "Duration"
                        ? "number"
                        : "text"
                    }
                    min={field === "Duration" ? 1 : ""}
                    disabled={
                      field === "Check-out-date" || field === "Cost" ? true : ""
                    }
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
                ) : (
                  <select
                    className="form-control"
                    name={field}
                    onChange={this.handleChange}
                    value={this.state.roomReservationForm[field]}
                  >
                    <option value="">Select room type</option>
                    {this.state.roomType.map((roomType, index) => (
                      <option key={index} value={roomType}>
                        {this.state.roomReservationForm["Cost"] === ""
                          ? roomType.concat(
                              " ",
                              "-",
                              " ",
                              "#",
                              this.state.roomPrice[index]
                            )
                          : roomType}
                      </option>
                    ))}
                  </select>
                )}
              </div>
            ))}
            <div className="mb-2">
              <Button
                action="Available Rooms"
                path="roomlist"
                showRoomList={this.handleShowRoomList}
              />
            </div>
          </div>
        </div>

        {this.state.toggleRoomListDisplay === true ? (
          // We're passing 'room_type' to the state props, 'cos we'll need
          // to call the roomlist, which will then querry the backend
          // for a request with the 'room_type'.
          <Redirect
            to={{
              pathname: "/roomlist",
              state: { room_type: this.state.roomReservationForm["Room-type"] },
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
