import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';
import Top from './Top';
import Body from './Body';
import Foot from './Foot';
import axios from 'axios';

class Main extends Component{

    constructor(props) {

        super(props);

        this.state = {};

    }

    componentDidMount() {

        this.interval = setInterval(()=>{this.getIss()}, 30000);

    }
    //

    getIss() {

        return axios.get("https://limitless-reaches-72958.herokuapp.com/http://api.open-notify.org/iss-now.json").then( res =>{

            console.log(res.data);

            this.setState({

                coords: res.data.iss_position

            });

        });

    }

    componentWillUnmount() {

        clearInterval(this.interval);

    }

    componentDidUpdate() {

        console.log("COMPONENT UPDATED:", this.state);

    }

    render() {

        return(

            <Container textAlign='center'>
            
                <Top coords={this.state.coords}/>

                <Body coords={this.state.coords}/>

                <br></br>

                <Foot />
                
            </Container>

        )

    }

}

export default Main;