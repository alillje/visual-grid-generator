import * as React from "react";
import "./grid-displayer.css";
import { gridlify } from "/node_modules/gridlify/lib/index.js";
import { useState, useEffect } from "react"

import { useSelector, useDispatch } from 'react-redux'

/**
 * GridBox Component.
 * Displays a grid box.
 *
 * @returns {React.ReactElement} - GridBox Component.
 */
const GridDisplayer = () => {
  const numberOfRows = useSelector((state) => state.rows.numberOfRows)
  const numberOfColumns = useSelector((state) => state.rows.numberOfColumns)
  const rowGap = useSelector((state) => state.rows.rowGap)
  const columnGap = useSelector((state) => state.rows.columnGap)


  useEffect(() => {
    console.log(numberOfRows)
    console.log(numberOfColumns)
    console.log(rowGap)
    console.log(columnGap)
  }, [numberOfRows, numberOfColumns, rowGap, columnGap])

    return (
      <div className="gridDisplayerContainer">

      </div>
    );
  }


export default GridDisplayer;
