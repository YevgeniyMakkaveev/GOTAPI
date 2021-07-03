import React, {Component} from 'react';
import './itemList.css';
import gotService from '../services/gotService';
import Spinner from 'reactstrap/lib/Spinner';


class ItemList extends Component {
gotService = new gotService();



renderItems(arr) {
    return arr.map((item,i) =>{
        const {id} = item;
        const label = this.props.renderItem(item)
        return(<li key ={id}
        className="list-group-item"
        onClick={()=>this.props.onItemSelected(i)}
        >
            {label}
            
            </li> 

        ) 
        
    })
}

    render() {
        const {data}=this.props;
        const items=this.renderItems(data)
        return (
            <ul className="item-list list-group">
                {items}
            </ul>
        );
    }
}

ItemList.defaultProps = {
    onItemSelected: ()=>{}
}
const withData = (View)=>{
    return class extends Component{
        state ={
    data: null
}
componentDidMount(){
const {getData} = this.props
getData().then((data)=>{this.setState({data})}
)}

render(){
    const {data}=this.state
    if(!data){return <Spinner/>}

return <View {...this.props} data={data} />
}

    

}
}

export default withData(ItemList)

