/**
 * Redux number of rows module.
 * Create a user slice with different actions
 * https://redux-toolkit.js.org/api/createslice
 *
 * @author Andreas Lillje <a.lillje@gmail.com>
 */

import { createSlice } from '@reduxjs/toolkit'
export const rowsSlice = createSlice({
  name: 'rows',
  initialState: {
    numberOfRows: 5,
    rowGap: '5px'
  },
  reducers: {
    /**
     * Sets the global state for ammount of rows.
     *
     * @param {object} state - Redux state object.
     * @param {object} action - Object containing the different state values to be set.
     */
    setAmountOfRows: (state, action) => {
      state.numberOfRows = action.payload.numberOfRows ? action.payload.numberOfRows : rowsSlice.getInitialState().numberOfRows
    },
    /**
     * Sets the global state for row gap.
     *
     * @param {object} state - Redux state object.
     * @param {object} action - Object containing the different state values to be set.
     */
    globalSetRowGap: (state, action) => {
      state.rowGap = action.payload.rowGap ? `${action.payload.rowGap}px` : rowsSlice.getInitialState().rowGap
    }
  }
})

export const { setAmountOfRows, globalSetRowGap } = rowsSlice.actions
export default rowsSlice.reducer
