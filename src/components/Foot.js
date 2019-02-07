import React, {Component} from 'react';
import axios from 'axios';
import { Input, Button } from 'semantic-ui-react'

class Foot extends Component{

    constructor(props) {

        super(props);

        this.state = {};

    }

    getDay = (lat, long) => {

        return axios.get(`https://limitless-reaches-72958.herokuapp.com/http://api.open-notify.org/iss-pass.json?lat=${lat}&lon=${long}`).then(res => {

            let unix = res.data.response[0].risetime;
            console.log("THE ISS WILL BE HERE BRO", unix);

        }).catch(err => {

            console.log("ERROR", err);

        });

        // Create a new JavaScript Date object based on the timestamp
        // multiplied by 1000 so that the argument is in milliseconds, not seconds.
        //let date = new Date(unix_timestamp*1000);
        // Hours part from the timestamp
        //var hours = date.getHours();
        // Minutes part from the timestamp
        //var minutes = "0" + date.getMinutes();
        // Seconds part from the timestamp
        //var seconds = "0" + date.getSeconds();

        // Will display time in 10:30:23 format
        //var formattedTime = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);

    }

    getCoords(place) {

        return axios.get(`https://api.mapbox.com/geocoding/v5/mapbox.places/${place}.json?access_token=pk.eyJ1IjoicmFnbGFrcyIsImEiOiJjanJzYWR5c2gyODdiNDltdXJpMTdpaXJiIn0.V3oelv81YX6BtLqbeO1SZg`).then(res => {

            let coords = res.data.features[0].center;

            console.log("RESULT FROM MAPBOX", coords);

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