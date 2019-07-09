import React,{Component} from 'react'
import './style.css'

class Grid extends Component{
    constructor(props){
        super(props);
    
        this.count=0; 
        this.state=({classes:this.props.className})  
    }
  componentDidMount() {
             setTimeout(
                () => this.setState(prevState => ({ classes:"block" })),
                2000,
            );
        }
  componentWillReceiveProps(nextProps) {
            if(nextProps.className!=this.props.classes){
                this.setState({classes:nextProps.className})   
            }
            if(nextProps.className){
                setTimeout(
                    () => this.setState(prevState => ({ classes:"block" })),
                    2000,
                );
            }
        } 
    handleChange=(e)=>{
      
        var b=this.props.value
        console.log(b,this.props.random)
        if(this.props.random.indexOf(Number(b))!==-1){
            this.props.won()
        this.setState({classes:"clicked"})     
            }
        else{
            this.setState({classes:"wclicked"})
              setTimeout(this.props.lost(),5000)
              console.log(this.state.classes)
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