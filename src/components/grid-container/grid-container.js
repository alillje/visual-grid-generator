import './grid-container.css'
import * as React from 'react'
import GridDisplayer from '../grid-displayer/grid-displayer'

/**
 * GridContainer Component.
 * Displays a grid container component.
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
