import React, { Component } from 'react';
const { compose } = require("recompose");
const {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
} = require("react-google-maps");
const { MarkerWithLabel } = require("react-google-maps/lib/components/addons/MarkerWithLabel");

const MapWithAMarkerWithLabel = compose(
  withScriptjs,
  withGoogleMap
)(props =>
  <GoogleMap
    defaultZoom={8}
    defaultCenter={{ lat: -34.397, lng: 150.644 }}
  >
    <MarkerWithLabel
      position={{ lat: -34.397, lng: 150.644 }}
      labelAnchor={new google.maps.Point(0, 0)}
      labelStyle={{backgroundColor: "yellow", fontSize: "32px", padding: "16px"}}
    >
      <div>Hello There!</div>
    </MarkerWithLabel>
  </GoogleMap>
);



class DemoApp extends React.PureComponent {
  componentWillMount() {
    this.setState({ markers: [] })
  }

  componentDidMount() {
    const url = [
      // Length issue
      `https://gist.githubusercontent.com`,
      `/farrrr/dfda7dd7fccfec5474d3`,
      `/raw/758852bbc1979f6c4522ab4e92d1c92cba8fb0dc/data.json`
    ].join("")

    fetch(url)
      .then(res => res.json())
      .then(data => {
        this.setState({ markers: data.photos });
      });
  }

  render() {
    return (
        <MapWithAMarkerWithLabel
            googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyB8I5tnG7aArgmOV7ziwvkj3BdWb6NxnVE&v=3.exp&libraries=geometry,drawing,places"
            loadingElement={<div style={{ height: `600px` }} />}
            containerElement={<div style={{ height: `600px` }} />}
            mapElement={<div style={{ height: `100%` }} />}
        />  
    )
  }
}

export default DemoApp
