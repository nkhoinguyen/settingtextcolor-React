import React, { Component } from 'react';
class ColorPicker extends Component {
    constructor(props) {
        super(props);
        this.state = {
            colors: ['red','green', 'blue']
        }
    }
    showColor(color){
        // console.log(color)
        return {
            background: color
        }
    }
    setShowColor(color){
        // console.log(color)
        this.props.onReveiceColor(color);
    }
    render() {
        var ele = this.state.colors.map((item,index)=>{
            return <span 
                        key={index} 
                        className={(this.props.color === item ? "box active" : "box")} 
                        style={this.showColor(item) }
                        onClick = {()=>this.setShowColor(item)}></span>
        })
        return (
            <div className="card">
                <div className="card-header">
                    Colorpicker
                        </div>
                <div className="card-body">
                    <blockquote className="blockquote mb-0">
                        {ele}
                        
                    </blockquote>
                </div>
            </div>
        );
    }
}

export default ColorPicker;