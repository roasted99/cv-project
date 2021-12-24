import React, { Component } from "react";

class GeneralInfo extends Component {
    constructor(props) {
        super(props)
        this.state = {
            firstName: '',
            lastName: '',
            phone: '',
            email: ''
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event) {
        this.setState(prevData => ({
         [event.target.name]: event.target.value
        }))
    }
    
    render() {
        return (
            <div className="general">
                <label htmlFor="firstName">First Name</label>
                <input 
                type="text" 
                value={this.state.firstName}  
                name="firstName" 
                placeholder="First Name"
                onChange={this.handleChange}/>

                <label htmlFor="lastName">Last Name</label>
                <input 
                type="text" 
                value={this.state.lastName}  
                name="lastName" 
                placeholder="Last Name"
                onChange={this.handleChange}/>

                <label htmlFor="phone">Phone Number</label>
                <input 
                type="text" 
                value={this.state.phone}  
                name="phone" 
                placeholder="Phone Number"
                onChange={this.handleChange}/>

                <label htmlFor="email">Email</label>
                <input 
                type="email" 
                value={this.state.email} 
                name="email" 
                placeholder="Email"
                onChange={this.handleChange}/>
            </div>
        )
    }
}

export default GeneralInfo