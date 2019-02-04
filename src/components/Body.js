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
        
        this.state.current.setView([parseInt(this.state.coords.longitude), parseInt(this.state.coords.latitude)], 6);

        this.state.current.removeControl(this.state.current.zoomControl);

        window.L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'}, ).addTo(this.state.current);

        window.L.marker([parseInt(this.state.coords.longitude), parseInt(this.state.coords.latitude)]).addTo(this.state.current);

    }

    render() {

        return (

            <div id="mapid"></div>
    
        )

    }
    

}

export default Body;