import React, { Component } from "react";

class Certificates extends Component {
    render() {
        return (
        <div>
            <label htmlFor="certificates">Certificates</label>
            <input type="text" name="certificates" placeholder="Certificates Name"/>
            <label htmlFor="dateOfStudy">Date Of Study</label>
            <input type="date" name="dateOfStudy" />
            
        </div>
        )
    }
}

export default Certificates