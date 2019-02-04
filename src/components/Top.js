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

            long = <h1>{this.state.coords.longitude}</h1>;

            lat = <h1>{this.state.coords.latitude}</h1>;

        } else {

            long = <h1></h1>;

            lat = <h1></h1>;

        }

        return (

            <span>{long}{lat}</span>

            //<h1>{this.props.coords.longitude}</h1>

            //{this.state.coords.longitude}, {this.state.coords.latitude}

        )

    }

}

export default Top;