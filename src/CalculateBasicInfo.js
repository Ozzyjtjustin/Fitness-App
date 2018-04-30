import React, { Component } from 'react';
import './App.css';

class CalculateBmr extends Component {
  constructor(props){
    super(props)
    this.state = {
      bmr: null
    }
  }


bmrCalc=()=>{
  if(this.props.gender === 'male'){
    const weight = 6.23 * this.props.weight;
    const height = 12.7 * this.props.height;
    const age = 6.8 * this.props.age;
    const maleBmr = 66 + weight + height - age;
    this.setState({bmr: maleBmr})
  }else if(this.props.gender === 'female'){
    const weight = 4.35 * this.props.weight;
    const height = 4.7 * this.props.height;
    const age = 4.7 * this.props.age;
    const maleBmr = 655 + weight + height - age;
    this.setState({bmr: maleBmr})
  }
}

  render() {
    return (
    <div >
      <div className="buttons">
        <div className="calcButton">
          <button onClick={()=>this.bmrCalc()} style={{backgroundColor: '#f3f3f369', borderRadius: '5px', borderColor: '#f3f3f321'}}>Calculate BMR</button>
        </div>
      </div>
      {this.state.bmr &&
      <h4 style={{backgroundColor: '#f3f3f34d', textAlign: 'center'}}>
        {this.props.name}, your BMR or (basal metabolic rate) is {this.state.bmr} calories per 24 hours
      </h4>}
    </div>
    );
  }
}

export default CalculateBmr;
