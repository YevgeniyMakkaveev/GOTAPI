import React, { Component } from 'react';
import { Col, Row, Container } from 'reactstrap';
import Header from '../header';
import RandomChar from '../randomChar';
import CharPage from '../pages/charPage/charPage';
import './app.css'
import ErrorMsg from '../errorMsg';
import BookPage from '../pages/bookPage';
import HousePage from '../pages/housePage';
import BooksItem from '../pages/bookItem';
import { BrowserRouter as Router, Route } from 'react-router-dom';

//25 101
export default class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            showRandom: true,
            error: false

        }


        this.toggleRandomChar = this.toggleRandomChar.bind(this)
    }

    toggleRandomChar() {

        this.setState(({ showRandom }) => {
            const oldState = showRandom
            const newState = !oldState
            return { showRandom: newState }
        })
    }

    render() {

        const { showRandom } = this.state
        const showRanChar = showRandom ? <RandomChar/> : null
        const buttonText = showRandom ? "Hide" : "Show"
        if (this.state.error) { return <ErrorMsg /> }

        return (
            <Router>
                <div className="app">
                    <Container>
                        <Header />
                    </Container>
                    <Container>
                        <Row>
                            <Col lg={{ size: 5, offset: 0 }}>
                                {showRanChar}
                                <button id='randomCharBtn' variant="primary" onClick={this.toggleRandomChar}>{buttonText}</button>
                            </Col>
                        </Row>
                        <Route path='/' exact component={()=><h1 className="wellcome">Wellcome to GOT DB </h1>} />
                        <Route path='/characters' component={CharPage}/>

                        <Route path='/houses' component={HousePage}/>
                        <Route path='/books' exact component={BookPage} />
                        <Route path='/books/:id' render={
                            ({match})=>{
                                const{id}=match.params
                                return <BooksItem bookId={id}/>}
                        }/>
                    </Container>
                </div>
            </Router>
        );
    };
}

