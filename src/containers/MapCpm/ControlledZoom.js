import React, { Component } from "react";
const { compose, withProps, withState, withHandlers } = require("recompose");
// const FaAnchor = require("react-icons/lib/fa/anchor");
// import { FaAnchor } from "react-icons/fa";
const {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
  InfoWindow,
} = require("react-google-maps");

const MapWithControlledZoom = compose(
  withProps({
    googleMapURL:
      "https://maps.googleapis.com/maps/api/js?key=AIzaSyB8I5tnG7aArgmOV7ziwvkj3BdWb6NxnVE&v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `400px` }} />,
    mapElement: <div style={{ height: `100%` }} />,
  }),
  withState("zoom", "onZoomChange", 8),
  withHandlers(() => {
    const refs = {
      map: undefined,
    };

    return {
      onMapMounted: () => (ref) => {
        refs.map = ref;
      },
      onZoomChanged:
        ({ onZoomChange }) =>
        () => {
          onZoomChange(refs.map.getZoom());
        },
    };
  }),
  withScriptjs,
  withGoogleMap
)((props) => (
  <GoogleMap
    defaultCenter={{ lat: -34.397, lng: 150.644 }}
    zoom={props.zoom}
    ref={props.onMapMounted}
    onZoomChanged={props.onZoomChanged}
  >
    <Marker
      position={{ lat: -34.397, lng: 150.644 }}
      onClick={props.onToggleOpen}
    >
      <InfoWindow onCloseClick={props.onToggleOpen}>
        <div>{/* <FaAnchor /> Controlled zoom: {props.zoom}s */}</div>
      </InfoWindow>
    </Marker>
  </GoogleMap>
));
class DemoApp extends React.PureComponent {
  componentWillMount() {
    this.setState({ markers: [] });
  }

  componentDidMount() {
    const url = [
      // Length issue
      `https://gist.githubusercontent.com`,
      `/farrrr/dfda7dd7fccfec5474d3`,
      `/raw/758852bbc1979f6c4522ab4e92d1c92cba8fb0dc/data.json`,
    ].join("");

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        this.setState({ markers: data.photos });
      });
  }

  render() {
    return <MapWithControlledZoom />;
  }
}

export default DemoApp;
