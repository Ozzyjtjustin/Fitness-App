import React, { Component } from 'react';
import './App.css';
import CalculateBmr from './CalculateBasicInfo.js'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      name:null,
      gender:null,
      age:null,
      height:null,
      weight:null,
      activityLevel:null
    }
  }
  nameHandleChange=(event)=>{
    const nameArr = event.target.value
    return this.setState({name: nameArr});
  }
  maleHandleChange=(event)=>{
    return this.setState({gender: event.target.value});
  }
  femaleHandleChange=(event)=>{
    return this.setState({gender: event.target.value});
  }
  ageHandleChange=(event)=>{
    const age = Number(event.target.value)
    return this.setState({age: age});
  }
  heightHandleChange=(event)=>{
    const heightInches = event.target.value * 12;
    return this.setState({height: heightInches});
  }
  inchesHandleChange=(event)=>{
    const addInches = this.state.height + Number(event.target.value);
    return this.setState({height: addInches});
  }
  weightHandleChange=(event)=>{
    const weightLbs = Number(event.target.value)
    return this.setState({weight: weightLbs});
  }
  activityLevelHandleChange=(event)=>{
    const activity = Number(event.target.value)
    return this.setState({activityLevel: activity});
  }

  render() {
    return (
      <div className='body'>
        <div className="formBox">
           <h3>Welcome to MY HEALTH!</h3>
           <p>Please enter your basic information so we can get started!</p>
           <div className="userInfo">name:
             <input className="input" style={{borderRadius:'3px'}} placeholder="Jon Doe" type="text" onChange={this.nameHandleChange}/>
           </div>
           <form className="userInfo">gender:<br/>
             <input className="input" style={{borderRadius:'3px'}} name="gender" value="male" type="radio" onChange={this.maleHandleChange}/>male<br/>
             <input className="input" style={{borderRadius:'3px'}} name="gender" value="female" type="radio" onChange={this.femaleHandleChange}/>female<br/>
           </form>
           <div className="userInfo">age:
             <select name="age"  className="input" onChange={this.ageHandleChange}>
               <option value='null' >select age</option>
               <option value='13.5'>10-15</option>
               <option value='17.5'>15-20</option>
               <option value="22.5">20-25</option>
               <option value='27.5'>25-30</option>
               <option value='37.5'>30-45</option>
               <option value='52.5'>45-60</option>
               <option value='75'>60+</option>
             </select>
           </div>
           <div className="userInfo">height:
             <select name="heightFoot" className="input" onChange={this.heightHandleChange}>
               <option value='null' >Feet</option>
               <option value='3'>3 ft</option>
               <option value='4'>4 ft</option>
               <option value='5'>5 ft</option>
               <option value='6'>6 ft</option>
               <option value='7'>7 ft</option>
             </select>
             <select name="heightInch" className="input" onChange={this.inchesHandleChange}>
               <option value='null'>Inches</option>
               <option value="1">1</option>
               <option value="2">2</option>
               <option value="3">3</option>
               <option value="4">4</option>
               <option value="5">5</option>
               <option value="6">6</option>
               <option value="7">7</option>
               <option value="8">8</option>
               <option value="9">9</option>
               <option value="10">10</option>
               <option value="11">11</option>
             </select>
           </div>
           <div className="userInfo">weight:
             <input className="input" style={{borderRadius:'3px'}} placeholder="lbs" type="number" onChange={this.weightHandleChange}/>
           </div>
           <div className="userInfo">activity level:
               <select name="activity" className="input" onChange={this.activityLevelHandleChange}>
                 <option value='null'>How often do you exercise</option>
                 <option value="1">less than once a week</option>
                 <option value="2">twice a week </option>
                 <option value="3">three times a week</option>
                 <option value="4">4 times a week</option>
                 <option value="5">5 times a week</option>
               </select>
           </div>
        </div>
        <CalculateBmr
          name={this.state.name}
          gender={this.state.gender}
          age={this.state.age}
          height={this.state.height}
          weight={this.state.weight}
          activityLevel={this.state.activityLevel}
        />
      </div>
    );
  }
}

export default App;
