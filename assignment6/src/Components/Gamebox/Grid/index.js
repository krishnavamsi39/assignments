import React,{Component} from 'react'
import './style.css'
class Grid extends Component{
    constructor(props){
        super(props);
        this.count=0; 
        this.state=({classes:this.props.className,click:false})  
    }
    componentDidMount() {
        setTimeout(
           () => this.setState( ({click:true, classes:"block" })),
           3*1000,
       );
   }
  componentWillReceiveProps(nextProps) {
            if(nextProps.className!=this.props.classes){
                this.setState({click:false,classes:nextProps.className})   
            }
            if(nextProps.className){
                setTimeout(
                    () => this.setState( ({click:true,classes:"block", })),
                    3*1000,
                );
            }
        } 
    handleChange=(e)=>{
        console.log(this.state.click)
        if(this.state.click===true){
        var b=this.props.value
        console.log(this.props.value,this.props.random)
        if(this.props.random.indexOf(Number(b))!==-1){
            this.props.won()
        this.setState({classes:"clicked"})     
            }
        else{
            this.setState({classes:"wclicked"})
              this.props.los()
            }          
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