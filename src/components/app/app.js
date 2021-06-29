import React, { Component } from 'react';
import { Col, Row, Container } from 'reactstrap';
import Header from '../header';
import RandomChar from '../randomChar';
import CharPage from '../charPage/charPage';
import './app.css'
import ErrorMsg from '../errorMsg';
import ItemList from '../itemList';
import CharDetails,{field} from '../charDetails';
import gotService from '../services/gotService';


export default class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            showRandom: true,
            error: false

        }


        this.toggleRandomChar = this.toggleRandomChar.bind(this)
    }
    gotService=new gotService()
    componentDidCatch() {
        console.log('error')
        this.setState({ error: true })
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
            <>

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
                    <CharPage />
                    <Row>
                        <Col md='6'>
                            <ItemList onItemSelected={this.onItemSelected}  getData={this.gotService.getAllBooks} renderItem={(item)=>`${item.name}`} />
                        </Col>
                        <Col md='6'>
                            <CharDetails charId={this.state.selectedChar} />
                        </Col>
                    </Row>
                    <Row>
                        <Col md='6'>
                            <ItemList onItemSelected={this.onItemSelected}  getData={this.gotService.getAllHouses} renderItem={(item)=>`${item.name}`}/>
                        </Col>
                        <Col md='6'>
                            <CharDetails charId={this.state.selectedChar} />
                        </Col>
                    </Row>
                </Container>
            </>
        );
    };
}

