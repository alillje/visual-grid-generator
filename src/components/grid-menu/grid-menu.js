import * as React from "react";
import "./grid-menu.css";
import { useState, useEffect } from "react";

import FormControl from "@mui/material/FormControl";
import OutlinedInput from "@mui/material/OutlinedInput";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

import store from "../../redux/store";
import { setAmountOfRows, globalSetRowGap } from "../../redux/reducers/rows";
import { setAmountOfColumns, globalSetColumnGap } from "../../redux/reducers/columns";

import { useSelector, useDispatch } from "react-redux";

/**
 * GridBox Component.
 * Displays a grid box.
 *
 * @returns {React.ReactElement} - GridBox Component.
 */
const GridMenu = () => {
  const [numberOfRows, setNumberOfRows] = useState("");
  const [numberOfColumns, setNumberOfColumns] = useState("");
  const [rowGap, setRowGap] = useState("");
  const [columnGap, setColumnGap] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    console.log(numberOfRows);
  }, [numberOfRows]);

  const setGrid = (event) => {
    event.preventDefault();
    dispatch(
      setAmountOfRows({
        numberOfRows: numberOfRows,
      }),
      setAmountOfColumns({
        numberOfColumns: numberOfColumns,
      }),
      globalSetRowGap({
        rowGap: rowGap,
      }),
      globalSetColumnGap({
        columnGap: columnGap,
      })
    );
  };

  return (
    <div className="gridMenuContainer">
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 3, width: "90%" },
        }}
        noValidate
        autoComplete="off"
        onSubmit={(event) => setGrid(event)}
      >
        <FormControl
          sx={{ width: "25ch", margin: "20px" }}
          value={""}
          onChange={(event) => setNumberOfRows(event.target.value)}
        >
          <OutlinedInput placeholder="Number of rows" />
        </FormControl>
        <FormControl
          sx={{ width: "25ch", margin: "20px" }}
          value={""}
          onChange={(event) => setNumberOfColumns(event.target.value)}
        >
          <OutlinedInput placeholder="Number of columns" />
        </FormControl>
        <FormControl
          sx={{ width: "25ch", margin: "20px" }}
          value={""}
          onChange={(event) => setRowGap(event.target.value)}
        >
          <OutlinedInput placeholder="Row gap (px)" />
        </FormControl>
        <FormControl
          sx={{ width: "25ch", margin: "20px" }}
          value={""}
          onChange={(event) => setColumnGap(event.target.value)}
        >
          <OutlinedInput placeholder="Column Gap (px)" />
        </FormControl>
        <Button type="submit" variant="text">
          Set
        </Button>
      </Box>
    </div>
  );
};

export default GridMenu;
