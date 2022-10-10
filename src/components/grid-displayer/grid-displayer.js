import * as React from 'react'
import './grid-displayer.css'
import { RowCalculator } from '../../classes/row-calculator.js'
import { ColumnCalculator } from '../../classes/column-calculator.js'
import { ChildElementCalculator } from '../../classes/child-element-calculator'
import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { gridlify } from '../../../node_modules/gridlify/lib/index.js'

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
  // const [classNames, setClassNames] = useState(childElementCalculator.getClassNameArray())
  let classNames = childElementCalculator.getClassNameArray()
  const [startRow, setStartRow] = useState(0)
  const [startColumn, setStartColumn] = useState(0)
  // const [uniqueIdentifier, setUniqueIdentifier] = useState(crypto.randomUUID().substring(0, 8))
  let endRow
  let endColumn
  const [templateBoxNumber, setTemplateBoxNumber] = useState(0)

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
    childElementCalculator.setNumberOfChildElements(numberOfRows * numberOfColumns)
    classNames = childElementCalculator.getClassNameArray()
    // setClassNames([...childElementCalculator.getClassNameArray()])
  }
  /**
   *
   *
   * @param {*} event
   */
  const handleMouseDown = (event) => {
    const elementGridAreaStartPosition = event.target.getAttribute('style').substring(11, event.target.getAttribute('style').length - 1)
    setStartRow(elementGridAreaStartPosition.substring(0, 1))
    setStartColumn(elementGridAreaStartPosition.substring(4, 5))
    // setUniqueIdentifier(generateRandomId())
    const div = window.document.createElement('div')
    // div.classList.add('templateBox')
    div.classList.add('templateBox')
    div.setAttribute('id', `box${templateBoxNumber}`)
    window.document.querySelector('.gridDisplayerContainer').appendChild(div)
  }

  // /**
  //  *
  //  *
  //  * @returns {string} - A random identifier.
  //  */
  // const generateRandomId = () => {
  //   return crypto.randomUUID().substring(0, 8)
  // }

  /**
   *
   *
   * @param {*} event
   */
  const handleMouseUp = (event) => {
    const elementGridAreaStartPosition = event.target.getAttribute('style').substring(11, event.target.getAttribute('style').length - 1)
    endRow = elementGridAreaStartPosition.substring(8, 9)
    endColumn = elementGridAreaStartPosition.substring(12, 13)
    const positions = {
      startRow,
      startColumn,
      endRow: parseInt(endRow) + 1,
      endColumn: parseInt(endColumn) + 1
    }
    gridlify.setPosition(positions, `#box${templateBoxNumber}`)
    setTemplateBoxNumber(templateBoxNumber + 1)
  }

  /**
   * Sets positions for children elemnts in the parent element grid layout.
   */
  const setPositionsForChildElementsInGridLayout = () => {
    // for (const child of document.querySelectorAll('.gridBox')) {
    //   child.remove()
    // }
    console.log(classNames)
    let className = 0
    for (let i = 0; i < numberOfRows; i++) {
      for (let j = 0; j < numberOfColumns; j++) {
        gridlify.setPosition({ startRow: i + 1, startColumn: j + 1 }, `.${classNames[className]}`)
        className++
      }
    }
  }

  useEffect(() => {
    setParentElementGrid()
    // childElementCalculator.setNumberOfChildElements(numberOfRows * numberOfColumns)
    // setClassNames([...childElementCalculator.getClassNameArray()])
    setPositionsForChildElementsInGridLayout()
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
