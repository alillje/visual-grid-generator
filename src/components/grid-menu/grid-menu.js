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
const GridMenu = () =>  {

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
            value={""}
            onChange={(event) => this.setNumberOfRows(event.target.value)}
          >
            <OutlinedInput placeholder="Number of rows" />
          </FormControl>
          <FormControl
            sx={{ width: "25ch", margin: "20px" }}
            value={""}
            onChange={(event) => this.setNumberOfColumns(event.target.value)}
          >
            <OutlinedInput placeholder="Number of columns" />
          </FormControl>
          <FormControl
            sx={{ width: "25ch", margin: "20px" }}
            value={""}
            onChange={(event) => this.setRowGap(event.target.value)}
          >
            <OutlinedInput placeholder="Row gap (px)" />
          </FormControl>
          <FormControl
            sx={{ width: "25ch", margin: "20px" }}
            value={""}
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

export default GridMenu;
