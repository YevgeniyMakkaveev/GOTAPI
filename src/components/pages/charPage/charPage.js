import React, {Component} from 'react'
import RowBlock from '../../rowBlock';
import ItemList from '../../itemList';
import ItemDetails, {Field} from '../../details';
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
    const itemList = (<ItemList onItemSelected={this.onItemSelected} getData={this.gotService.getAllChar} renderItem={({name, gender})=>`${name} (${gender})`}/> )
    const charDetails =(<ItemDetails selectedId={this.state.selectedId} getInfo ={this.gotService.getChar}>
        <Field  field="gender" label="Gender"/>
        <Field  field="born" label="Born"/>
     </ItemDetails>)
  return(

    <RowBlock left={itemList} right={charDetails} />
  )
 
}
} 