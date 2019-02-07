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

            let uDate = new Date(unix * 1000);

            let day = uDate.getDate();

            let month = uDate.getMonth() + 1;
            
            let year = uDate.getFullYear();

            let hours = uDate.getHours();

            let mins = uDate.getMinutes();

            let secs = uDate.getSeconds();

            let sDate = `${day}/${month}/${year}`;

            let sTime = `${hours}:${mins}:${secs}`;

            this.setState({

                rend: {date: sDate, time: sTime}

            });

            console.log(this.state);

        }).catch(err => {

            console.log("ERROR", err);

        });

    }

    getCoords(place) {

        return axios.get(`https://api.mapbox.com/geocoding/v5/mapbox.places/${place}.json?access_token=pk.eyJ1IjoicmFnbGFrcyIsImEiOiJjanJzYWR5c2gyODdiNDltdXJpMTdpaXJiIn0.V3oelv81YX6BtLqbeO1SZg`).then(res => {

            console.log("NO EDITS PLACE", res.data);

            let coords = res.data.features[0].center;

            console.log("RESULT FROM MAPBOX", coords);

            this.getDay(coords[1], coords[0]);

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

        let City = (props) => {

            let cityJ;

            if (props.disp) {

                cityJ = <h1 style={{color: "red", textTransform: "uppercase"}}>THE ISS WILL FLY OVER {props.city} ON: {props.disp.date}, AT {props.disp.time}</h1>;

            } else {

                cityJ = <span></span>;

            }

            return (cityJ);

        }

        return(

            <div>
                <Input type="text"placeholder='NAME YOUR CITY' onChange={this.handleChange}>
                    <input />
                    <Button type='submit' onClick={this.subClick}>Search</Button>
                </Input>

                <div>
                    <City city= {this.state.search} disp={this.state.rend}/>
                </div>     
            </div>
            
        )

    }

}

export default Foot;