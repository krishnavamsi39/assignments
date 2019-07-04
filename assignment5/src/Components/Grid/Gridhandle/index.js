import React , { Component } from 'react'
import './style.css'

class Gridhandle extends Component{
constructor(props){
    super(props);
    this.x=0;
    this.z=0;
    this.state=({divclass:"normal"})
  
    
}
handleClick=()=>{
   var  val=this.props.value
   var n=this.props.size
    
     if(val%n===0 || val%n===n-1){
         if(this.z===1){
             
             this.setState({divclass:"rotate3dreverse"})
             this.z=0
         }
         else{
    this.setState({divclass:"rotate3d"})
    this.z=1
         }
    }
    else{
        if(this.x===1){
         
            this.setState({divclass:"rotateup"}) 
            this.x=0
        }
        else{
        this.setState({divclass:"rotatedown"}) 
        this.x=1 }
    }
    
}
render(){
    return(
        
        <div class={this.state.divclass} onClick={this.handleClick}>{this.props.value}</div>
        
       
    );
}
}
export default Gridhandle;