import React, {Component} from 'react'
import RowBlock from '../../rowBlock';
import ItemList from '../../itemList';
import ItemDetails, {Field} from '../../details';
import ErrorMsg from '../../errorMsg';
import gotService from '../../services/gotService';



export default class BookPage extends Component {
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
    const itemList = (<ItemList onItemSelected={this.onItemSelected} getData={this.gotService.getAllBooks} renderItem={({name})=>`${name}`}/> )
    const ItemDetail =(<ItemDetails selectedId={this.state.selectedId} getInfo ={this.gotService.getBook}>
        <Field  field="numberOfPages" label="Number of Pages"/>
        <Field  field="isbn" label="isbn"/>
        <Field  field="publisher" label="Publisher"/>
        <Field  field="released" label="Released"/>
        
     </ItemDetails>)
  return(

    <RowBlock left={itemList} right={ItemDetail} />
  )
 
}
} 