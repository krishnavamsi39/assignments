import React, { Component } from 'react'
import './style.css'
class Stopwatch extends Component{
    constructor(props){
        super(props);
        this.current=0
        this.totallaps=[]
        this.state={laps:[],counter:1,new:0,seconds:0}   
                        }
    handleAdd =()=>{
        this.setState(
        {seconds:this.state.seconds+1}
        )
        if(this.state.new==1){
        this.Timer();
                }              
         }
   Timer=()=>{
        var a=setTimeout(this.handleAdd,1000);         
                   }
    Start=(e)=>{
        this.setState({new:1})
        this.Timer();
    }
    Stop=(e)=>{
        this.setState({new:0})     
    }
    Laps=()=>{
        
        this.totallaps=this.totallaps.concat('#'+this.state.counter+'   '+Math.floor((+this.state.seconds-this.current)/60)+':'+Math.floor((this.state.seconds-this.current)%60)+'   '+Math.floor(this.state.seconds/60)+':'+Math.floor(this.state.seconds%60))
        this.totallaps=this.totallaps.concat(<br />)
        this.current=this.state.seconds
        this.setState({laps:this.totallaps,counter:this.state.counter+1})
    }
    Reset=()=>{
        this.totallaps=[]
        this.current=0
        this.setState({seconds:0,laps:[],counter:1})
    }
    render(){
        return(
            <div class="Stopwatch">
                  <h3 class="circle">{Math.floor(this.state.seconds/60)+':'+Math.floor(this.state.seconds%60)}</h3>
                  <br/>
                  <div class="buttons">
                <input type="submit" value="Start"  onClick={this.Start}/>
                <input type="submit"  value="Stop" onClick={this.Stop}/>
                <input type="submit" value="Laps" onClick={this.Laps}/>
                <input type="submit" value="Reset" onClick={this.Reset}/>
                </div >
                <h4>{this.state.laps } </h4>
             </div>
        );
    }
}
export default Stopwatch;