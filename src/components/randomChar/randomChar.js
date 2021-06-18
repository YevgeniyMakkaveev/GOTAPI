import React, {Component} from 'react';
import './randomChar.css';
import gotService from '../services/gotService';
import Spinner from '../spin';
import ErrorMsg from '../errorMsg';
//34
export default class RandomChar extends Component {

    constructor(){
        super();
        this.updateChar();
    }

    gotService = new gotService()
    state={
char: {},
loading: true,
error: false
    }

    onCharLoad =(char)=>{
        this.setState({
            char,
            loading: false
        })
    }

    onError =(err)=>{
        console.log(err)
        this.setState({
            error: true,
            loading: false
        })
    }

    updateChar(){
    let id = Math.floor(Math.random()*155+15)
    this.gotService.getChar(id)
    .then(this.onCharLoad).catch(this.onError)
}

    render() {
        const {
            char, loading, error
        } = this.state;
        
        const errorMsg = error? <ErrorMsg/>:null
        const spinner= loading? <Spinner/>: null
        const content = !(loading||error)? <View char={char}/> : null
       
        
        return (
            <div className="random-block rounded">
                {errorMsg}
                {spinner}
                {content}
            </div>
        );
    }
}

const View = ({char}) =>{
    const {
        name,
        gender,
        born,
        died,
        culture,
        tvSeries
    } = char
    return(
        <div>
         <h4>{name}</h4>
         <ul className="list-group list-group-flush">
         <li className="list-group-item d-flex justify-content-between">
         <span className="term">Gender </span>
          <span>{gender}</span>
         </li>
         <li className="list-group-item d-flex justify-content-between">
         <span className="term">Born </span>
         <span>{born}</span>
            </li>
          <li className="list-group-item d-flex justify-content-between">
         <span className="term">Died </span>
          <span>{died}</span>
          </li>
          <li className="list-group-item d-flex justify-content-between">
            <span className="term">Culture </span>
             <span>{culture}</span>
                </li>
             <li className="list-group-item d-flex justify-content-between">
            <span className="term">Was in </span>
                <span> {tvSeries} </span>
                </li>
                </ul>
    </div>
    )
}