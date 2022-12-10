import React, { Component } from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import * as actions from "../../store/actions";
import "./HomePage.scss";
import { withRouter } from "react-router";
import Map4dMap from "./Map4dMap";

const onMapReady = (map, id) => {
  console.log("1");
  console.log(`Map with id ${id} is created`);
  //TODO: Map interaction from here
  let centerMap = map.getCamera().getTarget();
  let marker = new window.map4d.Marker({
    position: centerMap,
    anchor: [0.5, 1.0],
    label: new window.map4d.MarkerLabel({
      text: "Demo Marker",
      color: "FF00FF",
      fontSize: 12,
    }),
  });
  // Thêm marker vào bản đồ
  marker.setMap(map);
};
class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    let { isLoggedIn } = this.props;
    return (
      <>
        {isLoggedIn === true && (
          <Map4dMap
            onMapReady={onMapReady}
            id="mainId"
            key="mainId"
            options={{
              center: { lat: 16.0721634, lng: 108.226905 },
              zoom: 15,
              controls: true,
            }}
            accessKey="b79408e4def2b32c7549d97219e7ac68"
            version="2.4"
          />
        )}
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.user.isLoggedIn,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(HomePage)
);
