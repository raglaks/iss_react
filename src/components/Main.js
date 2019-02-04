import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';
import Top from './Top';
import Body from './Body';

class Main extends Component{

    constructor(props) {

        super(props);

        this.state = {};

    }

    componentDidMount() {

        

    }

    render() {

        return(

            <Container textAlign='center'>

                <br></br>
            
                <Top />

                <br></br>

                <Body />
                
            </Container>

        )

    }

}

export default Main;