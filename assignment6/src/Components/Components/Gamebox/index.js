import React,{Component} from 'react'
import './style.css'
import Grid from './Grid'


class Gamebox extends Component{
    constructor(props){
        super(props)
        this.themenum=0
        this.state={value:0,theme:"normal"}
    }
    handleclick=()=>{
       
        if(this.state.value<10){
        this.setState(
            {value:this.state.value+1}
            )
        }
    }
    generaterandom=()=>{
        var n=this.state.value+3
        var arr = []
        while(arr.length < n){
            var r = Math.floor(Math.random()*(n*n)) + 1;
            if(arr.indexOf(r) === -1) 
                arr.push(r);
                }
        console.log(arr)
        
    }
    handleTheme=()=>{
        this.themenum+=1
        if(this.themenum%2===1){
            var nightobj={color:"cement",fontcolor:"black",page background:"white"}
        this.setState(
            {theme:"night"}
        )}
        else{
            this.setState(
                var dayobj={color}
                {theme:"normal"}
            )
        }
    }
    render(){
        return(
           
            <div class={this.state.theme}> 
             {this.generaterandom}
            <span class="level">level {this.state.value}</span>
            <span class="theme">Theme mode:</span>
            <label class="switch">
                <br/>
            <input type="checkbox" onClick={this.handleTheme}/>
                 <span class="slider round"></span>
                    </label>
            <button onClick={this.handleclick}/>
            <br />
          <div>
            <Grid value={this.state.value} theme={this.state.theme}/>
            </div>
            </div>
        );
    }
}
export default Gamebox;