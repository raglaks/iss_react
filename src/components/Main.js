import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';
import Top from './Top';
import Body from './Body';
import Foot from './Foot';
import axios from 'axios';

//pk.eyJ1IjoicmFnbGFrcyIsImEiOiJjanJzYWR5c2gyODdiNDltdXJpMTdpaXJiIn0.V3oelv81YX6BtLqbeO1SZg

class Main extends Component{

    constructor(props) {

        super(props);

        this.state = {};

    }

    componentDidMount() {

        this.interval = setInterval(()=>{this.getIss()}, 30000);

        this.getCoords("Mexico");

    }

    getCoords(place) {

        return axios.get(`https://api.mapbox.com/geocoding/v5/mapbox.places/${place}.json?access_token=pk.eyJ1IjoicmFnbGFrcyIsImEiOiJjanJzYWR5c2gyODdiNDltdXJpMTdpaXJiIn0.V3oelv81YX6BtLqbeO1SZg`).then(res => {

            console.log("RESULT FROM MAPBOX", res.data);

        });

    }

    getIss() {

        return axios.get("http://api.open-notify.org/iss-now.json").then( res =>{

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


                
            </Container>

        )

    }

}

export default Main;