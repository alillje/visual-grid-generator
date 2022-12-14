/**
 * Redux number of columns module.
 * Create a user slice with different actions
 * https://redux-toolkit.js.org/api/createslice
 *
 * @author Andreas Lillje <a.lillje@gmail.com>
 */

import { createSlice } from '@reduxjs/toolkit'
export const columnsSlice = createSlice({
  name: 'columns',
  initialState: {
    numberOfColumns: 5,
    columnGap: '5px'
  },
  reducers: {
    /**
     * Sets the global state for ammount of columns.
     *
     * @param {object} state - Redux state object.
     * @param {object} action - Object containing the different state values to be set.
     */
    setAmountOfColumns: (state, action) => {
      state.numberOfColumns = action.payload.numberOfColumns ? action.payload.numberOfColumns : columnsSlice.getInitialState().numberOfColumns
    },
    /**
     * Sets the global state for columns gap.
     *
     * @param {object} state - Redux state object.
     * @param {object} action - Object containing the different state values to be set.
     */
    globalSetColumnGap: (state, action) => {
      state.columnGap = action.payload.columnGap ? `${action.payload.columnGap}px` : columnsSlice.getInitialState().columnGap
    }

  }
})

export const { setAmountOfColumns, globalSetColumnGap } = columnsSlice.actions
export default columnsSlice.reducer
