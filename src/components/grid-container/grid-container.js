import * as React from 'react'
import './grid-container.css'
import GridDisplayer from '../grid-displayer/grid-displayer'

/**
 * GridBox Component.
 * Displays a grid box.
 *
 * @returns {React.ReactElement} - GridBox Component.
 */
const GridContainer = () => {
  return (
      <div className="gridContainerContainer">
        <GridDisplayer />
      </div>
  )
}

export default GridContainer
