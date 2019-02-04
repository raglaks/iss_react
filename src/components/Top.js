import React, {Component} from 'react';

class Top extends Component{

    constructor(props) {

        super(props);

        this.state = {};

    }

    componentDidMount() {

        console.log("TOP MOUNT", this.props.coords);

    }

    componentDidUpdate() {

        console.log("TOP UPDATED", this.state);

    }

    componentWillReceiveProps(nextProps) {
        console.log("NEW PROPS BRO, TOP", nextProps);
    
        this.setState({
    
          coords: nextProps.coords
    
        });
    
    }

    render() {

        console.log("TOP RENDER", this.state);

        let long;

        let lat;

        if (this.state.coords) {

            long = `LONG: ${this.state.coords.longitude}`;

            lat = `LAT: ${this.state.coords.latitude}, `

        } else {

            long = " ";

            lat = " ";

        }

        return (

            <h1>{lat} {long}</h1>

        )

    }

}

export default Top;