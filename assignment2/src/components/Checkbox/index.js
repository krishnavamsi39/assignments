import React, { Component } from 'react'
import './style.css'
class Checkbox extends Component{
   
    constructor(props){
        super(props);
        this.totallist=[]
        this.state={cities:[],checked:false,value:'',message:''}
        this.handleSelect = this.handleSelect.bind(this);  
        this.handleSubmit = this.handleSubmit.bind(this); 
    }
    handleSelect(event){
        var val=this.totallist.indexOf(event.target.value)
        if(val==-1){
           this.totallist= this.totallist.concat(event.target.value)
        }
        else{
            this.totallist.splice(val,1)
        }
        this.setState(
            {value:event.target.value,cities:this.totallist}
        )
    }
    handleSubmit(event){
        event.preventDefault();
        this.setState(
            {message:'You have visisted these cities '+this.state.cities,}
        )
    }
    createCities =(cities)=>{
    
        var tokens=[]
        for(let i=0;i<cities.length;i++){
            tokens[i]=<><input type="checkbox"
                         value = {cities[i]}               
                        onChange ={this.handleCheckBox}
                         /><label>{cities[i]}</label><br></br></>
        }
        return tokens 
    }
render(){
    return(
        <div class="check">
            <h3>Which Cities have you visited ?</h3>
                {this.createCities(this.props.city)}
                <button onClick={this.handleClick}>SUBMIT</button>
                <h1>{this.state.msg}</h1>
            </div>

    );
}
}
export default Checkbox;
