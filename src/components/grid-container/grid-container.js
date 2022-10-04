import * as React from "react";
import { useState, useEffect } from "react"
import { gridlify } from '/node_modules/gridlify/lib/index.js'
import './grid-container.css'
import GridDisplayer from "../grid-displayer/grid-displayer";

import store from "../../redux/store";

/**
 * GridBox Component.
 * Displays a grid box.
 *
 * @returns {React.ReactElement} - GridBox Component.
 */
 class GridContainer extends React.Component {

    render() {
        return (
            <div className="gridContainerContainer">
                <GridDisplayer props={store.getState()} />
            </div>
          )
    }
  }

export default GridContainer;

