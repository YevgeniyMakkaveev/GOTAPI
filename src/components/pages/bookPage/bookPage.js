import React, {Component} from 'react'
import ItemList from '../../itemList';
import ErrorMsg from '../../errorMsg';
import gotService from '../../services/gotService';
import { withRouter } from 'react-router';



 class BookPage extends Component {
 state={
  selectedId: null
  
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

    <ItemList onItemSelected={(selectedId)=>this.props.history.push(`${selectedId+1}`)} getData={this.gotService.getAllBooks} renderItem={({name})=>`${name}`}/>
  )
 
}
} 

export default withRouter(BookPage)