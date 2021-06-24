import React, {Component} from 'react';
import './charDetails.css';
import gotService from '../services/gotService';

const Field = ({item, field, label})=>{
return (
    <li className="list-group-item d-flex justify-content-between">
        <span className="term">{label}</span>
        <span>{item[field]}</span>
    </li>
)}
export {Field}
export default class CharDetails extends Component {

    gotService = new gotService()
    state = {
        item: null
        }

         
    componentDidMount(){
        this.updateItem();
    }
    componentDidUpdate(prevProp){
        if(this.props.selectedId!== prevProp.selectedId){
            this.updateItem()
        }
    }

    updateItem(){
       const {selectedId}=this.props 
       if(!selectedId){return}
           this.gotService.getChar(selectedId).then((item)=>{this.setState({item})}
           )}

    render() {
        if(!this.state.item){
            return <span className="selector" > Choose character</span>
        }
        const {item}=this.state
        const{name} = item
        
        return (
            <div className="char-details rounded">
                <h4>{name}</h4>
                <ul className="list-group list-group-flush">
                    {React.Children.map(this.props.children, (child)=>{return React.cloneElement(child, {item})})}
                </ul>
            </div>
        );
    }
}