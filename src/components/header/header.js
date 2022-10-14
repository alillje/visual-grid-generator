import './header.css'
import * as React from 'react'
import Logo from './img/visual-grid-generator-logo.png'

/**
 * Header Component.
 * Displays a header with a logo.
 *
 * @returns {React.ReactElement} - Sidebar Component.
 */
const Header = () => {
  return (
            <div className="headerContainer">
                <img src={Logo} alt="Logo"></img>
            </div>
  )
}
export default Header
