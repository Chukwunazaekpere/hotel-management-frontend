import React from "react";
import Button from "../Utilities/Button";


class RoomReservation extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            roomReservationForm: {
                Firstname: "",
                Lastname: "",
                Email: "",
                Phone: "",
                'Check-in-date': "",
                'Duration': "",
                'Check-out-date': "",
                "Room-type": "",
                Cost: "",
            },

            roomType: [
                'Executive',
                'Business',
                'Convalescence'
            ],

            roomPrice: [
                40000,
                28000,
                55000,
            ],

            roomReservationDetails: {},
            // This variable helps in toggling the display of choice menu for room-type
            toggleRoomTypeDisplay: false

        }
    }

    handleChange = (event) => {
        let formFieldChanges = this.state.roomReservationForm;
        formFieldChanges[event.target.name] = event.target.value;

        this.setState({ roomReservationForm: formFieldChanges })

        const checkInDate = this.state.roomReservationForm['Check-in-date']
        const duration = this.state.roomReservationForm['Duration']
        console.log("\n\t Type: ", typeof(duration))

        // const [date, time] = checkInDate.split('T')
        
        let dateObject = new Date(checkInDate) // convert 'checkInDate' to a date object
        const year  = dateObject.getFullYear()
        const month = dateObject.getMonth()
        const date  = dateObject.getDate()

        // compute the "check-out-date" from the "check-in-date and duration values"
        let checkOutDate =  dateObject.setFullYear(year, month, (Number(duration)+date))
        // convert "check out date to a more readable-date form"
        let readableCheckOutDate = new Date(checkOutDate)
        
        // Populate the "Check-out-date" field with the 'readableCheckOutDate' data
        if (checkInDate){
            let checkOutData = this.state.roomReservationForm;
            checkOutData['Check-out-date'] = readableCheckOutDate;
            this.setState({ roomReservationForm: checkOutData })
        }

        // Populate the 'Cost' field
        if(event.target.name === 'Room-type'){
            console.log("\n\t Room type: ", event.target.name)
            let roomPrice = 0;
            if(event.target.value === this.state.roomType[0]){
                roomPrice = this.state.roomPrice[0];

            }else if(event.target.value === this.state.roomType[1]){
                roomPrice = this.state.roomPrice[1]

            }else{
                roomPrice = this.state.roomPrice[2]
            }
            let roomPriceData = this.state.roomReservationForm;
            roomPriceData['Cost'] = roomPrice;

            this.setState({ roomReservationForm: roomPriceData })

        }

        this.updateReservationDetails(event.target.name, event.target.value)
    }

    updateReservationDetails(fieldName, fieldValue){
        let updatedformFields = this.state.roomReservationDetails;
        updatedformFields[fieldName] = fieldValue;

        this.setState({ roomReservationDetails: updatedformFields })

        // check if the "check-out-date" field has been filled
        let checkOutDate = this.state.roomReservationForm['Check-out-date']
        if (checkOutDate){
            updatedformFields = this.state.roomReservationDetails;
            updatedformFields['Check-out-date'] = checkOutDate;

            this.setState({ roomReservationDetails: updatedformFields })            
        }
        console.log("\n\t Details: ", this.state.roomReservationDetails)
    }

    render(){
        let formFields = [];
        for(let key in this.state.roomReservationForm){
            formFields.push(key);
        }

        const formStyle = {
            backgroundColor: 'peru',
            border: '30px',
            borderColor: '#282c34',
            borderRadius: '10px',
            color: 'black',
            fontFamily: "Georgia, Verdana, Geneva, Tahoma, sans-serif",
            // borderImage: url(),
          }

        return(
            <div>

                <div className='row mt-3'>
                    <div className='col-3 ml-3 mr-5 mt-5'></div>
                    <div className='col-3 ml-5'><h3  className='col- mt-5 ml-5'>Room Reservation:</h3></div>

                </div>

                <div className='row'>
                <div className='col-3 ml-5 mr-3'></div>
                    <div style={formStyle} className='col-4 m-3 form-group'>
                        {
                            formFields.map( field =>
                                <div key={field}>
                                    <h5 className='mt-3'>{field}:</h5>
                                    {
                                        field !== 'Room-type'?
                                        <input className='pl-2 mb-3 form-control' 
                                            type={ field==='Email' ? "email": field==='Phone'? 
                                            'tel': field==='Check-in-date'? 'datetime-local':
                                            field==='Duration'? 'number':'text' }
                                            min={field==='Duration'?1:''}

                                            disabled={field==='Check-out-date'||field==='Cost'?true:''}
                                            onChange={ this.handleChange }
                                            value={this.state.roomReservationForm[field]}
                                            name={field}

                                            placeholder={field==='Duration'? 
                                            'Please, how long are you staying?':field==='Email'? 
                                            'Please enter an active email address':field==='Lastname'? 'Your surname, please.':'' }
                                        />
                                        :
                                        <select className='form-control'
                                               name={field}
                                               onChange={this.handleChange}
                                               value={this.state.roomReservationForm[field]}
                                               >
                                                   <option value=''>Select room type</option>
                                                   {
                                                       this.state.roomType.map( (roomType, index) => 
                                                        <option key={index} value={roomType}>
                                                            {this.state.roomReservationForm['Cost']===''?
                                                            roomType.concat(' ', '-', ' ', '#',this.state.roomPrice[index]):roomType}
                                                        </option>
                                                        )
                                                   }
                                        </select>
                                    }
                                    
                                </div>
                                )
                        }
                        <div className='mb-2'>
                            <Button action='Available Rooms' path='room-details' />
                        </div>
                    </div>
                    
                </div>


            </div>
        )
    }
}

export default RoomReservation;