import React, { Component } from 'react'
import './style.css'
class Disable extends Component{
    constructor(props){
        super(props);
        this.state={checked:false,value:''}
        this.handleSelect = this.handleSelect.bind(this);  
        this.handleSubmit = this.handleSubmit.bind(this); 
    }
    handleSelect(event){
        this.setState(
            {checked:!this.state.checked}
        )
    }
   handleSubmit(event){
       if(this.state.checked===false)
        alert("I'm Working");
   }
    render(){
        return(
            <div class="disable">
                <input type="checkbox" value="Hello" onChange={this.handleSelect}/>Disabled
                <input type="submit" value="Clickme" onClick={this.handleSubmit}/>
             </div>


        );
    }
}
export default Disable;