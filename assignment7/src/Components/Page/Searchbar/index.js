import React,{Component} from 'react'
class Searchbar extends Component{
    constructor(props){
        super(props);

    }
    handleCheckbox=(e)=>{
        this.props.updateCheck(e.target.checked)

    }
    handleSearchbar=(e)=>{
        this.props.updateSearch(e.target.value)
        
    }
    render(){
        return(
            <>
            <input type="text" placeholder="Search" value={this.props.searchtext} onChange={this.handleSearchbar }/>
            <br/>
            <span>
            <input type="checkbox" checked={this.props.checked} onClick={this.handleCheckbox}/>
            Only show products in stock
            </span>

            </>
        );
    }

}
export default Searchbar;