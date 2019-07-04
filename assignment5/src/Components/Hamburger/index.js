import React , { Component } from 'react'
import './style.css'
class Hamburger extends Component
{
    constructor (props){
        
        super(props);
        this.value=0;
        this.state={classdiv:"division1" }
    }
    handleClick=()=>{
        this.value=!this.value
       console.log(this.value)
        if(this.value===true){
            this.setState({
                classdiv:"division2"
            })
        }
        else{
            this.setState({
                classdiv:"division1"
            })
            
        }
    }
    render(){
        return(
            <>
            <hr></hr>
            <div class={this.state.classdiv}>
               <span class="para">Hey,Here I am </span>
            </div>

            <img src="assets/index.png" height="30px" onClick={this.handleClick}/>
            
            </>
        );
    }

}

export default Hamburger;