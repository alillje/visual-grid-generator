import * as React from 'react'
import './grid-displayer.css'
import { RandomColorGenerator } from '../../classes/random-color-generator.js'
import { RowCalculator } from '../../classes/row-calculator.js'
import { ColumnCalculator } from '../../classes/column-calculator.js'
import { ChildElementCalculator } from '../../classes/child-element-calculator'
import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { gridlify } from '../../../node_modules/gridlify/lib/index.js'
import { setAmountOfRows, globalSetRowGap } from '../../redux/reducers/rows'
import {
  setAmountOfColumns,
  globalSetColumnGap
} from '../../redux/reducers/columns'
import { grid } from '../../redux/reducers/grid'
import { setParentCssCode, setChildrenCssCode } from '../../redux/reducers/css-code'

/**
 * GridDisplayer Component.
 * Displays a grid layout and lets the user append elements dynamically.
 *
 * @returns {React.ReactElement} - GridDisplayer Component.
 */
const GridDisplayer = () => {
  let endRow
  let endColumn
  const numberOfRows = useSelector((state) => state.rows.numberOfRows)
  const numberOfColumns = useSelector((state) => state.columns.numberOfColumns)
  const rowGap = useSelector((state) => state.rows.rowGap)
  const columnGap = useSelector((state) => state.columns.columnGap)
  const userHasResetGrid = useSelector((state) => state.grid.reset)
  const viewingCssCode = useSelector((state) => state.csscode.viewCssCode)
  const [startRow, setStartRow] = useState(0)
  const [startColumn, setStartColumn] = useState(0)
  const [templateBoxNumber, setTemplateBoxNumber] = useState(1)
  const [userIsSelectingAnArea, setUserIsSelectingAnArea] = useState(false)
  const dispatch = useDispatch()
  const randomColorGenerator = new RandomColorGenerator()
  const rowCalculator = new RowCalculator()
  const columnCalculator = new ColumnCalculator()
  const childElementCalculator = new ChildElementCalculator()
  childElementCalculator.setNumberOfChildElements(numberOfRows * numberOfColumns)
  let classNames = childElementCalculator.getClassNameArray()

  /**
   * Sets the dimensions of the main grid.
   */
  const setGridDimensions = () => {
    rowCalculator.setRows(numberOfRows)
    columnCalculator.setColumns(numberOfColumns)
  }

  /**
   *
   *
   */
  const setParentElementGrid = () => {
    childElementCalculator.removeChildElements('.templateBox')
    setGridDimensions()
    const grid = {
      rows: rowCalculator.getRows(),
      columns: columnCalculator.getColumns(),
      rowGap,
      columnGap
    }
    gridlify.setGrid(grid, '.gridDisplayerContainer')
    childElementCalculator.setNumberOfChildElements(numberOfRows * numberOfColumns)
    classNames = childElementCalculator.getClassNameArray()
  }
  /**
   *
   *
   * @param {*} event
   */
  const handleMouseDown = (event) => {
    if (event.target.getAttribute('class') !== 'templateBox') {
      setUserIsSelectingAnArea(true)
      const elementGridAreaStartPosition = event.target.getAttribute('style').substring(11, event.target.getAttribute('style').length - 1)
      setStartRow(elementGridAreaStartPosition.substring(0, 1))
      setStartColumn(elementGridAreaStartPosition.substring(4, 5))
      const div = window.document.createElement('div')
      div.classList.add('templateBox')
      div.setAttribute('id', `box${templateBoxNumber}`)
      div.style.backgroundColor = randomColorGenerator.getRandomColor()
      window.document.querySelector('.gridDisplayerContainer').appendChild(div)
    }
  }

  /**
   *
   *
   * @param {*} event
   */
  const handleMouseUp = (event) => {
    if (userIsSelectingAnArea) {
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
      setUserIsSelectingAnArea(false)
    }
  }

  /**
   * Sets positions for children elemnts in the parent element grid layout.
   */
  const setPositionsForChildElementsInGridLayout = () => {
    let className = 0
    for (let i = 0; i < numberOfRows; i++) {
      for (let j = 0; j < numberOfColumns; j++) {
        gridlify.setPosition({ startRow: i + 1, startColumn: j + 1 }, `.${classNames[className]}`)
        className++
      }
    }
  }
  // /**
  //  *
  //  *
  //  */
  // const getChildrenPositions = () => {
  //   const childrenElementPositions = []
  //   for (const childrenElement of document.querySelectorAll('.templateBox')) {
  //     const identifier = childrenElement.getAttribute('id')
  //     const styleAttributes = childrenElement.getAttribute('style')
  //     const positionCss = styleAttributes.substring(styleAttributes.length - 25)
  //     const childrenElementPosition = `${identifier} { ${positionCss} }; `
  //     childrenElementPositions.push(childrenElementPosition)
  //   }
  //   return childrenElementPositions
  // }

  // /**
  //  *
  //  *
  //  */
  // const clearTemplateBoxes = () => {
  //   for (const templateBox of document.querySelectorAll('.templateBox')) {
  //     templateBox.remove()
  //   }
  // }

  /**
   * Resets all grid values to their initial state.
   */
  const resetGrid = () => {
    setTemplateBoxNumber(1)
    dispatch(
      setAmountOfRows({
        numberOfRows: undefined
      })
    )
    dispatch(
      setAmountOfColumns({
        numberOfColumns: undefined
      })
    )
    dispatch(
      globalSetRowGap({
        rowGap: undefined
      })
    )
    dispatch(
      globalSetColumnGap({
        columnGap: undefined
      })
    )
    dispatch(
      grid({
        reset: false
      })
    )
  }

  /**
   * Sends the CSS code representation for the parent element
   * representing the main layout area to the global state.
   */
  const sendParentCssCodeToGlobalState = () => {
    setGridDimensions()
    dispatch(
      setParentCssCode({
        parentCss: gridlify.getGridCss({ rows: rowCalculator.getRows(), columns: columnCalculator.getColumns(), rowGap, columnGap })
      })
    )
  }

  /**
   * Sends the CSS code representation for the child elements
   * representing the selected areas to the global state.
   */
  const sendChildrenCssCodeToGlobalState = () => {
    dispatch(
      setChildrenCssCode({
        childrenCss: childElementCalculator.getChildrenPositionsAssCssCode('.templateBox')
      })
    )
  }

  /**
   * React useEffect callback method re-renders the component when
   * one of the values in the `Dependency Array`is updated or changed.
   */
  useEffect(() => {
    if (userHasResetGrid) {
      resetGrid()
    } else if (viewingCssCode) {
      sendParentCssCodeToGlobalState()
      sendChildrenCssCodeToGlobalState()
      resetGrid()
    } else {
      setParentElementGrid()
      setPositionsForChildElementsInGridLayout()
    }
  }, [numberOfRows, numberOfColumns, rowGap, columnGap, userHasResetGrid, viewingCssCode])

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
