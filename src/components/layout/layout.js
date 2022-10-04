import "./layout.css";
import * as React from "react";
import { gridlify } from '/node_modules/gridlify/lib/index.js'
import Header from "../header/header";
/**
 * Layout Component.
 * Sets the page layout with CSS grid and inserts the children into the main HTML div element.
 *
 * @param {React.ReactElement} children - The React Element to insert into the component.
 * @returns {React.ReactElement} - Layout Component.
 */
const Layout = ({ children }) => {
  return (
    <div className="layoutContainer">
      <div className="layoutHeader">
        <Header />
      </div>
      <div className="layoutLeft"></div>

      <div className="layoutMain">
      {children}
      </div>
      <div className="layoutRight"></div>
    </div>
  );
};

export default Layout;
