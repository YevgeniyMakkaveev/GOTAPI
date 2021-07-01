import React, {Component} from 'react'
import gotService from '../../services/gotService';
import ItemDetails, {Field} from '../../details';

export default class HouseItem extends Component {
 gotService = new gotService()
render(){
 return(
  <ItemDetails selectedId={this.props.houseId} getInfo ={this.gotService.getHouse}>
        <Field  field="region" label="Region"/>
        <Field  field="words" label="words"/>
        <Field  field="overlord" label="overlord"/>
        <Field  field="ancestralWeapons" label="ancestralWeapons"/>
     </ItemDetails>
 )
}
}