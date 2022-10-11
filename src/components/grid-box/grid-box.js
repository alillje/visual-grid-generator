import * as React from 'react'
import './grid-box.css'
/**
 * GridBox Component.
 * Displays a grid box.
 *
 * @returns {React.ReactElement} - GridBox Component.
 */
const GridContainer = () => {
  window.document.addEventListener('mousedown', (event) => {
    event.stopPropagation()
  })
  window.document.addEventListener('mouseup', (event) => {
    event.stopPropagation()

  })
  return <div className="gridBoxContainer"></div>
}

export default GridContainer
