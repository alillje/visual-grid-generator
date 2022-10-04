import * as React from "react";
import { useState, useEffect } from "react"
import { gridlify } from '/node_modules/gridlify/lib/index.js'
import './grid-displayer.css'

/**
 * GridBox Component.
 * Displays a grid box.
 *
 * @returns {React.ReactElement} - GridBox Component.
 */
 class GridDisplayer extends React.Component {

  constructor(props) {
    super(props)
    this.gridRows = props.gridRows || ['200px', '200px', '200px', '200px', '200px']
    this.gridColumns = props.gridColumns|| ['1fr', '1fr', '1fr', '1fr', '1fr']
    this.gridRowGap = props.gridRowGap || '0px'
    this.gridColumnGap = props.gridColumnGap || '0px'
    this.grid = { gridRows: this.gridRows, gridColumns: this.gridColumns, gridRowGap: this.gridRowGap, gridColumnGap: this.gridColumnGap }
  }

  // componentDidMount() {
  //   gridlify.setGrid(this.grid, '.gridDisplayerContainer')

  // }

  // componentDidUpdate() {
  //   gridlify.setGrid(this.grid, '.gridDisplayerContainer')
  // }

    render() {
        return (
            <div className="gridDisplayerContainer">
                
            </div>
          )
    }
  }

export default GridDisplayer;

