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
render(){
    return(
        <div class="check">
            <h3>Which Cities have you visited ?</h3>
                <input type="checkbox"  value="Hyderabad"  onChange={this.handleSelect}/>Hyderabad
                <input type="checkbox"  value="Bangalore"  onChange={this.handleSelect}/> Bangalore
                <input type="checkbox"  value="Delhi"  onChange={this.handleSelect}/> Delhi
                <input type="checkbox"  value="Mumbai" onChange={this.handleSelect}/> Mumbai
                <input type="submit" value="Submit" onClick={this.handleSubmit} />
                <h3>{this.state.message}</h3>
            </div>

    );
}
}
export default Checkbox;