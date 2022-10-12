import * as React from 'react'
import './footer.css'

/**
 * Footer Component.
 * Displays a footer.
 *
 * @returns {React.ReactElement} - GridBox Component.
 */
const GridContainer = () => {
  return (
      <div className="footerContainer">
        Powered by <code><a href="https://www.npmjs.com/package/gridlify" target="_blank" rel="noreferrer">gridlify</a></code>
      </div>
  )
}

export default GridContainer
