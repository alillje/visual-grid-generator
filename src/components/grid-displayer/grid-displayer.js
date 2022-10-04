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
    this.gridRows = props.rows;
    this.gridColumns = props.columns;
    this.gridRowGap = props.rowGap;
    this.gridColumnGap = props.columnGap;
  }

  componentDidMount() {
    // gridlify.setGrid(this.grid, '.gridDisplayerContainer')
    console.log(this.props.props.gridRow);
    // this.setState({
    //   gridRows: store.getState().rows.rows,
    //   gridColumns: store.getState().columns.columns,
    //   gridRowGap: store.getState().rows.rowGap,
    //   gridColumnGap: store.getState().columns.columnGap,
    // });
  }

  componentDidUpdate(prevProps) {
    console.log(prevProps);
    if (prevProps.rowGap !== this.state.rowGap) {
      this.setState({
        rowGap: store.getState().rows.rowGap,
      });
    }
  }

  render() {
    return (
      <div className="gridDisplayerContainer">
        {this.props.gridRowGap}
        {/* {this.state.gridColumns.map(() => {
          return this.state.gridRows.map(() => {
            return <div>{this.state.gridRowGap}</div>;
          });
        })}{" "} */}
      </div>
    );
  }
}

export default GridDisplayer;
