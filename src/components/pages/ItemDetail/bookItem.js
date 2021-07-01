import React, {Component} from 'react'
import gotService from '../../services/gotService';
import ItemDetails, {Field} from '../../details';

export default class BooksItem extends Component {
gotService = new gotService()


render(){
 return(
  <ItemDetails selectedId={this.props.bookId} getInfo ={this.gotService.getBook}>
        <Field  field="numberOfPages" label="Number of Pages"/>
        <Field  field="isbn" label="isbn"/>
        <Field  field="publisher" label="Publisher"/>
        <Field  field="released" label="Released"/>
        
     </ItemDetails>
 )
}

}