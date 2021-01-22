import React, { Component } from 'react';

class Reset extends Component {
    setDefault = () =>{
        this.props.onReset(true);
    }
    render() {
        return (
            <div>
                <button onClick={this.setDefault} name="reset" id="" className="btn btn-primary mt-lg-3" >Reset</button>
            </div>
        );
    }
}

export default Reset;