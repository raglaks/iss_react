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

            console.log(res.data);

            this.setState({

                coords: res.data.iss_position

            });

        });

    }

    componentDidUpdate() {

        console.log("COMPONENT UPDATED:", this.state);

    }

    render() {

        return(

            <Container textAlign='center'>

                <br></br>
            
                <Top coords={this.state.coords}/>

                <br></br>

                <Body coords={this.state.coords}/>
                
            </Container>

        )

    }

}

export default Main;