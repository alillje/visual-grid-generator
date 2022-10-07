import * as React from 'react'
import './grid-displayer.css'
import { RowCalculator } from '../../classes/row-calculator.js'
import { ColumnCalculator } from '../../classes/column-calculator.js'
import { ChildElementCalculator } from '../../classes/child-element-calculator'
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
  const rowCalculator = new RowCalculator()
  const columnCalculator = new ColumnCalculator()
  const childElementCalculator = new ChildElementCalculator()
  childElementCalculator.setNumberOfChildElements(numberOfRows * numberOfColumns)
  const [classNames, setClassNames] = useState(childElementCalculator.getClassNameArray())

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
    childElementCalculator.setNumberOfChildElements(numberOfRows * numberOfColumns)
    setClassNames([...childElementCalculator.getClassNameArray()])
    // for (let i = 0; i < classNames.length; i++) {
    //   console.log(classNames[i])
    //   gridlify.setPosition({ startRow: i + 1, startColumn: i + 1 }, `.${classNames[i]}`)
    // }

    for (let i = 0; i < numberOfRows; i++) {
      for (let j = 0; j < numberOfColumns; j++) {
        console.log(classNames[i])
        gridlify.setPosition({ startRow: i + 1, startColumn: j + 1 }, `.${classNames[i]}`)
      }
    }
  }, [numberOfRows, numberOfColumns, rowGap, columnGap])

  return (
      <div className="gridDisplayerContainer" onMouseDown={(event) => handleMouseDown(event)} onMouseUp={(event) => handleMouseUp(event)}>
        {classNames.map((className) => {
          return (
          <div key={childElementCalculator.getClassNameArray().indexOf(className)} className={`gridBox ${className}`}></div>
          )
        })}
      </div>
  )
}

export default GridDisplayer
