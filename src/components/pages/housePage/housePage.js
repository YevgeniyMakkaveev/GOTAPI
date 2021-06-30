import React, {Component} from 'react'
import RowBlock from '../../rowBlock';
import ItemList from '../../itemList';
import ItemDetails, {Field} from '../../details';
import ErrorMsg from '../../errorMsg';
import gotService from '../../services/gotService';



export default class HousePage extends Component {
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
    const itemList = (<ItemList onItemSelected={this.onItemSelected} getData={this.gotService.getAllHouses} renderItem={({name})=>`${name}`}/> )
    const ItemDetail =(<ItemDetails selectedId={this.state.selectedId} getInfo ={this.gotService.getHouse}>
        <Field  field="region" label="Region"/>
        <Field  field="words" label="words"/>
        <Field  field="overlord" label="overlord"/>
        <Field  field="ancestralWeapons" label="ancestralWeapons"/>
     </ItemDetails>)
  return(

    <RowBlock left={itemList} right={ItemDetail} />
  )
 
}
} 