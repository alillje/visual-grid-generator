/**
 * Redux number of rows module.
 * Create a user slice with different actions
 *
 * @author Andreas Lillje <a.lillje@gmail.com>
 */

import { createSlice } from "@reduxjs/toolkit";
export const rowsSlice = createSlice({
  name: "rows",
  initialState: {
    numberOfRows: 5,
    rows: ["1fr", "1fr", "1fr", "1fr", "1fr"],
    rowGap: '0px'
  },
  reducers: {
    /**
     * Dispatched on user login and sets all state variables to values defined in the action object.
     *
     * @param {object} state - Redux state object.
     * @param {object} action - Object containing the different state values to be set.
     */
    numberOfRows: (state, action) => {
      state.numberOfRows = action.payload.numberOfRows;
    },
    /**
     * Dispatched on user login and sets all state variables to values defined in the action object.
     *
     * @param {object} state - Redux state object.
     * @param {object} action - Object containing the different state values to be set.
     */
    rowGap: (state, action) => {
      state.rowGap = `${action.payload.rowGap}px`
    },
  },
});

export const { numberOfRows, rowGap } = rowsSlice.actions;
export default rowsSlice.reducer;
