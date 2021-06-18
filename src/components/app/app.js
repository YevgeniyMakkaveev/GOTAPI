import React, {Component} from 'react';
import {Col, Row, Container} from 'reactstrap';
import Header from '../header';
import RandomChar from '../randomChar';
import ItemList from '../itemList';
import CharDetails from '../charDetails';
import './app.css'


export default class App extends Component  {
    constructor(props){
        super(props)
        this.state ={
            showRandom: true
            
        }
        
      this.toggleRandomChar = this.toggleRandomChar.bind(this)
    }
    toggleRandomChar(){
        this.setState(({showRandom})=>{
            const oldState=showRandom
            const newState =!oldState
            return {showRandom: newState}
        })
    }

    render(){
        const {showRandom} = this.state
        const showRanChar=showRandom? <RandomChar/>:null
        const buttonText = showRandom ? "Hide" : "Show"

    return (
        <> 
            <Container>
                <Header />
            </Container>
            <Container>
                <Row>
                    <Col lg={{size: 5, offset: 0}}>
                       {showRanChar}
                         <button id='randomCharBtn'  variant="primary" onClick={this.toggleRandomChar}>{buttonText}</button>
                    </Col>
                </Row>
                <Row>
                    <Col md='6'>
                        <ItemList />
                    </Col>
                    <Col md='6'>
                        <CharDetails />
                    </Col>
                </Row>
            </Container>
        </>
    );
};
}

