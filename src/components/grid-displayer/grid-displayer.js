import * as React from "react";
import GridBox from "../grid-box/grid-box";
import { useState, useEffect } from "react";
import { gridlify } from "/node_modules/gridlify/lib/index.js";
import "./grid-displayer.css";

/**
 * GridBox Component.
 * Displays a grid box.
 *
 * @returns {React.ReactElement} - GridBox Component.
 */
class GridDisplayer extends React.Component {
  constructor(props) {
    super(props);
    this.gridRows = props.gridRows || [
      "200px",
      "200px",
      "200px",
      "200px",
      "200px",
    ];
    this.gridColumns = props.gridColumns || ["1fr", "1fr", "1fr", "1fr", "1fr"];
    this.gridRowGap = props.gridRowGap || "0px";
    this.gridColumnGap = props.gridColumnGap || "0px";
    this.grid = {
      gridRows: this.gridRows,
      gridColumns: this.gridColumns,
      gridRowGap: this.gridRowGap,
      gridColumnGap: this.gridColumnGap,
    };
    this.currentDivNumber = 0;
  }

  setNumberOfChildComponents() {
    this.numberOfChildComponents =
      this.gridRows.length * this.gridColumns.length;
  }

  incrementDivNumber () {
    this.currentDivNumber++;
  }

  getCurrentDivNumber () {
    this.incrementDivNumber();
    return this.currentDivNumber
  }
  componentDidMount() {
    // gridlify.setGrid(this.grid, '.gridDisplayerContainer')
    this.setNumberOfChildComponents();
    console.log(this.numberOfChildComponents);
  }


  render() {
    return (
      <div className="gridDisplayerContainer">
        {this.gridRows.map(() => {
          return this.gridColumns.map(() => {
            return <div key={this.getCurrentDivNumber} className={`div${this.getCurrentDivNumber()}`}></div>;
          });
        })}{" "}
      </div>
    );
  }
}

export default GridDisplayer;
