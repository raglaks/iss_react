import React, { Component } from 'react';

class Body extends Component {

    constructor(props) {

        super(props);

        this.state = {};

    }

    componentDidMount() {

        console.log("BODY MOUNT", this.props.coords);

        //window.L.map('mapid').setView([0, 0], 13);

    }

    componentDidUpdate() {

        console.log("BODY UPDATE", this.props.coords);

        let current = window.L.map('mapid').setView([parseInt(this.state.coords.longitude), parseInt(this.state.coords.latitude)], 5);

        current.removeControl(current.zoomControl);

        window.L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'}, ).addTo(current);

    }

    componentWillReceiveProps(nextProps) {
        console.log("NEW PROPS BRO", nextProps);
    
        this.setState({
    
          coords: nextProps.coords
    
        });
    
      }

    

    render() {

        return (

            <div id="mapid"></div>
    
        )

        

    }
    

}

export default Body;