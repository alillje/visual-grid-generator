/**
 * Redux number of rows module.
 * Create a user slice with different actions
 *
 * @author Andreas Lillje <a.lillje@gmail.com>
 */

import { createSlice } from '@reduxjs/toolkit'
export const columnsSlice = createSlice({
  name: 'columns',
  initialState: {
    numberOfColumns: 5,
    columns: ['200px', '200px', '200px', '200px', '200px'],
    columnGap: '0px'
  },
  reducers: {
    /**
     * Dispatched on user login and sets all state variables to values defined in the action object.
     *
     * @param {object} state - Redux state object.
     * @param {object} action - Object containing the different state values to be set.
     */
    numberOfColumns: (state, action) => {
      state.numberOfColumns = action.payload.numberOfColumns
    },
    /**
     * Dispatched on user login and sets all state variables to values defined in the action object.
     *
     * @param {object} state - Redux state object.
     * @param {object} action - Object containing the different state values to be set.
     */
    columnGap: (state, action) => {
      state.rowGap = `${action.payload.columnGap}px`;
    },

  }
})

export const { numberOfColumns, columnGap } = columnsSlice.actions
export default columnsSlice.reducer
