import React, { Component } from 'react'
import './style.css'
import { runInThisContext } from 'vm';
class Greet extends Component{
    constructor(props) {  
        super(props);  
        this.state = {value: '',message:'',foc:''};  
        this.handleChange = this.handleChange.bind(this);  
        this.handleSubmit = this.handleSubmit.bind(this); 
        this.handleFocus=this.handleFocus.bind(this); 
        this.handleBlur=this.handleBlur.bind(this);
    }  
    handleBlur(event){
        this.setState(
            {
                foc:''
            }
        )
    }
    handleFocus(event){
        this.setState({
            foc:'Username should be in A-Za-z'
        })
    }
    handleChange(event) {  
        this.setState({value: event.target.value,
        foc:''});  
    }  
    handleSubmit(event) {  
         this.setState({
        message:'Hello '+this.state.value+', Have a nice day'}
         )
        event.preventDefault();  
    }  
    render() {  
        return (  
            <div class="fl" >  
                  <input type="text" value={this.state.value} onBlur={this.handleBlur} onFocus={this.handleFocus} onChange={this.handleChange} />  
                <p class="fon">{this.state.foc}</p>
              <input type="submit" value="Greet" onClick={this.handleSubmit} />
             <h3>{this.state.message}</h3>
           </div>  
        );  
    }  
   
}
export default Greet;