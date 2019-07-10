import React,{Component} from 'react'
import Displaycategory from './Displaycategory'
import Displaycontent from './Displaycontent'

class Displaytable extends Component{
    constructor(props){
        super(props);

    }
    createRows=()=>{
        const rows=[]
       var categorylist=[]
       var visited
       var i
       var l=this.props.products.length
       for(i=0;i<l;i++) {
        var checked=0
          var product=this.props.products[i]
         
           if(this.props.checked===true &&product.stocked===false){
            checked=1
           }
           if(product.name.indexOf(this.props.searchtext)===-1){
            checked=1
           }
           if(checked===0 && visited!==product.category){
            console.log(product)
              rows.push (<Displaycategory category={product.category} />)
           }
           if(checked===0){
               rows.push(<Displaycontent product={product}/>)
           
           }
           visited=product.category
            
       };

       return rows
    }
    render(){
        return(
            <>
            <table>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                 </tr>
                 <td>{this.createRows()}</td>
                </table>
            </>
        );
    }

}
export default Displaytable;