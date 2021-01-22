import React, { Component } from 'react';

class Font extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         font: 15
    //     }
    // }
    setUp(font){
        // console.log(font);
        this.props.onReveiceFont(font);
    }
    setDown(font){
        // console.log(font);
        this.props.onReveiceFont(font);
    }
    render() {
        
        return (
            <div className="card">
                <div className="card-header">
                    Size: {this.props.font}px
                        </div>
                <div className="card-body">
                    <blockquote className="blockquote mb-0">
                        <button onClick={()=>this.setUp(2)} type="button" className="btn btn-warning mr-1">Tăng</button>
                        <button onClick={()=>this.setDown(-2)} type="button" className="btn btn-warning">Giảm</button>
                    </blockquote>
                </div>
            </div>
        );
    }
}

export default Font;