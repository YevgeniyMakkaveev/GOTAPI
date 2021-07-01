import React, {Component} from 'react'
import gotService from '../../services/gotService';
import ItemDetails, {Field} from '../../details';

export default class CharItem extends Component {
 gotService = new gotService()
 render(){
  return(
   <ItemDetails selectedId={this.props.charId} getInfo ={this.gotService.getChar}>
        <Field  field="gender" label="Gender"/>
        <Field  field="born" label="Born"/>
        <Field  field="char.culture" label="Culture"/>
     </ItemDetails>
  )
 }

}