import React , { Component } from 'react'
import './style.css'
import Gridhandle from './Gridhandle'
class Grid extends Component{
constructor(props){
    super(props);
    this.count=0;   
}
Createcols=(i,n)=>{
    var j
    var p=[]
    for(j=0;j<n;j++){
        p.push(<Gridhandle value={i} size={n}/>)
        i+=n
    }
    return p
}
Creategrid=(n)=>{
    var arr=[]
    var i
    for(i=0;i<n;i++){
        arr.push(<div class="box">{this.Createcols(this.count,n)}</div>)
        
        this.count+=1
    }
    return arr
}
render(){
    return(
        
        <div class="grid">
        {this.Creategrid(10)}
        </div>  
    );
}
}
export default Grid;