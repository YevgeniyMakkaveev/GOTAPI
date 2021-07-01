import React, {Component} from 'react'
import ItemList from '../../itemList';
import ErrorMsg from '../../errorMsg';
import gotService from '../../services/gotService';



export default class CharPage extends Component{
 state={
  selectedId: null
  
 }
 gotService= new gotService()
 onItemSelected =(id)=>{
        this.setState({
            selectedId: id+41,
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

    <ItemList onItemSelected={(selectedId)=>this.props.history.push(`${selectedId+41}`)} getData={this.gotService.getAllChar} renderItem={({name, gender})=>`${name} (${gender})`}/> 
  )
 
}
} 