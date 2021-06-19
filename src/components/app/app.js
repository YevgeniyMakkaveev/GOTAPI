import React, {Component} from 'react';
import {Col, Row, Container} from 'reactstrap';
import Header from '../header';
import RandomChar from '../randomChar';
import CharPage from '../charPage/charPage';
import './app.css'
import ErrorMsg from '../errorMsg';


export default class App extends Component  {
    constructor(props){
        super(props)
        this.state ={
            showRandom: true,
             error: false
            
        }

        
      this.toggleRandomChar = this.toggleRandomChar.bind(this)
    }
componentDidCatch(){
           console.log('error')
           this.setState({error: true}) 
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
        if(this.state.error){return <ErrorMsg/>}

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
                <CharPage/>
            </Container>
        </>
    );
};
}

