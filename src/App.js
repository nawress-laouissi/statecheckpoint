
import './App.css';
import avatar from './avatarpicwoman.png'

import React, { Component } from 'react'
// transformin app.js into a class-based component:
export class App extends Component {
  constructor(props) {
    super(props)
  // implementing a state:
    this.state = {
       fullName: "",
       bio: "", 
       imgSrc: "" ,
        profession: " ",
        shows: true,
        
        
    }
  }
  // creating an event handler:
  handleClick(){
    if(this.state.shows) {
      this.setState({
        fullName: "nawress laouissi",
        bio:"'learning has no limits'",
        profession:"student", 
        imgSrc: avatar
      })
    }
  }
 
  
  render() {
    return (
      <div className="Start">
       <button onClick={()=>this.handleClick()}> shows</button>
       <div  className='profile'>
       <div className='container'>
       <img src={this.state.imgSrc} /> 
      <h2>{this.state.fullName}</h2> 
      <p>{this.state.bio}</p>
      <p>{this.state.profession}</p>
      </div>
      </div>
      
      </div>
    )
  }
}

export default App


