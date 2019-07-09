import React,{Component} from 'react'
import './style.css'
import Grid from './Grid'
class Gamebox extends Component{
    constructor(props){
        super(props)
        this.themenum=0
        this.wincount=0;
        this.state={level:0,theme:"normal"}
    }
    Won=()=>{
        this.wincount+=1
        if(this.wincount===this.state.level+3){
           this.wincount=0
        this.setState(
            {level:this.state.level+1}
            )
        }   
    }
    Lost=()=>{
        this.setState(
            {level:0}
            )     
    }
    generateRandom=(n)=>{
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
            {theme:"night",}
        )}
        else{
            this.setState(
                {theme:"normal",}
            )}}
    Createcols=(i,n,randomarr)=>{
         var j
        var column=[]
        
         for(j=0;j<n;j++){
            console.log(randomarr,i)
            if(randomarr.indexOf(i)==-1){
            column.push(<Grid value={i} className={"block"} random={randomarr} level={this.state.level}  lost={this.Lost}/>)
            i+=n
            }
            else{
                column.push(<Grid value={i}  className={"highlight"} random={randomarr}  level={this.state.level} won={this.Won} />)
                i+=n  
            }
          }
          return column
         }
    Creategrid=(n,randomarr)=>{
         var gridarr=[]
            var i
            var count=0
            for(i=0;i<n;i++){
                gridarr.push(<div >{this.Createcols(count,n,randomarr)}</div>)   
                count+=1
                }
            return gridarr
        }
    render(){
        return(
            <div class={this.state.theme}> 
          
            <span class="level">level {this.state.level}</span>
            <span class="theme">Theme mode:</span>
            <label class="switch">
                <br/>
            <input type="checkbox" onClick={this.handleTheme}/>
                 <span class="slider round"></span>
                    </label>
            <br />
            
            <div class="grid">
              {this.Creategrid(this.state.level+3,this.generateRandom(this.state.level+3))}
                </div>  
               
            </div>
        );
    }
}
export default Gamebox;