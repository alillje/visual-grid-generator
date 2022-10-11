/**
 * Redux number grid module.
 * Create a grid slice with different actions
 *
 * @author Andreas Lillje <a.lillje@gmail.com>
 */

import { createSlice } from '@reduxjs/toolkit'
export const gridSlice = createSlice({
  name: 'grid',
  initialState: {
    reset: false
  },
  reducers: {
    /**
     * Dispatched on user login and sets all state variables to values defined in the action object.
     *
     * @param {object} state - Redux state object.
     * @param {object} action - Object containing the different state values to be set.
     */
    grid: (state, action) => {
      state.reset = action.payload.reset
    }
  }
})

export const { grid } = gridSlice.actions
export default gridSlice.reducer
