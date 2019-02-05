import React, { Component } from 'react';

class Body extends Component {

    constructor(props) {

        super(props);

        this.state = {};

    }

    componentDidMount() {

        console.log("BODY MOUNT", this.props.coords);

        this.setState({

            current: window.L.map('mapid')

        });

    }

    componentDidUpdate() {

        console.log("BODY UPDATE", this.props.coords);

    }

    componentWillReceiveProps(nextProps) {
        console.log("NEW PROPS BRO", nextProps);
    
        this.setState({
    
          coords: nextProps.coords
    
        });

        if (this.state.coords) {

            this.mapRender();

        }
    
    }

    mapRender() {

        // let iss = window.L.icon({
        //     iconUrl: 'https://i2.wp.com/freepngimages.com/wp-content/uploads/2015/12/international-space-station-transparent-background.png?fit=624%2C248',
        //     iconSize: [40, 20],
        //     // iconAnchor: [22, 94],
        //     // popupAnchor: [-3, -76],
        //     // shadowUrl: 'my-icon-shadow.png',
        //     // shadowSize: [68, 95],
        //     // shadowAnchor: [22, 94]
        // });
        
        this.state.current.setView([parseInt(this.state.coords.latitude), parseInt(this.state.coords.longitude)], 3);

        this.state.current.scrollWheelZoom.disable();

        this.state.current.removeControl(this.state.current.zoomControl);

        window.L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'}, ).addTo(this.state.current);

        window.L.marker([parseInt(this.state.coords.latitude), parseInt(this.state.coords.longitude)]).addTo(this.state.current);

        

    }

    render() {

        return (

            <div id="mapid"></div>
    
        )

    }
    

}

export default Body;