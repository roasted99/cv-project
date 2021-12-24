import React, { Component } from "react";

class Experience extends Component {
    state = {
        companyName: '',
        positionTitle: '',
        startDat: '',
        endDate: '',
        duration: '',
        description: ''
    }

handleChange = (event) => {
    this.setState(prevData => ({
     [event.target.name]: event.target.value
    }))
}

    render() {
        return (
            <div>
                <label htmlFor="companyName">Company Name</label>
                <input 
                type="text" 
                value={this.state.companyName}  
                name="companyName" 
                placeholder="Company Name"
                onChange={this.handleChange}/>

                <label htmlFor="positionTitle">Position Title</label>
                <input 
                type="text" 
                value={this.state.positionTitle}  
                name="positionTitle" 
                placeholder="Position Title"
                onChange={this.handleChange}/>

                <label htmlFor="startDate">From (MM, YYYY):</label>
                <input type="month" name="startDate" onChange={this.handleChange}/>
                <label htmlFor="endDate">To (MM, YYYY):</label>
                <input type="month" name="endDate" onChange={this.handleChange}/>

                <textarea 
                value={this.state.description}
                placeholder="Description"
                onChange={this.handleChange}
                name="description"
            />

            </div>
        )
    }
}

export default Experience