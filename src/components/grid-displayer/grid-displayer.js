import * as React from "react";
import GridBox from "../grid-box/grid-box";
import "./grid-displayer.css";

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
    this.state = {
      gridRows: store.getState().rows.rows,
      gridColumns: store.getState().columns.columns,
      gridRowGap: store.getState().rows.rowGap,
      gridColumnGap: store.getState().columns.columnGap,
    };
  }

  componentDidMount() {
    // gridlify.setGrid(this.grid, '.gridDisplayerContainer')
    console.log(store.getState().rows);
    this.setState({
      gridRows: store.getState().rows.rows,
      gridColumns: store.getState().columns.columns,
      gridRowGap: store.getState().rows.rowGap,
      gridColumnGap: store.getState().columns.columnGap,
    });
  }

  render() {
    return (
      <div className="gridDisplayerContainer">
        {this.gridRowGap}
        {this.state.gridColumns.map(() => {
          return this.state.gridRows.map(() => {
            return <div>{this.state.gridRows}</div>;
          });
        })}{" "}
      </div>
    );
  }
}

export default GridDisplayer;
