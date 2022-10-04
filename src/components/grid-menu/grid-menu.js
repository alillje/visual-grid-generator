import * as React from "react";
import "./grid-menu.css";

import FormControl from "@mui/material/FormControl";
import OutlinedInput from "@mui/material/OutlinedInput";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

import store from "../../redux/store";
import { numberOfRows, rowGap } from "../../redux/reducers/rows";
import { numberOfColumns, columnGap } from "../../redux/reducers/columns";

/**
 * GridBox Component.
 * Displays a grid box.
 *
 * @returns {React.ReactElement} - GridBox Component.
 */
class GridMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      numberOfRows: "",
      numberOfColumns: "",
      rowGap: "",
      columnGap: "",
    };
  }

  /**
   * Sets the number of rows.
   * @param {string} newNumberOfRows
   */
  setNumberOfRows(newNumberOfRows) {
    this.setState({ numberOfRows: newNumberOfRows });
    // Set global state of numberOfRows using redux
    store.dispatch(
      numberOfRows({
        numberOfRows: parseInt(newNumberOfRows),
      })
    );
    this.setState({ numberOfRows: newNumberOfRows });
  }

  /**
   * Sets the number of columns.
   * @param {string} newNumberOfColumns
   */
  setNumberOfColumns(newNumberOfColumns) {
    this.setState({ numberOfColumns: newNumberOfColumns });
    // Set global state of numberOfColumns using redux
    store.dispatch(
      numberOfColumns({
        numberOfColumns: parseInt(newNumberOfColumns),
      })
    );
    this.setState({ numberOfRows: newNumberOfColumns });
  }

  /**
   * Sets the row gap.
   * @param {string} newRowGap
   */
  setRowGap(newRowGap) {
    this.setState({ rowGap: newRowGap });
    // Set global state of numberOfRows using redux
    store.dispatch(
      rowGap({
        rowGap: parseInt(newRowGap),
      })
    );
    this.setState({ numberOfRows: rowGap });
  }
  /**
   * Sets the column gap.
   * @param {string} newColumnGap
   */
  setColumnGap(newColumnGap) {
    this.setState({ columnGap: newColumnGap });
    // Set global state of numberOfRows using redux
    store.dispatch(
      columnGap({
        columnGap: parseInt(newColumnGap),
      })
    );
    this.setState({ columnGap: newColumnGap });
  }

  setGrid(event) {
    event.preventDefault();
    console.log(store.getState());
  }

  render() {
    return (
      <div className="gridMenuContainer">
        <Box
          component="form"
          sx={{
            "& > :not(style)": { m: 3, width: "90%" },
          }}
          noValidate
          autoComplete="off"
          onSubmit={(event) => this.setGrid(event)}
        >
          <FormControl
            sx={{ width: "25ch", margin: "20px" }}
            value={this.state.numberOfRows}
            onChange={(event) => this.setNumberOfRows(event.target.value)}
          >
            <OutlinedInput placeholder="Number of rows" />
          </FormControl>
          <FormControl
            sx={{ width: "25ch", margin: "20px" }}
            value={this.state.numberOfColumns}
            onChange={(event) => this.setNumberOfColumns(event.target.value)}
          >
            <OutlinedInput placeholder="Number of columns" />
          </FormControl>
          <FormControl
            sx={{ width: "25ch", margin: "20px" }}
            value={this.state.rowGap}
            onChange={(event) => this.setRowGap(event.target.value)}
          >
            <OutlinedInput placeholder="Row gap (px)" />
          </FormControl>
          <FormControl
            sx={{ width: "25ch", margin: "20px" }}
            value={this.state.columnGap}
            onChange={(event) => this.setColumnGap(event.target.value)}
          >
            <OutlinedInput placeholder="Column Gap (px)" />
          </FormControl>
          <Button type="submit" variant="text">
            Set
          </Button>
        </Box>
      </div>
    );
  }
}

export default GridMenu;
