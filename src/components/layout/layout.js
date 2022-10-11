import './layout.css'
import * as React from 'react'
import Header from '../header/header'
import GridMenu from '../grid-menu/grid-menu'
import Footer from '../footer/footer'
import InfoDisplayer from '../info-displayer/info-displayer'
import { useSelector } from 'react-redux'
import CssCodeDisplayer from '../css-code-displayer/css-code-displayer'

/**
 * Layout Component.
 * Sets the page layout with CSS grid and inserts the children into the main HTML div element.
 *
 * @param {React.ReactElement} children - The React Element to insert into the component.
 * @returns {React.ReactElement} - Layout Component.
 */
const Layout = ({ children }) => {
  const viewingCssCode = useSelector((state) => state.csscode.viewCssCode)

  return (
            <div className="layoutContainer">
              {viewingCssCode ? <CssCodeDisplayer /> : null}
            <div className="layoutHeader">
              <Header />
            </div>
            <div className="layoutLeft"></div>

            <div className="layoutMain">
            { children }
            </div>
            <div className="layoutRight">
              <GridMenu />
            </div>
            <div className="layoutInfo">
              <InfoDisplayer />
            </div>
            <div className="layoutFooter">
              <Footer />
            </div>
          </div>
  )
}

export default Layout
