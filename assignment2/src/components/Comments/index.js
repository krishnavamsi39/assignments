import React, { Component } from 'react'
import './style.css'
class Comments extends Component{
    constructor(props) {  
        super(props);  
        this.allcomments=[];
        this.reversed=[];
        this.state = {value: '',comments:[]};  
        this.handleChange = this.handleChange.bind(this);  
        this.handleSubmit = this.handleSubmit.bind(this); 
      
    }
    handleChange(event) {  
        this.setState({value: event.target.value});  
    }  
    handleSubmit(event) {  
        var date=(new Date()).toLocaleString();
     
        this.allcomments=this.allcomments.concat(<div class="box"><img src="assets/images/img_avatar.png" class='circl' />{this.state.value}<p class="date">{date}</p></div>)
        this.reversed=this.allcomments.reverse()
         this.setState({
        comments:this.reversed
    ,value:''}
         )
          
    }  
  
    render() {  
        return (  
            <div class="fl" >  
                  <input type="text"  value={this.state.value}  onChange={this.handleChange} />  
                <p class="fon">{this.state.foc}</p>
              <input type="submit" value="Comment" onClick={this.handleSubmit} />
             <h3 class="cm">{this.state.comments}</h3>
           </div>  
        );  
    }  
   
}
export default Comments;