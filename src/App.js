import React, { Component } from 'react';
import './App.css';
import ColorPicker from './Components/ColorPicker';
import Font from './Components/Font';
import Result from './Components/Result';
import Reset from './Components/Reset';
class App extends Component {
  //tạo constructor
  constructor(props) {
    super(props);
    //đặt state
    this.state = {
      color: 'red',
      fontSize: 15
    };
    //bind
    this.setColor = this.setColor.bind(this);
    this.setFont = this.setFont.bind(this);
    this.reset = this.reset.bind(this);
  }
  //setColor
  setColor(params){
    console.log(params);
    this.setState({
      color: params
    })
  }
  //setFont
  setFont(params){
    console.log(params);
    // 8 >= fontSize <= 36
    if(this.state.fontSize + params >= 8 && this.state.fontSize + params <= 36){
      this.setState({
        fontSize: this.state.fontSize + params
      })
    }
  }
  //Reset
  reset(params){
    console.log("status: reset");
    alert("ban da reset");
    if(params = true){
      this.setState({
        fontSize: 15,
        color: "red"
      })  
    }

  }
  render() {
    return (
      <div className="container">
        <div className="row mt-3">
          <div className="col-sm-6">
            <ColorPicker color={this.state.color} onReveiceColor={this.setColor} />
          </div>
          <div className="col-sm-6">
            <Font font={this.state.fontSize} onReveiceFont={this.setFont}/>
            <Reset onReset={this.reset}/>
          </div>


        </div>
        <div className="row">
          <div className="col-sm-12">
            <Result color={this.state.color} font={this.state.fontSize}/>
          </div>
        </div>
      </div >
    );
  }
}

export default App;