import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';
import Top from './Top';
import Body from './Body';
import axios from 'axios';

class Main extends Component{

    constructor(props) {

        super(props);

        this.state = {};

    }

    componentDidMount() {

        return axios.get("http://api.open-notify.org/iss-now.json").then(res=>{

            console.log(res.data.iss_position);

        });

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