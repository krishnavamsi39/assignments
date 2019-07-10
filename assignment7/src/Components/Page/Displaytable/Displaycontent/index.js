import React,{Component} from 'react'
import './style.css'
class Displaycontent extends Component{
    constructor(props){
        super(props);

    }
    returnName=()=>{
        if(this.props.product.stocked===true){
            return this.props.product.name
        }
        else{
            return <span style={{color: 'red'}}>{this.props.product.name}</span>
        }
    }
    render(){
        
  
        return(
            <>
             <tr>
        <td>{this.returnName()}</td>
                <td >{this.props.product.price}</td>
            </tr>
            </>
        );
    }

}
export default Displaycontent;