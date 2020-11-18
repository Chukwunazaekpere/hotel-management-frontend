import React from 'react';
import '../styles/contactUsStyles.css';


class ContactUs extends React.Component  {
    constructor(props){
        super(props);

        this.state = {
            contactForm: {
                Firstname: '',
                Lastname:'',
                Phone: '',
                Email:'',
                Message:'',
            }
        };
    };

    changeHandler = (event) => {
        event.preventDefault();
        const stateProperty = {}

        stateProperty[event.target.name] = event.target.value;
        this.setState({ contactForm: stateProperty })
    }

    render(){
        // map all fields in contact-form to 'fieldNames'
        const fieldNames = Object.keys(this.state.contactForm)
        console.log("\n\t fields: ", fieldNames)

        return (
            <div className='template-styling'>
                <h2 className='text-white'> We'll Treat your requests/inquiries Kingly...</h2>
                <section>
                    {
                        fieldNames.map( (field, index) => 
                            <ul key={ index }>
                                <li className='form-group' >
                                    <span className='field-title'> {field}: </span>
                                    <input className='form-control'
                                            type={ field === "Phone" ? "tel":
                                                    field === "Email" ? "email" : "text" }
                                            name={ field }
                                            value={ this.state.contactForm[field] }
                                            onChange= { this.changeHandler }
                                        />
                                </li>
                            </ul>
                        )
                    }
                </section>
            </div>
        )
    }

}
export default ContactUs;