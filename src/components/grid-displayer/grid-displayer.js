import * as React from "react";
import "./grid-displayer.css";
import { RowCalculator } from "../../classes/row-calculator.js"
import { ColumnCalculator } from "../../classes/column-calculator.js"

import { gridlify } from "/node_modules/gridlify/lib/index.js";
import { useState, useEffect } from "react"

import { useSelector, useDispatch } from 'react-redux'
import { grid } from "@mui/system";

/**
 * GridBox Component.
 * Displays a grid box.
 *
 * @returns {React.ReactElement} - GridBox Component.
 */
const GridDisplayer = () => {
  const numberOfRows = useSelector((state) => state.rows.numberOfRows)
  const numberOfColumns = useSelector((state) => state.columns.numberOfColumns)
  const rowGap = useSelector((state) => state.rows.rowGap)
  const columnGap = useSelector((state) => state.columns.columnGap)
  // const calculateRows = () => {
  //   let rows = undefined
  //   if (numberOfRows > 0) {
  //     rows = []
  //   for (let i = 0; i < numberOfRows; i++) {
  //     rows.push('1fr')
  //   }
  // }
  //   return rows;
  // }

  // const calculateColumns = () => {
  //   let columns = undefined
  //   if (numberOfColumns > 0) {
  //     columns = []
  //   for (let i = 0; i < numberOfColumns; i++) {
  //     columns.push('1fr')
  //   }
  // }
  //   return columns;
  // }

  useEffect(() => {
    const rowCalculator = new RowCalculator()
    const columnCalculator = new ColumnCalculator()

    rowCalculator.setRows(numberOfRows)
    columnCalculator.setColumns(numberOfColumns)

    console.log(columnCalculator.getColumns())
    const grid = {
      rows: rowCalculator.getRows(),
      columns: columnCalculator.getColumns(),
      rowGap: rowGap,
      columnGap: columnGap
    }
    gridlify.setGrid(grid, '.gridDisplayerContainer')
  }, [numberOfRows, numberOfColumns, rowGap, columnGap])

    return (
      <div className="gridDisplayerContainer">

      </div>
    );
  }


export default GridDisplayer;
