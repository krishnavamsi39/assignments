import React, { Component } from 'react'
import './style.css'
class Radio extends Component{
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
            {message:'Your Favourite Dessert is '+this.state.value}
        )
    }
    render(){
        return(
            <div class="radio">
                <h3>What Is Your Favourite Ice cream?</h3>
                <input type="radio"  value="Vanila" checked={this.state.value=="Vanila" }  onChange={this.handleSelect}/>Vanila
                <input type="radio"  value="Butterscotch" checked={this.state.value=="Butterscotch" }   onChange={this.handleSelect}/> Butterscotch
                <input type="radio"  value="Strawberry" checked={this.state.value=="Strawberry" }  onChange={this.handleSelect}/> Strawberry
                <input type="radio"  value="Chocolate" checked={this.state.value=="Chocolate" }  onChange={this.handleSelect}/> Chocolate
                <input type="submit" value="Submit" onClick={this.handleSubmit} />
                <h3>{this.state.message}</h3>
             </div>


        );
    }
}
export default Radio;