import React, {Component} from 'react'
import ItemList from '../../itemList';
import ErrorMsg from '../../errorMsg';
import gotService from '../../services/gotService';
import { withRouter } from 'react-router';



 class HousePage extends Component {
 state={
  selectedId: null,
  error: false
  
 }
 gotService= new gotService()
 onItemSelected =(id)=>{
        this.setState({
            selectedId: id+1,
            error: false
        })
    }
    componentDidCatch() {
     console.log('error')
     this.setState({
      error: true
     })
    }
  

 render(){
  if(this.state.error){return <ErrorMsg/>}
    
  return(

    <ItemList onItemSelected={(selectedId)=>this.props.history.push(`${selectedId+1}`)} getData={this.gotService.getAllHouses} renderItem={({name})=>`${name}`}/>
  )
 
}
} 
export default withRouter(HousePage)