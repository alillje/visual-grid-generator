/**
 * Redux gridReset.
 * Create a user slice with different actions
 * https://redux-toolkit.js.org/api/createslice
 *
 * @author Andreas Lillje <a.lillje@gmail.com>
 */

import { createSlice } from '@reduxjs/toolkit'
export const gridResetSlice = createSlice({
  name: 'gridreset',
  initialState: {
    reset: false
  },
  reducers: {
    /**
     * Sets the global state for grid reset status.
     *
     * @param {object} state - Redux state object.
     * @param {object} action - Object containing the different state values to be set.
     */
    gridReset: (state, action) => {
      state.reset = action.payload.reset
    }
  }
})

export const { gridReset } = gridResetSlice.actions
export default gridResetSlice.reducer
