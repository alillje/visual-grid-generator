import * as React from 'react'
import './grid-displayer.css'
import { RowCalculator } from '../../classes/row-calculator.js'
import { ColumnCalculator } from '../../classes/column-calculator.js'
import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { gridlify } from '../../../node_modules/gridlify/lib/index.js'
// import GridBox from '../grid-box/grid-box'

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
  const [numberOfChildElements, setNumberOfChildElements] = useState(Array.from({ length: numberOfRows * numberOfColumns }))
  const rowCalculator = new RowCalculator()
  const columnCalculator = new ColumnCalculator()
  let i = 0

  /**
   *
   */
  const setRowAndColumns = () => {
    rowCalculator.setRows(numberOfRows)
    columnCalculator.setColumns(numberOfColumns)
  }

  /**
   *
   *
   */
  const setParentElementGrid = () => {
    setRowAndColumns()
    const grid = {
      rows: rowCalculator.getRows(),
      columns: columnCalculator.getColumns(),
      rowGap,
      columnGap
    }
    gridlify.setGrid(grid, '.gridDisplayerContainer')
  }
  /**
   *
   *
   * @param {*} event
   */
  const handleMouseDown = (event) => {
    console.log(event.target)
  }

  /**
   *
   *
   * @param {*} event
   */
  const handleMouseUp = (event) => {
    console.log(event.target)
  }

  useEffect(() => {
    setParentElementGrid()
    setNumberOfChildElements(Array.from({ length: numberOfRows * numberOfColumns }))
    // console.log(numberOfChildElements)
  }, [numberOfRows, numberOfColumns, rowGap, columnGap, numberOfRows])

  return (
      <div className="gridDisplayerContainer" onMouseDown={(event) => handleMouseDown(event)} onMouseUp={(event) => handleMouseUp(event)}>
        {numberOfChildElements.map((childElement) => {
          i++
          return (
          <div key={i} className={`gridBox div${i}`}></div>
          )
        })}
      </div>
  )
}

export default GridDisplayer
