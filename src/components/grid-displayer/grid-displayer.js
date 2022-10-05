import * as React from "react";
import GridBox from "../grid-box/grid-box";
import "./grid-displayer.css";
import { gridlify } from "/node_modules/gridlify/lib/index.js";

import store from "../../redux/store";

/**
 * GridBox Component.
 * Displays a grid box.
 *
 * @returns {React.ReactElement} - GridBox Component.
 */
class GridDisplayer extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;;
  }

  componentDidMount() {
    this.setState({
      currentState: Object.assign({}, store.getState())
    });
  
  }

  componentDidUpdate(prevProps) {
    console.log(this.props)
    if (prevProps !== this.props) {
      console.log(this.props.rowGap)

     gridlify.setRowGap(this.props.rowGap, '.gridDisplayerContainer')
    }
  }



  render() {
    return (
      <div className="gridDisplayerContainer">

      </div>
    );
  }
}

export default GridDisplayer;
