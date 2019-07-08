import React,{Component} from 'react'
import './style.css'
import Grid from './Grid'
class Gamebox extends Component{
    constructor(props){
        super(props)
        this.count=0;
        this.themenum=0
        this.state={value:1,theme:"normal"}
    }
    Won=()=>{
        this.setState(
            {value:this.state.value+1}
            )
        
    }
    Lost=()=>{
        this.setState(
            {value:0}
            )
    }
    generateRandom=()=>{
        var n=this.state.value+3
       var ranarr=[]
        while(ranarr.length < n){
            var r = Math.floor(Math.random()*(n*n));
            if(ranarr.indexOf(r) === -1) 
                ranarr.push(r);
                }
       return ranarr 
    }
    handleTheme=()=>{
        this.themenum+=1
        if(this.themenum%2===1){
        this.setState(
            {theme:"night"}
        )}
        else{
            this.setState(
                {theme:"normal"}
            )}}
    Createcols=(i,n,an)=>{
         var j
        var p=[]
         for(j=0;j<n;j++){
            if(an.indexOf(i)==-1){
            p.push(<Grid value={i} className={"block"} random={an} level={this.state.value} won={this.Won}lost={this.Lost}/>)
            i+=n
            }
            else{
                p.push(<Grid value={i}  className={"highlight"} random={an}  level={this.state.value} lost={this.lost}/>)
                i+=n  
            }
          }
          return p
         }
    Creategrid=(n)=>{
         var arr=[]
            var i
            var an=this.generateRandom()
            for(i=0;i<n;i++){
                arr.push(<div >{this.Createcols(this.count,n,an)}</div>)   
                this.count+=1
                }
            return arr
        }
    render(){
        return(
            <div class={this.state.theme}> 
            <span class="level">level {this.state.value}</span>
            <span class="theme">Theme mode:</span>
            <label class="switch">
                <br/>
            <input type="checkbox" onClick={this.handleTheme}/>
                 <span class="slider round"></span>
                    </label>
            <br />
            <div class="grid">
                {this.Creategrid(this.state.value+3)}
                </div>  
            </div>
        );
    }
}
export default Gamebox;