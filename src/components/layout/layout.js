import "./layout.css";
import * as React from "react";
import Header from "../header/header";
/**
 * Layout Component.
 * Sets the page layout with CSS grid and inserts the children into the main HTML div element.
 *
 * @param {React.ReactElement} children - The React Element to insert into the component.
 * @returns {React.ReactElement} - Layout Component.
 */
 class Layout extends React.Component {
    constructor({children}) {
        super()
        this.children = children;
    }
    render() {
        return (
            <div className="layoutContainer">
            <div className="layoutHeader">
              <Header />
            </div>
            <div className="layoutLeft"></div>
      
            <div className="layoutMain">
            {this.children}
            </div>
            <div className="layoutRight">
            </div>
          </div>
          )
    }
  }

export default Layout;
