import React,{Component} from 'react'
import './style.css'

class Grid extends Component{
    constructor(props){
        super(props);
    
        this.count=0; 
        this.state=({classes:this.props.className})  
    }
    handleChange=(e)=>{
        var b=this.props.value
       
        if(this.props.random.indexOf(Number(b))!==-1){
            this.count+=1
        this.setState(
            {
                classes:"clicked",
               
            }
        )    
            if(this.count===this.props.random.length){
                console.log("hey")
                this.props.Won()
            }
        }
        else{
            this.setState(
                {
                    classes:"wclicked"
                }
            )
              this.props.lost() 
            }   
    }
   
    render(){
        return(
            <>
          
            <div className={this.state.classes}  value={this.props.value}  onClick={this.handleChange}> </div>  
            </>
           
        );
    }
    }
    export default Grid;