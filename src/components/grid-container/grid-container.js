import * as React from "react";
import { useState, useEffect } from "react";
import { gridlify } from "/node_modules/gridlify/lib/index.js";
import "./grid-container.css";
import GridDisplayer from "../grid-displayer/grid-displayer";
import GridMenu from "../grid-menu/grid-menu";

import store from "../../redux/store";

/**
 * GridBox Component.
 * Displays a grid box.
 *
 * @returns {React.ReactElement} - GridBox Component.
 */
class GridContainer extends React.Component {
  constructor(props) {
    super(props);
    this.getData = this.getData.bind(this);
    this.state = {
      gridData: undefined
    }
  }

  getData(val) {
    // do not forget to bind getData in constructor
    console.log(val);
  }

  componentDidUpdate() {
    this.setState({
      gridData: this.getData
    });
  }

  render() {
    return (
      <div className="gridContainerContainer">
        <GridDisplayer grid={this.gridData} />
        <div className="gridContainerSideMenu">
          <GridMenu sendData={this.getData} />
        </div>
      </div>
    );
  }
}

export default GridContainer;
