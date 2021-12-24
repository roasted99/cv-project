import React, {Component} from "react";
import Certificates from "./Certificates"

class Education extends Component {
    state = {
        companyName: '',
        positionTitle: '',
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
                <label htmlFor="school">School Name</label>
                <input 
                type="text" 
                name="school" 
                placeholder="School Name"
                value={this.state.name}/>

                <label htmlFor="studyTitle">Title of Study</label>
                <input 
                type="text" 
                name="studyTitle" 
                placeholder="Title of Study"
                value={this.state.name}/>

                <label htmlFor="dateOfStudy">Date Of Study</label>
                <input 
                type="date" 
                name="dateOfStudy"
                value={this.state.name} />

                <Certificates />
                <button className="add" onClick={this.props.addCertificates}>Add Certificates</button>
            </div>
        )
    }
}

export default Education