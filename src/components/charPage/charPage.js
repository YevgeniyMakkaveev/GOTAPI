import React, {Component} from 'react'
import RowBlock from '../rowBlock';
import ItemList from '../itemList';
import CharDetails, {Field} from '../charDetails';
import ErrorMsg from '../errorMsg';
import gotService from '../services/gotService';



export default class CharPage extends Component{
 state={
  selectedId: null
  
 }
 gotService= new gotService()
 onItemSelected =(id)=>{
        this.setState({
            selectedId: id,
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
    const itemList = (<ItemList onItemSelected={this.onItemSelected} getData={this.gotService.getAllChar} renderItem={({name, gender})=>`${name} (${gender})`}/> )
    const charDetails =(<CharDetails selectedId={this.state.selectedId}>
        <Field  field="gender" label="Gender"/>
        <Field  field="born" label="Born"/>
     </CharDetails>)
  return(

    <RowBlock left={itemList} right={charDetails} />
  )
 
}
} 