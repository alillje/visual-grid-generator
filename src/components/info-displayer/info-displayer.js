/**
 * @author Andreas Lillje <a.lillje@gmail.com>
 */

import './info-displayer.css'
import * as React from 'react'

/**
 * InfoDisplayer Component.
 * Displays a header with a logo.
 *
 * @returns {React.ReactElement} - Sidebar Component.
 */
const InfoDisplayer = () => {
  return (
        <div className="infoDisplayerContainer">
            <h3>CSS Grids made easy<br></br></h3>
            <code>Visual Grid Generator</code><br></br>
            lets you visually build a website layout.<br></br><br></br>
            <b>To use the tool</b> <br></br>
            <ol>
                <li>
                Set the number of rows
                </li>
                <li>
                Set the number of columns
                </li>
                <li>
                Set row and column gap
                </li>
                <li>
                Drag the grid to create a new area
                </li>
                <li>
                Generate CSS code for your projects
                </li>
            </ol>
        </div>
  )
}

export default InfoDisplayer
