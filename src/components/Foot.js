import React, {Component} from 'react';
import axios from 'axios';
import { Input, Button } from 'semantic-ui-react'

class Foot extends Component{

    constructor(props) {

        super(props);

        this.state = {};

    }

    getDay = (lat, long) => {

        return axios.get(`http://api.open-notify.org/iss-pass.json?lat=${lat}&lon=${long}`).then(res => {

            console.log("THE ISS WILL BE HERE BRO", res);

        });

    }

    getCoords(place) {

        return axios.get(`https://api.mapbox.com/geocoding/v5/mapbox.places/${place}.json?access_token=pk.eyJ1IjoicmFnbGFrcyIsImEiOiJjanJzYWR5c2gyODdiNDltdXJpMTdpaXJiIn0.V3oelv81YX6BtLqbeO1SZg`).then(res => {

            console.log("RESULT FROM MAPBOX", res.data.features[0].center);

            let coords = res.data.features[0].center;

            this.getDay(coords[0], coords[1]);

        });

    }

    handleChange = event => {

        event.preventDefault();

        console.log(event.target.value);

        let query = event.target.value;

        this.setState({

            search: query

        });

    }

    subClick = event => {

        event.preventDefault();

        console.log("CLICK", event.target.value);

        let query = this.state.search;

        this.getCoords(query);

    }

    render() {

        return(

            <div>
                <Input type="text"placeholder='NAME YOUR CITY' onChange={this.handleChange}>
                    <input />
                    <Button type='submit' onClick={this.subClick}>Search</Button>
                </Input>                
            </div>
        )

    }

}

export default Foot;