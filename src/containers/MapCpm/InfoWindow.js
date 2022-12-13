import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../store/actions";
import { withRouter } from "react-router";
const { compose, withProps, withStateHandlers } = require("recompose");

// import { FaAnchor } from "react-icons"

const {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
  InfoWindow,
  TrafficLayer,
  Polyline,
  Polygon,
  StreetViewPanorama,
  OverlayView,
} = require("react-google-maps");

// const { MarkerWithLabel } = require("react-google-maps/lib/components/");

const getPixelPositionOffset = (width, height) => ({
  x: -(width / 2),
  y: -(height / 2),
});

const pathCoordinates1 = [
  { lat: 16.065875475908143, lng: 108.19113976479787 },
  { lat: 16.065875475908143, lng: 108.19863920455788 },
  // { lat: 16.06563919567793, lng: 108.20245039525525 },
  // { lat: 16.063276377939516, lng: 108.20380275324351 },
];
const pathCoordinates2 = [
  // { lat: 16.065875475908143, lng: 108.19113976479787 },
  // { lat: 16.065875475908143, lng: 108.19863920455788 },
  { lat: 16.06563919567793, lng: 108.20245039525525 },
  { lat: 16.063276377939516, lng: 108.20380275324351 },
];
const MapWithAMakredInfoWindow = compose(
  withStateHandlers(
    () => ({
      isOpen: false,
    }),
    {
      onToggleOpen:
        ({ isOpen }) =>
        () => ({
          isOpen: !isOpen,
        }),
    }
  ),
  withScriptjs,
  withGoogleMap
)((props) => (
  <GoogleMap
    defaultZoom={8}
    defaultCenter={{ lat: 16.065875475908143, lng: 108.19113976479787 }}
  >
    <Marker
      position={{ lat: 16.065875475908143, lng: 108.19113976479784 }}
      onClick={props.onToggleOpen}
    >
      {props.isOpen && (
        <InfoWindow onCloseClick={props.onToggleOpen}>
          <div>20/10/2022</div>
        </InfoWindow>
      )}
    </Marker>
    <Polyline
      path={pathCoordinates1}
      geodesic={true}
      onRightClick={props.onToggleOpen}
      options={{
        strokeColor: "#ff2527",
        strokeOpacity: 0.75,
        strokeWeight: 10,
        icons: [
          {
            icon: "hello xxxx",
            offset: "0",
            repeat: "20px",
          },
        ],
      }}
    >
      {props.isOpen && (
        <InfoWindow onCloseClick={props.onToggleOpen}>
          <div>2022/20/10</div>
        </InfoWindow>
      )}
    </Polyline>
    <Polyline
      path={pathCoordinates2}
      geodesic={true}
      options={{
        strokeColor: "blue",
        strokeOpacity: 0.75,
        strokeWeight: 10,
        icons: [
          {
            // icon: lineSymbol,
            offset: "0",
            repeat: "20px",
          },
        ],
      }}
    />
  </GoogleMap>
));

//     const MapWithAMakredInfoWindow = compose(
//         withStateHandlers(() => ({
//         isOpen: false,
//     }), {
//         onToggleOpen: ({ isOpen }) => () => ({
//         isOpen: !isOpen,
//         })
//     }),
//     withScriptjs,
//     withGoogleMap
//   )(props =>
//     <GoogleMap
//       defaultZoom={8}
//       defaultCenter={{ lat: 41.9, lng: -87.624 }}
//     >
//       <TrafficLayer autoUpdate />
//     </GoogleMap>
//   );

class DemoApp extends Component {
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
    return (
      <MapWithAMakredInfoWindow
        googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyB8I5tnG7aArgmOV7ziwvkj3BdWb6NxnVE&v=3.exp&libraries=geometry,drawing,places"
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={
          <div style={{ height: `1000px`, marginTop: "100px" }} />
        }
        mapElement={<div style={{ height: `100%` }} />}
      />
    );
  }
}
const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(DemoApp)
);

{
  /* <Marker
      position={{ lat: 10.773201, lng: 106.700147 }}
      onClick={props.onToggleOpen}
    >
      {props.isOpen && <InfoWindow onCloseClick={props.onToggleOpen}>
        <FaAnchor />
      </InfoWindow>}
</Marker> */
}
