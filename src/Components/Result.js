import React, { Component } from 'react';

class Result extends Component {
    setOn(){
        return{
            color: this.props.color,
            fontSize: this.props.font
        }
    }
    render() {
        return (
            <div className="card mt-4">
                <div className="card-header">
                    Color: {this.props.color} - ForntSize: {this.props.font}px
                        </div>
                <div className="card-body">
                    <blockquote className="blockquote mb-0">
                        <p style={this.setOn()}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.
                                </p>
                        {/* <footer className="blockquote-footer">Someone famous in <cite title="Source Title">Source
                                        Title</cite>
                        </footer> */}
                    </blockquote>
                </div>
            </div>
        );
    }
}

export default Result;