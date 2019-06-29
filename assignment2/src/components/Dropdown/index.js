import React, { Component } from 'react'
import './style.css'
class Dropdown extends Component{
    constructor(props){
        super(props);
        this.state={message:'',value:''}
        this.handleSelect = this.handleSelect.bind(this);  
        this.handleSubmit = this.handleSubmit.bind(this); 
    }
    handleSelect(event){
        this.setState(
            {value:event.target.value}
        )
    }
   handleSubmit(event){
    event.preventDefault();
       this.setState(
           {message:'Selected state is '+this.state.value}
       )
   }
    render(){
        return(
            <div class="dropdown">
                Select your state<select name="Select your state" onChange={this.handleSelect}>
  <option value="ap" >Andhra Pradesh</option>
  <option value="tg" >Telangana</option>
  <option value="tn" >Tamil Nadu</option>
  <option value="up" >Uttar Pradesh</option>
</select> 
                <input type="submit" value="Clickme" onClick={this.handleSubmit}/>
                <h3>{this.state.message}</h3>
             </div>


        );
    }
}
export default Dropdown;